const os = require('os');
const hostname = os.hostname();

module.exports = name => {
  console.log(`received request to ${hostname} for ${name}`);
  return `hello ${name} from ${hostname}`
};
