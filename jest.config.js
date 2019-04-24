module.exports = {

    clearMocks: true,

    collectCoverageFrom: ['src/**/*.{js,jsx}'],

    coverageDirectory: 'coverage',

    moduleFileExtensions: ['js', 'json', 'jsx'],

    moduleNameMapper: {
      // "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
      "\\.(css|less)$": "identity-obj-proxy"
    },

    setupFiles: ['<rootDir>/enzyme.config.js'],

    testEnvironment: 'jsdom',

    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(test).js?(x)'],

    testPathIgnorePatterns: ['\\\\node_modules\\\\', '\\\\public\\\\'],

    testURL: 'http://localhost',

    transformIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/public/'],
    
    verbose: false
  };