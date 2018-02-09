# MMM-Fibaro
MagicMirror Fibaro Module
### Installation

Navigate into your MagicMirror's modules folder:
```
cd ~/MagicMirror/modules
Clone this repository:
git clone https://github.com/SpoturDeal/MMM-Fibaro

Configure the module in your config.js file.
```
### Configuration

To run the module properly, you need to add the following data to your config.js file.

```
{
	module: 'MMM-Fibaro',
	position: 'top_right', // it is advised to use a ???_right position
	config: {
          updateInterval:  45,                          // every 45 seconds
          apiBase: '192.168.x.x',                       // the IPaddress of you Fibaro HC in your home network
          apiPort: 80,                                  // just leave at 80
          apiEndpoint: 'api/interface/data',            // access to api
          apiUser: 'your@email.eu'                      // The emailaddress you use to login
          apiPw: 'your Password',
          moduleTitle: 'Current temperatures Fibaro',   // You can adapt the following text to fit your language
          energyTitle: 'Energy use',                    // The tile for the energy use part
          energyNow: 'Currently using',                 // Label to show current use
          energyTotal: 'Total used',                    // Label for total registred energy used
          showItems: ['temperature','energy']           // Currently available temperature, energy       
        }
 },
 ```
### Image

The preview.png file is the image that appears on your screen
