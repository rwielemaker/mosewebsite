export const defaultConfig = {
  constants: { TOTAL_LENGTH: 1600, MIN_CLOSING_TIME: 0.001 },
  bounds: {
    x1: { min: 0, max: 1600, step: 10, unit: 'm' },
    x2: { min: 1, max: 10, step: 0.1, unit: 'm' },
    x3: { min: 0.5, max: 5, step: 0.1, unit: 'h' }
  },
  OBJECTIVE_KEYS: ['initial_cost', 'maintenance_cost', 'sight', 'accessibility', 'water_quality', 'overtopping_risk'],
  STAKEHOLDER_DATA: [
    {
      name: 'Municipality',
      influence: 0.5,
      weights: {
        initial_cost: 0.4,
        maintenance_cost: 0.25,
        sight: 0.05,
        accessibility: 0.1,
        water_quality: 0.1,
        overtopping_risk: 0.1
      }
    },
    {
      name: 'Residents',
      influence: 0.2,
      weights: {
        initial_cost: 0.1,
        maintenance_cost: 0.1,
        sight: 0.25,
        accessibility: 0.2,
        water_quality: 0.25,
        overtopping_risk: 0.1
      }
    },
    {
      name: 'Environmental Agency',
      influence: 0.1,
      weights: {
        initial_cost: 0.05,
        maintenance_cost: 0.05,
        sight: 0.1,
        accessibility: 0.1,
        water_quality: 0.55,
        overtopping_risk: 0.15
      }
    },
    {
      name: 'Shipping Companies',
      influence: 0.15,
      weights: {
        initial_cost: 0.1,
        maintenance_cost: 0.1,
        sight: 0.3,
        accessibility: 0.2,
        water_quality: 0.2,
        overtopping_risk: 0.1
      }
    }
  ],
  knots: {
    initial_cost: { x: [5e8, 1e9, 2e9, 3.5e9, 8e9], y: [100, 95, 90, 30, 0] },
    maintenance_cost: { x: [1e10, 1e11, 1.5e12], y: [100, 40, 0] },
    sight: { x: [0, 5, 10], y: [0, 50, 100] },
    accessibility: { x: [0, 5, 10], y: [0, 50, 100] },
    water_quality: { x: [0, 5, 10], y: [0, 50, 100] },
    overtopping_risk: { x: [0, 0.15, 0.3, 0.45, 0.6], y: [100, 85, 60, 25, 0] }
  },
  options: { popSize: 600, iterations: 500, crossover: 0.8, stallLimit: 10, encoding: 'real', bits: 10 },
  paradigms: ['minmax', 'tetra']
} as const;

export type ModelConfig = typeof defaultConfig;
