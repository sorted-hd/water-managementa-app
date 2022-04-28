const config = {
  NO_OF_DAYS: 30,
  WATER_PER_DAY: 10,
  capacity: {
    // key = bhk, value = capacity
    2: 3,
    3: 5,
  },
  costs: {
    CORPORATION_WATER: 1,
    BOREWELL_WATER: 1.5,
  },
  constants: {
    ALLOT_WATER: 'ALLOT_WATER',
    ADD_GUESTS: 'ADD_GUESTS',
    BILL: 'BILL',
  },
  tanker_costs: {
    500: 2,
    1500: 3,
    3000: 5,
    [Number.MAX_SAFE_INTEGER]: 8,
  },
};

module.exports = config;
