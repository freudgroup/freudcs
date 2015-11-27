// Source http://addyosmani.com/resources/essentialjsdesignpatterns/book/#constructorpatternjavascript

// Object Literals

var myObjectLiteral = {
 
    variableKey: variableValue,
 
    functionKey: function () {
      // ...
    }
};

// Module Pattern

var myNamespace = (function () {
 
  var myPrivateVar, myPrivateMethod;
 
  // A private counter variable
  myPrivateVar = 0;
 
  // A private function which logs any arguments
  myPrivateMethod = function( foo ) {
      console.log( foo );
  };
 
  return {
 
    // A public variable
    myPublicVar: "foo",
 
    // A public function utilizing privates
    myPublicFunction: function( bar ) {
 
      // Increment our private counter
      myPrivateVar++;
 
      // Call our private method using bar
      myPrivateMethod( bar );
 
    }
  };
 
})();

// Kyle Simpson's Modified Module Pattern 

var myNamespace = (function () {

  var myPrivateVar, myPrivateMethod;

  myPrivateVar = 0;

  myPrivateMethod = function(foo) {
      console.log(foo);
  }

  var publicAPI = {
    myPublicFunction: function(bar) {
      myPrivateVar++;
      myPrivateMethod(bar);
    }
  };

  return publicAPI;

})();

myNamespace.newPublicAPIFunction = function(baz) {
    myPrivateVar = 100;
}


