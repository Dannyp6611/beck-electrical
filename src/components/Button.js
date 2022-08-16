import styled from 'styled-components';

const Button = ({ isSecondary, children }) => {
  return (
    <StyledButton className={isSecondary && 'secondary'}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  cursor: pointer;
  display: inline-block;
  text-transform: capitalize;
  display: flex;
  gap: 0.7rem;
  align-items: center;
  outline: none;
  background: var(--primary);
  padding: 12px 18px;
  color: var(--body-copy);
  border: 1px solid transparent;
  font-size: 2rem;
  font-weight: 500;
  transition: all 0.2s ease;

  @media only screen and (max-width: 768px) {
    font-size: 1.6rem;
  }

  &:hover {
    transform: scale(1.1);
  }

  &.secondary {
    background: transparent;
    color: #fff;
    border: none;
    border: 1px solid var(--primary);

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export default Button;
