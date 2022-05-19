const db = require('../../db/index.js');
const {Testing} = require('../../db/schema.js');

const createData = async (params) => {
  console.log(params, 'in model')
  try {
    db.collection('testing').insertOne({
      name: params.name,
    })
  } catch (error) {
    return error;
  }
}

module.exports = {
  createData,
}