import { useMemo, useState } from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';

import { TravelItem } from '@/types/travelItem';
import { getStorageItem, setStorageItem, StorageTypeValues } from '@/utils/storage';

// CSS
import GlobalStyle from '@/styles/globalStyle';

// Components
import Header from '@/components/Header';
import Input from '@/components/Input';
import TravelList from '@/components/TravelList';

const App = () => {
  const [travelItems, setTravelItems] = useState<TravelItem[]>(() => {
    return getStorageItem(StorageTypeValues.LOCAL, 'travelList');
  });

  const addItem = (destination: string) => {
    setTravelItems(prevItems => {
      const newItem = { id: nanoid(2), destination };
      const newItems = [...prevItems, newItem];
      setStorageItem(StorageTypeValues.LOCAL, 'travelList', newItems);
      return newItems;
    });
  };

  const removeItem = (id: string) => {
    setTravelItems(prevItems => {
      const newItems = prevItems.filter(item => item.id !== id);
      setStorageItem(StorageTypeValues.LOCAL, 'travelList', newItems);
      return newItems;
    });
  };

  const memoizedTravelItems = useMemo(() => travelItems, [travelItems]);

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Input onAddItem={addItem} />
        <TravelList items={memoizedTravelItems} onRemoveItem={removeItem} />
      </Container>
    </>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  margin: 0 auto;
  color: white;
  max-width: 60rem;
  min-height: 100vh;
`;
