module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    emailChecked: DataTypes.INTEGER,
    cashForceAdm: DataTypes.INTEGER,
  },
  { timestamps: false, tableName: 'users' });

  User.associate = (models) => {
    User.hasMany(models.Order, { 
      foreignKey: 'userid', as: 'user',
    });
  };

  return User;
};
