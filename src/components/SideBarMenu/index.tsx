import React from 'react';
import * as MDIcons from 'react-icons/md';
import * as FAIcons from 'react-icons/fa';
import {Link}from 'react-router-dom';

import './styles.css'

export function SideBar(){
  return(
    <div className="sidebar">
      <nav>
        
        
        <Link to='/'id='link'>
          <div className="linkMenu">
            <MDIcons.MdHome  size={30}/>
            <label>Home</label>
          </div>
        </Link>
        <Link to='/' id='link'>
          <div className="linkMenu">
            <MDIcons.MdSearch size={30}/>
            <label>Buscar Paciente</label>
          </div>
        </Link>
        <Link to='/'id='link'>
          <div className="linkMenu">
            <FAIcons.FaUserPlus size={30}/>
            <label>Novo Paciente</label>
          </div>
        </Link>
        <Link to='/'id='link'>
          <div className="linkMenu">
            <FAIcons.FaUserMd size={30}/>
            <label>Agenda Médica</label>
          </div>
        </Link>
        
      </nav>
    </div>
  )
}