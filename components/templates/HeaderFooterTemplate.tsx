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
