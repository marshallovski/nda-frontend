const lang = window.navigator.language;

if (lang.includes('ru')) {
    changeLang('ru');
} else {
    changeLang('en');
}

function changeLang(lang) {
    if (!lang) return console.error(i18.en.npla);
    switch (lang) {
        case 'ru':
            document.querySelector('html').setAttribute('lang', 'ru');
            document.title = i18.ru.title;
            document.querySelector('.search_heading').innerText = i18.ru.title;
            document.getElementById('searchbox').placeholder = i18.ru.sna;
            break;

        case 'en':
            document.querySelector('html').setAttribute('lang', 'en');
            document.title = i18.en.title;
            document.querySelector('.search_heading').innerText = i18.en.title;
            document.querySelector('#searchbox').placeholder = i18.en.sna;
            break;
    }
}
