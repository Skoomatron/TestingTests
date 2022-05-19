const model = require('../model/index.js');

const create = async (req, res) => {
  console.log('inside controller')
  await model.createData(req.body)
  .then((response) => {
    res.status(201).send('Name Saved');
  })
  .catch((error) => {
    res.status(409).send(error)
  })
}

module.exports = {
  create,
}