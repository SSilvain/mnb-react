// import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
import Help from "./Components/Help/Help";
import { NavLink } from "react-router-dom";
import Places from "./Components/Places/Places";
import Social from "./Components/Social/Social";
import ListenOnStreaming from "./Components/ListenOnStreaming/ListenOnStreaming";
import YoutubeVideos from "./Components/YoutubeVideos/YoutubeVideos";

function App() {
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
					<Social />
					<ListenOnStreaming />
					<YoutubeVideos />
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
						<NavLink className="digital-link" to="/help/">
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
						<Places />
					</footer>
				</div>
			</div>

			<Route
				path="/help"
				render={() => <Help title="Help for MADNOTBAD" />}
			/>
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
