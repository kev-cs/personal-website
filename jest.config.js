module.exports = {
  preset: 'ts-jest',
  clearMocks: true,
  moduleNameMapper: {
    "^.+\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/__mocks__/fileMock.js",
  },
  snapshotSerializers: ["enzyme-to-json/serializer"],
  modulePaths: [
    "<rootDir>"
  ],
  moduleDirectories: [
    "node_modules",
    "src"
  ],
};