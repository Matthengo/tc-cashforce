module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    cnpjid: { 
      type: DataTypes.INTEGER, 
      foreignKey: true, 
    },
    userid: { 
      type: DataTypes.INTEGER, 
      foreignKey: true, 
    },
    buyerid: { 
      type: DataTypes.INTEGER, 
      foreignKey: true, 
    },
    providerid: { 
      type: DataTypes.INTEGER, 
      foreignKey: true, 
    },
    orderNfId: DataTypes.STRING,
    orderNumber: DataTypes.STRING,
    emissionDate: DataTypes.STRING,
    emitedTo: DataTypes.STRING,
    nNf: DataTypes.STRING,
    CTE: DataTypes.STRING,
    orderStatusBuyer: DataTypes.STRING,
    orderStatusProvider: DataTypes.STRING
  },
  { timestamps: false, tableName: 'orders' });

  Order.associate = (models) => {
    Order.belongsTo(models.CNPJ, { 
      foreignKey: 'cnpjid', as: 'cnpj',
    });

    Order.belongsTo(models.User, { 
      foreignKey: 'userid', as: 'user',
    });

    Order.belongsTo(models.Buyer, { 
      foreignKey: 'buyerid', as: 'buyer',
    });

    Order.belongsTo(models.Buyer, { 
      foreignKey: 'providerid', as: 'provider',
    });
  };

  return Order;
};