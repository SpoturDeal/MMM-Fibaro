/* Magic Mirror
 * Module: MagicMirror-Fibaro-Module
 *
 * By SpoturdDeal https://github.com/
 * MIT Licensed.
 */
var NodeHelper = require('node_helper');
var request = require('request');

module.exports = NodeHelper.create({
  start: function () {
    console.log('Fibaro helper started ...');
  },
  //Subclass socketNotificationReceived received.
  socketNotificationReceived: function(notification, url) {
    if (notification === 'FIBARO_READ') {
      console.log(notification);
      var self = this;
      request(url, function(error, response, body) {
        if (!error && response.statusCode == 200) {
          
          self.sendSocketNotification('FIBARO_DATA', JSON.parse(body));
        }
      });
    }
  }
});