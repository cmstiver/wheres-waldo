const magnify = () => {
  const zoom = document.getElementById('zoom');
  const Zw = zoom.offsetWidth;
  const Zh = zoom.offsetHeight;
  const img = document.querySelector('#waldo');

  let timeout;
  let ratio;
  let Ix;
  let Iy;

  function activate() {
    document.body.classList.add('active');
  }

  function deactivate() {
    document.body.classList.remove('active');
  }

  function updateMagnifier(x, y) {
    zoom.style.top = `${y}px`;
    zoom.style.left = `${x}px`;
    zoom.style.backgroundPosition = `${(Ix - x) * ratio + Zw / 2}px ${(Iy - y) * ratio + Zh / 2}px`;
  }

  function onLoad() {
    ratio = img.naturalWidth / img.width;
    zoom.style.backgroundImage = `url(${img.src})`;
    Ix = img.offsetLeft;
    Iy = img.offsetTop;
  }

  function onMousemove(e) {
    const rect = e.target.getBoundingClientRect();
    clearTimeout(timeout);
    activate();
    updateMagnifier(e.clientX - rect.left, e.clientY - rect.top);
    timeout = setTimeout(deactivate, 2500);
    onLoad();
  }

  function onMouseleave() {
    deactivate();
  }

  img.addEventListener('mousemove', onMousemove);
  img.addEventListener('mouseleave', onMouseleave);
};

export default magnify;
