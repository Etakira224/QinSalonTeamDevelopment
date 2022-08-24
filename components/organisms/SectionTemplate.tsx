import { ReactElement } from "react";
import { PrimaryButton } from "../atoms/PrimaryButton";
import { TitleText } from "../TitleText";

export const SectionTemplate = (props: { children: ReactElement }) => {
  return (
    <div>
      <TitleText />
      {props.children}
      <PrimaryButton value={""} />
    </div>
  );
};
