const method = 'get';

const path = '/users';

const handler = async(req, res) => {
  res.send([
    {
      id: '1',
      name: 'John'
    }, {
      id: 2,
      name: 'Charles'
    }
  ]);
};

module.exports = {
  path,
  method,
  handler,
};