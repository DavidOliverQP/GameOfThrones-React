import React from 'react'
import hero from "../css/Assets/Game-of-Thrones_logo_PNG2.png"
import jaime from '../css/Assets/yrZAKuXv6wUkQRHbhRVEWW.jpg'
import tyrion from "../css/Assets/Tyrion-Lannister-PNG-Picture.png"
import tyrion2 from "../css/Assets/1_OtG2bOqXGBQYWqw7Tef_Tg.jpeg"
import jonSnow from "../css/Assets/0296738.jpg"
import episode1 from "../css/Assets/episode1.jpg"
import episode2 from "../css/Assets/episode2.png"
import episode3 from "../css/Assets/episode3.png"
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
                                <li> <a href="https://github.com/Daviprogramming" target="__blank"><i className="fa-brands fa-github"></i></a> </li>
                                <li><a href="https://www.linkedin.com/in/david-oliveira-077a77212" target="__blank"><i className="fa-brands fa-linkedin"></i></a></li>
                                <li><a href="https://www.instagram.com/asdavidoliveira/" target="__blank"><i className="fa-brands fa-instagram"></i></a></li>
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
                                    <li className="card disabled"><img src={jaime} alt="" /></li>
                                    <li className="card"><img src={tyrion2} alt="" /></li>
                                    <li className="card disabled"><img src={jonSnow} alt="" /></li>
                                    <li className="card disabled"><img src={jaime} alt="" /></li>
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
                    <div className="container-content3">
                        <div className="title-container">
                            <h3>Episode Guide</h3> <select name="season" id="season" className='selectSeason'>
                                <option value="season1"> <small>Season 1</small></option>
                                <option value="season2">Season 2</option>
                                <option value="season3">Season 3</option>
                                <option value="season4">Season 4</option>
                                <option value="season5">Season 5</option>
                                <option value="season6">Season 6</option>
                                <option value="season7">Season 7</option>
                            </select>
                        </div>

                        <div className="body-container">

                            <div className="cards-episode">
                                <ul>
                                    <li>
                                        <div className="episode-card active">
                                            <img src={episode1} alt="" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="episode-card">
                                            <img src={episode2} alt="" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="episode-card">
                                            <img src={episode3} alt="" />
                                        </div>
                                    </li>

                                </ul>
                            </div>

                            <div className="infos-episodes">
                                <h3 className="info-episode">
                                    Winter is Coming
                                </h3>
                                <p>
                                    <span>Plot:</span> After the death of his right-hand man, King Robert Baratheon travels north to Winterfell to ask his old friend Lord Eddard "Ned" Stark to assume the role. The queen, Cersei; her twin brother, Jaime Lannister; and their brother Tyrion Lannister arrive with the king. The two families intermingle to devastating result: Bran (the second youngest of the Stark children) interrupts Jaime and Cersei having incestuous sex, so Jaime pushes him from a tower window to silence him. Across the Narrow Sea in Pentos, exiled prince Viserys Targaryen forces his sister, Daenerys, to wed Khal Drogo, the leader of a Dothraki tribe, in exchange for an army so he can return to Westeros and reclaim his father's Iron Throne.
                                </p>
                                <p>
                                    <span>Introduces:</span>Everyone, plus White Walkers (the undead entities that live Beyond the Wall), the Starks' pet direwolves, their ward Theon Greyjoy, and the treacherous prince Joffrey.
                                </p>
                                <p>
                                    <span>Historic moment: </span>Dany receives three petrified dragon eggs as a wedding gift.</p>
                            </div>


                        </div>

                    </div>
                </div>

                <div className="container wallpaper4">
                    <div className="container-content4">
                        <h3>Gallery</h3>

                        <div className="galery">
                            <div className="galery-left">
                                <ul>
                                    <li><img src={jaime} className="active" /></li>
                                    <li><img src={jaime} /></li>
                                    <li><img src={jaime} /></li>
                                    <li><img src={jaime} /></li>
                                </ul>
                            </div>
                            <div className="galery-right">
                                <img src={jaime} alt="" />
                            </div>
                        </div>

                        <div className="copyright">
                            @David Oliveira
                        </div>
                    </div>


                </div>

            </div>


        </>
    )
}

export default Intro