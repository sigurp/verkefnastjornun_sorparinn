'use strict';

var foo = [1, 2, 3];
var bar = foo.map(function (i) {
  return i * 2;
});

console.log(foo, bar);

foo = 1;
console.log('up');