import NavBar from "../../Utility/NavBar/NavBar"
import Logo from "../../Logo"
import "../style.css"
import { FoodComp1, FoodComp2,FoodComp3 } from "./FoodComp"

const Hollywood = () => {
    return (
        <>
            <Logo />
            <NavBar />
            <div id="hr" className="grid"></div>
            <div id="headings">
                <h1>Fitness</h1>
                <h1 id="top">Top Posts</h1>
            </div>
            <div className="flex">
                <div className="left-articles">
                    {/* <div id="tophr"></div> */}
                    <div><FoodComp1 /></div>
                    <div><FoodComp1 /></div>
                    <div><FoodComp1 /></div>
                    <div><FoodComp1 /></div>
                    <div><FoodComp1 /></div>
                    <div><FoodComp1 /></div>
                    <div><FoodComp1 /></div>
                        
                </div>

                <div className="flex-container">

                    <div className="right-articles">
                        {/* <div id="tophr"></div> */}
                        <div><FoodComp2 /></div>
                        <div><FoodComp3 /></div>
                        <div><FoodComp3 /></div>
                        <div><FoodComp3 /></div>
                        
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