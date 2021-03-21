import * as Styled from './styles';
import { TextComponent } from '../../atoms/TextComponent';
import { SectionContainer } from '../../atoms/SectionContainer';

export type FooterProps = {
  footerHtml: string;
};

export const Footer = ({ footerHtml }: FooterProps) => {
  return (
    <Styled.Container>
      <SectionContainer>
        <TextComponent>{footerHtml}</TextComponent>
      </SectionContainer>
    </Styled.Container>
  );
};
