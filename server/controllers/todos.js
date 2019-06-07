const { Todo, TodoItem } = require('../models')

module.exports = {
  create: (req, res) => Todo
    .create({
      title: req.body.title
    })
    .then(todo => res.status(201).send(todo))
    .catch(error => res.status(400).send(error)),

  list: (req, res) => Todo
    .findAll({
      include: [{
        model: TodoItem,
        as: 'todoItems'
      }]
    })
    .then(todos => res.status(200).send(todos))
    .catch(error => res.status(400).send(error))
}
