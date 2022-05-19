const db = require('./index.js');

test('should return a connection message from the DB', async () => {
  await db.dbTest()
  .then((response) => {
    console.log(response, 'this is response')
    expect(response).toBe('MONGO HUNGRY!!')
  })
})