import { Btn } from './Button.styled';

const Button = ({ onLoadMore, isSearchPerformed }) => {
  return isSearchPerformed ? (
      <Btn onClick={onLoadMore}>Load more</Btn>
  ) : null;
    
};

export default Button;