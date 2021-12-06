module.exports = (sequelize, DataTypes) => {
  const Provider = sequelize.define('Provider', {
    cnpjid: { 
      type: DataTypes.INTEGER, 
      foreignKey: true, 
    },
    name: DataTypes.STRING,
    tradingName: DataTypes.STRING,
  },
  { timestamps: false, tableName: 'providers' });

  Provider.associate = (models) => {
    Provider.hasMany(models.Order, { 
      foreignKey: 'providerid', as: 'provider',
    });
    
    Provider.belongsTo(models.CNPJ, { 
      foreignKey: 'cnpjid', as: 'cnpj',
    });
  };

  return Provider;
};