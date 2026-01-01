/**
 * MRW Terminal - Mario, Rooster, Work(cars) Terminal
 * Interactive terminal where Rooster directs Mario, Luigi, and traffic
 */

const rooster = require('../api/js-api');
const readline = require('readline');

// Terminal state
let terminal = {
  running: false,
  characters: new Set(),
  theme: null,
  history: []
};

// ASCII Art
const ROOSTER_ASCII = `
    🐓
   /|\\
  / | \\
    ||
   /  \\
`;

const MARIO_ASCII = `
  🍄 Mario
`;

const LUIGI_ASCII = `
  👻 Luigi
`;

function printBanner() {
  console.clear();
  console.log('╔═══════════════════════════════════════════════════════════╗');
  console.log('║         🐓 MRW TERMINAL - Multi-Character System        ║');
  console.log('║     (Mario + Rooster + Work/Cars Interactive Terminal)   ║');
  console.log('╚═══════════════════════════════════════════════════════════╝');
  console.log('');
  console.log(ROOSTER_ASCII);
  console.log('🐓 Rooster is ready to direct operations!');
  console.log('');
}

function printHelp() {
  console.log('\n📋 Available Commands:');
  console.log('  activate <character>  - Activate a character (rooster/mario/luigi)');
  console.log('  theme <name>          - Switch to a theme (mario/electronics/etc)');
  console.log('  crow                  - Rooster crows (charges capacitor)');
  console.log('  flap                  - Rooster flaps wings (discharges)');
  console.log('  direct <target>       - Rooster directs traffic');
  console.log('  morning               - Morning crow (build complete signal)');
  console.log('  mario.<action>        - Execute Mario action (jump/collectCoin/etc)');
  console.log('  luigi.<action>        - Execute Luigi action');
  console.log('  rooster.<action>      - Execute Rooster action');
  console.log('  status                - Show system status');
  console.log('  log                   - Show recent events');
  console.log('  characters            - Show active characters');
  console.log('  help                  - Show this help');
  console.log('  clear                 - Clear screen');
  console.log('  exit                  - Exit terminal');
  console.log('');
}

function printStatus() {
  const status = rooster.status();
  console.log('\n📊 System Status:');
  console.log(`  Version: ${status.version}`);
  console.log(`  Current Theme: ${status.currentTheme || 'none'}`);
  console.log(`  Capacitor Charge: ${status.capacitorCharge}%`);
  console.log(`  Active Characters: ${terminal.characters.size}`);
  console.log(`  Events Logged: ${status.eventsLogged}`);
  console.log('');
}

function printCharacters() {
  console.log('\n🎮 Active Characters:');
  if (terminal.characters.size === 0) {
    console.log('  (none - use "activate <character>" to add)');
  } else {
    terminal.characters.forEach(char => {
      const emoji = char === 'rooster' ? '🐓' : char === 'mario' ? '🍄' : '👻';
      console.log(`  ${emoji} ${char}`);
    });
  }
  console.log('');
}

function printLog() {
  const log = rooster.log();
  console.log('\n📋 Recent Events:');
  log.slice(-10).forEach(event => {
    const emoji = event.level === 'error' ? '❌' : event.level === 'warn' ? '⚠️' : '✅';
    console.log(`  ${emoji} ${event.message}`);
  });
  console.log('');
}

function processCommand(input) {
  const parts = input.trim().split(' ');
  const command = parts[0].toLowerCase();
  const args = parts.slice(1);

  try {
    switch (command) {
      case 'help':
      case '?':
        printHelp();
        break;

      case 'clear':
      case 'cls':
        printBanner();
        break;

      case 'activate':
        if (args.length === 0) {
          console.log('❌ Usage: activate <character>');
          break;
        }
        rooster.character.activate(args[0]);
        terminal.characters.add(args[0]);
        break;

      case 'theme':
        if (args.length === 0) {
          console.log('❌ Usage: theme <name>');
          console.log('Available: mario, electronics, chemistry, robotics, biology, physics, music, art, cooking, sports, space');
          break;
        }
        rooster.theme.switch(args[0]);
        terminal.theme = args[0];
        break;

      case 'crow':
        rooster.crow();
        break;

      case 'flap':
        rooster.flapWings();
        break;

      case 'direct':
        const target = args.join(' ') || 'all';
        rooster.directTraffic(target);
        break;

      case 'morning':
        rooster.morningCrow();
        break;

      case 'status':
        printStatus();
        break;

      case 'log':
        printLog();
        break;

      case 'characters':
        printCharacters();
        break;

      case 'exit':
      case 'quit':
        console.log('\n🐓 Goodbye! Cock-a-doodle-doo! 👋\n');
        terminal.running = false;
        process.exit(0);
        break;

      default:
        // Check for character.action patterns
        if (input.includes('.')) {
          const [character, action, ...actionArgs] = input.split(/[.\s]+/);
          
          if (['mario', 'luigi', 'rooster'].includes(character)) {
            if (!terminal.characters.has(character)) {
              console.log(`❌ ${character} is not active. Use "activate ${character}" first.`);
              break;
            }
            rooster.character.action(character, action, ...actionArgs);
          } else {
            console.log(`❌ Unknown command: ${command}`);
            console.log('Type "help" for available commands');
          }
        } else {
          console.log(`❌ Unknown command: ${command}`);
          console.log('Type "help" for available commands');
        }
        break;
    }
  } catch (error) {
    console.log(`❌ Error: ${error.message}`);
  }

  terminal.history.push(input);
}

function startTerminal() {
  terminal.running = true;
  
  printBanner();
  console.log('🎮 MRW Terminal is now active!');
  console.log('Type "help" for available commands\n');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '🐓 > '
  });

  rl.prompt();

  rl.on('line', (line) => {
    if (line.trim()) {
      processCommand(line);
    }
    rl.prompt();
  });

  rl.on('close', () => {
    console.log('\n🐓 Terminal closed. Goodbye!\n');
    process.exit(0);
  });
}

// Start if run directly
if (require.main === module) {
  startTerminal();
}

module.exports = { startTerminal, processCommand };
