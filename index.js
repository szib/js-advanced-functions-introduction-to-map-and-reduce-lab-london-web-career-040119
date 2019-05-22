// Your code here
const mapToNegativize = numbers => numbers.map(n => -n);
const mapToNoChange = numbers => numbers;
const mapToDouble = numbers => numbers.map(n => n * 2);
const mapToSquare = numbers => numbers.map(n => n * n);

const reduceToTotal = (numbers, startingPoint = 0) => numbers.reduce((acc, val) => acc + val, startingPoint);
const reduceToAllTrue = values => values.reduce((acc, val) => acc && !!val, true);
const reduceToAnyTrue = values => values.reduce((acc, val) => acc || !!val, false);
