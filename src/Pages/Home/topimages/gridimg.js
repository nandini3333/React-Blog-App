
import forestimg from "../Images/forestimg.jpeg"
import himalayimg from "../Images/himalayimg.jpeg"
import snowimg from "../Images/snowimg.jpg"
import "./gridimg.css"

const Grid = () => {
    return(
        <>
        <div id="grid">
            <div className="item1"><img src={himalayimg} id="forest" alt="scenery image"/></div>
            <div className ="item2"><img src={forestimg}  alt="scenery image" className="items"/></div>
            <div className ="item3"><img src={snowimg} alt="scenery image" className="items"/></div>
         </div>
        </>
    )
}

export default Grid