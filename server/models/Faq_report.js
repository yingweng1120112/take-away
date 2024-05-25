import { DataTypes } from 'sequelize'

export default async function (sequelize) {
  return sequelize.define(
    'Faq_report',
    {
      fr_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fr_option: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      question: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      tableName: 'faq_report', //直接提供資料表名稱
      paranoid: false, // 軟性刪除
      underscored: true, // 所有自動建立欄位，使用snake_case命名
    }
  )
}
