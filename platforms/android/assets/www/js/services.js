angular.module('starter.services', [])

.filter('inteiro', function() {
  return function(input, min, max) {
    min = parseInt(min);
    max = parseInt(max);
    for (var i=min; i<=max; i++)
      input.push(i);
    return input;
  };
})

.filter('decimal', function() {
  return function(input, min, max) {
    min = parseInt(min);
    max = parseInt(max);
    for (var i=min; i<=max; i+=0.1)
      input.push(i.toFixed(1));
    return input;
  };
})

.filter('milesimal', function() {
  return function(input, min, max) {
    min = parseInt(min);
    max = parseInt(max);
    for (var i=min; i<=max; i+=0.001)
      input.push(i.toFixed(3));
    return input;
  };
 }) 

.filter('reais', function() {
  return function(input, min, max) {
    min = parseInt(min);
    max = parseInt(max);
    for (var i=min; i<=max; i++)
      input.push(i.toFixed(2));
    return input;
  };
});
