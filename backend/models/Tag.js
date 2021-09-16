//Sequelize

export default (sequelize, { UUIDV4, UUID, STRING, BOOLEAN }) => {
  const Tag = sequelize.define("Tag", {
    id: {
      primaryKey: true,
      allowNull: false,
      type: UUID,
      defaultValue: UUIDV4(),
    },
    name: {
      type: STRING,
      allowNull: false,
    },
  });
  return Tag;
};
