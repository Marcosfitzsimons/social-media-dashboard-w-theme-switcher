/*==================== Dark Mode ====================*/

let darkMode = localStorage.getItem('darkMode');
const themeSwitcher = document.querySelector('.theme-switcher');

const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkMode', 'enabled');
}

const disabledDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkMode', null);
}

if (darkMode === 'enabled') {
    enableDarkMode();
    themeSwitcher.classList.toggle('active');
}

themeSwitcher.addEventListener('click', () => {
    themeSwitcher.classList.toggle('active')

    darkMode = localStorage.getItem('darkMode');
    if(darkMode !== "enabled") {
        enableDarkMode();
    } else {
        disabledDarkMode();
    }
})