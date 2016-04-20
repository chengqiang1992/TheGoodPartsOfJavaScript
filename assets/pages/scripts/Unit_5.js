//Î±Àà  Pseudoclassical
// this.prototype = { constructor: this };

Function.method('new',function(){
	//创建一个新对象，它继承自构造函数的原型对象。
	var that = Object.create(this.prototype);

	//调用构造函数，绑定 -this- 到新对象上。
	var other = this.apply(that,arguments);

	//如果它的返回值不是一个对象，就返回该新对象。
	return (typeof other === 'object' && other) || that;
});

// 我们可以定义一个构造器并扩充它的原型
var Mammal = function(name){
	this.name = name;
};
Mammal.prototype.get_name = function(){
	return this.name;
};
Mammal.prototype.says = function(){
	return this.saying || '';
};

//现在，我们可以构造一个实例：
var myMammal = new Mammal('Herb the Mammal');
var name = myMammal.get_name();
console.log(name);		//Herb the Mammal

// 我们可以构造另一个伪类来继承Mammal,这是通过定义它的 constructor 函数并替换他的 prototype 为一个Mammal的实例来实现的：
var Cat = function(name){
	this.name = name;
	this.saying = 'meow';
};
//替换 Cat.prototype 为一个新的Manmmal实例。
Cat.prototype = new Mammal();

//扩充新原型对象，增加purr和get_name方法。
Cat.prototype.purr = function(n){
	var i,s = ' ';
	for(i = 0;i < n;i += 1){
		if(s){
			s += '-';
		}
		s += 'r';
	}
	return s;
};
Cat.prototype.get_name = function(){
	return this.says() + ' ' + this.name + ' ' + this.says();
};

var myCat = new Cat('Henrietta');
var says = myCat.says();
var purr = myCat.purr(5);
var name = myCat.get_name();
console.log(says);
console.log(purr);
console.log(name);


//伪类模式本意是想向面向对象靠拢，但它看起来格格不入。我们可以隐藏一些丑陋的细节
//通过使用method方法来定义一个inherits方法实现：
Function.method('inherits',function(Parent){
	this.prototype = new Parent();
	return this;
});
//我们的inherits和method方法都返回this，这样允许我们可以采用级联的形式编程。
//现在可以只用一行语句构造我们的Cat对象。
var Cat = function (name){
	this.name = name;
	this.saying = 'meow';
}
.inherits(Mammal)
.method('purr',function(n){
	var i,s = ' ';
	for(i = 0;i < n;i += 1){
		if(s){
			s += '-';
		}
		s += 'r';
	}
	return s;
})
.method('get_name',function(){
	return this.says() + ' ' + this.name + ' ' + this.says();
});
var myCat = new Cat('chengqiang');
var says = myCat.says();
var purr = myCat.purr(10);
var name = myCat.get_name();
console.log(says);
console.log(purr);
console.log(name);

// 对象说明符
var myObject = maker(f,l,m,c,s);
var myObject = maker({
	first:f,
	middle:m,
	last:l,
	state:s,
	city:c
});

// 原型  prototypal
// 让我们先用对象字面量去构造一个有用的对象：
var myMammal = {
	name:'Herb the Mammal',
	get_name:function(){
		return this.name;
	},
	says:function(){
		return this.saying || '';
	}
};

// 定制出新的实例
var myCat = Object.creare(myMammal);
myCat.name = 'Henrietta';
myCat.saying = 'meow';
myCat.purr = function(n){
	var i,s = '';
	for(i = 0;i < n;i += 1){
		if(s){
			s += '-';
		}
		s += 'r';
	}
	return s;
};
myCat.get_name = function(){
	return this.says() + ' ' + this.name + ' ' + this.says();
};

// var block = function(){
// 	//记住当前的作用域。构造一个包含了当前作用域中所有对象的新作用域。
// 	var oldScope = scope;
// 	scope = Object.create(scope);

// 	//传递左花括号作为参数调用advance。
// 	advance("{");

// 	//使用新的作用域进行解析。
// 	parse(scope);

// 	//传递右花括号作为参数调用advance并抛弃新作用域，恢复原来老的作用域。
// 	advance("}");
// 	scope = oldScope;
// };


