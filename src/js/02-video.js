import throttle from "lodash.throttle";
import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const LOCALSTORAGE_KEY = "videoplayer-current-time";
const player = new Player(iframe);

load();

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
  console.log(data);
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data))
};

function getTime() {
const saveTime = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
return saveTime || [];
};

function load() {
create = getTime();
console.log(create.seconds)
player.setCurrentTime(create.seconds || 0);
};



    
    