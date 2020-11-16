import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import { User } from './js/user.js';

$(document).ready(function () {
  $('#formOne').submit(function (event) {
    event.preventDefault();
    let searchTerm = $('#user-search').val();
    console.log(searchTerm);

    // Their code
    let apiRequest = $.get(
      `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${process.env.API_KEY}&limit=1`
    );
    apiRequest.done(function (data) {
      console.log('success got data', data);
    });
  });
});
