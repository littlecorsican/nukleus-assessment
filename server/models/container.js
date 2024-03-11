'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Container extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Container, { 
        as: 'container',
        foreignKey: 'id',
        sourceKey: 'container_id',
        allowNull: true
      });
    }
  }
  Container.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    container_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Container',
    freezeTableName: true,
    timestamps: false,
  });
  return Container;
};