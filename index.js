const app = require('express')(),
      port = 9999;

app.get('/', (req, res) => {
 res.sendFile(__dirname + '/index.html')
})

app.listen(port, console.log("we in, on ", port))