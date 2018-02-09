/* Magic Mirror
 * Module: MagicMirror-Fibaro-Module
 *
 * By SpoturDeal https://github.com/SpoturDeal
 * MIT Licensed.
 */
 Module.register('MMM-Fibaro', {
	defaults: {
		updateInterval: 90, // every 90 seconden
		apiBase: '192.168.xx.xxx',
		apiPort: 80,
		apiEndpoint: 'api/interface/data',
        apiUser: "xxx",
        apiPw: "xxxx",
        moduleTitle: "Huidige temperaturen",
        energyTitle: "Energy use",
        energyNow: "Currently",
        energyTotal: "Total used",
 		showItems: ['temperature','energy']
	},
	start: function() {
		Log.info('Starting module: ' + this.name);
		this.update();
		// refresh every x seconden
		setInterval(
			this.update.bind(this),
			this.config.updateInterval * 1000);
	},
	update: function(){
		this.sendSocketNotification(
			'FIBARO_READ',
			'http://' + this.config.apiUser + ':' + this.config.apiPw + '@' + this.config.apiBase + ":" + this.config.apiPort + "/" + this.config.apiEndpoint);
	},
	render: function(data){
		var text = '<div>';
        var therm ='<header class="module-header">' + this.config.moduleTitle + '</header><table>';
        var powerUse=0;
        var usedEnergy=0;
        for (i=0;i<data.devices.length;i++){
            var dev=data.devices[i];
            if (dev.type == 'com.fibaro.temperatureSensor'){
               therm += '<tr><td class="small">' + dev.name + '</td><td class="small">' + parseFloat(dev.properties.value).toFixed(1) + "</td></tr>";   
            } else if (dev.properties.power){
               powerUse += (!isNaN(dev.properties.power)?parseFloat(dev.properties.power):0);
               usedEnergy += (!isNaN(dev.properties.energy)?parseFloat(dev.properties.energy):0);
            }
        }           
        therm += '</table>';
        
        var power='<header class="module-header">' + this.config.energyTitle + '</header>';
        power +='<table><tr><td class="small">' + this.config.energyNow + '</td><td class="small">' + powerUse.toFixed(2) +' Watt</td></tr>';
        power +='<tr><td class="small">' + this.config.energyTotal +'</td><td class="small">' + usedEnergy.toFixed(2) +' kWh</td></tr></table></div>';
        
        text += (this.config.showItems.indexOf('temperature') !== -1?therm:'');
        text += (this.config.showItems.indexOf('energy') !== -1?power:''); 
        
		this.loaded = true;
		// only update dom if content changed
		if(this.dom !== text){
			this.dom = text;
			this.updateDom(this.config.animationSpeed);
		}
	},
	renderRoom: function(roomName, temp) {
		roomName = roomName?roomName:"";
		temp = temp?temp:"";
		return  this.html.loading.format(text);
	},
	html: {
		loading: '<div class="dimmed light small">Loading Fibaro data ....</div>'
		
	},
	getScripts: function() {
		return [
			'String.format.js',
			'//cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.js'
		];
	},
	getStyles: function() {
		return ['fibaro.css'];
	},
	getDom: function() {
		var content = '';
		if (!this.loaded) {
			content = this.html.loading;
		}else if(this.data.position.endsWith("left")){
			content = '<ul class="flip">'+this.dom+'</ul>';
		}else{
			content = '<ul>'+this.dom+'</ul>';
		}
		return $('<div class="fibaro">'+content+'</div>')[0];
	},
    socketNotificationReceived: function(notification, payload) {
      if (notification === 'FIBARO_DATA') {
          console.log('received FIBARO_DATA');
		  this.render(payload);
      }
    }
});