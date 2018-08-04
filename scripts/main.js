// DATE 
let date = new Date();
document.getElementById("date").innerHTML = date.getFullYear()

// LAST FM API WITH Fetch

console.log('hi there 🏄‍♂️');

let artist = document.getElementById('artist');
let song = document.getElementById('song');
let url = document.getElementById('url');
const username = "mitul-s";
const api = "d24473d2ee4169f9f063bcc2f2ad1db5";

function getMusic() {
    fetch('https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=' + username + '&api_key=' + api + '&format=json')
        .then((res) => res.json())
        .then((data) => {
            url.href = data.recenttracks.track[0].url;
            song.innerHTML = data.recenttracks.track[0].name;
            artist.innerHTML = data.recenttracks.track[0].artist['#text'];
        })
        .catch(function (err) {
            console.log("Sorry there has been error, read the following:" + err);
        });
}

getMusic();

// var alert = document.getElementById('alert')
// alert.addEventListener('click', function(){
//     alert.style.display = "none";
// })


const mainImg = document.getElementById('main-img');
const photo = document.querySelectorAll('.photos img');

photo.forEach(img => 
    img.addEventListener('click', imgClick));

function imgClick(e){
    mainImg.src = e.target.src;
} 