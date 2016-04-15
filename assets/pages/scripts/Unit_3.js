var stooge = {
	"first-name":"chengqiang",
	"last-name":"xpluto"
};

var flight = {
	airline:"Oceanic",
	number:815,
	departure:{
		IATA:"SYD",
		time:"2004-09-22 14:55",
		city:"Sydney"
	},
	arrival:{
		IATA:"LAX",
		time:"2004-09-23 14:55",
		city:"Los Angeles"
	}
};

stooge["first-name"];  			//chengqiang
flight.departure.IATA; 			//"SYD"
console.log(stooge["first-name"]);
console.log(flight.departure.IATA);

stooge["middle-name"];  			//undefined
flight.status;	 				//"undefined"
console.log(stooge["middle-name"]);
console.log(flight.status);

var middle = stooge["middle-name"] || "(none)";
var status = flight.status	|| "unknow";
console.log(middle);
console.log(status);