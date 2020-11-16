import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function () {
  $('#formOne').submit(function (event) {
    event.preventDefault();
    let searchTerm = $('#user-search').val();

    let request = new XMLHttpRequest();
    const url = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${process.env.API_KEY}&limit=1`;
    console.log(url);

    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };

    request.open('GET', url, true);
    request.send();

    function getElements(response) {
      let gifEmbeddedUrl = response.data[0].embed_url;
      // console.log(gifEmbeddedUrl);
      let gifUrl = response.data[0].id;
      // console.log(gifUrl);
      // $('#results').text(`The gif is ${gifUrl}`);

      $('#results').html(
        `<iframe src="${gifEmbeddedUrl}" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><><a href="https://giphy.com/gifs/${gifUrl}"></a>`
      );
    }
  });
});
