import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  margin-bottom: 5rem;
  font-size: 3.5rem;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  flex-grow: 1;
  margin-right: 1rem;
  padding: 1rem;
  background-color: #2d3748;
  color: white;
  border: 1px solid #4a5568;
  border-radius: 6px;
`;

export const AddButton = styled.button`
  padding: 1rem 2rem;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2563eb;
  }
`;
