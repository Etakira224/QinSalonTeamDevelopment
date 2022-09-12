import { ReactElement } from "react";
import { Footer } from "../organisms/Footer";
import { Header } from "../organisms/Header";

type Props = {
  children: ReactElement
 }

export const Layout: React.FC<Props> = ({children}) => {
  return (
    <div>
      <Header links={[]} />
      {Props.children}
      <Footer links={[]} />
    </div>
  );
};

//タイトルのバリエーションをいじれない分カスタマイズ性に欠ける？
//それに対応した場合propsのバケツリレーが発生するのでuseContext塔で対応？
