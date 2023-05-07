const play = document.querySelector('.play');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const audio = document.querySelector('audio');
const artist = document.querySelector('.artist');
const songName = document.querySelector('.nameOfSong');
const songImg = document.querySelector('.songImg');
let flag = false;

const songs = [{
    id: 1,
    path: './rington_1.mp3',
    artist: 'ladygaga',
    nameOfSong: 'rington_1',
    impPath: 'background-image: url(./assets/img1.jpg)'
},
{
    id: 2,
    path: './rington_2.mp3',
    artist: 'RAM',
    nameOfSong: 'rington_2',
    impPath: 'background-image: url(./assets/img2.jpg)'
},
{
    id: 3,
    path: './rington_3.mp3',
    artist: 'LCP',
    nameOfSong: 'rington_3',
    impPath: 'background-image: url(./assets/img3.jpg)'
},]

let currentIndexSong = 0;
play.addEventListener('click', function () {
    audio.src = songs[currentIndexSong].path;
    artist.textContent = songs[currentIndexSong].artist;
    songName.textContent = songs[currentIndexSong].nameOfSong;
    songImg.style= songs[currentIndexSong].impPath;
    if (flag == false) {
        audio.play();

        flag = true;
        this.style = 'background-image: url(./assets/pause.svg);'
    } else {
        audio.pause();
        flag = false;
        this.style = 'background-image: url(./assets/playBtn.svg);'
    }
    ;
})

left.addEventListener('click', function () {
    if (currentIndexSong == 0) return
    currentIndexSong--;
    audio.src = songs[currentIndexSong].path;
    artist.textContent = songs[currentIndexSong].artist;
    songName.textContent = songs[currentIndexSong].nameOfSong;
    songImg.style= songs[currentIndexSong].impPath;
    audio.play();
    flag = true;
    play.style = 'background-image: url(./assets/pause.svg);'
})
right.addEventListener('click', function () {
    if (currentIndexSong == songs.length - 1) return
    currentIndexSong++;
    audio.src = songs[currentIndexSong].path;
    artist.textContent = songs[currentIndexSong].artist;
    songName.textContent = songs[currentIndexSong].nameOfSong;
    songImg.style= songs[currentIndexSong].impPath;
    audio.play();
    flag = true;
    play.style = 'background-image: url(./assets/pause.svg);'
})