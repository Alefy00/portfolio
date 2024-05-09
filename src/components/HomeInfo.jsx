import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({text, link, btnText})=> (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center' >{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn' >
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'  />
        </Link>
    </div>
)


const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5" >Olá, Eu sou o <span className='font-semibold' >Alefy</span>👋
        <br/>
        Desenvolvedor Web no Brasil.
        </h1>
        
    ),
    2: (
        <InfoBox
            text="Sou um entusiasta da tecnologia com paixão pela criação de experiências digitais incríveis."
            link="/about"
            btnText="Saiba mais"
        />
    ),
    3: (
        <InfoBox
            text="Vamos trabalhar juntos para transformar ideias em realidade digital!"
            link="/projects"
            btnText="Meus Projetos"
        />
    ),
    4: (
        <InfoBox
            text="Precisa de um projeto feito por um Dev? Estou apenas algumas teclas de distância"
            link="/contact"
            btnText="Vamos conversar"
        />
    ),
}

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;

  
}

export default HomeInfo
