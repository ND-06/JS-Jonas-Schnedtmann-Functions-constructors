// Function constructor

var john = {
  name: "John",
  yearOfBirth: 1990,
  job: 'teacher'
};

// It is the way to writing an object 
// We using object litteral.
// But when you have to create a lot 
// of objects, there is a better way
// It is called the function constructor
// This is a very common JS Pattern.


var Person = function(name, lastname, job, yearOfBirth) {
 this.name = name;
 this.lastname = lastname;
 this.job = job;
 this.yearOfBirth = yearOfBirth;
 /*this.calculateAge = function() {
  console.log(2019 - this.yearOfBirth);
  }*/ 
}
// for function construction, we always begin by a capital letter


var tony = new Person('Tony', 'Montana', 'Cop', 1909);
var john = new Person('John', 'Fulci', 'Teacher', 1989);
var lucio = new Person('Lucio', 'Varela', 'Soldier', 1959);
var jane = new Person('Jane', 'Malagutti', 'designer', 1987);
var mark = new Person('Mark', 'Buitoni', 'retired', 1955);

// we can use the function constructor to create the John Object
// it is called instantiation , because this object "John" is
// an instance of Person Object
// When we use a new operator , a new empty object is created
// after that, the constructor function ( PERSON for our case)
// is called with the arguments specified --- the function is called
// Calling a function create a new execution context.
// the this keyword inside the function constructor points to the
// empty object that was created in the beggining by the NEW operator
// The NEW operator points THIS variable not to the global object
// but to this new empty object created at the beggining with the new operator


Person.prototype.calculateAge = function() {
  console.log(2019 - this.yearOfBirth);
};



john.calculateAge();
jane.calculateAge();
mark.calculateAge();
tony.calculateAge();
lucio.calculateAge();

// IMPORTANT 
// john prototype is the prototype property of the Person Function constructor , 
// not the prototype property of John's Object


var Car = function(brand, model, power, yearOfRelease, price){
  this.brand = brand;
  this.model = model;
  this.power = power;
  this.yearOfRelease = yearOfRelease;
  this.price = price;
};

var f430 = new Car("Ferrari", 'F430', '480hp', 2003, '150.000 usd');

console.log(f430.price);

var Bike = function(brand, model, power, yearOfRelease, price) {
  this.brand = brand;
  this.model = model;
  this.power = power;
  this.yearOfRelease = yearOfRelease;
  this.price = price;
};


var gsr600 = new Bike('Suzuki', 'Gsr600', '98hp', '2007', '10.000 USD');

console.log(gsr600.power);

// We create THE FUNCTION CONSTRUCTOR Crypto

var Crypto = function(name, marketCapInUsd, circulationSupply, priceInUsd) {
  this.name = name;
  this.marketCapInUsd = marketCapInUsd;
  this.circulationSupply = circulationSupply;
  this.priceInUsd = priceInUsd;
};

// we instanciate hpb object through the crypto function constructor 

var hpb = new Crypto('HPB', '8000000', '38000000', '0.20');

console.log(hpb.priceInUsd);

// we create prototype related to Crypto function constructor
// thats means this proto will be available for all objects instanciated by our crypto function constructor
// but at the opposite of creating a method inside the function constructor, the method created
// through prototype will be called
// only if we have to use it, and not each time that we use the function constructor to create a new object
// it is a lot better and quicker


Crypto.prototype.calculateFuturePrice = function(expectedMarketCapInUsd, expectedCirculationSupply) {
  var calculation = expectedMarketCapInUsd / expectedCirculationSupply;
  console.log('With Marketcap and circulationSupply that you have specified, the price of one' + 
  ' ' + this.name + ' ' + 'will worth ' + calculation + '.');
};

hpb.calculateFuturePrice(50000000000, 48000000);


var bitcoin = new Crypto('Bitcoin', '63000000000', '17500000', '3590');

bitcoin.calculateFuturePrice('5000000000000', '17500000');

// It is not common but we can also create proto with properties and not only with a method
// so the property will not be created inside the object but we will have the possibility to
// access at the proto when we call it - it is inheritance -

Crypto.prototype.country = 'China';

console.log(hpb.country);
console.log(bitcoin.country);


/* Prototype:

===========

1.Prototype is nothing but a property in each object .

2.This is mainly used for inheritance .

3.It can contain  common functions or other properties which will be used by other objects

consider the below eg:

eg1:(without protoype)

var Person=function(name,Year,job)

{

    this.name=name;

    this.Year=Year;

    this.job=job;

this.calcAge=function()

  {

   console.log(2018-this.year);

   }

}


john=new Person('john','1990','teacher');

jeni=new Person('jeni',1978,'dancer');

john .calcAge()

jeni.calcAge()



drawbacks:

===========

while creating the john object and jeni object  the calcAge method will be created everytime in Person constructor.

In our example it has only one line in the function .if the function has 100 lines of code ,then the calcAge method will be created again and again (for john object and for jeni object)

to overcome the above pbm we are using the prototype:


eg:2(with prototype)

var Person=function(name,Year,job)

{

    this.name=name;

    this.Year=Year;

    this.job=job;
}

Person.prototype.calcAge=function()

  {

   console.log(2018-this.year);

   }

john=new Person('john','1990','teacher');

jeni=new Person('jeni',1978,'dancer');

john.calcAge();

jeni.calcAge();


Advantages

===========

the calAge function will be created and called  only when the the object access the prototype of the person

hence the calcAge will not be called during the creation of object such as john and jeni

there are some cases in which only john object need calcAge and jeni object does not required calc Age in such scenarios,it is very effective

we can maintain only one copy function and it can be accessed by the objects which actually need to access  it .
*/ 

