# MMM-Fibaro

This <a href="https://github.com/MichMich/MagicMirror">MagicMirror</a> module allows you read data from your Fibaro Home Center


## Installation
1. Navigate into your MagicMirror's `modules` folder and execute `git clone https://github.com/spoturdeal/MMM-Fibaro.git`.
2. Add the module inside `config.js` placing it where you prefer ;)


## Config


|Option|Description|
|---|---|
|`updateInterval`|How fast do you like updates.<br>**Type:** `Integer`<br>**Default:** <i>45</i>| seconds 
|`apiBase`|The IP Address of your Home Center.<br>**Type:** `string`<br>**Default:** <i>192.168.xxx.xxx</i>|
|`apiPort`|The port your Home Center uses.<br>**Type:** `Integer`<br>**Default:** <i>80</i>|
|`apiEndpoint`| The api call endpoint. <br> **Type** `string` <br> **Default** <i>api/interfaces/data</i> |
|`apiUser`| The email address you use to login on your Home Center. <br>**Type:** `string`<br>**Default:** <i>XXXX</i>
|`apiPw`| The password you use to login.. <br>**Type:** `string`<br>**Default:** <i>xxxx</i>
|`energyTitle`| Energy. <br>**Type:** `string`<br>**Options:** Anything<br/>**Default:** <i>Energy</i>
|`energyNow`| The text for the energy you currently use. <br>**Type:** `string`<br>**Default:** <i>Currently</i>
|`energyTotal`| The text of total energy used. <br>**Type:** `string`<br>**Default:** <i>Energy used</i>
|`moduleTitle`| Defines the headline text.<br/>**Type:** `string`<br>**Default:** <i>Current temperatures Fibaro</i>
|`showItems`| The items you like to show. <br> **Type** One of the following: `temperature, energy` <br> **Default** <i>`temperature, energy`</i> |

Here is an example of an entry in `config.js`
```
{
	module: "MMM-Fibaro",
	position: "top_right",   // see mirror setting for options
	config: {          
		updateInterval: 45, // every 45 seconds
		apiBase: '192.168.xxx.xxx',
		apiPort: 80,
		apiEndpoint: 'api/interface/data',
		apiUser: "XXXX",
        apiPw: "xxxx",
		moduleTitle: "Current temperatures Fibaro",
		energyTitle: "Energy",
		energyNow: "Currently",
		energyTotal: "Energy used",
		showItems: ['temperature','energy']   // possible items  temperature, energy
	}
}
```

## Screenshots
#### Display type: details
![Screenshot of detail mode](/preview.png?raw=true )


The MIT License (MIT)
=====================

Copyright © 2018 SpoturDeal - Carl 

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the “Software”), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

**The software is provided “as is”, without warranty of any kind, express or implied, including but not limited to the warranties of merchantability,
fitness for a particular purpose and noninfringement. In no event shall the authors or copyright holders be liable for any claim, damages or other liability,
whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software.**
