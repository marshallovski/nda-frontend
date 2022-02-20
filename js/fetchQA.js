window.onload = function () {
    fetch('/assets/faqs.json')
        .then(function (response) {
            return response.json()
        }).then(function (json) {
            console.log('parsed json', json)
            
            document.getElementById('faqscontent').innerHTML += `<span class="qu-badge">Q:</span><span>${json.dystm[0]}</span>`;
            document.getElementById('faqscontent').innerHTML += `<br><span class="answ-badge">A:</span><span>${json.dystm[1]}</span><br>`;
        
            document.getElementById('faqscontent').innerHTML += `<br><span class="qu-badge">Q:</span><span>${json.nwhfk[0]}</span><br><br>`;
            document.getElementById('faqscontent').innerHTML += `<span class="answ-badge">A:</span><span>${json.nwhfk[1]}</span>`;
        
            document.getElementById('faqscontent').innerHTML += `<br><br><span class="qu-badge">Q:</span><span>${json.is_oss[0]}</span><br>`;
            document.getElementById('faqscontent').innerHTML += `<span class="answ-badge">A:</span><span>${json.is_oss[1]}</span>`;
        
        
        }).catch(function (ex) {
            console.log('parsing failed', ex)
            document.getElementById('faqscontent').innerText = 'parsing error'
        })
}

