import React from 'react'
import '../assets/styles/components/CarouselItem.scss'
import playIcon from '../assets/static/icons8-play-64.png'
import plusIcon from '../assets/static/icons8-plus-64.png'

const CarouselItem = () => (
  <div className="carousel-item">
  <img className="carousel-item__img" src="https://images.pexels.com/photos/3214734/pexels-photo-3214734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="people"/>
  <div className="carousel-item__details">
    <div className="carousel-item__details--icon">
      <img src={playIcon} alt="icono play"/>
      <img src={plusIcon} alt="icono plus"/>
    </div>
    <p className="carousel-item__details--title">Título descriptivo</p>
    <p className="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
  </div>
  </div>
)

export default CarouselItem
