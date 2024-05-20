import { DataTypes } from 'sequelize'

export default async function (sequelize) {
  return sequelize.define(
    'Reserve_system',
    {
      reservation_id: {
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
      reserveTime: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      tableName: 'reserve_system', //直接提供資料表名稱
      timestamps: true, // 使用時間戳
      paranoid: false, // 軟性刪除
      underscored: true, // 所有自動建立欄位，使用snake_case命名
      createdAt: 'created_at', // 建立的時間戳
      updatedAt: 'updated_at', // 更新的時間戳
    }
  )
}
