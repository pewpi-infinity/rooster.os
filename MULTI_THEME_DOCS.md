# 🐓 Rooster.OS Multi-Theme Scripting System

Complete documentation for the theme-aware scripting platform with character interactions.

## 🎯 Overview

Rooster.OS is a powerful multi-theme scripting system that combines:
- **11 Different Themes**: Mario, Electronics, Chemistry, Robotics, Biology, Physics, Music, Art, Cooking, Sports, Space
- **JavaScript & Python Support**: Dual-language scripting interface
- **Character System**: Rooster, Mario, and Luigi interactions
- **Capacitor-Based Execution**: Energy-based code execution
- **Token Formulas**: Symbolic formula scripting
- **MRW Terminal**: Interactive command-line interface

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Run the Demo

```bash
# Multi-theme system demo
npm run demo

# Interactive MRW terminal
npm run terminal

# Original marketplace
npm start
```

### Basic JavaScript Usage

```javascript
const rooster = require('./api/js-api');

// Switch theme and use commands
rooster.theme.switch('mario');
rooster.mario.jump('high');
rooster.mario.collectCoin(10);

// Electronics theme
rooster.electronics.generateSignal(440, 'sine');
rooster.electronics.buildCircuit([
  { type: 'resistor', value: 1000 },
  { type: 'capacitor', value: 100 }
]);
```

### Basic Python Usage

```python
from api.python_bindings import rooster

# Switch theme and use commands
rooster.theme.switch("chemistry")
rooster.chemistry.mix_compounds(["H2", "O2"])
rooster.chemistry.balance_equation("CH4 + O2")

# Rooster actions
rooster.crow()
rooster.flap_wings()
```

## 🎨 Available Themes

### 1. Mario Theme 🍄

Game-inspired commands for Mario Bros elements.

```javascript
rooster.mario.jump('high')           // Make Mario jump
rooster.mario.collectCoin(5)         // Collect coins
rooster.mario.powerUp('fireflower')  // Power up
rooster.mario.breakBlock('question') // Break blocks
rooster.mario.enterPipe('underground') // Enter pipe
rooster.mario.completeLevel(1, 1)    // Complete level
```

### 2. Electronics Theme ⚡

Circuit design and signal processing.

```javascript
rooster.electronics.generateSignal(440, 'sine')  // Generate waveform
rooster.electronics.buildCircuit([...])          // Build circuits
rooster.electronics.measureVoltage('A')          // Measure voltage
rooster.electronics.chargeCapacitor(100, 5)      // Charge capacitor
rooster.electronics.testLED('blue', 20)          // Test LED
rooster.electronics.useOscilloscope(1)           // Use oscilloscope
```

### 3. Chemistry Theme 🧪

Chemical reactions and lab experiments.

```javascript
rooster.chemistry.mixCompounds(['H2', 'O2'])     // Mix compounds
rooster.chemistry.balanceEquation('CH4 + O2')    // Balance equation
rooster.chemistry.measurePH('solution')          // Measure pH
rooster.chemistry.titrate('acid', 'base', 25)    // Titrate
rooster.chemistry.distill('mixture')             // Distill
rooster.chemistry.crystallize('compound')        // Crystallize
```

### 4. Robotics Theme 🤖

Robot programming and automation.

```javascript
rooster.robotics.programRobot(['move', 'scan'])  // Program robot
rooster.robotics.move('forward', 5)              // Move robot
rooster.robotics.rotate(90, 'z')                 // Rotate
rooster.robotics.scan(10)                        // Scan environment
rooster.robotics.grab('object')                  // Grab object
rooster.robotics.navigateTo(10, 15)              // Navigate
```

### 5. Biology Theme 🧬

Life sciences and biological systems.

```javascript
rooster.biology.analyzeDNA('ATCGATCG')          // Analyze DNA
rooster.biology.observeCell('human')            // Observe cells
rooster.biology.runPCR('sample')                // Run PCR
rooster.biology.cultureBacteria('E.coli')       // Culture bacteria
```

### 6. Physics Theme ⚛️

Classical and quantum physics.

```javascript
rooster.physics.calculateForce(10, 9.8)         // Calculate force
rooster.physics.measureVelocity(100, 10)        // Measure velocity
rooster.physics.observeWaveInterference()       // Wave interference
rooster.physics.simulateGravity(m1, m2, d)      // Gravity simulation
```

### 7. Music Theme 🎵

Sound synthesis and composition.

```javascript
rooster.music.playNote('C', 4, 500)             // Play note
rooster.music.createMelody(['C', 'D', 'E'])     // Create melody
rooster.music.addHarmony(melody, 'third')       // Add harmony
rooster.music.adjustTempo(120)                  // Adjust tempo
```

### 8. Art Theme 🎨

Digital art and creative tools.

```javascript
rooster.art.drawShape('circle', 100, 100, 50)   // Draw shape
rooster.art.paintBrush(x, y, '#FF0000', 5)      // Paint
rooster.art.applyFilter('blur')                 // Apply filter
rooster.art.mixColors('#FF0000', '#0000FF')     // Mix colors
```

### 9. Cooking Theme 👨‍🍳

Culinary arts and recipes.

```javascript
rooster.cooking.prepIngredient('onion', 'chop') // Prep ingredient
rooster.cooking.cook('cake', 'bake', 180, 30)   // Cook dish
rooster.cooking.mixIngredients([...])           // Mix ingredients
rooster.cooking.seasonDish('soup', 'salt')      // Season
```

### 10. Sports Theme ⚽

Athletics and physical activities.

```javascript
rooster.sports.kickBall(80, 'goal')             // Kick ball
rooster.sports.runSprint(100)                   // Sprint
rooster.sports.jump('high')                     // Jump
rooster.sports.throwBall('baseball', 90)        // Throw
```

### 11. Space Theme 🚀

Astronomy and space exploration.

```javascript
rooster.space.launchRocket('Mars')              // Launch rocket
rooster.space.observePlanet('Jupiter')          // Observe planet
rooster.space.calculateOrbit(mass, distance)    // Calculate orbit
rooster.space.scanForLife('planet')             // Scan for life
```

## 🐓 Character System

### Activate Characters

```javascript
rooster.character.activate('rooster');
rooster.character.activate('mario');
rooster.character.activate('luigi');
```

### Character Actions

```javascript
// Rooster actions
rooster.character.action('rooster', 'crow');
rooster.character.action('rooster', 'peck', 'bugs');
rooster.character.action('rooster', 'flap');
rooster.character.action('rooster', 'direct', 'traffic');

// Mario actions
rooster.character.action('mario', 'jump', 'high');
rooster.character.action('mario', 'collectCoin');
rooster.character.action('mario', 'powerUp', 'mushroom');

// Luigi actions
rooster.character.action('luigi', 'jump', 'high');
rooster.character.action('luigi', 'vacuum', 3);
rooster.character.action('luigi', 'assist');
```

## ⚡ Capacitor-Based Execution

The rooster's crow charges a capacitor that powers code execution.

```javascript
// Charge the capacitor
rooster.crow();  // +10 energy
rooster.crow();  // +10 energy
rooster.crow();  // +10 energy

// Execute code with stored energy
rooster.execute(() => {
  console.log('Code running with capacitor energy!');
  return 42;
});

// Or discharge directly
rooster.flapWings();  // Releases all energy
```

## ✨ Token Formula System

Use symbolic formulas for enhanced operations.

```javascript
// Apply individual formulas
rooster.token.apply('👑📶⚪');  // Powerful Orchestrator
rooster.token.apply('🧲🪐🔁');  // Magnet Memory Loop
rooster.token.apply('🪡🤓⭐');  // Thread Expert Star
rooster.token.apply('💎🎛️👑');  // Diamond Control Crown

// Combine multiple formulas
rooster.combine(['👑📶⚪', '🪡🤓⭐', '💎🎛️👑']);
```

Available Formulas:
- `👑📶⚪` - Powerful Orchestrator: Coordinates multiple systems
- `🧲🪐🔁` - Magnet Memory Loop: Persistent data cycling
- `🪡🤓⭐` - Thread Expert Star: Expert concurrent processing
- `💎🎛️👑` - Diamond Control Crown: Premium system control

## 🚗 MRW Terminal

Interactive terminal with Rooster directing Mario, Luigi, and traffic.

```bash
npm run terminal
```

### Terminal Commands

```
activate <character>  - Activate rooster/mario/luigi
theme <name>          - Switch theme
crow                  - Rooster crows
flap                  - Rooster flaps wings
direct <target>       - Direct traffic
morning               - Morning crow (build complete)
mario.<action>        - Execute Mario action
luigi.<action>        - Execute Luigi action
status                - Show system status
characters            - Show active characters
help                  - Show help
exit                  - Exit terminal
```

### Example Terminal Session

```
🐓 > activate rooster
✅ Character registered: Rooster 🐓

🐓 > activate mario
✅ Character registered: Mario 🍄

🐓 > theme mario
🎨 Theme switched to: mario

🐓 > mario.jump high
🍄 Mario jumps!

🐓 > crow
🐓 COCK-A-DOODLE-DOO! Capacitor charged to 10%

🐓 > morning
🌅🐓 COCK-A-DOODLE-DOO! Good morning! Build complete!
```

## 📊 System Status

Get current system status:

```javascript
const status = rooster.status();
// {
//   version: '1.0.0',
//   currentTheme: 'mario',
//   themes: ['mario', 'electronics', ...],
//   characters: ['rooster', 'mario', 'luigi'],
//   capacitorCharge: 30,
//   formulas: ['👑📶⚪', '🧲🪐🔁', ...],
//   eventsLogged: 125
// }
```

## 📋 Event Logging

All actions are logged:

```javascript
const log = rooster.log();
// [
//   { timestamp: '2026-01-01T...', level: 'info', message: '...' },
//   ...
// ]
```

## 🔧 Advanced Usage

### Custom Themes

Create your own theme:

```javascript
const CustomTheme = {
  name: 'custom',
  config: { emoji: '🎯', color: '#FF00FF' },
  commands: {
    myCommand(arg) {
      console.log(`Custom command: ${arg}`);
      return { result: 'success' };
    }
  },
  onActivate() {
    console.log('Custom theme activated!');
  },
  onDeactivate() {
    console.log('Custom theme deactivated');
  }
};

rooster.themeSwitcher.loadTheme('custom', CustomTheme);
rooster.theme.switch('custom');
```

### Multi-Language Scripting

JavaScript:
```javascript
rooster.theme.switch("electronics");
rooster.electronics.generateSignal(440, "sine");
```

Python:
```python
rooster.theme.switch("electronics")
rooster.electronics.generate_signal(440, "sine")
```

## 🏗️ Architecture

```
rooster.os/
├── .infinity/              # Core infinity system
├── core/
│   ├── rooster-engine.js   # Main engine
│   ├── theme-switcher.js   # Theme management
│   └── character-system.js # Character interactions
├── themes/
│   ├── mario/              # Mario theme
│   ├── electronics/        # Electronics theme
│   ├── chemistry/          # Chemistry theme
│   ├── robotics/           # Robotics theme
│   ├── biology/            # Biology theme
│   ├── physics/            # Physics theme
│   ├── music/              # Music theme
│   ├── art/                # Art theme
│   ├── cooking/            # Cooking theme
│   ├── sports/             # Sports theme
│   └── space/              # Space theme
├── commands/
│   ├── mrw-terminal.js     # MRW terminal
│   └── theme-commands/     # Theme-specific commands
├── api/
│   ├── js-api.js           # JavaScript API
│   └── python-bindings.py  # Python bindings
└── examples/
    └── multi-theme-demo.js # Complete demo
```

## 🎮 Examples

See `examples/multi-theme-demo.js` for a comprehensive demonstration of all features.

```bash
npm run demo
```

## 📝 License

ISC

## 🤝 Contributing

Contributions welcome! This is an additive-only system - new themes and features can be added without breaking existing functionality.

---

**Built with ❤️ and powered by 🐓 Rooster Intelligence**
