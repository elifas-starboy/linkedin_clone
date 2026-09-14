const profile = document.querySelector('.online');

profile.addEventListener('click', () => {
    document.querySelector('.profile-settings').classList.toggle('open-menu');
});