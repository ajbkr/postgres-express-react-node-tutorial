module.exports = (sequelize, DataTypes) => {
  const TodoItem = sequelize.define('TodoItem', {
    complete: {
      defaultValue: false,
      type: DataTypes.BOOLEAN
    },
    content: {
      allowNull: false,
      type: DataTypes.STRING
    }
  })

  TodoItem.associate = models => {
    TodoItem.belongsTo(models.Todo, {
      foreignKey: 'todoId',
      obsolete: 'CASCADE'
    })
  }

  return TodoItem
}
