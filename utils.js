module.exports = {
  makeTimestamp: function() {
    var dateNow = new Date();
    var timestamp = '[' + dateNow.getHours() + ':' + dateNow.getMinutes() + ']';
    return timestamp;
  }
}
