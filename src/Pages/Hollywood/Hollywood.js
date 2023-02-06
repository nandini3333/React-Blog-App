import NavBar from "../../Utility/NavBar/NavBar"
import Logo from "../../Logo"
import "../style.css"
import { HollyComp1, HollyComp2,HollyComp3 } from "./HollyComp"

const Hollywood = () => {
    return (
        <>
            <Logo />
            <NavBar />
            <div id="hr" className="grid"></div>
            <div id="headings">
                <h1>Hollywood</h1>
                <h1 id="top">Top Posts</h1>
            </div>
            <div className="flex">
                <div className="left-articles">
                    {/* <div id="tophr"></div> */}
                    <div><HollyComp1 /></div>
                    <div><HollyComp1 /></div>
                    <div><HollyComp1 /></div>
                    <div><HollyComp1 /></div>
                    <div><HollyComp1 /></div>
                    <div><HollyComp1 /></div>
                    <div><HollyComp1 /></div>
                      
                </div>

                <div className="flex-container">

                    <div className="right-articles">
                        {/* <div id="tophr"></div> */}
                        <div><HollyComp2 /></div>
                        <div><HollyComp3 /> </div>
                        <div><HollyComp3 /> </div>
                        <div><HollyComp3 /> </div>
                          
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