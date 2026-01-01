/**
 * Mario Theme - Game-inspired theme with Mario Bros elements
 */

const MarioTheme = {
  name: 'mario',
  config: {
    emoji: '🍄',
    color: '#E52521',
    music: 'overworld',
    characters: ['mario', 'luigi']
  },

  commands: {
    /**
     * Make Mario jump
     */
    jump(height = 'normal') {
      console.log('🍄 Mario jumps!');
      return {
        action: 'jump',
        height,
        success: true,
        coins: height === 'high' ? 1 : 0
      };
    },

    /**
     * Collect a coin
     */
    collectCoin(amount = 1) {
      console.log(`🪙 Collected ${amount} coin(s)!`);
      return {
        action: 'collectCoin',
        amount,
        value: amount * 100,
        sound: 'coin.wav'
      };
    },

    /**
     * Power up with an item
     */
    powerUp(item = 'mushroom') {
      const powerUps = {
        mushroom: { size: 'big', power: 1 },
        fireflower: { ability: 'fireball', power: 2 },
        star: { invincible: true, power: 3 },
        leaf: { ability: 'raccoon', power: 2 }
      };

      const powerUp = powerUps[item] || powerUps.mushroom;
      console.log(`🍄 Powered up with ${item}!`);
      
      return {
        action: 'powerUp',
        item,
        ...powerUp,
        duration: 10000
      };
    },

    /**
     * Break a block
     */
    breakBlock(blockType = 'brick') {
      console.log(`💥 Block broken: ${blockType}`);
      return {
        action: 'breakBlock',
        blockType,
        contents: blockType === 'question' ? 'coin' : null,
        points: 50
      };
    },

    /**
     * Enter a pipe
     */
    enterPipe(destination = 'underground') {
      console.log(`🟢 Entering pipe to ${destination}...`);
      return {
        action: 'enterPipe',
        from: 'overworld',
        to: destination,
        teleported: true
      };
    },

    /**
     * Stomp an enemy
     */
    stomp(enemy = 'goomba') {
      console.log(`👞 Stomped a ${enemy}!`);
      return {
        action: 'stomp',
        enemy,
        defeated: true,
        points: enemy === 'koopa' ? 200 : 100
      };
    },

    /**
     * Complete a level
     */
    completeLevel(world = 1, level = 1) {
      console.log(`🏁 Level ${world}-${level} complete!`);
      return {
        action: 'completeLevel',
        world,
        level,
        flagPole: true,
        fireworks: world % 2 === 0,
        points: 5000
      };
    },

    /**
     * Race with Luigi
     */
    race(distance = 100) {
      console.log('🏃 Mario and Luigi are racing!');
      return {
        action: 'race',
        distance,
        winner: Math.random() > 0.5 ? 'Mario' : 'Luigi',
        time: distance / 10
      };
    }
  },

  /**
   * Called when theme is activated
   */
  onActivate() {
    console.log('🍄 Mario Theme Activated!');
    console.log('🎮 Let\'s-a-go!');
  },

  /**
   * Called when theme is deactivated
   */
  onDeactivate() {
    console.log('🍄 Mario Theme Deactivated');
  }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = MarioTheme;
}

if (typeof window !== 'undefined') {
  window.MarioTheme = MarioTheme;
}
