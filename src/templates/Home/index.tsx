import { CloneMe } from '../../components/organisms/CloneMe';
import * as Styled from './styles';

export type HomeProps = {
  children: React.ReactNode;
};

export function Home({ children }: HomeProps) {
  return (
    <Styled.Wrapper>
      <CloneMe title="Clone-me" />
      {children}
    </Styled.Wrapper>
  );
}
