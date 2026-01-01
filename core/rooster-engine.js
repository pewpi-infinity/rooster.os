/**
 * Rooster Engine - Core scripting engine for rooster.os
 * Provides multi-theme support and character interactions
 */

class RoosterEngine {
  constructor() {
    this.version = '1.0.0';
    this.currentTheme = null;
    this.themes = new Map();
    this.characters = new Map();
    this.capacitor = {
      charge: 0,
      maxCharge: 100,
      crowEnergy: 10
    };
    this.eventLog = [];
    this.formulas = new Map();
  }

  /**
   * Initialize the rooster engine
   */
  initialize() {
    console.log('🐓 Rooster.OS Engine Starting...');
    this.registerDefaultCharacters();
    this.registerDefaultFormulas();
    this.log('Engine initialized');
    return this;
  }

  /**
   * Register default characters (Rooster, Mario, Luigi)
   */
  registerDefaultCharacters() {
    this.registerCharacter('rooster', {
      name: 'Rooster',
      actions: ['crow', 'peck', 'flap', 'direct'],
      energy: 100,
      emoji: '🐓'
    });

    this.registerCharacter('mario', {
      name: 'Mario',
      actions: ['jump', 'run', 'collectCoin', 'powerUp'],
      energy: 100,
      emoji: '🍄'
    });

    this.registerCharacter('luigi', {
      name: 'Luigi',
      actions: ['jump', 'run', 'vacuum', 'assist'],
      energy: 100,
      emoji: '👻'
    });
  }

  /**
   * Register a character in the system
   */
  registerCharacter(id, character) {
    this.characters.set(id, character);
    this.log(`Character registered: ${character.name} ${character.emoji}`);
  }

  /**
   * Register a theme
   */
  registerTheme(themeName, themeConfig) {
    this.themes.set(themeName, themeConfig);
    this.log(`Theme registered: ${themeName}`);
    return this;
  }

  /**
   * Switch to a different theme
   */
  switchTheme(themeName) {
    if (!this.themes.has(themeName)) {
      throw new Error(`Theme "${themeName}" not found`);
    }
    this.currentTheme = themeName;
    this.log(`Theme switched to: ${themeName}`);
    return this.themes.get(themeName);
  }

  /**
   * Get current theme
   */
  getCurrentTheme() {
    return this.currentTheme ? this.themes.get(this.currentTheme) : null;
  }

  /**
   * Rooster crows - charges the capacitor
   */
  crow() {
    const newCharge = Math.min(
      this.capacitor.charge + this.capacitor.crowEnergy,
      this.capacitor.maxCharge
    );
    this.capacitor.charge = newCharge;
    this.log(`🐓 COCK-A-DOODLE-DOO! Capacitor charged to ${newCharge}%`);
    return {
      message: '🐓 COCK-A-DOODLE-DOO!',
      charge: newCharge,
      energy: this.capacitor.crowEnergy
    };
  }

  /**
   * Rooster flaps wings - discharges capacitor for execution
   */
  flapWings() {
    if (this.capacitor.charge < 10) {
      throw new Error('Not enough energy! Rooster needs to crow first.');
    }
    const energy = this.capacitor.charge;
    this.capacitor.charge = 0;
    this.log(`🐓 *FLAP FLAP* Wings unleashed ${energy} energy!`);
    return {
      message: '🐓 *FLAP FLAP*',
      sparkEnergy: energy,
      executed: true
    };
  }

  /**
   * Rooster pecks at bugs (debugging mode)
   */
  peckAtBugs(target) {
    this.log(`🐓 *PECK PECK* Debugging ${target}...`);
    return {
      message: `🐓 Pecked at bugs in ${target}`,
      fixed: true
    };
  }

  /**
   * Execute code with capacitor energy
   */
  executeWithEnergy(code, options = {}) {
    const spark = this.flapWings();
    this.log(`Executing with ${spark.sparkEnergy} energy units`);
    
    try {
      // Execute the code (simplified - in real implementation would use VM)
      const result = typeof code === 'function' ? code() : eval(code);
      this.log('Execution successful');
      return {
        success: true,
        result,
        energyUsed: spark.sparkEnergy
      };
    } catch (error) {
      this.log(`Execution error: ${error.message}`, 'error');
      return {
        success: false,
        error: error.message,
        energyUsed: spark.sparkEnergy
      };
    }
  }

  /**
   * Register a token formula
   */
  registerFormula(name, formula) {
    this.formulas.set(name, formula);
    this.log(`Formula registered: ${name}`);
  }

  /**
   * Register default token formulas
   */
  registerDefaultFormulas() {
    // Powerful Orchestrator
    this.registerFormula('👑📶⚪', {
      name: 'Powerful Orchestrator',
      tokens: ['👑', '📶', '⚪'],
      effect: 'Coordinates multiple systems with authority'
    });

    // Magnet Memory Loop
    this.registerFormula('🧲🪐🔁', {
      name: 'Magnet Memory Loop',
      tokens: ['🧲', '🪐', '🔁'],
      effect: 'Persistent data attraction and cycling'
    });

    // Thread Expert Star
    this.registerFormula('🪡🤓⭐', {
      name: 'Thread Expert Star',
      tokens: ['🪡', '🤓', '⭐'],
      effect: 'Expert-level concurrent processing'
    });

    // Diamond Control Crown
    this.registerFormula('💎🎛️👑', {
      name: 'Diamond Control Crown',
      tokens: ['💎', '🎛️', '👑'],
      effect: 'Premium system control and governance'
    });
  }

  /**
   * Apply a token formula
   */
  applyFormula(formulaTokens) {
    const formula = this.formulas.get(formulaTokens);
    if (!formula) {
      throw new Error(`Formula "${formulaTokens}" not found`);
    }
    this.log(`Applying formula: ${formula.name} - ${formula.effect}`);
    return formula;
  }

  /**
   * Combine multiple formulas
   */
  combineFormulas(formulas) {
    const combined = [];
    for (const formulaTokens of formulas) {
      const formula = this.applyFormula(formulaTokens);
      combined.push(formula);
    }
    this.log(`Combined ${combined.length} formulas`);
    return {
      formulas: combined,
      power: combined.length * 10,
      effect: 'Synergistic enhancement'
    };
  }

  /**
   * Log an event
   */
  log(message, level = 'info') {
    const entry = {
      timestamp: new Date().toISOString(),
      level,
      message
    };
    this.eventLog.push(entry);
    
    const emoji = level === 'error' ? '❌' : level === 'warn' ? '⚠️' : '✅';
    console.log(`${emoji} [${entry.timestamp}] ${message}`);
  }

  /**
   * Get event log
   */
  getEventLog() {
    return this.eventLog;
  }

  /**
   * Get system status
   */
  getStatus() {
    return {
      version: this.version,
      currentTheme: this.currentTheme,
      themes: Array.from(this.themes.keys()),
      characters: Array.from(this.characters.keys()),
      capacitorCharge: this.capacitor.charge,
      formulas: Array.from(this.formulas.keys()),
      eventsLogged: this.eventLog.length
    };
  }
}

// Export for both CommonJS and ES modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = RoosterEngine;
}

if (typeof window !== 'undefined') {
  window.RoosterEngine = RoosterEngine;
}
