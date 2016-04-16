// 函数字面量 Function Literal

//创建一个名为add的变量，并用来把两个数字相加的函数赋值给它。
var add = function(a,b){
	return a + b;
};

// 方法调用模式 The Method Invocation Pattern
//创建myObject对象。他有一个value属性和一个increment方法。
//increment方法接受一个可选的参数。如果参数不是数字，那么默认使用数字1。
var myObject = {
	value:0,
	increment:function(inc){
		this.value += typeof inc === 'number' ? inc : 1;
	}
};

myObject.increment();
console.log(myObject.value);

myObject.increment(2);
console.log(myObject.value);

// 函数调用模式  The Function Invocation Pattern
var sum = add(3,4);
console.log(sum);

//给myObject增加一个double方法。
myObject.double = function(){
	var that = this;	//解决办法

	var helper = function(){
		that.value = add(that.value,that.value);
	};

	helper();	//以函数的形式调用helper。
};

//以方法的形式调用double。
myObject.double();
console.log(myObject.value);

// 构造器调用模式 The Constructor Invocation Pattern
//创建一个名为Quo的构造函数，它构造一个带有status属性的对象。
var Quo = function(string){
	this.status = string;
};
//给Quo的所有实例提供一个名为get_status的公共方法。
Quo.prototype.get_status = function(){
	return this.status;
};
//构造一个Quo实例。
var myQuo = new Quo("confused");
console.log(myQuo.get_status());


// 参数  Arguments
//构造一个将大量的值增加的函数。
//注意该函数内部定义的变量sum不会与函数外部定义的sum产生冲突。
//该函数只会看到内部的那个变量
var sum = function(){
	var i,sum = 0;
	for(i = 0;i < arguments.length;i += 1){
		sum += arguments[i];
	}
	return sum;
};
console.log(sum(4,8,15,16,23,42));


// 异常  Exceptions
var add  =function(a,b){
	if (typeof a !== 'number' || typeof b !== 'number' ) {
		throw{
			name:'TypeError',
			message:'add needs numbers'
		};
	}
	return a + b;
}

//构造一个try_it函数，以不正确的方式调用之前的add函数。
var try_it = function(){
	try{
		add('seven');
	}catch(e){
		console.log(e.name + ': ' + e.message);
	}
}
try_it();

// 递归  Recursion
var hanoi = function(disc,src,aux,dst){
	if(disc > 0){
		hanoi(disc-1,src,dst,aux);
		console.log('Move disc ' + disc + ' from ' + src + ' to ' +dst);
		hanoi(disc-1,aux,src,dst);
	}
};
hanoi(3,'Src','Aux','Dst');

// 模块  Module
String.method('deentityify',function(){
	//字符实体表。它映射字符实体的名字到对应的字符。

	var entity = {
		quot:    '""',
		lt:      '<',
		gt:      '>',
	};

	//返回deentityify方法。
	return function(){
		//这才是deentityify方法。他调用字符串的replace方法，
		//查找'&'开头和';'结束的字符串。如果这些字符串可以在字符实体表中找到，
		//那么就将该字符实体替换为映射表中的值，它用到了一个正则表达式
		return this.replace(/&([^&;]+);/g,
			function(a,b){
				var r = entity[b];
				return typeof r === 'string' ? r : a;
			});
	};
}());
console.log('&lt;&quto;&gt;'.deentityify( ));

// 记忆  Memoization
var fibonacci = function(n){
	return n<2 ? n : fibonacci(n-1) + fibonacci(n-2);
};
for(var i=0; i <= 10; i+=1){
	console.log('// ' + i + ': ' + fibonacci(i));
}

var fibonacci = function(){
	var memo = [0,1];
	var fib = function(n){
		var result = memo[n];
		if (typeof result !== 'number') {
			result = fib(n-1) + fib(n-2);
			memo[n] = result;
		}
		return result;
	};
	return fib;
}();