import React from 'react';
import * as MDIcons from 'react-icons/md';
import * as FAIcons from 'react-icons/fa';
import {Link}from 'react-router-dom';

import styles from './styles.module.scss';

export function SideBar(){
  return(
    <div className={styles.sidebar}>
      <nav>
        
        
        <Link to='/'id={styles.link}>
          <div className={styles.linkMenu}>
            <MDIcons.MdHome  size={30}/>
            <label>Home</label>
          </div>
        </Link>
        <Link to='/' id={styles.link}>
          <div className={styles.linkMenu}>
            <MDIcons.MdSearch size={30}/>
            <label>Buscar Paciente</label>
          </div>
        </Link>
        <Link to='/newpatient'id={styles.link}>
          <div className={styles.linkMenu}>
            <FAIcons.FaUserPlus size={30}/>
            <label>Novo Paciente</label>
          </div>
        </Link>
        <Link to='/medicagenda'id={styles.link}>
          <div className={styles.linkMenu}>
            <FAIcons.FaUserMd size={30}/>
            <label>Agenda Médica</label>
          </div>
        </Link>
        
      </nav>
    </div>
  )
}