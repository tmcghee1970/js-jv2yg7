// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

//console.log('Hey World!');

//Module Design Pattern
var HTMLChanger = (function() {
  var contents = 'Declare private variables'

  var changeHTML = function() {
    var element = document.getElementById('attribute-to-change');
    element.innerHTML = contents;
  }

  return {
    callChangeHTML: function() {
      changeHTML();
      console.log(contents);
    }
  };
})();

//HTMLChanger.callChangeHTML();
//console.log(HTMLChanger.contents);

//Revealing Module Pattern
var Exposer = (function() {
  var privateVariable = 10;

  var privateMethod = function() {
    console.log('Inside a private method!!');
    privateVariable++;
  }

  var methodToExpose = function() {
    console.log('This is a method I want to expose');
  }

  var otherMethodIWantToExpose = function() {
    privateMethod();
  }

  return {
    first: methodToExpose,
    second: otherMethodIWantToExpose
  };
})();

//Exposer.first(); //Output: This is a method I want to expose!
//Exposer.second(); //Output: Inside a private method!
//console.log(Exposer.otherMethodIWantToExpose);  //undefined

