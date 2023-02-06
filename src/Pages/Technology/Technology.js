import NavBar from "../../Utility/NavBar/NavBar"
import Logo from "../../Logo"
import "../style.css"
import { TechComp1,TechComp2,TechComp3} from "./TechComp"

const Technology = () => {
    return (
        <>
            <Logo />
            <NavBar />
            <div id="hr" className="grid"></div>
            <div id="headings">
                <h1>Technology</h1>
                <h1 id="top">Top Posts</h1>
            </div>
            <div className="flex">
                <div className="left-articles">
                    {/* <div id="tophr"></div> */}
                    <div><TechComp1 /></div>
                    <div><TechComp1 /></div>
                    <div><TechComp1 /></div>
                    <div><TechComp1 /></div>
                    <div><TechComp1 /></div>
                    <div><TechComp1 /></div>
                    <div><TechComp1 /></div>
                    
                </div>

                <div className="flex-container">

                    <div className="right-articles">
                        {/* <div id="tophr"></div> */}
                        <div><TechComp2 /></div>
                        <div><TechComp3 /> </div>
                        <div><TechComp3 /> </div>
                        <div><TechComp3 /> </div>   
                    </div>
                    <div id="last">
                        <div id="advt">Advertisement</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Technology