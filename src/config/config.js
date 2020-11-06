module.exports = {
  DB: {
    MONGO_URI: process.env.MONGO_URI || "mongodb://localhost/test",
  },
  PORT: process.env.PORT || 3000,
  HOST: process.env.HOST || 'localhost',
};
