
import "../../style.css"
import { TechComp1,TechComp2,TechComp3} from "./LatestArtComp"

const LatestArticle = () => {
    return (
        <>
           
            <div className="flex">
                <div className="left-articles">
                    {/* <div id="tophr"></div> */}
                    <div><TechComp1 /></div>
                    <div><TechComp1 /></div>
                    <div><TechComp1 /></div>
                    <div><TechComp1 /></div>
                    <div><img src="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=400" id="latestartimg"/></div>  
                </div>
                
                <div className="flex-container">
                    <div id="lastadv">
                        <div id="advt">Advertisement</div>
                    </div>
                    <div className="right-articles">
                        {/* <div id="tophr"></div> */}
                        <div><TechComp2 /></div>
                        <div><TechComp3 /> </div>
                        <div><TechComp3 /> </div>
                        <div><TechComp3 /> </div>   
                    </div>
                    
                </div>
            </div>
            
        </>
    )
}

export default LatestArticle