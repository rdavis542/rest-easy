require('dotenv').config();

const required = ['DATABASE_URL', 'SERVER_STATUS_API_KEY'];

for (const key of required) {
  if (!process.env[key]) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
}

module.exports = {
  port: process.env.PORT || 8080,
  databaseUrl: process.env.DATABASE_URL,
};
