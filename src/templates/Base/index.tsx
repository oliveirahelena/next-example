import { CloneMe } from '../../components/organisms/CloneMe';
import * as Styled from './styles';

export type BaseProps = {
  children: React.ReactNode;
};

export function Base({ children }: BaseProps) {
  return (
    <Styled.Container>
      <CloneMe title="Clone-me" />
      {children}
    </Styled.Container>
  );
}
