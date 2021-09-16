//Sequelize

export default (sequelize, { UUIDV4, UUID, STRING, BOOLEAN }) => {
  const User = sequelize.define("User", {
    id: {
      primaryKey: true,
      allowNull: false,
      type: UUID,
      defaultValue: UUIDV4(),
    },
    username: {
      type: STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlphanumeric: {
          args: true,
          msg: "Pone alfanumerioco",
        },
        len: {
          args: [4, 20],
          msg: "pone de 4 a 20 caracteres",
        },
      },
    },
    password: {
      type: STRING,
      allowNull: false,
    },
    email: {
      type: STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          args: true,
          msg: "mail invalido",
        },
      },
    },
    privilege: {
      type: STRING,
      allowNull: false,
      defaultValue: false,
    },
    active: {
      type: BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  });

  User.associate = (models) => {
    User.hasMany(models.Post, {
      foreignKey: {
        name: "userId",
        field: "user_id",
      },
      as: "posts",
    });
  };
  return User;
};
