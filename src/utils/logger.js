const winston = require('winston');
const moment = require('moment');
const path = require('path');
const fs = require('fs');

const dir = path.join(process.cwd(), 'logs');

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

module.exports = new winston.Logger({
  transports: [
    new winston.transports.Console({
      level: 'info',
      timestamp: () => moment(),
      json: true,
      colorize: true
    }),
    new winston.transports.File({
      level: 'info',
      filename: path.join(dir, 'app.log'),
      timestamp: () => moment(),
      json: true,
      maxsize: 1048576,
      maxFiles: 10
    })
  ]
});
