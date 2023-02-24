import React from 'react'
import Contacto from './Contacto'
import DescripHead from './DescripHead'
import FormHead from './FormHead'
import Logo from './Logo'
import './Style/Head.css'

function Head({ClasDiv}) {
    return (
        <div className={ClasDiv}>
            <Logo ClasDiv="LogoH"/>
            <Contacto ClasDiv="LetraC"/>
            <DescripHead ClasDiv="LetraD"/>
            <FormHead ClasDiv="FormularioH"/>
        </div>
    )
}

export default Head
