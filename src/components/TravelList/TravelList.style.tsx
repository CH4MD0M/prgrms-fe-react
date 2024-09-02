import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const TotalContainer = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  font-size: 2.5rem;
  cursor: default;
`;

export const TotalText = styled.span`
  margin-right: 0.5rem;
  color: #4299e1;
`;

export const TotalCount = styled.span`
  padding: 0.25rem 0.5rem;
  background-color: #2d3748;
  color: white;
  border-radius: 9999px;
`;

export const Divider = styled.hr`
  margin: 2rem 0 4rem;
  border: none;
  border-top: 1px solid #4a5568;
`;

export const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  color: #718096;
`;

export const EmptyStateText = styled.p`
  font-size: 1.5rem;
  text-align: center;
`;

export const TravelListContainer = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1rem;
  color: white;
  font-size: 1.5rem;
  border-radius: 6px;
  background-color: #2d3748;
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  color: #718096;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #e53e3e;
  }
`;
