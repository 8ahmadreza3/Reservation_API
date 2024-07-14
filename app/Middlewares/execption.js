module.exports = (app) => {
  app.use((error, req, res, next) => {
    res.status(500).send({
      success: false,
      message: 'Something went wrong',
      error : error.message
    })
  })
}