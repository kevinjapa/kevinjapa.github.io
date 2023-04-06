
body {
  background: #000;
  background-image: url('https://www.w3schools.com/html/mov_bbb.mp4');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-position: center center;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

video {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -1;
  filter: brightness(50%);
}
