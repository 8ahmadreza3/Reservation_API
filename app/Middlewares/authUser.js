const tokenService = require('../Services/tokenService.js')
const UsersModel = require('../Models/usersModel')

module.exports = async (req, res, next) => {
  const { authorization } = req.headers
  if (!authorization) {
    return res.status(401).send({
      success: false,
      message: 'you are not authorized'
    })
  }
  const userData = tokenService.verify(authorization)
  const user = await UsersModel.findOne(userData)
  if (!user) {
    return res.status(401).send({
      success: false,
      message: 'your token is not valid'
    })
  }
  delete userData.iat
  req.data = {
    user
  }
  next()
}
