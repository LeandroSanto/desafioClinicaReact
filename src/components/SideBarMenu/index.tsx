import React from 'react';
import * as MDIcons from 'react-icons/md';
import * as FAIcons from 'react-icons/fa';
import {Link}from 'react-router-dom';

import styles from './styles.module.scss';

export function SideBar(){
  return(
    <div className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <h1>Clinica App</h1>
      </div>
      <nav className={styles.sidebarNav}>      
        <Link to='/'id={styles.link}>
          <div className={styles.linkMenu}>
            <MDIcons.MdHome  size={25}/>
            <label>Home</label>
          </div>
        </Link>
        <Link to='/searchpatient' id={styles.link}>
          <div className={styles.linkMenu}>
            <MDIcons.MdSearch size={25}/>
            <label>Buscar Paciente</label>
          </div>
        </Link>
        <Link to='/newpatient'id={styles.link}>
          <div className={styles.linkMenu}>
            <FAIcons.FaUserPlus size={25}/>
            <label>Novo Paciente</label>
          </div>
        </Link>
        <Link to='/medicagenda'id={styles.link}>
          <div className={styles.linkMenu}>
            <FAIcons.FaUserMd size={25}/>
            <label>Agenda Médica</label>
          </div>
        </Link>
        
      </nav>
    </div>
  )
}