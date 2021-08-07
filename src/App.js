// import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
import Help from "./Components/Help/Help";
import Helmet from "react-helmet";
import { NavLink } from "react-router-dom";
import Places from "./Components/Places/Places";
import Social from "./Components/Social/Social";
import ListenOnStreaming from "./Components/ListenOnStreaming/ListenOnStreaming";
import YoutubeVideos from "./Components/YoutubeVideos/YoutubeVideos";
import { CSSTransition } from "react-transition-group";

function App() {
	return (
        <div className="App">
            <Helmet>
                <title>MADNOTBAD</title>
            </Helmet>
            
            <div className="container">
                <div className="logo-wrap">
                    <h2 className="logo-h2">MADNOTBAD</h2>
                    <picture>
                        <source
                            srcSet="img/cross-shadow.svg"
                            type="image/webp"
                        />
                        <img
                            className="big-logo"
                            src="img/cross-shadow.svg"
                            alt="logo"
                        />
                    </picture>

                    <h2 className="logo-h2">MADNOTBAD</h2>
                </div>

                <div id="app">
                    <Social />
                    <ListenOnStreaming />
                    <YoutubeVideos />
                    <div className="digital-wrap">
                        <picture>
                            <source
                                srcSet="img/cross-shadow.svg"
                                type="image/webp"
                            />
                            <img
                                className="min-logo"
                                src="img/cross-shadow.svg"
                                alt="logo"
                            />
                        </picture>
                        <NavLink className="digital-link" to="/help/">
                            Help for MADNOTBAD
                        </NavLink>
                        <picture>
                            <source
                                srcSet="img/cross-shadow.svg"
                                type="image/webp"
                            />
                            <img
                                className="min-logo"
                                src="img/cross-shadow.svg"
                                alt="logo"
                            />
                        </picture>
                    </div>

                    <footer>
                        <Places />
                    </footer>
                </div>
            </div>

            {/* <Route
                path="/help"
                render={() => {
                    <CSSTransition
                        // in={match != null}
                        timeout={300}
                        classNames="outModal"
                        unmountOnExit
                    >
                        <Help title="Help for MADNOTBAD" />
                    </CSSTransition>;
                }}
            /> */}
            <Route path="/help">
                {({ match }) => (
                    <CSSTransition
                        in={match != null}
                        timeout={300}
                        classNames="page"
                        unmountOnExit
                    >
                        <div className="page">
                            <Help title="Help for MADNOTBAD" />
                        </div>
                    </CSSTransition>
                )}
            </Route>
            {/* <Route path={`${url}/help`}
			  children={({match}) =>{
				  return (
					<Dialog onClose={history.goBaack} open={Boolen{match}}>
					  <Help help={post.help}/>
					</Dialog>
				  );
				}}
			  /> */}
        </div>
    );
}

export default App;
