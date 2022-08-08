import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import { Footer } from '../organisms/Footer';
import { HeaderMenuColored } from '../organisms/HeaderMenuColored';

export const HeaderFooterTemplate = (props: { children: ReactElement }) => {
  return (
    <div>
      <HeaderMenuColored links={[]} />
      {props.children}
      <Footer links={[]} />
    </div>
  )
}