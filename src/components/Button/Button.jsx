import { Btn } from './Button.styled';
import { BtnWrapper } from './Button.styled'

const Button = ({ onLoadMore, isSearchPerformed }) => {
  return isSearchPerformed ? (
    <BtnWrapper>
      <Btn onClick={onLoadMore}>Load more</Btn>
    </BtnWrapper>
  ) : null;
    
};

export default Button;