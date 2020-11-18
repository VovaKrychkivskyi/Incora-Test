const express = require(`express`);
const app = express();

const {mainRouter} = require(`./routers`)

app.use(express.json());
app.use(`/`, mainRouter);

app.use('*', (err, req, res, next) => {
  res
    .status(err.status || 404)
    .json({
      message: err.message || 'NOT FOUND',
      code: err.customCode || ''
    })
})

module.exports = app;
