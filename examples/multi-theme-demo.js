/**
 * Rooster.OS Multi-Theme Demo
 * Demonstrates all features of the theme-aware scripting system
 */

const rooster = require('../api/js-api');

console.log('🐓 ═══════════════════════════════════════════════════════════');
console.log('🐓   ROOSTER.OS - MULTI-THEME SCRIPTING SYSTEM DEMO');
console.log('🐓 ═══════════════════════════════════════════════════════════\n');

// Show system status
console.log('📊 System Status:');
const status = rooster.status();
console.log(`   Version: ${status.version}`);
console.log(`   Themes Available: ${status.themes.length}`);
console.log(`   Capacitor Charge: ${status.capacitorCharge}%`);
console.log(`   Formulas: ${status.formulas.length}`);
console.log('');

// List all themes
console.log('🎨 Available Themes:');
rooster.theme.list().forEach(theme => {
  console.log(`   • ${theme}`);
});
console.log('');

// ===== MARIO THEME =====
console.log('═══════════════════════════════════════════════════════════');
console.log('🍄 MARIO THEME DEMONSTRATION');
console.log('═══════════════════════════════════════════════════════════\n');

rooster.mario.jump('high');
rooster.mario.collectCoin(10);
rooster.mario.powerUp('fireflower');
rooster.mario.breakBlock('question');
rooster.mario.completeLevel(1, 1);
console.log('');

// ===== ELECTRONICS THEME =====
console.log('═══════════════════════════════════════════════════════════');
console.log('⚡ ELECTRONICS THEME DEMONSTRATION');
console.log('═══════════════════════════════════════════════════════════\n');

rooster.electronics.generateSignal(440, 'sine');
rooster.electronics.buildCircuit([
  { type: 'resistor', value: 1000 },
  { type: 'capacitor', value: 100 },
  { type: 'resistor', value: 2200 }
]);
rooster.electronics.measureVoltage('A');
rooster.electronics.chargeCapacitor(100, 5);
rooster.electronics.testLED('blue', 20);
console.log('');

// ===== CHEMISTRY THEME =====
console.log('═══════════════════════════════════════════════════════════');
console.log('🧪 CHEMISTRY THEME DEMONSTRATION');
console.log('═══════════════════════════════════════════════════════════\n');

rooster.chemistry.mixCompounds(['H2', 'O2']);
rooster.chemistry.balanceEquation('CH4 + O2');
rooster.chemistry.measurePH('unknown solution');
rooster.chemistry.titrate('acid', 'base', 25);
rooster.chemistry.distill('ethanol-water mixture');
console.log('');

// ===== ROBOTICS THEME =====
console.log('═══════════════════════════════════════════════════════════');
console.log('🤖 ROBOTICS THEME DEMONSTRATION');
console.log('═══════════════════════════════════════════════════════════\n');

rooster.robotics.programRobot(['move', 'scan', 'grab', 'move', 'release']);
rooster.robotics.move('forward', 5);
rooster.robotics.rotate(90, 'z');
rooster.robotics.scan(10);
rooster.robotics.grab('object-1');
rooster.robotics.navigateTo(10, 15);
console.log('');

// ===== OTHER THEMES QUICK DEMO =====
console.log('═══════════════════════════════════════════════════════════');
console.log('🌟 OTHER THEMES SHOWCASE');
console.log('═══════════════════════════════════════════════════════════\n');

console.log('🧬 Biology:');
rooster.biology.analyzeDNA('ATCGATCG');
rooster.biology.observeCell('human');

console.log('\n⚛️ Physics:');
rooster.physics.calculateForce(10, 9.8);
rooster.physics.measureVelocity(100, 10);

console.log('\n🎵 Music:');
rooster.music.playNote('C', 4, 500);
rooster.music.createMelody(['C', 'D', 'E', 'F', 'G']);

console.log('\n🎨 Art:');
rooster.art.drawShape('circle', 100, 100, 50);
rooster.art.mixColors('#FF0000', '#0000FF');

console.log('\n👨‍🍳 Cooking:');
rooster.cooking.prepIngredient('onion', 'chop');
rooster.cooking.cook('cake', 'bake', 180, 30);

console.log('\n⚽ Sports:');
rooster.sports.kickBall(80, 'goal');
rooster.sports.runSprint(100);

console.log('\n🚀 Space:');
rooster.space.launchRocket('Mars');
rooster.space.observePlanet('Jupiter');

console.log('');

// ===== TOKEN FORMULAS =====
console.log('═══════════════════════════════════════════════════════════');
console.log('✨ TOKEN FORMULA SYSTEM');
console.log('═══════════════════════════════════════════════════════════\n');

console.log('Applying individual formulas:');
rooster.token.apply('👑📶⚪');
rooster.token.apply('🧲🪐🔁');
rooster.token.apply('🪡🤓⭐');
rooster.token.apply('💎🎛️👑');

console.log('\nCombining multiple formulas:');
const combined = rooster.combine(['👑📶⚪', '🪡🤓⭐', '💎🎛️👑']);
console.log(`Combined power: ${combined.power}`);
console.log(`Effect: ${combined.effect}`);
console.log('');

// ===== CAPACITOR-BASED EXECUTION =====
console.log('═══════════════════════════════════════════════════════════');
console.log('⚡ CAPACITOR-BASED EXECUTION');
console.log('═══════════════════════════════════════════════════════════\n');

console.log('Charging capacitor with rooster crow:');
rooster.crow();
rooster.crow();
rooster.crow();

console.log('\nExecuting code with capacitor energy:');
const result = rooster.execute(() => {
  console.log('   → Code executing with energy!');
  return 42;
});
console.log(`   Result: ${result.result}`);
console.log(`   Energy used: ${result.energyUsed}`);
console.log('');

// ===== CHARACTER SYSTEM =====
console.log('═══════════════════════════════════════════════════════════');
console.log('🎮 CHARACTER INTERACTION SYSTEM');
console.log('═══════════════════════════════════════════════════════════\n');

console.log('Activating characters:');
rooster.character.activate('rooster');
rooster.character.activate('mario');
rooster.character.activate('luigi');

console.log('\nCharacter actions:');
rooster.character.action('rooster', 'crow');
rooster.character.action('mario', 'jump', 'high');
rooster.character.action('luigi', 'vacuum', 3);
rooster.character.action('rooster', 'direct', 'traffic');
console.log('');

// ===== MRW TERMINAL =====
console.log('═══════════════════════════════════════════════════════════');
console.log('🚗 MRW TERMINAL - MORNING CROW');
console.log('═══════════════════════════════════════════════════════════\n');

console.log('Rooster directs traffic:');
rooster.directTraffic('all-vehicles');

console.log('\nMorning crow - build complete signal:');
rooster.morningCrow();
console.log('');

// ===== EVENT LOG =====
console.log('═══════════════════════════════════════════════════════════');
console.log('📋 EVENT LOG SUMMARY');
console.log('═══════════════════════════════════════════════════════════\n');

const log = rooster.log();
console.log(`Total events logged: ${log.length}`);
console.log('\nRecent events:');
log.slice(-5).forEach(event => {
  console.log(`   [${event.timestamp}] ${event.message}`);
});
console.log('');

console.log('═══════════════════════════════════════════════════════════');
console.log('✅ DEMO COMPLETE - All features demonstrated!');
console.log('═══════════════════════════════════════════════════════════');
console.log('\n🐓 Thank you for using Rooster.OS!');
