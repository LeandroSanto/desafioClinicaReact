import styles from './styles.module.scss';

interface TextAreaProps{
    name: string;
    label: string;
}

export const TextArea:React.FunctionComponent<TextAreaProps> = ({name, label}) => {
    return(
        <div className={styles.textAreaContainer}>
            <label>{label}</label>
            <textarea id={name} />
        </div>
    )
}