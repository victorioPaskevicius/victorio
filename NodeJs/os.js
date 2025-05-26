const os = require('os')
const { uptime } = require('process')
os.userInfo()
console.table(
    os = os.platform(),
    version = os.version()
)