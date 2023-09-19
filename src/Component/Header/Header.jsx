import { NavLink, useNavigation } from "react-router-dom";
import './Header.css'

const Header = () => {
    
    return (
        <div>
            <h3>This Is Header Component</h3>
            <nav className="flex gap-4 justify-center text-rose-500">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/meals'>Meals</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
                
            </nav>
        </div>
    );
};

export default Header;