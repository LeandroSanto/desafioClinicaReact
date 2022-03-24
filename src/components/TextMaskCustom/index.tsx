import MaskedInput from 'react-text-mask';
import PropTypes from 'prop-types';

export interface TextMaskCustomProps {
    inputRef: (ref: HTMLInputElement | null) => void;
  }
  
export function TextMaskCustom(props: TextMaskCustomProps) {
    const { inputRef, ...other } = props;

return(
    <MaskedInput
    {...other}
    ref={ref => {
    inputRef(ref ? ref.inputElement : null);
    }}  
    mask={[ /[1-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
    showMask
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
} as any;
