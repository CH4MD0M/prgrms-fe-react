import { useState } from 'react';

// CSS
import * as S from './Input.style';

interface InputProps {
  onAddItem: (destination: string) => void;
}

const Input = ({ onAddItem }: InputProps) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (input.trim()) {
      onAddItem(input.trim());
      setInput('');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.InputContainer>
        <S.Input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="가고싶은 여행지를 등록하세요"
        />
        <S.AddButton type="submit">ADD</S.AddButton>
      </S.InputContainer>
    </S.Form>
  );
};

export default Input;
