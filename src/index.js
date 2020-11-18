const http = require(`http`)
const app = require(`./app`)
const sequelize = require(`./configs/sequelize.config`)

const server = http.createServer(app)

sequelize.sync()
  .then(() => {
    server.listen(4999, () => {
      console.log(`Server started on port 4999`)
    })
  })