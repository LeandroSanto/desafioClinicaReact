import styles from './styles.module.scss';

interface InputProps{
    label: string,
    type: string,
    name: string,
}

export const Input:React.FunctionComponent<InputProps> = ({ label, name, type }) => {
  return(
    <div className={styles.inputContainer}>
      <label id={name}>
        {label}
        <input type={type} id={name}/>
      </label>
    </div>
  )
}