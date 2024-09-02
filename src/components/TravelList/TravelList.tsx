import { TbMessageReport, TbTrash } from 'react-icons/tb';

import { TravelItem } from '@/types/travelItem';

// CSS
import * as S from './TravelList.style';

interface TravelListProps {
  items: TravelItem[];
  onRemoveItem: (id: string) => void;
}

const TravelList = ({ items, onRemoveItem }: TravelListProps) => {
  return (
    <S.Container>
      <S.TotalContainer>
        <S.TotalText>Total</S.TotalText>
        <S.TotalCount>{items.length}</S.TotalCount>
      </S.TotalContainer>

      <S.Divider />

      {items.length === 0 ? (
        <S.EmptyStateContainer>
          <TbMessageReport size={50} />
          <S.EmptyStateText>등록된 여행지가 없습니다.</S.EmptyStateText>
        </S.EmptyStateContainer>
      ) : (
        <S.TravelListContainer>
          {items.map(item => (
            <S.ListItem key={item.id}>
              {item.destination}
              <S.DeleteButton onClick={() => onRemoveItem(item.id)}>
                <TbTrash size={20} />
              </S.DeleteButton>
            </S.ListItem>
          ))}
        </S.TravelListContainer>
      )}
    </S.Container>
  );
};

export default TravelList;
