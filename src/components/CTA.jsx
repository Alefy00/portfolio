import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
        <p className="cta-text">Tem um projeto em mente? <br className="sm:block hidden" />Vamos construir algo juntos</p>
        <Link to="/contact" className="btn" >
            Entre em Contato
        </Link>

    </section>
  )
}

export default CTA
