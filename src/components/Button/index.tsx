import {ButtonContainer} from './styles';
import { IButtonProps } from './types';

const Button = ({title, onClick, isValid}: IButtonProps) =>{
    console.log(!isValid)
    return <ButtonContainer disabled={!isValid} onClick={onClick}>{title}</ButtonContainer>
}

export default Button;