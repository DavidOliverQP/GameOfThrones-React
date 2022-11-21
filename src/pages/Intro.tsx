import React from 'react'
import hero from "../css/Assets/Game-of-Thrones_logo_PNG2.png"
import jaime from '../css/Assets/yrZAKuXv6wUkQRHbhRVEWW.jpg'
import tyrion from "../css/Assets/Tyrion-Lannister-PNG-Picture.png"
const Intro = () => {
    return (
        <>
            <div className="page">
                <div className="container walpaper1">
                    <div className="container-content">
                        <div className="hero-container">
                            <img src={hero} alt="" />
                        </div>
                        <p>Projeto criado sem fins lucrativos e apenas com o intuito de demonstrar o meu trabalho como desenvolvedor WEB</p>

                        <div className="social-medias-container">
                            <ul>
                                <li> <a href=""><i className="fa-brands fa-github"></i></a> </li>
                                <li><a href=""><i className="fa-brands fa-linkedin"></i></a></li>
                                <li><a href=""><i className="fa-brands fa-instagram"></i></a></li>
                            </ul>
                        </div>

                    </div>

                </div>

                <div className="container wallpaper2">
                    <div className="container-content2">

                        <div className="title-content">
                            <h3>cast and crew</h3>
                        </div>

                        <div className="body-content">

                            <div className="cards">
                                <ul>
                                    <li className="card"><img src={jaime} alt="" /></li>
                                    <li className="card"><img src={jaime} alt="" /></li>
                                    <li className="card"><img src={jaime} alt="" /></li>
                                    <li className="card"><img src={jaime} alt="" /></li>
                                </ul>
                            </div>

                            <div className="info">

                                <div className="info-name">
                                    <h2>Tyrion Lannister</h2>
                                </div>

                                <div className="info-text">
                                    <p>Lord Tyrion Lannister is the youngest child of Lord Tywin Lannister and younger brother of Cersei and Jaime Lannister. A dwarf, he uses his wit and intellect to overcome the prejudice he faces. He is the current Lord of Casterly Rock and Hand of the King to Brandon Stark.</p>
                                </div>

                                <div className="img-person">
                                    <img src={tyrion} alt="" />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                <div className="container wallpaper3">

                </div>

                <div className="container wallpaper4">

                </div>

            </div>


        </>
    )
}

export default Intro