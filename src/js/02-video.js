import Player from "@vimeo/player"; 
import { throttle } from 'lodash'; 

const vimeoPlayer = document.querySelector("#vimeo-player");
const player = new Player(vimeoPlayer);
const currentTime = JSON.parse(localStorage.getItem("videoplayer-current-time"));

const onPlaying = function (data) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds));
    };
player.on("timeupdate", throttle(onPlaying, 1000));
player.setCurrentTime(currentTime);
