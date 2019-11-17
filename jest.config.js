module.exports = {
  preset: 'ts-jest',
  clearMocks: true,
  moduleNameMapper: {
    "^.+\\.(css|less|sass|scss)$": "identity-obj-proxy"
  },
  snapshotSerializers: ["enzyme-to-json/serializer"]
};