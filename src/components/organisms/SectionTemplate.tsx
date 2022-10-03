import { Title } from "@mantine/core";
import { ReactElement } from "react";
import { PrimaryButton } from "../atoms/PrimaryButton";

export const SectionTemplate = (props: { children: ReactElement }) => {
  return (
    <div>
      <Title order={2}></Title>
      {props.children}
      <PrimaryButton value={""} />
    </div>
  );
};
