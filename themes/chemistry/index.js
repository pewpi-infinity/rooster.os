/**
 * Chemistry Theme - Chemical reactions and lab experiments
 */

const ChemistryTheme = {
  name: 'chemistry',
  config: {
    emoji: '🧪',
    color: '#00CED1',
    lab: 'chemistry',
    safety: 'goggles-on'
  },

  commands: {
    /**
     * Mix compounds
     */
    mixCompounds(compounds = []) {
      console.log(`🧪 Mixing ${compounds.join(' + ')}`);
      
      // Simple reactions
      const reaction = this.determineReaction(compounds);
      
      return {
        action: 'mixCompounds',
        reactants: compounds,
        products: reaction.products,
        reactionType: reaction.type,
        exothermic: reaction.exothermic,
        safetyLevel: reaction.safety
      };
    },

    /**
     * Determine reaction products
     */
    determineReaction(compounds) {
      const compoundStr = compounds.sort().join('+');
      
      // Common reactions
      const reactions = {
        'H2+O2': { 
          products: ['H2O'], 
          type: 'synthesis', 
          exothermic: true,
          safety: 'caution'
        },
        'HCl+NaOH': { 
          products: ['NaCl', 'H2O'], 
          type: 'neutralization', 
          exothermic: true,
          safety: 'safe'
        },
        'CH4+O2': { 
          products: ['CO2', 'H2O'], 
          type: 'combustion', 
          exothermic: true,
          safety: 'danger'
        }
      };

      return reactions[compoundStr] || {
        products: ['Unknown'],
        type: 'unknown',
        exothermic: false,
        safety: 'test-required'
      };
    },

    /**
     * Balance a chemical equation
     */
    balanceEquation(equation) {
      console.log(`⚖️ Balancing equation: ${equation}`);
      
      // Simplified balancing for common equations
      const balanced = {
        'CH4 + O2': '1 CH4 + 2 O2 → 1 CO2 + 2 H2O',
        'H2 + O2': '2 H2 + 1 O2 → 2 H2O',
        'N2 + H2': '1 N2 + 3 H2 → 2 NH3'
      };

      return {
        action: 'balanceEquation',
        original: equation,
        balanced: balanced[equation] || 'Equation needs manual balancing',
        coefficients: equation in balanced ? 'calculated' : 'unknown',
        lawOfConservation: 'maintained'
      };
    },

    /**
     * Measure pH
     */
    measurePH(solution = 'unknown') {
      const pH = (Math.random() * 14).toFixed(1);
      const acidity = pH < 7 ? 'acidic' : pH > 7 ? 'basic' : 'neutral';
      
      console.log(`🧪 pH of ${solution}: ${pH} (${acidity})`);
      
      return {
        action: 'measurePH',
        solution,
        pH: parseFloat(pH),
        acidity,
        indicator: 'litmus paper'
      };
    },

    /**
     * Titrate a solution
     */
    titrate(analyte, titrant, volume = 0) {
      console.log(`💧 Titrating ${analyte} with ${titrant}`);
      
      return {
        action: 'titrate',
        analyte,
        titrant,
        volumeAdded: volume,
        equivalencePoint: volume >= 25,
        indicator: 'phenolphthalein',
        colorChange: volume >= 25 ? 'pink' : 'clear'
      };
    },

    /**
     * Distill a mixture
     */
    distill(mixture) {
      console.log(`🌡️ Distilling ${mixture}...`);
      
      return {
        action: 'distill',
        mixture,
        temperature: 78.4,
        fractions: ['ethanol', 'water'],
        purity: 95,
        complete: true
      };
    },

    /**
     * Crystallize a compound
     */
    crystallize(compound, solvent = 'water') {
      console.log(`💎 Crystallizing ${compound} from ${solvent}`);
      
      return {
        action: 'crystallize',
        compound,
        solvent,
        crystalSize: 'medium',
        yield: 85,
        purity: 98,
        color: 'transparent'
      };
    },

    /**
     * Run chromatography
     */
    runChromatography(sample, method = 'TLC') {
      console.log(`🎨 Running ${method} on ${sample}`);
      
      return {
        action: 'runChromatography',
        sample,
        method,
        spots: 3,
        rfValues: [0.3, 0.6, 0.85],
        separation: 'good',
        components: 'identified'
      };
    },

    /**
     * Calculate molarity
     */
    calculateMolarity(moles, volume) {
      const molarity = moles / volume;
      console.log(`🧮 Molarity: ${molarity.toFixed(2)} M`);
      
      return {
        action: 'calculateMolarity',
        moles,
        volume,
        molarity: parseFloat(molarity.toFixed(2)),
        unit: 'M (mol/L)'
      };
    },

    /**
     * Heat solution
     */
    heat(solution, temperature) {
      console.log(`🔥 Heating ${solution} to ${temperature}°C`);
      
      return {
        action: 'heat',
        solution,
        temperature,
        boiling: temperature >= 100,
        evaporation: temperature >= 80,
        safe: temperature <= 150
      };
    }
  },

  /**
   * Called when theme is activated
   */
  onActivate() {
    console.log('🧪 Chemistry Theme Activated!');
    console.log('🥽 Put on safety goggles!');
  },

  /**
   * Called when theme is deactivated
   */
  onDeactivate() {
    console.log('🧪 Chemistry Theme Deactivated');
    console.log('🧹 Cleaning up the lab...');
  }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ChemistryTheme;
}

if (typeof window !== 'undefined') {
  window.ChemistryTheme = ChemistryTheme;
}
