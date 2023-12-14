import styled from 'styled-components';

export const BtnWrapper = styled.div`
  position: absolute; 
  bottom: 20px; 
  left: 50%; 
  transform: translateX(-50%);
  z-index: -1;
`

export const Btn = styled.button`
  margin-left: auto;
  margin-right: auto;
  padding: 8px 16px;
  border-radius: 2px;
  background-color: #4682B4;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: flex;
  justify-content: center;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover {
    background-color: #2460bf;
  }
`;
