var commandMap = {}

module.exports = {
  register: function(cmd, func) {
    commandMap[cmd] = func;
  },
  parse: function(cmd) {
    return commandMap[cmd];
  }
}
