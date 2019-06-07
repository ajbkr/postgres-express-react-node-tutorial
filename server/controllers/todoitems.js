const { TodoItem } = require('../models')

module.exports = {
  create: (req, res) => TodoItem
    .create({
      content: req.body.content,
      todoId: req.params.todoId
    })
    .then(todoItem => res.status(201).send(todoItem))
    .catch(error => res.status(400).send(error)),

  destroy: (req, res) => TodoItem
    .find({
      where: {
        id: req.params.todoItemId,
        todoId: req.params.todoId
      }
    })
    .then(todoItem => {
      if (!todoItem) {
        return res.status(404).send({
          message: 'TodoItem Not Found'
        })
      }
      return todoItem
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error))
    })
    .catch(error => res.status(400).send(error)),

  update: (req, res) => TodoItem
    .find({
      where: {
        id: req.params.todoItemId,
        todoId: req.params.todoId
      }
    })
    .then(todoItem => {
      if (!todoItem) {
        return res.status(404).send({
          message: 'TodoItem Not Found'
        })
      }
      return todoItem
        .update({
          complete: req.body.complete || todoItem.complete,
          content: req.body.content || todoItem.content
        })
        .then(updatedTodoItem => res.status(200).send(updatedTodoItem))
        .catch(error => res.status(400).send(error))
    })
    .catch(error => res.status(400).send(error))
}
