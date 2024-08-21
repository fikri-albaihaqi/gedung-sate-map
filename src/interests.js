import * as THREE from 'three';

export function createInterests() {
  let points = []
  
  const gedungSate = document.querySelector('.gedung-sate')
  const jabarDigitalService = document.querySelector('.jabar-digital-service')
  const museumPos = document.querySelector('.museum-pos')
  const gasibu = document.querySelector('.gasibu')

  const gedungSateInfo = document.querySelector('.gedung-sate-info')
  const jabarDigitalServiceInfo = document.querySelector('.jabar-digital-service-info')
  const museumPosInfo = document.querySelector('.museum-pos-info')
  const gasibuInfo = document.querySelector('.gasibu-info')

  const closeButton = document.querySelector('.close-button')

  points = [
    {
      position: new THREE.Vector3(-10, 5, 50),
      element: gedungSate
    },
    {
      position: new THREE.Vector3(-32, 5, 20),
      element: jabarDigitalService
    },
    {
      position: new THREE.Vector3(40, 5, 27),
      element: museumPos
    },
    {
      position: new THREE.Vector3(-15, 5, -50),
      element: gasibu
    },
  ]

  gedungSate.addEventListener('click', () => {
    gedungSateInfo.classList.add('show-info')
    closeButton.classList.add('show-info')
  })

  jabarDigitalService.addEventListener('click', () => {
    jabarDigitalServiceInfo.classList.add('show-info')
    closeButton.classList.add('show-info')
  })

  museumPos.addEventListener('click', () => {
    museumPosInfo.classList.add('show-info')
    closeButton.classList.add('show-info')
  })

  gasibu.addEventListener('click', () => {
    gasibuInfo.classList.add('show-info')
    closeButton.classList.add('show-info')
  })

  closeButton.addEventListener('click', () => {
    gedungSateInfo.classList.remove('show-info')
    jabarDigitalServiceInfo.classList.remove('show-info')
    museumPosInfo.classList.remove('show-info')
    gasibuInfo.classList.remove('show-info')
    closeButton.classList.remove('show-info')
  })

  function update(camera) {
    for (const point of points) {
      const screenPosition = point.position.clone()
      screenPosition.project(camera)
  
      const translateX = screenPosition.x * window.innerWidth * 0.05
      const translateY = - screenPosition.y * window.innerHeight * 0.05
      point.element.style.transform = `translateX(${translateX}px) translateY(${translateY}px)`
    }
  }

  return {
    update
  }
} 