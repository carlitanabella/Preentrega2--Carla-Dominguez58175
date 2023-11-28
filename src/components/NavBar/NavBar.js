import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"
import Logo from "../Logotipo/Logo"
import Breadcrumbs from '@mui/material/Breadcrumbs';

import { NavLink, Link, link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav style={{backgroundColor: '#F0E8D8', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
            <h1 style={{justifyContent: 'araund', marginRight: '200px'}} >
                <Link to='/'>
                <Logo />
                </Link>
            </h1>
           
            <ul style={{display: 'flex', justifyContent: 'center', alignContent: 'center', marginRight: '200px'}}>
            <Breadcrumbs separator="/"  maxItems={2} aria-label="breadcrumb">
                <NavLink  to={`/category/muebles`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} underline="hover" color="inherit" href="#" style={{ listStyleType: "none" }}>Muebles</NavLink>
                <NavLink to={`/category/blanco`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}   underline="hover" color="inherit" href="#" style={{ listStyleType: "none" }}>Linea Blanco</NavLink>
                <NavLink to={`/category/alfombras`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}   underline="hover" color="inherit" href="#" style={{ listStyleType: "none" }}>Alfombras</NavLink>
                <NavLink to={`/category/Almohadones`}  className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}  underline="hover" color="inherit" href="#" style={{ listStyleType: "none" }}>Almohadones</NavLink>
            </Breadcrumbs>

            
            </ul>
            <h1 style={{justifyContent: 'araund', marginLeft: '100px'}}>
                <CartWidget />
            </h1>
            
            
        </nav>
    )
}

export default NavBar