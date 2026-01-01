/**
 * Theme Switcher - Manages theme switching and theme-specific behaviors
 */

class ThemeSwitcher {
  constructor(engine) {
    this.engine = engine;
    this.themeModules = new Map();
    this.activeTheme = null;
  }

  /**
   * Load a theme module
   */
  loadTheme(themeName, themeModule) {
    this.themeModules.set(themeName, themeModule);
    
    // Register with engine
    this.engine.registerTheme(themeName, {
      name: themeName,
      commands: themeModule.commands || {},
      config: themeModule.config || {},
      initialized: false
    });
    
    console.log(`🎨 Theme loaded: ${themeName}`);
    return this;
  }

  /**
   * Switch to a theme
   */
  switch(themeName) {
    if (!this.themeModules.has(themeName)) {
      throw new Error(`Theme "${themeName}" not loaded`);
    }

    // Deactivate current theme
    if (this.activeTheme) {
      const currentModule = this.themeModules.get(this.activeTheme);
      if (currentModule.onDeactivate) {
        currentModule.onDeactivate();
      }
    }

    // Activate new theme
    this.activeTheme = themeName;
    const themeModule = this.themeModules.get(themeName);
    
    if (themeModule.onActivate) {
      themeModule.onActivate();
    }

    // Switch in engine
    this.engine.switchTheme(themeName);
    
    console.log(`🎨 Theme switched to: ${themeName}`);
    return themeModule;
  }

  /**
   * Get current theme
   */
  getCurrentTheme() {
    return this.activeTheme;
  }

  /**
   * Get theme module
   */
  getThemeModule(themeName) {
    return this.themeModules.get(themeName);
  }

  /**
   * List all available themes
   */
  listThemes() {
    return Array.from(this.themeModules.keys());
  }

  /**
   * Execute a theme-specific command
   */
  executeCommand(command, ...args) {
    if (!this.activeTheme) {
      throw new Error('No active theme. Switch to a theme first.');
    }

    const themeModule = this.themeModules.get(this.activeTheme);
    if (!themeModule.commands || !themeModule.commands[command]) {
      throw new Error(`Command "${command}" not found in theme "${this.activeTheme}"`);
    }

    const result = themeModule.commands[command](...args);
    console.log(`✨ Executed ${this.activeTheme}.${command}`);
    return result;
  }
}

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ThemeSwitcher;
}

if (typeof window !== 'undefined') {
  window.ThemeSwitcher = ThemeSwitcher;
}
