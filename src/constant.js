const constant = {
  sizes: {
    width: window.innerWidth,
    height: window.innerHeight,
    aspect: window.innerWidth / window.innerHeight,
    pixelRatio: Math.min(window.devicePixelRatio, 2),
    frustum: 12,
  }
}

export default constant