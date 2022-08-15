import { ReactElement } from "react";
import { Footer } from "../organisms/Footer";
import { GeneralHeader } from "../organisms/GeneralHeader";

export const HeaderFooterTemplate = (props: { children: ReactElement }) => {
  return (
    <div>
      <GeneralHeader links={[]} />
      {props.children}
      <Footer links={[]} />
    </div>
  );
};

//タイトルのバリエーションをいじれない分カスタマイズ性に欠ける？
//それに対応した場合propsのバケツリレーが発生するのでuseContext塔で対応？