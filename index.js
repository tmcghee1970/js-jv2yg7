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

//Observer Design Pattern
var Subject = function() {
  var observers = [];

  //var genres = [];

  return {
    subscribeObserver: function(observer) {
      observers.push(observer);
      //genres.push(observer);
    },
    unsubscribeObserver: function(observer) {
      var index = observers.indexOf(observer);
      if(index > -1) {
        observers.splice(index, 1);
      }
    },
    notifyObserver: function(observer) {
      
      var index = observers.indexOf(observer);
      if(index > -1) {
        observers[index].notify(index);
      }
    },
    notifyAllObservers: function() {
      for(var i = 0; i < observers.length; i++) {
        observers[i].notify(i);
      }
    }
  };
};

var Observer = function() {
  return {
    notify: function(index) {
      console.log("Observer " + index + " is notified!");
    }
  }
}

var subject = new Subject();

var observer1 = new Observer();
var observer2 = new Observer();
var observer3 = new Observer();
var observer4 = new Observer();

subject.subscribeObserver(observer1);
subject.subscribeObserver(observer2);
subject.subscribeObserver(observer3);
subject.subscribeObserver(observer4);

subject.notifyObserver(observer2); //Observer 2 is notified!

subject.notifyAllObservers();
