import { ScrollArea, useMantineTheme } from "@mantine/core";
import { ReactNode, useState } from "react";
import { LivestreamGradient, PageTitle } from "../..";

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
      <LivestreamGradient />
      <ScrollArea
        onScrollPositionChange={(value) => setOnScroll(value.y)}
        type="scroll"
        offsetScrollbars
        style={{
          position: "sticky",
          zIndex: 2,
        }}
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
