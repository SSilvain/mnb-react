// import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
import Help from "./Components/Help/Help";
import {NavLink} from "react-router-dom";

function App() {
  // <Route path={`${url}/help`}
  // children={({match}) =>{
  //     return (
  //       <Dialog onClose={history.goBaack} open={Boolen{match}}>
  //         <HelpPopup help={post.help}/>
  //       </Dialog>
  //     );
  //   }}
  // />
    return (
        <div className="App">
            <div class="container">
                <div class="logo-wrap">
                    <h2 class="logo-h2">MADNOTBAD</h2>
                    <picture>
                        <source
                            srcset="img/cross-shadow.svg"
                            type="image/webp"
                        />
                        <img
                            class="big-logo"
                            src="img/cross-shadow.svg"
                            alt="logo"
                        />
                    </picture>

                    <h2 class="logo-h2">MADNOTBAD</h2>
                </div>

                <div id="app">
                    <div class="social">
                        <a
                            href="mailto:madnotbadmusic@gmail.com"
                            target="_blank"
                        >
                            <i aria-hidden="true" class="fa fa-envelope-o"></i>
                        </a>
                        <a
                            href="https://www.instagram.com/madnotbad_official/"
                            target="_blank"
                        >
                            <i aria-hidden="true" class="fa fa-instagram"></i>
                        </a>
                        <a
                            href="https://www.youtube.com/user/mnbodessa"
                            target="_blank"
                        >
                            <i
                                aria-hidden="true"
                                class="fa fa-youtube-square"
                            ></i>
                        </a>
                        <a
                            href="https://www.facebook.com/madnotbadband/"
                            target="_blank"
                        >
                            <i
                                aria-hidden="true"
                                class="fa fa-facebook-square"
                            ></i>
                        </a>
                        <a
                            href="https://soundcloud.com/madnotbad"
                            target="_blank"
                        >
                            <i aria-hidden="true" class="fa fa-soundcloud"></i>
                        </a>
                    </div>
                    <div class="digital-wrap">
                        <picture>
                            <source
                                srcset="img/cross-shadow.svg"
                                type="image/webp"
                            />
                            <img
                                class="min-logo"
                                src="img/cross-shadow.svg"
                                alt="logo"
                            />
                        </picture>
                        <a
                            target="_blank"
                            href="https://ffm.to/mv6z8jo"
                            class="digital-link"
                        >
                            Click here to listen on sreaming
                        </a>
                        <picture>
                            <source
                                srcset="img/cross-shadow.svg"
                                type="image/webp"
                            />
                            <img
                                class="min-logo"
                                src="img/cross-shadow.svg"
                                alt="logo"
                            />
                        </picture>
                    </div>
                    
                    <div class="youtube-video">
                        <iframe
                            src="https://www.youtube.com/embed/976LGx9NP0A"
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen="allowfullscreen"
                        ></iframe>
                    </div>
                    <div class="youtube-video">
                        <iframe
                            src="https://www.youtube.com/embed/r-VXB9LRMoo"
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen="allowfullscreen"
                        ></iframe>
                    </div>
                    <div class="youtube-video">
                        <iframe
                            src="https://www.youtube.com/embed/tgL4BUJAgEo"
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen="allowfullscreen"
                        ></iframe>
                    </div>
                    <div class="youtube-video">
                        <iframe
                            src="https://www.youtube.com/embed/5MkNL1S75fU"
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen="allowfullscreen"
                        ></iframe>
                    </div>
                    <div class="youtube-video">
                        <iframe
                            src="https://www.youtube.com/embed/SQkI6b4tBYU"
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen="allowfullscreen"
                        ></iframe>
                    </div>
                    <div class="digital-wrap">
                        <picture>
                            <source
                                srcset="img/cross-shadow.svg"
                                type="image/webp"
                            />
                            <img
                                class="min-logo"
                                src="img/cross-shadow.svg"
                                alt="logo"
                            />
                        </picture>
                        <NavLink className="digital-link" to='/help/'>
                            
                        
                            Help for MADNOTBAD
                        </NavLink>
                        <picture>
                            <source
                                srcset="img/cross-shadow.svg"
                                type="image/webp"
                            />
                            <img
                                class="min-logo"
                                src="img/cross-shadow.svg"
                                alt="logo"
                            />
                        </picture>
                    </div>

                    <footer>
                        <a
                            target="_blank"
                            href="https://music.apple.com/ua/album/madnotbad/1499960111?at=1001lwQy&ct=FFM_f9a19873486b90b05c431bd7a1a3af86&uo=4&app=itunes"
                            class="services services__google_play"
                        ></a>
                        <a
                            target="_blank"
                            href="https://itunes.apple.com/us/artist/madnotbad/id1206245911"
                            class="services services__apple_music"
                        ></a>
                        <a
                            target="_blank"
                            href="https://open.spotify.com/artist/2B2FpZFBuULtzNKbwnuSoG"
                            class="services services__spotify"
                        ></a>
                        <a
                            target="_blank"
                            href="https://www.deezer.com/ru/artist/11955629"
                            class="services services__deezer"
                        ></a>
                        <a
                            target="_blank"
                            href="https://music.youtube.com/channel/UC4y9xuoREXXoEvHiaAY4PoA"
                            class="services services__youtube_music"
                        ></a>
                        <a
                            target="_blank"
                            href="https://soundcloud.com/madnotbad"
                            class="services services__soundcloud"
                        ></a>
                    </footer>
                </div>
            </div>
           
            <Route
                    path="/help"
                    render={() => <Help title="Help for MADNOTBAD" />}
                    title="test"
                    
                />
                   
        </div>
    );
}

export default App;
