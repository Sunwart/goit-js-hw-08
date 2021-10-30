import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const player = new Player(document.querySelector('#vimeo-player'));

player.on('timeupdate', throttle(timeupdate, 1000));

if (localStorage.getItem('videoplayer-current-time')) {
  player.setCurrentTime(Number.parseFloat(localStorage.getItem('videoplayer-current-time')));
}

function timeupdate(event) {
  localStorage.setItem(
    'videoplayer-current-time',
    event.seconds === event.duration ? 0 : event.seconds,
  );
}
