numbers = [2, 5, 7, 10, 999];

const students = [
    { name: "Mango", score: 83 },
    { name: "Poly", score: 59 },
    { name: "Ajax", score: 37 },
    { name: "Kiwi", score: 94 },
    { name: "Houston", score: 64 },
  ];

function double (array) {
    return array.map(number => number*2);
};

function getNames (array) {
    return array.map(student => student.name);
};