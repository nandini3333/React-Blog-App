import NavBar from "../../Utility/NavBar/NavBar"
import Logo from "../../Logo"
import Grid from "./topimages/gridimg"
import Latest from "./latest/latest"
import LatestArticle from "./Latest-article/Latest-article"
import LatestStories  from "./LatestStories/LatestStories"
import "./Home.css"

const Home = () => {
    return (
        <>
            <Logo />
            <NavBar />
            <div id="hr" className="grid"></div>
            <Grid />
            <h1> The Latest</h1>
            <div className="latest-flex">
                <Latest />
                <Latest />
                <Latest />
            </div>
            <h1> Latest Articles</h1>
            <div className="latest-Article">
                <LatestArticle />  
            </div>
            <LatestStories />
        </>
    )
}

export default Home