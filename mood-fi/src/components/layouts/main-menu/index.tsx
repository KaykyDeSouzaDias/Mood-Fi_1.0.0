import { ReactNode } from "react";
import { Menu } from "../..";

type MainMenuPageProps = {
  children: ReactNode;
};

export function MainMenuLayout(props: MainMenuPageProps) {
  return (
    <>
      <Menu children={props.children} />
    </>
  );
}
