import $ from 'jquery';
const _ = require('lodash');

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button id="click-here">Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

const counter = (function () {
  let counter = 0;

  return function () {
    counter++;
    return counter;
  };
})();

function updateCounter() {
  $('#count').text(counter() + ' clicks on the button');
}

$('#click-here').on('click', _.debounce(updateCounter, 300, {
  leading: true,
  trailing: false,
}));