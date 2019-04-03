// eslint-disable-next-line no-multi-assign
const app = (module.exports = require('express')());

app.get('/', (req, res) => {
  res.send('... the top of');
});

app.use('/sources', require('./sources'));
app.use('/images', require('./images'));
