<!-- Підключення YouTube API -->
<script src="https://www.youtube.com/iframe_api"></script>

<script>
  let player;
  let isPlaying = false;

  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '0',
      width: '0',
      videoId: 'EfQ0JcLj8Lc',  // ID відео Теодора Кукурудзи
      playerVars: {
        autoplay: 0,
        controls: 0,
        modestbranding: 1,
        rel: 0
      }
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('musicBtn');
    btn.addEventListener('click', () => {
      if (!player) return;
      if (!isPlaying) {
        player.playVideo();
        btn.textContent = 'Пауза';
      } else {
        player.pauseVideo();
        btn.textContent = 'Нажми';
      }
      isPlaying = !isPlaying;
    });
  });
</script>