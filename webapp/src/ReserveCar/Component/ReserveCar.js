import React from 'react'
import FooterR from './FooterR'
import Head from './Head'
import Produc from './Produc'
import SobreNoso from './SobreNoso'
import './Style/Fondo.css' 

function ReserveCar() {
    return (
        <div>
            <Head  ClasDiv="FondoHead"/>
            <SobreNoso ClasDiv="FondoSobre"/>
            <Produc ClasDiv="FondoProduc"/>
            <FooterR ClasDiv="FondoFoot"/>
        </div>
    )
}

export default ReserveCar
