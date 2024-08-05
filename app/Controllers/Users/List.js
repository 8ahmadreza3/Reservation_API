const UsersModel = require('../../Models/usersModel')

module.exports = async (req, res) => {
  const users = await UsersModel.find(req.query)
  
  res.send({
    success: true,
    message: 'users founded',
    data: {
      users
    }
  })
}