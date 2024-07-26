const express = require('express')
const app = express()

require('./Middlewares')(app)
require('./DB')
require('./Routes')(app)
require('./Middlewares/execption')(app)
require('./Middlewares/404')(app)

module.exports = (port) => {
  app.listen(port, (port) => {
    console.log(`Server is running on port ${port}`)
  })
}
