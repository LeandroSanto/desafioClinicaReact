import { Button } from "../Button";

import styles from './styles.module.scss';

interface HeaderProps{
    title: string,
    os?: number,
    user: string,
}

export const Header:React.FunctionComponent<HeaderProps> = ({title, os, user})=>{
  return(
    <div className={styles.headerContainer}>
      <div id={styles.titleBox}>
        <h1>{title} {os}</h1> 
      </div>
      <div id={styles.userBox}>
        {user}
        <Button name='logout' label='Sair da seção' />
      </div>
    </div>
  )
}