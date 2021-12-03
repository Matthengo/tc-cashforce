module.exports = (sequelize, DataTypes) => {
  const Buyer = sequelize.define('Buyer', {
    cnpjid: { 
      type: DataTypes.INTEGER, 
      foreignKey: true, 
    },
    name: DataTypes.STRING,
    tradingName: DataTypes.STRING,
    cashforceTax: DataTypes.STRING,
    confirm: DataTypes.INTEGER,
  },
  { timestamps: false, tableName: 'buyers' });

  Buyer.associate = (models) => {
    Buyer.hasMany(models.Order, { 
      foreignKey: 'buyerid', as: 'buyer',
    });

    Buyer.belongsTo(models.CNPJ, { 
      foreignKey: 'cnpjid', as: 'cnpj',
    });
  };

  return Buyer;
};