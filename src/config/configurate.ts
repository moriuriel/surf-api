export default () => ({
  port: parseInt(process.env.PORT, 10) || 3333,
  database: {
    uri: process.env.DB_URI,
    name: process.env.DB_NAME,
  },
});
