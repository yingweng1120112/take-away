import { DataTypes } from 'sequelize'

export default async function (sequelize) {
  return sequelize.define(
    'pet_info',
    {
      pet_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    },
    {
      tableName: 'pet_info', //直接提供資料表名稱
      timestamps: true, // 使用時間戳
      paranoid: false, // 軟性刪除
      underscored: true, // 所有自動建立欄位，使用snake_case命名
      createdAt: 'created_at', // 建立的時間戳
      updatedAt: 'updated_at', // 更新的時間戳
    }
  )
}

// name: {
//   type: DataTypes.STRING,
//   allowNull: false,
// },
// tag: {
//   type: DataTypes.STRING,
//   allowNull: false,
// },
// age: {
//   type: DataTypes.INTEGER,
//   allowNull: false,
// },
// type: {
//   type: DataTypes.STRING,
//   allowNull: false,
// },
// weight: {
//   type: DataTypes.INTEGER,
//   allowNull: false,
// },
// gender: {
//   type: DataTypes.STRING,
//   allowNull: false,
// },
