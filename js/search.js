'use strict';

const searchQuery = document.location.search.slice(3).replaceAll('%20', ' ');
let resultsdiv = document.getElementById('results');

const url = `http://192.168.0.107:3000/api/getresults/${searchQuery}`;
fetch(url, { mode: 'cors' })
    .then(res => res.text())
    .then(function (res) {
        //resultsdiv.innerHTML = document.getElementById('links').innerHTML;
        resultsdiv.innerHTML = res
    }).catch(function (e) {
        console.error(e);
    });


