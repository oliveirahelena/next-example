import * as Styled from './styles';
import { Menu } from '../../components/organisms/Menu';
import { Footer } from '../../components/organisms/Footer';
import { GoTop } from '../../components/atoms/GoTop';
import { MenuLinkProps } from '../../components/atoms/MenuLink';
import { LogoLinkProps } from '../../components/molecules/LogoLink';

export type BaseProps = {
  children: React.ReactNode;
  links: MenuLinkProps[];
  footerHtml: string;
  logoData: LogoLinkProps;
};

export const Base = ({ links, logoData, footerHtml, children }: BaseProps) => {
  return (
    <>
      <Menu links={links} logoData={logoData} />
      <Styled.Container>
        {children}
        <Footer footerHtml={footerHtml} />
      </Styled.Container>
      <GoTop />
    </>
  );
};
