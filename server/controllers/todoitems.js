const { TodoItem } = require('../models')

module.exports = {
  create: (req, res) => TodoItem
    .create({
      content: req.body.content,
      todoId: req.params.todoId
    })
    .then(todoItem => res.status(201).send(todoItem))
    .catch(error => res.status(400).send(error))
}