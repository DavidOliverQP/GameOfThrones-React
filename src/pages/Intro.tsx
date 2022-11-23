import React, { useEffect, useState } from 'react'
import hero from "../css/Assets/Game-of-Thrones_logo_PNG2.png"
import jaime from '../css/Assets/yrZAKuXv6wUkQRHbhRVEWW.jpg'
import jaime2 from '../css/Assets/dck3m84-eebdcd1f-ec2b-4e0d-aeca-2135449341b5.png'
import tyrion from "../css/Assets/de3901v-eca27fbc-370f-49ec-8764-dab9605c7ec4.png"
import tyrion2 from "../css/Assets/1_OtG2bOqXGBQYWqw7Tef_Tg.jpeg"
import jonSnow from "../css/Assets/0296738.jpg"
import jonSnow2 from "../css/Assets/jon_snow_png_by_alwayslaughs_dbdbnpd-fullview.png"
import daenerys from "../css/Assets/game-of-thrones-daenerys-targaryen.jpg";
import daenerys2 from "../css/Assets/Daenerys-Targaryen-PNG-HD.png"
import episode1 from "../css/Assets/episode1.jpg"
import episode2 from "../css/Assets/episode2.png"
import episode3 from "../css/Assets/episode3.png"
const Intro = () => {
    const [showCharacter, setShowCharacter] = useState({ name: "Teste", text: "teste", image: "" })
    const [showGuide, setShowGuide] = useState({ episode: "teste", guide: "teste" })
    const allCharacters = {
        jonSnow: {
            name: "Jon Snow",
            about: "Jon Snow is the bastard son of Eddard Stark, Lord of Winterfell. He has five half-siblings: Robb, Sansa, Arya, Bran, and Rickon Stark. Unaware of the identity of his mother, Jon was raised at Winterfell. At the age of fourteen, he joins the Night's Watch, where he earns the nickname Lord Snow.",
            image: jonSnow2,
        },
        tyrion: {
            name: "Tyrion Lannister",
            about: "Lord Tyrion Lannister is the youngest child of Lord Tywin Lannister and younger brother of Cersei and Jaime Lannister. A dwarf, he uses his wit and intellect to overcome the prejudice he faces. He is the current Lord of Casterly Rock and Hand of the King to Brandon Stark.",
            image: tyrion,
        },
        jaime: {
            name: "Jaime Lannister",
            about: "Ser Jaime Lannister, also known as the Kingslayer, is a knight from House Lannister. He is the second child and first-born son of Lord Tywin Lannister of Casterly Rock and his wife, Lady Joanna, also of House Lannister. He is the twin brother of Queen Cersei Lannister.",
            image: jaime2,
        },

        daenerys: {
            name: "Daenerys Targaryen",
            about: "Putting it simply, Daenerys is a direct descendant of Rhaenyra, even if they are generations apart. She emerges from the line that originated from Rhaenyra's second marriage to her uncle Daemon, and from her son Viserys II, who will claim the Iron Throne and continue the Targaryen rebellion.",
            image: daenerys2,
        }
    }

    const allGuideEpisodes = {

        episode1: {
            name: "Winter Is Coming",
            guide: `After the death of his right-hand man, King Robert Baratheon travels north to Winterfell to ask his old friend Lord Eddard "Ned" Stark to assume the role. The queen, Cersei; her twin brother, Jaime Lannister; and their brother Tyrion Lannister arrive with the king. The two families intermingle to devastating result: Bran (the second youngest of the Stark children) interrupts Jaime and Cersei having incestuous sex, so Jaime pushes him from a tower window to silence him. Across the Narrow Sea in Pentos, exiled prince Viserys Targaryen forces his sister, Daenerys, to wed Khal Drogo, the leader of a Dothraki tribe, in exchange for an army so he can return to Westeros and reclaim his father's Iron Throne.
            Dany burns Drogo's body, her dragon eggs, and the witch. She climbs onto the pyre herself, later emerging from the ash unscathed, holding three baby dragons: Drogon, Rhaegal, and Viserion.`,
        },
        episode2: {
            name: "The Kingsroad",
            guide: `Daenyrys continues to be only an object to her new husband, we get another quick scene and then it’s right back to Jon Snow. C’mon, more Daenyrys! Tyrion gives some advice to Snow, (he’s always handing out helpful advice) and Jon continues with his brooding, “off to the wall because I’m a bastard” routine.
            A little excitement is to be had when a mysterious assassin tries to finish off Bran, but Bran’s Dire Wolf protects him, if only to remind us how much we’d all like to see more of the Stark Wolves. It’s at this point Lady Stark goes from depression to action, as she starts putting together the chain of events that led to Bran’s fall. She decides she needs to warn Lord Stark about the nefarious Lannisters, and she’s got to carry the message herself.
            Daenerys begins educating herself, via handy slavegirl Shae (Sibel Kekilli), about the finer points of a marriage bed. It is here she’ll make her play to become an equal partner to the horse lord. And we’re a go for intimacy!
            Sansa Stark (Sophie Turner) happens upon her betrothed, Joffrey, and they share a walk. Sadly, this walk is to end in bloodshed, as they come across Arya practicing swordplay along the riverbank. Joffrey threatens, and then taunts her practice partner (the butcher’s son) which turns into a full-on brawl between Arya and Joffrey. Ayra’s Dire Wolf intercedes, naturally.
            A quick verdict on the action scenes – they aren’t particularly well done. Clearly, the money was spent on practical sets and costumes; though that’s a decision I can’t quibble with.
            Arya is forced to shoo her Dire Wolf away, lest it be captured and killed for attacking Prince Joffrey. A children’s fracas has turned terrible due to Joffrey’s cruelty. Arya is called to tell her side of the story, which directly contradicts Joffrey’s more self-serving testimony. Sansa is called to break the tie, but she refuses to testify against her prince, or on behalf of her sister. The good news? Everyone basically escapes punishment. The bad news? The butcher’s boy gets taken out, and Sansa’s Dire Wolf, call sign “Lady,” is forced to take the punishment for Arya’s escaped wolf. That sentence? Death. Lord Stark carries out the punishment, continuing to echo the leadership style shown in episode one.            
            And then Bran wakes right up…           
            What does episode three hold? Lord Stark will (finally, and mercifully) arrive at King’s Landing, where the real intrigue will start. As for Viserys? A comeuppance awaits!            
            Like I said in the opening, episode two is solid and it only gets better from here. I’m also not sure if you heard or not, but HBO has already ordered a second season, announcing in a press release earlier this week saying following strong critical and viewer response to the series’ April 17 debut which drew in 4.2 million viewers.            
            George R. R. Martin, author of the “A Song of Ice and Fire” book series the show is based on, revealed on his blog he will be writing the “Battle of the Blackwater” episode for the second season, which will be based on the second book in the series “A Clash of Kings.”           
            Finally, here are the opening credits, which I praised in my review of episode one. See you next Sunday.`
        },
        episode3: {
            name: "Lord Snow",
            guide: `So the Starks (well, Ned, Catelyn, Sansa and Arya) have reached King’s Landing, the capital of Westeros and a city full of potential enemies and allies. But who can they trust? As Ned takes up his position as The King’s Hand, he learns that with great power, not only comes great responsibility, but plenty of people willing to stab you in the back.
            If you found it hard to keep track of the characters so far, then episode 3 of Game Of Thrones requires you to take your concentration level to the next level, as a host of potential heroes and villains are introduced.
            Firstly, we have Petyr ‘Littlefinger’ Baelish, the king’s treasurer and a man who keeps his loyalties close to his chest. Immediately introducing himself as an ally to Ned, Littlefinger has, as you’d expect, an ulterior motive for offering his aid. Basically, he used to be in love with Ned’s wife, Catelyn.

            So what does he have to gain by aiding the new Hand, and what about the likes of Lord Varys, Grand Maester Pycelle and the king’s brother Renly? Can Ned trust any of them, especially when they seem to have let the king bankrupt his entire kingdom?

            While Ned and Catelyn deal with the political intrigue and try and find out who may have tried to kill Bran (who is now paralysed from the waist down), what is young tomboy Arya left to do? Blaming herself for the butcher’s boy death in the previous episode and determined to learn how to prevent such a thing from happening again, she yearns to learn how to probably use Needle.

            Entre Syrio Forel. A master fencer and former First Sword of Braavos, he will teach the young girl how to handle herself with a sword, with some quick parries, rapid thrusts and some fleet footed moves. With her father looking on approvingly, and yet concerned about how violence may be looming around the corner, these scenes act as a refreshing break from some of the darker moments before it.

            Young Maisie Williams plays the role perfectly, with a loveable mixture of defiance, determination and child-like innocence. It will be interesting how she deals with the almost inevitable horrors that lurk around the corner.`
        }
    }

    useEffect(() => {

        setShowCharacter({ name: allCharacters.tyrion.name, text: allCharacters.tyrion.about, image: allCharacters.tyrion.image })
        setShowGuide({ episode: allGuideEpisodes.episode1.name, guide: allGuideEpisodes.episode1.guide })
    }, [])


    function handlerShowCharacters(event: any, nome: any, text: any, image: any) {


        let checkActivedCard = document.querySelectorAll('.card.active');
        checkActivedCard.forEach((cardAtivado) => {
            cardAtivado.classList.remove("active");
        })

        let click = event.target;
        let card = click.parentNode;
        card.classList.add("active");


        setShowCharacter({ name: nome, text: text, image: image })
    }

    function handlerShowEpisodeGuide(event: any, episodeShow: any, text: any) {

        let checkActivedCard = document.querySelectorAll('.episode-card.active');
        checkActivedCard.forEach((cardAtivado) => {
            cardAtivado.classList.remove("active");
        })
        let click = event.target;
        let card = click.parentNode;
        card.classList.add("active");


        setShowGuide({ episode: episodeShow, guide: text })

    }






    return (<>
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
                                <li className="card" ><img src={jaime} alt="" onClick={(event) => handlerShowCharacters(event, allCharacters.jaime.name, allCharacters.jaime.about, allCharacters.jaime.image)} /></li>
                                <li className="card active" ><img src={tyrion2} alt="" onClick={(event) => handlerShowCharacters(event, allCharacters.tyrion.name, allCharacters.tyrion.about, allCharacters.tyrion.image)} /></li>
                                <li className="card" ><img src={jonSnow} alt="" onClick={(event) => handlerShowCharacters(event, allCharacters.jonSnow.name, allCharacters.jonSnow.about, allCharacters.jonSnow.image)} /></li>
                                <li className="card " ><img src={daenerys} alt="" onClick={(event) => handlerShowCharacters(event, allCharacters.daenerys.name, allCharacters.daenerys.about, allCharacters.daenerys.image)} /></li>
                            </ul>
                        </div>

                        <div className="info">
                            <div className="info-name">
                                <h2>{showCharacter.name}</h2>
                            </div>

                            <div className="img-person">
                                <img src={showCharacter.image} alt="" />
                            </div>

                            <div className="info-text">
                                <p>{showCharacter.text}</p>
                            </div>


                        </div>

                    </div>

                </div>
            </div>

            <div className="container wallpaper3">
                <div className="container-content3">
                    <div className="title-container">
                        <h3>Episode Guide</h3> <select name="season" id="season" className='selectSeason'>
                            <option value="season1">Season 1</option>
                            <option value="season2" disabled>Season 2</option>
                            <option value="season3" disabled>Season 3</option>
                            <option value="season4" disabled>Season 4</option>
                            <option value="season5" disabled>Season 5</option>
                            <option value="season6" disabled>Season 6</option>
                            <option value="season7" disabled>Season 7</option>
                        </select>
                    </div>

                    <div className="body-container">

                        <div className="cards-episode">
                            <ul>
                                <li>
                                    <div className="episode-card active" >
                                        <img src={episode1} alt="" onClick={(e) => { handlerShowEpisodeGuide(e, allGuideEpisodes.episode1.name, allGuideEpisodes.episode1.guide) }} />
                                    </div>
                                </li>
                                <li>
                                    <div className="episode-card" >
                                        <img src={episode2} alt="" onClick={(e) => { handlerShowEpisodeGuide(e, allGuideEpisodes.episode2.name, allGuideEpisodes.episode2.guide) }} />
                                    </div>
                                </li>
                                <li>
                                    <div className="episode-card">
                                        <img src={episode3} alt="" onClick={(e) => { handlerShowEpisodeGuide(e, allGuideEpisodes.episode3.name, allGuideEpisodes.episode3.guide) }} />
                                    </div>
                                </li>

                            </ul>
                        </div>

                        <div className="infos-episodes">
                            <h3 className="info-episode" >
                                {showGuide.episode}
                            </h3>
                            <p>
                                {showGuide.guide}
                            </p>

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