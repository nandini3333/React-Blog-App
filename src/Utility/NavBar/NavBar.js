import {Link} from 'react-router-dom'
import "./NavBar.css"

const NavBar = () => {
    return(
         <div id="NavBar">
            <Link to="/" className='link'>Home</Link>
            <Link to="/Bollywood" className='link'>Bollywood</Link>
            <Link to="/Technology" className='link'>Technology</Link>
            <Link to="/Hollywood" className='link'>Hollywood</Link>
            <Link to="/Fitness" className='link'>Fitness</Link>
            <Link to="/Food" className='link'>Food</Link>
         </div>
    )
}

export default NavBar