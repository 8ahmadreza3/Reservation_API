const UsersModel = require('../../models/usersModel')
const AWS = require('../../services/AWS')

module.exports = async (req, res, next) => {
  try {
    const userName = req.params.userName.replaceAll(' ', '_').toLowerCase()
    if (!userName) {
      return res.status(404).send({
        success: false,
        message: 'Invalid User'
      })
    }
    const user = await UsersModel.findOneAndDelete({ userName })
    if (user) {
      return res.send({
        success: false,
        message: 'user not found'
      })
    }
    if (user.awsKey.length > 0) {
      AWS.remove(user.awsKey)
    }
    res.send({
      success: true,
      message: 'User deleted'
    })
  } catch (error) {
    next(error)
  }
}
