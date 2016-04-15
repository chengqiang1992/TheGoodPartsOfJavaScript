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

// 搜索
stooge["first-name"] = "程强"; 
console.log(stooge["first-name"]);		//程强

stooge['middle-name'] = 'lester';		
stooge.nickname = 'Curly';
flight.eruipment = {
	model:'Boeing 777'
};
flight.status = 'overdue';
console.log(stooge['middle-name']);		//lester
console.log(stooge.nickname);			//Curly
console.log(flight.eruipment.model);	//Boeing 777
console.log(flight.status);				//overdue

// 引用 Reference
var x = stooge;
x.nickname = 'CurlyTest';
var nick = stooge.nickname;		//因为x和stooge是指向同一个对象的引用，所以nick为‘Curly’
console.log(nick);


var a = {}, b = {}, c = {};
//a,b,c每个都引用一个不同的空对象

a = b = c = {};
//a,b,c都引用同一个空对象。

// 原型 Prototype
if (typeof Object.baget !== 'function') {
	Object.create = function(o){
		var F = function(){};
		F.prototype = o;
		return new F();
	};
}
var another_stooge = Object.create(stooge);
console.log(another_stooge);

another_stooge['first-name'] =  'Harray';
another_stooge['middle-name'] =  'Moses';
another_stooge.nickname =  'Moe';

console.log(another_stooge['first-name']);
console.log(another_stooge['middle-name']);
console.log(another_stooge.nickname);

// 反射 Reflection
typeof flight.number;
typeof flight.status;
typeof flight.arrival;
typeof flight.manifest;

console.log(typeof flight.number);
console.log(typeof flight.status);
console.log(typeof flight.arrival);
console.log(typeof flight.manifest);

// 枚举 Enumeration
var name;
for(name in another_stooge){
	if (typeof another_stooge[name] != 'function') {
		console.log(name + ': ' + another_stooge[name]);		
	}
}

var i;
var propertise = [
	'first-name',
	'middle-name',
	'last-name',
	'profession'
];
for(i = 0; i < propertise.length; i +=1){
	console.log(propertise[i] + ': ' + 
		another_stooge[propertise[i]]);
}

// 减少全局变量污染 Global Abatement
 var MYAPP = {};

MYAPP.stooge = {
	'first-name':'Joe',
	'last-name':'Howard'
};
MYAPP.flight = {
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
}





















