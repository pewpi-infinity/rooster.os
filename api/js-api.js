/**
 * Rooster.OS JavaScript API
 * Main interface for theme-aware scripting
 */

const RoosterEngine = require('../core/rooster-engine');
const ThemeSwitcher = require('../core/theme-switcher');
const CharacterSystem = require('../core/character-system');

// Import all themes
const MarioTheme = require('../themes/mario');
const ElectronicsTheme = require('../themes/electronics');
const ChemistryTheme = require('../themes/chemistry');
const RoboticsTheme = require('../themes/robotics');
const BiologyTheme = require('../themes/biology');
const PhysicsTheme = require('../themes/physics');
const MusicTheme = require('../themes/music');
const ArtTheme = require('../themes/art');
const CookingTheme = require('../themes/cooking');
const SportsTheme = require('../themes/sports');
const SpaceTheme = require('../themes/space');

/**
 * Rooster - Main API class
 */
class Rooster {
  constructor() {
    // Initialize core systems
    this.engine = new RoosterEngine();
    this.themeSwitcher = new ThemeSwitcher(this.engine);
    this.characterSystem = new CharacterSystem(this.engine);
    
    // Initialize engine
    this.engine.initialize();
    
    // Load all themes
    this.loadAllThemes();
    
    // Theme-specific command proxies
    this.mario = this.createThemeProxy('mario');
    this.electronics = this.createThemeProxy('electronics');
    this.chemistry = this.createThemeProxy('chemistry');
    this.robotics = this.createThemeProxy('robotics');
    this.biology = this.createThemeProxy('biology');
    this.physics = this.createThemeProxy('physics');
    this.music = this.createThemeProxy('music');
    this.art = this.createThemeProxy('art');
    this.cooking = this.createThemeProxy('cooking');
    this.sports = this.createThemeProxy('sports');
    this.space = this.createThemeProxy('space');
    
    // Token and formula support
    this.token = {
      apply: (formula) => this.engine.applyFormula(formula)
    };
    
    this.formula = {
      execute: (formula) => this.engine.applyFormula(formula)
    };
    
    // Theme management
    this.theme = {
      switch: (themeName) => this.themeSwitcher.switch(themeName),
      current: () => this.themeSwitcher.getCurrentTheme(),
      list: () => this.themeSwitcher.listThemes()
    };
    
    // Character management
    this.character = {
      activate: (id) => this.characterSystem.activate(id),
      action: (id, action, ...args) => this.characterSystem.performAction(id, action, ...args),
      active: () => this.characterSystem.getActive()
    };
    
    // Lab/workshop access (for electronics theme)
    this.lab = {
      oscilloscope: {
        display: () => {
          this.themeSwitcher.switch('electronics');
          return this.themeSwitcher.executeCommand('useOscilloscope', 1);
        }
      }
    };
    
    // Workshop access (for robotics theme)
    this.workshop = {
      buildRobot: () => {
        this.themeSwitcher.switch('robotics');
        return this.themeSwitcher.executeCommand('programRobot', ['move', 'turn', 'sense']);
      }
    };
  }

  /**
   * Load all themes into the system
   */
  loadAllThemes() {
    this.themeSwitcher.loadTheme('mario', MarioTheme);
    this.themeSwitcher.loadTheme('electronics', ElectronicsTheme);
    this.themeSwitcher.loadTheme('chemistry', ChemistryTheme);
    this.themeSwitcher.loadTheme('robotics', RoboticsTheme);
    this.themeSwitcher.loadTheme('biology', BiologyTheme);
    this.themeSwitcher.loadTheme('physics', PhysicsTheme);
    this.themeSwitcher.loadTheme('music', MusicTheme);
    this.themeSwitcher.loadTheme('art', ArtTheme);
    this.themeSwitcher.loadTheme('cooking', CookingTheme);
    this.themeSwitcher.loadTheme('sports', SportsTheme);
    this.themeSwitcher.loadTheme('space', SpaceTheme);
    
    console.log('✅ All 11 themes loaded successfully!');
  }

  /**
   * Create a proxy for theme-specific commands
   */
  createThemeProxy(themeName) {
    return new Proxy({}, {
      get: (target, prop) => {
        return (...args) => {
          // Auto-switch to theme if not current
          if (this.themeSwitcher.getCurrentTheme() !== themeName) {
            this.themeSwitcher.switch(themeName);
          }
          
          // Execute the command
          return this.themeSwitcher.executeCommand(prop, ...args);
        };
      }
    });
  }

  /**
   * Combine multiple formulas
   */
  combine(formulas) {
    return this.engine.combineFormulas(formulas);
  }

  /**
   * Rooster crows (charges capacitor)
   */
  crow() {
    return this.engine.crow();
  }

  /**
   * Rooster flaps wings (discharges capacitor)
   */
  flapWings() {
    return this.engine.flapWings();
  }

  /**
   * Execute code with energy
   */
  execute(code) {
    return this.engine.executeWithEnergy(code);
  }

  /**
   * Get system status
   */
  status() {
    return this.engine.getStatus();
  }

  /**
   * Get event log
   */
  log() {
    return this.engine.getEventLog();
  }

  /**
   * MRW Terminal - Rooster directs traffic
   */
  directTraffic(target) {
    return this.characterSystem.directTraffic(target);
  }

  /**
   * Morning crow - build complete signal
   */
  morningCrow() {
    return this.characterSystem.morningCrow();
  }
}

// Create singleton instance
const rooster = new Rooster();

// Export both the class and singleton instance
module.exports = rooster;
module.exports.Rooster = Rooster;
module.exports.RoosterEngine = RoosterEngine;
module.exports.ThemeSwitcher = ThemeSwitcher;
module.exports.CharacterSystem = CharacterSystem;

// Browser support
if (typeof window !== 'undefined') {
  window.rooster = rooster;
  window.Rooster = Rooster;
}
