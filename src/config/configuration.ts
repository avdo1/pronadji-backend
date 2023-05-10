import dbConfigData from './db/db.config';

export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    ...dbConfigData,
  },
});
