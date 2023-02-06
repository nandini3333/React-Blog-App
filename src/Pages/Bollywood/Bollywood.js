import NavBar from "../../Utility/NavBar/NavBar"
import Logo from "../../Logo"
import "../style.css"
import { BollyComp1, BollyComp2,BollyComp3 } from "./BollyComp"

const Hollywood = () => {
    return (
        <>
            <Logo />
            <NavBar />
            <div id="hr" className="grid"></div>
            <div id="headings">
                <h1>Bollywood</h1>
                <h1 id="top">Top Posts</h1>
            </div>
            <div className="flex">
                <div className="left-articles">
                    {/* <div id="tophr"></div> */}
                    <div><BollyComp1 /></div>
                    <div><BollyComp1 /></div>
                    <div><BollyComp1 /></div>
                    <div><BollyComp1 /></div>
                    <div><BollyComp1 /></div>
                    <div><BollyComp1 /></div>
                    <div><BollyComp1 /></div>
                         
                </div>

                <div className="flex-container">

                    <div className="right-articles">
                        {/* <div id="tophr"></div> */}
                        <div><BollyComp2 /></div>
                        <div><BollyComp3 /> </div>
                        <div><BollyComp3 /> </div>
                        <div><BollyComp3 /> </div>
                        
                          
                    </div>
                    <div id="last">
                        <div id="advt">Advertisement</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hollywood