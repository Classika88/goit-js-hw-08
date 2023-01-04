import Player from '@vimeo/player';
import { throttle } from 'lodash';

const player = new Player('vimeo-player');
const currentTime = JSON.parse(
  localStorage.getItem('videoplayer-current-time')
);
player.setCurrentTime(currentTime || 0);

const onPlaying = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};
player.on('timeupdate', throttle(onPlaying, 1000));
