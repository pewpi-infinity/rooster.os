#!/usr/bin/env node

/**
 * MRW Terminal Demo Script
 * Demonstrates terminal capabilities without requiring user interaction
 */

const rooster = require('../api/js-api');

console.log('╔═══════════════════════════════════════════════════════════╗');
console.log('║         🐓 MRW TERMINAL - Automated Demo                ║');
console.log('╚═══════════════════════════════════════════════════════════╝\n');

// Simulate terminal commands
const commands = [
  { cmd: 'activate rooster', desc: 'Activate Rooster character' },
  { cmd: 'activate mario', desc: 'Activate Mario character' },
  { cmd: 'activate luigi', desc: 'Activate Luigi character' },
  { cmd: 'characters', desc: 'Show active characters' },
  { cmd: 'theme mario', desc: 'Switch to Mario theme' },
  { cmd: 'mario.jump high', desc: 'Make Mario jump high' },
  { cmd: 'mario.collectCoin 5', desc: 'Collect 5 coins' },
  { cmd: 'theme electronics', desc: 'Switch to Electronics theme' },
  { cmd: 'crow', desc: 'Rooster crows (charge capacitor)' },
  { cmd: 'crow', desc: 'Rooster crows again' },
  { cmd: 'crow', desc: 'Rooster crows third time' },
  { cmd: 'flap', desc: 'Rooster flaps wings (discharge)' },
  { cmd: 'morning', desc: 'Morning crow - build complete!' },
  { cmd: 'status', desc: 'Show system status' }
];

console.log('🎬 Simulating Terminal Session:\n');
console.log('═'.repeat(60));

// Execute commands
let characterSet = new Set();
let currentTheme = null;

commands.forEach((item, index) => {
  console.log(`\n🐓 > ${item.cmd}`);
  console.log(`   (${item.desc})`);
  console.log('');

  const parts = item.cmd.split(' ');
  const command = parts[0];
  const args = parts.slice(1);

  try {
    switch (command) {
      case 'activate':
        rooster.character.activate(args[0]);
        characterSet.add(args[0]);
        break;

      case 'characters':
        console.log('   Active Characters:');
        characterSet.forEach(char => {
          const emoji = char === 'rooster' ? '🐓' : char === 'mario' ? '🍄' : '👻';
          console.log(`     ${emoji} ${char}`);
        });
        break;

      case 'theme':
        rooster.theme.switch(args[0]);
        currentTheme = args[0];
        break;

      case 'crow':
        rooster.crow();
        break;

      case 'flap':
        rooster.flapWings();
        break;

      case 'morning':
        rooster.morningCrow();
        break;

      case 'status':
        const status = rooster.status();
        console.log('   System Status:');
        console.log(`     Version: ${status.version}`);
        console.log(`     Current Theme: ${status.currentTheme || 'none'}`);
        console.log(`     Capacitor Charge: ${status.capacitorCharge}%`);
        console.log(`     Active Characters: ${characterSet.size}`);
        console.log(`     Themes Available: ${status.themes.length}`);
        break;

      default:
        if (item.cmd.startsWith('mario.')) {
          const [char, action, ...actionArgs] = item.cmd.split(/[.\s]+/);
          rooster.character.action(char, action, ...actionArgs);
        }
        break;
    }
  } catch (error) {
    console.log(`   ❌ Error: ${error.message}`);
  }

  // Small pause indicator
  if (index < commands.length - 1) {
    console.log('   ⏱️  (executing...)');
  }
});

console.log('\n' + '═'.repeat(60));
console.log('\n✅ Terminal Demo Complete!\n');
console.log('To run the real interactive terminal, use:');
console.log('   npm run terminal\n');
