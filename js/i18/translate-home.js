const lang = window.navigator.language;

if (lang.includes('ru')) {
    changeLang('ru');
} else {
    changeLang('en');
}

function changeLang(lang) {
    if (!lang) return console.error('You didn\'t provide the language in the function parameters!');
    switch (lang) { // switch is used for multiple lang switch (more langs soon)
        case 'ru':
            document.querySelector('html').setAttribute('lang', 'ru');
            document.title = i18.ru.title;
            document.querySelector('.search_heading').innerText = i18.ru.title;
            document.getElementById('searchbox').placeholder = i18.ru.sna;
            document.getElementById('aouts').innerText = i18.ru.about;
            document.getElementById('qien').innerText = i18.ru.menu;
            document.getElementById('sgti').innerText = i18.ru.settingsHeading;
            document.getElementById('swttm').innerText = i18.ru.changeTheme;
            break;

        case 'en':
            document.querySelector('html').setAttribute('lang', 'en');
            document.title = i18.en.title;
            document.querySelector('.search_heading').innerText = i18.en.title;
            document.querySelector('#searchbox').placeholder = i18.en.sna;
            document.getElementById('aouts').innerText = i18.en.about;
            document.getElementById('qien').innerText = i18.en.menu;
            document.getElementById('sgti').innerText = i18.en.settingsHeading;
            document.getElementById('swttm').innerText = i18.en.changeTheme;
            break;
    }
}
