import { Title, useMantineTheme } from "@mantine/core";

import classes from "./index.module.scss";

interface PageTitleProps {
  pageName: string;
  pageDescription: string;
  onScroll: number;
  bigScrollSize: number;
  smallScrollSize: number;
}

export function PageTitle({
  onScroll,
  pageName,
  pageDescription,
  bigScrollSize,
  smallScrollSize,
}: PageTitleProps) {
  const theme = useMantineTheme();

  return (
    <div className={[classes.root, classes[theme.colorScheme]].join(" ")}>
      <Title
        style={{
          fontSize:
            onScroll >= 40 ? `${smallScrollSize}px` : `${bigScrollSize}px`,
        }}
        className={classes.title}
      >
        {pageName}
      </Title>
      <Title className={classes.subTitle}>{pageDescription}</Title>
    </div>
  );
}
