import styles from './styles.module.scss';

interface ButtonProps{
  name: string;
  label: string;
}

export const Button:React.FunctionComponent<ButtonProps> = ({name, label}) => {
  return(
    <div className={styles.buttonContainer}>
      <button id={name}><label>{label}</label></button>
    </div>      
  )
}