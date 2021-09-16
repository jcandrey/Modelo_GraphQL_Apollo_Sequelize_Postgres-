//Sequelize

export default (sequelize, { UUIDV4, UUID, STRING, TEXT, BOOLEAN }) => {
  const Post = sequelize.define("Post", {
    id: {
      primaryKey: true,
      allowNull: false,
      type: UUID,
      defaultValue: UUIDV4(),
    },
    title: {
      type: STRING,
      allowNull: false,
    },
    slug: {
      type: STRING,
      unique: true,
      allowNull: false,
    },
    readingTime: {
      type: STRING,
      allowNull: false,
      defaultValue: "3 min",
    },
    body: {
      type: TEXT,
      allowNull: false,
    },
    lengauje: {
      type: STRING,
      allowNull: false,
      defaultValue: "es",
    },
    image: {
      type: STRING,
    },
    published: {
      type: BOOLEAN,
      defaultValue: false,
    },
  });

  Post.associate = (models) => {
    Post.hasMany(models.Tag, {
      foreignKey: {
        name: "postId",
        field: "post_id",
      },
      as: "tags",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };
  return Post;
};
