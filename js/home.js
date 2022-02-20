document.getElementById("searchbtn").onclick = function () {
    document.getElementById("searchform").submit();
}

document.getElementById('drthor').onclick = function () {
    if (this.checked) {
        window.localStorage.setItem('theme', 'dark');
    } else {
        window.localStorage.setItem('theme', 'light');
    }

    setTimeout(() => {
        window.location.reload();
    }, 500);
};

if (window.localStorage.getItem('theme') == 'light') {
    document.querySelector('body').className = 'body-light';
    document.getElementById('searchbox').style.color = '#000';
    document.querySelector('.sidenav-trigger').classList = 'gray-text sidenav-trigger';
}

if(window.localStorage.getItem('theme') !== 'light') {
    document.getElementById('drthor').checked = true;
    window.localStorage.setItem('theme', 'dark');
}

$(document).ready(function () {
    $('.sidenav').sidenav();
});

