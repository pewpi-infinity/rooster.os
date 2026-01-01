/**
 * Character System - Manages character interactions and behaviors
 */

class CharacterSystem {
  constructor(engine) {
    this.engine = engine;
    this.activeCharacters = new Set();
    this.interactions = [];
  }

  /**
   * Activate a character
   */
  activate(characterId) {
    if (!this.engine.characters.has(characterId)) {
      throw new Error(`Character "${characterId}" not registered`);
    }
    
    this.activeCharacters.add(characterId);
    const character = this.engine.characters.get(characterId);
    console.log(`${character.emoji} ${character.name} has entered!`);
    
    return character;
  }

  /**
   * Deactivate a character
   */
  deactivate(characterId) {
    if (this.activeCharacters.has(characterId)) {
      this.activeCharacters.delete(characterId);
      const character = this.engine.characters.get(characterId);
      console.log(`${character.emoji} ${character.name} has left`);
    }
  }

  /**
   * Get active characters
   */
  getActive() {
    return Array.from(this.activeCharacters).map(id => 
      this.engine.characters.get(id)
    );
  }

  /**
   * Make a character perform an action
   */
  performAction(characterId, action, ...args) {
    if (!this.activeCharacters.has(characterId)) {
      throw new Error(`Character "${characterId}" is not active`);
    }

    const character = this.engine.characters.get(characterId);
    if (!character.actions.includes(action)) {
      throw new Error(`Character "${character.name}" cannot perform "${action}"`);
    }

    // Record interaction
    const interaction = {
      timestamp: new Date().toISOString(),
      character: character.name,
      action,
      args
    };
    this.interactions.push(interaction);

    console.log(`${character.emoji} ${character.name} performs: ${action}`);
    
    // Execute character-specific logic
    return this.executeCharacterAction(characterId, action, args);
  }

  /**
   * Execute character-specific action logic
   */
  executeCharacterAction(characterId, action, args) {
    const character = this.engine.characters.get(characterId);
    
    // Rooster actions
    if (characterId === 'rooster') {
      switch (action) {
        case 'crow':
          return this.engine.crow();
        case 'peck':
          return this.engine.peckAtBugs(args[0] || 'bugs');
        case 'flap':
          return this.engine.flapWings();
        case 'direct':
          return this.directTraffic(args[0]);
        default:
          return { action, character: character.name };
      }
    }

    // Mario actions
    if (characterId === 'mario') {
      return this.marioAction(action, args);
    }

    // Luigi actions
    if (characterId === 'luigi') {
      return this.luigiAction(action, args);
    }

    return { action, character: character.name, args };
  }

  /**
   * Mario-specific actions
   */
  marioAction(action, args) {
    switch (action) {
      case 'jump':
        return { 
          message: '🍄 Mario jumps!', 
          height: args[0] || 'normal',
          coins: 0
        };
      case 'collectCoin':
        return { 
          message: '🪙 Coin collected!', 
          value: 100 
        };
      case 'powerUp':
        const powerUp = args[0] || 'mushroom';
        return { 
          message: `🍄 Mario powered up with ${powerUp}!`,
          powerUp,
          powered: true
        };
      case 'run':
        return { 
          message: '🍄 Mario is running!',
          speed: args[0] || 'fast'
        };
      default:
        return { action, character: 'Mario' };
    }
  }

  /**
   * Luigi-specific actions
   */
  luigiAction(action, args) {
    switch (action) {
      case 'jump':
        return { 
          message: '👻 Luigi jumps higher!', 
          height: 'high',
          floaty: true
        };
      case 'vacuum':
        return { 
          message: '👻 Luigi vacuums ghosts!',
          ghosts: args[0] || 1
        };
      case 'assist':
        return { 
          message: '👻 Luigi assists!',
          helping: true
        };
      case 'run':
        return { 
          message: '👻 Luigi runs (a bit scared)!',
          speed: args[0] || 'moderate'
        };
      default:
        return { action, character: 'Luigi' };
    }
  }

  /**
   * Rooster directs traffic (MRW terminal feature)
   */
  directTraffic(target) {
    console.log('🐓 Rooster is directing traffic!');
    return {
      message: '🐓 Traffic directed',
      target: target || 'all',
      organized: true
    };
  }

  /**
   * Create an interaction between characters
   */
  interact(character1Id, character2Id, interactionType) {
    const char1 = this.engine.characters.get(character1Id);
    const char2 = this.engine.characters.get(character2Id);
    
    if (!char1 || !char2) {
      throw new Error('Both characters must be registered');
    }

    const interaction = {
      timestamp: new Date().toISOString(),
      characters: [char1.name, char2.name],
      type: interactionType,
      result: `${char1.emoji} ${char1.name} and ${char2.emoji} ${char2.name} ${interactionType}`
    };

    this.interactions.push(interaction);
    console.log(interaction.result);
    
    return interaction;
  }

  /**
   * Get interaction history
   */
  getInteractions() {
    return this.interactions;
  }

  /**
   * Morning crow - signals build completion
   */
  morningCrow() {
    console.log('🌅🐓 COCK-A-DOODLE-DOO! Good morning! Build complete!');
    this.engine.crow();
    return {
      message: '🌅 Morning crow - Build complete!',
      buildStatus: 'complete',
      time: new Date().toLocaleTimeString()
    };
  }
}

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CharacterSystem;
}

if (typeof window !== 'undefined') {
  window.CharacterSystem = CharacterSystem;
}
