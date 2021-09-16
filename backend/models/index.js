//Sequelize

import Sequelize from "sequelize";

//Configuration
import { $db } from "../config";

//DB Connection
const { database, username, password, host, dialect } = $db();

const sequelize = new Sequelize(
  database, //base to connect
  username, //user name
  password, //password
  {
    host,
    dialect,
    define: {
      underscored: true,
    },
    pool: {
      max: 6,
      min: 0,
      require: 30000,
      idle: 10000,
    },
    logging: true, // show console msj
  }
);

//Models

const models = {
  Post: sequelize.import("./Post"),
  Tag: sequelize.import("./Tag"),
  User: sequelize.import("./User"),
};

Object.keys(models).forEach((modelName) => {
  if ("associate" in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;

export default models;
