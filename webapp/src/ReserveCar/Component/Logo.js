import React from 'react'
import Image from 'react-bootstrap/Image'
import './Style/Head.css'

function Logo({ClasDiv}) {
    return (
        <div className={ClasDiv}>
            <Image src="https://www.nicepng.com/png/full/119-1192805_arte-dicas-para-manter-seu-carro-novo-viagens.png" width="100px" rounded />
        </div>
    )
}

export default Logo
