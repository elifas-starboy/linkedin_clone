const profile = document.querySelector('.online');
const sidebar_activity = document.querySelector('.user-web-info');
const more_link = document.querySelector('#show-more-link');


profile.addEventListener('click', () => {
    document.querySelector('.profile-settings').classList.toggle('open-menu');
});

function toggleActivity() {

    console.log("working");

    console.log(sidebar_activity)

    sidebar_activity.classList.toggle('open-activity');

    if (sidebar_activity.classList.contains('open-activity')) {
        more_link.innerHTML = "Show less <b>-</b>";
    } 
    else {
        more_link.innerHTML = "Show more <b>+</b>";
    }
}