import './styles.css';

interface TextAreaProps{
    name: string;
    label: string;
}

export const TextArea:React.FunctionComponent<TextAreaProps> = ({name, label}) => {
    return(
        <div className="textAreaContainer">
            <label>{label}</label>
            <textarea id={name} />
        </div>
    )
}