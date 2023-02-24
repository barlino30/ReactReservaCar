import React from 'react'
import '../Component/Style/Footer.css'
import Button from 'react-bootstrap/Button'
import Logo from './Logo'
import Contacto from './Contacto'


function FooterR({ClasDiv}) {
    return (
        <div className={ClasDiv}>
            <div className="LetraFP">
                <center>
                <p className="LetraFG">Ven a conocernos y dejate encantar por tu carro de alquiler</p>
                </center>
            </div>
            <Button className="BotonF" variant="outline-success">Inscribete</Button>
            <Logo ClasDiv="LogoF"/>
            <Contacto ClasDiv="LetraF"/>
        </div>
    )
}

export default FooterR
