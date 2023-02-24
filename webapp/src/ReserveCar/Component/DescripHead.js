import React from 'react'
import Image from 'react-bootstrap/Image'

function DescripHead({ClasDiv}) {
    return (
        <div className={ClasDiv}>
            <center>
            <h2><p className="LetraGT">Reserve Car Indus</p></h2>
            <h1><p className="LetraG"> Vive el encanto y la magia de nuestros carros,
            la combinacion perfecta entre tranquilidad y conexión directa con tu carro
            reservado.
            <br/>
            <Image src="https://images.vexels.com/media/users/3/137015/isolated/preview/c5e59e4f2b80f98a7db79df2769e9c69-coche-de-viaje.png" width="30px" roundedCircle /> 
            Espacio amplio <br/>
            <Image src="https://images.vexels.com/media/users/3/137015/isolated/preview/c5e59e4f2b80f98a7db79df2769e9c69-coche-de-viaje.png" width="30px" roundedCircle /> 
            Trayectos economicos<br/>
            <Image src="https://images.vexels.com/media/users/3/137015/isolated/preview/c5e59e4f2b80f98a7db79df2769e9c69-coche-de-viaje.png" width="30px" roundedCircle /> 
            Garantia en tu viaje<br/> 
            <Image src="https://images.vexels.com/media/users/3/137015/isolated/preview/c5e59e4f2b80f98a7db79df2769e9c69-coche-de-viaje.png" width="30px" roundedCircle /> 
            Seguridad en tu viaje<br/></p></h1>
            </center>
        </div>
    )
}

export default DescripHead
