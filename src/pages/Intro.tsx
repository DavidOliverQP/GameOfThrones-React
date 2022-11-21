import React from 'react'
import hero from "../css/Assets/Game-of-Thrones_logo_PNG2.png"
import jaime from '../css/Assets/yrZAKuXv6wUkQRHbhRVEWW.jpg'
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

                                <div className="info-text">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis iusto rem, alias dolor commodi impedit quisquam ut, eum illo quaerat officia. Repellat et adipisci consectetur! Voluptatem quos officiis odio quaerat.</p>
                                </div>

                                <div className="img-person">
                                    <img src="" alt="" />
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