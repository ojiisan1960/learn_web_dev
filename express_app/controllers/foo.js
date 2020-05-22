module.exports.controller = (app) => {
  // get users page
  app.get('/foo', (req, res) => {
    res.render('index', { title: 'FOO' });
  })
}
