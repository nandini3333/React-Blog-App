import NavBar from "../../Utility/NavBar/NavBar"
import Logo from "../../Logo"
import "../style.css"
import { FitnessComp1, FitnessComp2,FitnessComp3 } from "./FitnessComp"

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
                    <div><FitnessComp1 /></div>
                    <div><FitnessComp1 /></div>
                    <div><FitnessComp1 /></div>
                    <div><FitnessComp1 /></div>
                    <div><FitnessComp1 /></div>
                    <div><FitnessComp1 /></div>
                    <div><FitnessComp1 /></div>
                          
                </div>

                <div className="flex-container">

                    <div className="right-articles">
                        {/* <div id="tophr"></div> */}
                        <div><FitnessComp2 /></div>
                        <div><FitnessComp3 /></div>
                        <div><FitnessComp3 /></div>
                        <div><FitnessComp3 /></div>
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