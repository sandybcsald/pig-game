/*alert("Hello World!");


            var a = 5;
            var b = '5';
            
            if( a === b)
            {
                console.log( 'true');
            }else{
                console.log( 'false');
            }

____________________________________________________________________

var a = 1;
            while(a<10)
            {
                console.log(a + 'Hello World');
                a++;
            }
            
            var a = 0;
            do{
                console.log( a + 'Bye World!');
                a++
            }while( a > 10)
                
            for(i = 1; i < 20; i++)
                {
                    console.log( i  + 'Hi There!');
                    if( i == 6)
                        {
                            break
                        }
                }
            
            for(i = 1; i < 20; i++)
                {
                    console.log( 'we have reached 6');
                    if( i == 6)
                        {
                            continue
                        }
                }



 function myfunction(x, y, z)
            {
                console.log(x + y + z);
            }


 function loopfrom( x, y, z )
           {
               for( i = x; i < y; i++)
                   {
                       console.log( i + 'Hello World!');
                       if( i == z);
                       {
                           break
                       }
                   }
           } 

____________________________________________________________________


     var someData = [ 10, 20, 50, 40, 30]
           var newData = someData.sort();
            {
             console.log(newData);   
            }

___________________________________________________________________

var phrase = "This is a simple phrase";
            var words = phrase.split("");

____________________________________________________________________


 var images = document.getElementsByTagName('img');
            console.log(images);
            
             var anchors = document.getElementsByTagName('a');
            console.log(anchors);
            
            var phrase = document.getElementsByTagName('p');
            console.log(phrase);
            
           var heading = document.getElementById('heading');
            console.log(heading);
            console.log(heading.innerHTML);
            console.log(heading.nodeType);

___________________________________________________________________

 var markMass = 78;
 var markHeight = 1.69;    
 var johnMass = 92;    
 var johnHeight = 1.95
         
 var BMIMark = markMass / (markHeight * markHeight);
 var BMIJohn = johnMass / (johnHeight * johnHeight)
         
         
 if (BMIMark > BMIJohn) {
 console.log('Mark\'s BMI is higher than John\'s.');
 }else{
 console.log('John\'s BMI is higher than Mark\'s.');
 }

___________________________________________________________________
         

var firstName = 'John';
var civilStatus = 'single';        
       
if(civilStatus === 'married'){
    console.log(firstName + ' is married!');
}else{
    console.log(firstName + ' will hopefully marry soon :)');
}  
            
var isMarried = true;
if(isMarried){
    console.log(firstName + ' is married!');
}else{
    console.log(firstName + ' will hopefully marry soon :)');
} 

____________________________________________________________________
          

var firstName = 'John';
var age = ;
            
if(age < 13){
    console.log(firstName + ' is a boy.');
}else if(age >=13 && age < 20){
    console.log(firstName + ' is a teenager.');
}else if(age >= 20 && age < 30){
    console.log(firstName + ' is a young man.');
}else{
    console.log(firstName + ' is a man.');
}

____________________________________________________________________

var firstName = 'John';
var age = 16;
            
age >= 18 ? console.log(firstName + 'drinks beer.')
: console.log(firstName + ' drink juice.');
            
var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);       

____________________________________________________________________            

var job = 'cop';
switch(job) {
        case'teacher':
            console.log(firstName + ' teaches kids how to code.');
            break;
        case'driver':
            console.log(firstName + ' drives an uber in Lisbon.');
            break;
        case'designer':
            console.log(firstName + ' designs beautiful websites.');
            break;
    default:
        console.log(firstName + ' does something else.');
}

____________________________________________________________________

age = 13;
switch (true){
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}

____________________________________________________________________

var height;
            
height = 23;
            
if(height || height === 0){
    console.log('Variable is defined');

}else{
    console.log('Variable has NOT been deefined');
}
            
            
if(height == '23'){
    console.log('The == operator does type coertion!');
}

__________________________________________________________________


if (scoreJohn > scoreMike) {
    console.log('John\'s team wins with ' +
               scoreJohn + ' points');
}else if(scoreMike > scoreJohn){
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
}else{
    console.log('There is a draw');
}
            
var scoreJohn = (89 + 120 + 103)/3;
var scoreMike = (116 + 94 + 123)/3;
var scoreMary =(97 + 134 + 105)/3;
console.log(scoreJohn, scoreMike, scoreMary);

if(scoreJohn > scoreMike && scoreJohn > scoreMary){
    console.log('John\'s team wins with ' +
               scoreJohn + ' points');
}else if(scoreMike > scoreJohn && scoreMike > scoreMary){
    console.log('Mike\'s team wins with ' + scoreMike + ' point');
}else if( scoreMary > scoreJohn && scoreMary > scoreMike){
    console.log('Mary\'s team wins with ' + scoreMary + ' point');
}else{
    console.log('There is a draw');
}

____________________________________________________________________

function calculateAge(birthYear){
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName)
{
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if(retirement > 0){
        console.log(firstName + ' retires in ' + retirement + ' years.');
    }else{
        console.log(firstName + ' is already retired.');
    }
}
            
yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
            
____________________________________________________________________

var whatDoYouDo = function(job, firstName){
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in Lisbon';
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));

____________________________________________________________________

var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);
            
console.log(names[2]);
console.log(names.length);
            
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);
            
            
var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
john.pop();
john.pop();
john.shift();
console.log(john);
            
console.log(john.indexOf(23));
            
var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);

__________________________________________________________________

function tipCalculator(bill){
    var percentage;
    if (bill < 50){
        percentage = .2;
    }else if(bill >= 50 && bill < 200){
        percentage = 0.15;
    }else{
        percentage = .1;
    }
    return percentage * bill;
}
            
var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]), 
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];
var finalValues = [bills[0] + tips[0],
                   bills[1] + tips[1],
                   bills[2] + tips[2]];

            
console.log(tips, finalValues);

____________________________________________________________

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);
            
john.job = 'designer';
john['isMarried'] = true;
console.log(john);
            
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = '1969';
jane['lastName'] = 'Smith'
console.log(jane);
                    
_____________________________________________________________

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(birthYear){
        this.age = 2018 - this.birthYear;
    }
};   
            
john.calcAge();
console.log(john);
            
_____________________________________________________________

var john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
}

var mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
}

if(john.calcBMI() > mark.calcBMI()){
    console.log(john.fullName + ' has a higher BMI of ' + john.BMI);
}else if(mark.BMI > john.BMI){
    console.log(mark.fullName + ' has a higher BMI of ' + mark.BMI);
}else{
    console.log('They have the same BMI');
}

_____________________________________________________________

for (var i = 1; i <= 20; i=+2){
    console.log(i);
}
            
            
var john = ['John', 'Smith', 1990, 'designer', false. blue];
for (var i = 0; i < john.length; i++){
    console.log(john[i]);
}  
            
var i = 0
while(i < john.length){
    console.log(john[i]);
    i++
}           
            
            
var john = ['John', 'Smith', 1990, 'designer', false. blue];
for (var i = 0; i < john.length; i++){
    if(typeof john[i] !== 'string') continue;
    console.log(john[i]);
} 
            
for (var i = 0; i < john.length; i++){
    if(typeof john[i] !== 'string') break;
    console.log(john[i]);
} 
            
for (var i = john.length - 1; i >= 0; i--){
    console.log(john[i]);
}
____________________________________________________________________

            var john ={
                fullName: 'John Smith',
                bills: [124, 48, 268, 180, 42],
                calcTips: function() {
                    this.tips = [];
                    this.finalValues = [];
                    
                    for(var i = 0; i < this.bills.length; i++)
                    {
                        var percentage;
                        var bill = this.bills[i];
                        
                        if(bill < 50){
                           percentage = .2;  
                        }else if(bill >= 50 && bill < 200){
                            percentage = .15;
                        }else{
                            percentage = .1;
                        }
                        
                        
                        this.tips[i] = bill * percentage;
                        this.finalValues[i] = bill + this.tips[i];
                    }
                }
            }
            
             var mark ={
                fullName: 'Mark Miller',
                bills: [77, 475, 110, 45],
                calcTips: function() {
                    this.tips = [];
                    this.finalValues = [];
                    
                    for(var i = 0; i < this.bills.length; i++)
                    {
                        var percentage;
                        var bill = this.bills[i];
                        
                        if(bill < 100){
                           percentage = .2;  
                        }else if(bill >= 100 && bill <300){
                            percentage = .1;
                        }else{
                            percentage = .25;
                        }
                        
                        
                        this.tips[i] = bill * percentage;
                        this.finalValues[i] = bill + bill * percentage;
                    }
                }
            }
             
function calculateAverage(tips){
    var sum = 0;
    for (var i = 0; i < tips.length; i++){
        sum = sum + tips[i];
    }
    return sum / tips.length;
}
            
             
john.calcTips();
mark.calcTips();
            
john.average = calculateAverage(john.tips);
mark.average = calculateAverage(mark.tips);
console.log(john, mark);
            
if (john.average > mark.average){
    console.log(john.fullName + '\'s family pays higher tips, withan average of $' + john.average);
}else if (mark.average > john.average){
    console.log(mark.fullName + '\'s family pays higher tips, withan average of $' + mark.average);
}
 ___________________________________________________________

calculateAge(1965);

function calculateAge(year){
    console.log(2016 - year);
}

//retirement(1965);
var retirement = function(year){
    console.log(65 - (2016 - year));
}


console.log(age);
var age = 23;
console.log(age);

function foo(){
    var age = 65;
    console.log(age);
}
foo();
console.log(age);
______________________________________________________________

var a = 'Hello!';
first();

function first(){
    var b = 'Hi!';
    second();
    
    function second(){
        var c = 'Hey!';
        third();
    }
}

function third(){
    var d = 'John';
   //console.log(c);
    console.log(a + d);
}

______________________________________________________________


calculateAge(1985);

function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);
}
______________________________________________________________


var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function(){
        console.log(this);
        console.log(2016 - this.yearOfBirth);
        
        function innerFunction(){
            console.log(this);
        }
        innerFunction();
    }
}
    

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};


mike.calculateAge = john.calculateAge;
mike.calculateAge();

_____________________________________________________________
*/








































