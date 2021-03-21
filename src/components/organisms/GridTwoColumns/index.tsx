import * as Styled from './styles';
import { SectionBackground } from '../../molecules/SectionBackground';
import { Heading } from '../../atoms/Heading';
import { TextComponent } from '../../atoms/TextComponent';

export type GridTwoColumnsProps = {
  title: string;
  text: string;
  srcImg: string;
  background?: boolean;
  sectionId?: string;
  component?: string;
};

export const GridTwoColumns = ({
  title,
  text,
  srcImg,
  background = false,
  sectionId = '',
}: GridTwoColumnsProps) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Styled.TextContainer>
          <Heading uppercase colorDark={!background} as="h2">
            {title}
          </Heading>
          <TextComponent>{text}</TextComponent>
        </Styled.TextContainer>
        <Styled.ImageContainer>
          <Styled.Image src={srcImg} alt={title} />
        </Styled.ImageContainer>
      </Styled.Container>
    </SectionBackground>
  );
};
