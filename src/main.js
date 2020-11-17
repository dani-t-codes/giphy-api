import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

// function runTrending() {
//   let request = new XMLHttpRequest();
//   const url = `https://api.giphy.com/v1/gifs/trending?&api_key=${process.env.API_KEY}&limit=1`;

//   request.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//       const response = JSON.parse(this.responseText);
//       getElements(response);
//     }
//   };

//   request.open('GET', url, true);
//   request.send();

//   function getElements(response) {
//     let gifEmbeddedUrl = response.data[0].embed_url;
//     let gifUrl = response.data[0].id;

//     $('#trending').html(
//       `<iframe src="${gifEmbeddedUrl}" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><a href="https://giphy.com/gifs/${gifUrl}"></a>`
//     );
//   }
// }

// runTrending();

function searchGiphy(url, num, category) {
  let request = new XMLHttpRequest();

  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const response = JSON.parse(this.responseText);
      getElements(response, num);
    }
  };

  request.open('GET', url, true);
  request.send();

  function getElements(response, num) {
    for (let i = 0; i < num; i++) {
      let gifEmbeddedUrl = response.data[i].embed_url;
      let gifUrl = response.data[i].id;

      console.log('Hello, this is loop: ' + i);

      $(`#${category}`).append(
        `<iframe src="${gifEmbeddedUrl}" width="360" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><a href="https://giphy.com/gifs/${gifUrl}"></a>`
      );
    }
  }
}

$(document).ready(function () {
  $('#formOne').submit(function (event) {
    event.preventDefault();
    let searchTerm = $('#user-search').val();
    console.log(searchTerm);

    const searchUrl = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${process.env.API_KEY}&limit=1`;
    searchGiphy(searchUrl, 1, 'results');
  });

  const trendingUrl = `https://api.giphy.com/v1/gifs/trending?&api_key=${process.env.API_KEY}&limit=3`;
  let num = 3;
  searchGiphy(trendingUrl, num, 'trending');
});
