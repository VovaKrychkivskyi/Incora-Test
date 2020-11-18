const Sequelize = require(`sequelize`);

module.exports = new Sequelize(
  `schema_user`, `root`, `qw1234qw`,
  {
    host: `127.0.0.1`,
    dialect: `mysql`
  }
)