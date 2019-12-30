var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

var int1 = function (str) {
    return +str;
}

var int2 = function (str) {
    return Number(str);
}

var int3 = function (str) {
    return parseInt(str, 10);
}

var number = '100';
suite
    .add('+', function () {
        int1(number);
    })
    .add('Number', function () {
        int2(number);
    })
    .add('parseInt', function () {
        int3(number);
    })

    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    .run({ 'async': true });