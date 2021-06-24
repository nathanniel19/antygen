import React from 'react'
import LogoQT from '../img/LogoQT.png'

const imgStyle = {
    marginTop: '10px'
}


const Logo = () => {
    return (
        <div>
            <div className="container">
                <img align="left" style={imgStyle} src={LogoQT} alt="Logo"/>
            </div>
        </div>
)
}

export default Logo
