import $ from "jquery";
import _ from "lodash";
import '../css/main.css';
import '../assets/holberton-logo.jpg';

$(function () {
    let count = 0;

    function updateCounter() {
        count++;
        $("#count").text(`${count} clicks on the button`);
    }

    const my_button = $('<button>Click here to get started</button>').on(
        "click", _.debounce(updateCounter, 500));

    $("body").append('<div id="logo"></div>');
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append(my_button);
    $('body').append(`<p id='count'></p>`);
    $('body').append('<p>Copyright - Holberton School</p>');
});