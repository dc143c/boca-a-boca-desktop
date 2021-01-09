import React, { useState } from 'react';
import './Searchbar.css';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import { Link } from 'react-router-dom';

function Searchbar(){
    return(
        <div className='search-container'>
            <div className='search-margin'>
            <MaterialIcon icon="search" color='#C7C7C7' size={30}/>
            </div>
            <input className='search-input' placeholder='Pesquisar'/>
            <div className='profile'>
            <div className='profilepic'>
                    <p className='firstname'>R</p>
                </div>
                <div className='dropdown'>
                    <button className='search-margin btn-profile'>
                        <MaterialIcon icon="arrow_drop_down" color='#FF35AC' size={24}/>
                    </button>
                    <div className="dropdown-content">
                        <div className='user-info'>
                            <div className='profilepic margintl'>
                                <p className='firstname'>R</p>
                            </div>
                            <div className='block'>
                                <p className='p-dropdown'>Rosana Terra</p>
                                <p className='p-dropdown'>Boca a Boca Makeup</p>
                            </div>
                        </div>
                        <Link className='dropdown-link' to='/'>
                            <div className='inline'>
                            <div className='marginctrl'>
                            <MaterialIcon icon="person" color='#C7C7C7' size={20}/>
                            </div>
                            <p className='p-dropdown'>Trocar de vendedor</p>
                            </div>
                        </Link>
                        <Link className='dropdown-link' to='/'>
                            <div className='inline'>
                            <div className='marginctrl'>
                            <MaterialIcon icon="gavel" color='#C7C7C7' size={20}/>
                            </div>
                            <p className='p-dropdown'>Encerrar dia</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Searchbar;