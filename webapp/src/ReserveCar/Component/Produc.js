import React from 'react'
import './Style/Producto.css'
import Image from 'react-bootstrap/Image'

function Produc({ClasDiv}) {
    return (
        <div className={ClasDiv}>
            <div className="ImagenI">
                <Image src="https://astelus.com/wp-content/viajes/viaje-en-coche.jpg" width="250px" roundedCircle />
                <center>
                <p className="LetraPG">JEEP® WRANGLER SPORT</p>
                </center>
            </div>
            
            <div className="ImagenD">
                <Image src="https://p4.wallpaperbetter.com/wallpaper/115/190/479/car-dawn-dusk-night-wallpaper-preview.jpg" width="250px" roundedCircle />
                <center>
                <p className="LetraPG">PEUGEOT 206</p>
                </center>
            </div>

            <div className="ImagenC">
                <Image src="https://img.lovepik.com/photo/50153/7631.jpg_wh860.jpg" width="250px" roundedCircle />
                <center>
                <p className="LetraPG">CHEVROLET TRACKER TURBO</p>
                </center>
            </div>
        </div>
    )
}

export default Produc
