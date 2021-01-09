import React, { useState } from 'react';
import './Sidebar.css';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';

function Sidebar(){
    const [active, setActive] = useState(false);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);
    const [active4, setActive4] = useState(false);
    const [active5, setActive5] = useState(false);

    return(
        <div className='container'>
            <div className='logo-container'>
                <img src={logo} className='logo'/>
            </div>
            <div className='routes'>
                <Link to='/Home' className='link'>
                <div className={active ? 'route-name-active' : 'route-name'}>
                    <div className='route-icons'>
                        <MaterialIcon icon="fact_check" color={active ? '#FFF' : '#C7C7C7'} size={30}/>
                    </div>
                        <p className={active ? 'active-text' : 'inactive-text'}>Visão Geral</p>
                </div>
                </Link>
                
                <Link to='/' className='link'>
                <div className={active2 ? 'route-name-active' : 'route-name'}>
                    <div className='route-icons'>
                        <MaterialIcon icon="shopping_cart" color={active2 ? '#FFF' : '#C7C7C7'} size={30}/>
                    </div>
                    <p className={active2 ? 'active-text' : 'inactive-text'}>Estoque</p>
                </div>
                </Link>
                
                <Link to='/' className='link'>
                <div className={active3 ? 'route-name-active' : 'route-name'}>
                    <div className='route-icons'>
                        <MaterialIcon icon="add_shopping_cart" color={active3 ? '#FFF' : '#C7C7C7'} size={30}/>
                    </div>
                    <p className={active3 ? 'active-text' : 'inactive-text'}>Vendas</p>
                </div>
                </Link>
                
                <Link to='/' className='link'>
                <div className={active4 ? 'route-name-active' : 'route-name'}>
                    <div className='route-icons'>
                        <MaterialIcon icon="account_balance_wallet" color={active4 ? '#FFF' : '#C7C7C7'} size={30}/>
                    </div>
                    <p className={active4 ? 'active-text' : 'inactive-text'}>Vender</p>
                </div>
                </Link>
                
                <Link to='/' className='link'>
                <div className={active5 ? 'route-name-active' : 'route-name'}>
                    <div className='route-icons'>
                        <MaterialIcon icon="chat_bubble" color={active5 ? '#FFF' : '#C7C7C7'} size={30}/>
                    </div>
                    <p className={active5 ? 'active-text' : 'inactive-text'}>Chat</p>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar;