What are the differences between null and undefined?

null items aren't even in memory. undefined items are but they haven't been assigned a value yet.

What are the differences between == and ===?

=== is strict equals, while == uses type coercion to compare with === equals

How would you compare two objects in JavaScript?
```
deepEquals = function(a, b){

  //get array list of all the property names for both objects
  var props_a = Object.getOwnPropertyNames(a);
  var props_b = Object.getOwnPropertyNames(b);

  //if the length of the properties are different, that means that the objects are not deeply equal
  if (props_a.length !== props_b.length) {
    return false;
  }

  //loop through each value in the object to check equality
  for (var key in a) {
    //if the values are objects, recursively check for equality
    if (typeof a[key] === 'object' && typeof b[key] === 'object') {
      return deepEquals(a[key], b[key]);
    }
    //if it got this far, check the values directly since values are not objects
    if (a[key] !== b[key]) {
      return false;
    }
  }

  //the Objects are deeply equal if it passed all previous tests
  return true;
};  
```

As [] is true, [] == true should also be true right?

Simply answered, no they won't be. There will be multiple coercions that will make it equal 0 === 1 which is false.

How could you write a method on instance of a date which will give you next day?

I have to do Date.prototype.nextDay = function() {
  //get the current date with 'this'
  //add one day and return the day
}


If you want to use an arbitrary object as value of this, how will you do that?

Function.prototype.bind(this);
Function.prototype.apply(this, arrays);
Function.prototype.call(this, arg1, arg2);

Write a simple function to tell whether 2 is passed as parameter or not?

function() {
  var args = Array.prototype.slice.apply(arguments)();
  return args.indexOf(2) !== -1;
}

How could you use Math.max to find the max value in the array?

# IDK

What the heck is 'this' in JavaScript?

This refers to the Object that the function or value gets invoked from. Execution context.

How could you set a prefix before everything you log? for example, if you log ('my message') it will log : "(app) my message"?

function log() {
  var args = Array.prototype.slice.call(arguments);
  args.unshift('(app)');
  console.log.apply(console, args);
}

What will you see in the console for the following example?

```
var a = 1;
function b() {
    a = 10;
    return;
    function a() {}
}
b();
console.log(a);   
```
The
```
function a() {}
```
is same as
```
var a = function () {};
```
So a local scope of 'a' is created.
So when b() runs, var a=function will be set to a = 10.

Look at the code below, you have a for loop if you have setTimeout in it.

```
for(var i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log(i);  
  }, 10);
}
```
It will log '10' X 10 times per each 10 seconds.

Does JavaScript pass parameter by value or by reference?

If it's an array or object, it will pass by reference but otherwise it will pass it by value. However, you assign a new object to the passed object, the changes will not be reflected.

How could you implement cache to save calculation time for a recursive fibonacci function?

# IDK

How could you cache execution of any function?

Through closure?? Like memoize?

19 missing

How could you implement moveLeft animation?

How would you implement currying for any functions?
