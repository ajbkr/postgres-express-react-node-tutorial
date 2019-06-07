const { Todo } = require('../models')

module.exports = {
  create: (req, res) => Todo
    .create({
      title: req.body.title
    })
    .then(todo => res.status(201).send(todo))
    .catch(error => res.status(400).send(error))
}
