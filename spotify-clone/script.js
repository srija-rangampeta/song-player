const audio = document.getElementById("audio");
const playBtn = document.querySelector(".controls button:nth-child(2)");
const progress = document.getElementById("progress");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");

const songs = [
  {
    title: "Song One",
    artist: "Artist A",
    src: "music/song1.mp3",
    cover: "images/album1.jpg"
  },
  {
    title: "Song Two",
    artist: "Artist B",
    src: "music/song2.mp3",
    cover: "images/album2.jpg"
  }
];

let currentSong = 0;

function loadSong(index) {
  const song = songs[index];
  audio.src = song.src;
  title.textContent = song.title;
  artist.textContent = song.artist;
  cover.src = song.cover;
}

function togglePlay() {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "⏸️";
  } else {
    audio.pause();
    playBtn.textContent = "▶️";
  }
}

function next() {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(currentSong);
  audio.play();
  playBtn.textContent = "⏸️";
}

function prev() {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  loadSong(currentSong);
  audio.play();
  playBtn.textContent = "⏸️";
}

audio.addEventListener("timeupdate", () => {
  progress.value = (audio.currentTime / audio.duration) * 100 || 0;
});

progress.addEventListener("input", () => {
  audio.currentTime = (progress.value * audio.duration) / 100;
});

function playSong(index) {
  currentSong = index;
  loadSong(currentSong);
  audio.play();
  playBtn.textContent = "⏸️";
}

loadSong(currentSong);
