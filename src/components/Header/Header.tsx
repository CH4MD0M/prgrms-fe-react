import { FaRocket } from 'react-icons/fa';

// CSS
import * as S from './Header.style';

const Header = () => {
  return (
    <S.HeaderContainer>
      <FaRocket size={40} color="#60a5fa" />
      <S.TitleText>가자여행</S.TitleText>
    </S.HeaderContainer>
  );
};

export default Header;
