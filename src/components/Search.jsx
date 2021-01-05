import React from 'react'
import '../assets/styles/components/Search.scss'

const mainTitle = '¿Qué quieres ver hoy?'
const inputPlaceHolder = 'Buscar...'

const Search = () => (
  <section className="main">
    <h2 className="main__title"> {mainTitle}</h2>
    <input className="input" type="text" placeholder={inputPlaceHolder}/>
  </section>
)

export default Search