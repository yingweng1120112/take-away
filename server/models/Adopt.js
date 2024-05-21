import { DataTypes } from 'sequelize'

export default async function (sequelize) {
  return sequelize.define(
    'Adopt',
    {
      adopt_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      pet: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      donation_method: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      amount: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      payment: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      donation: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      address: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      tableName: 'adopt', //直接提供資料表名稱
      timestamps: true, // 使用時間戳
      paranoid: false, // 軟性刪除
      underscored: true, // 所有自動建立欄位，使用snake_case命名
      createdAt: 'created_at', // 建立的時間戳
      updatedAt: 'updated_at', // 更新的時間戳
    }
  )
}
