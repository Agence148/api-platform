const fs = require('fs');

module.exports = {
  devServer: {
    http2: true,
    https: {
      key: fs.readFileSync('/usr/src/client/ssl/localhost.key'),
      cert: fs.readFileSync('/usr/src/client/ssl/localhost.crt'),
      ca: fs.readFileSync('/usr/src/client/ssl/server.pem'),
    }
  }
};
