import { ScrollArea, useMantineTheme } from "@mantine/core";
import { ReactNode, useState } from "react";
import { LivestreamGradient, PageTitle } from "../..";

import classes from "./index.module.scss";

type MainMenuPageProps = {
  pageTitle: string;
  pageDescription: string;

  bigScroll: number;
  smallScroll: number;

  children: ReactNode;
};

export function PageContentContainerLayout(props: MainMenuPageProps) {
  const theme = useMantineTheme();

  const [onScroll, setOnScroll] = useState(0);

  return (
    <>
      <ScrollArea
        className={[classes.root, classes[theme.colorScheme]].join(" ")}
        onScrollPositionChange={(value) => setOnScroll(value.y)}
        type="scroll"
        offsetScrollbars
      >
        <PageTitle
          pageName={props.pageTitle}
          pageDescription={props.pageDescription}
          bigScrollSize={props.bigScroll}
          smallScrollSize={props.smallScroll}
          onScroll={onScroll}
        />

        {props.children}
      </ScrollArea>
    </>
  );
}
