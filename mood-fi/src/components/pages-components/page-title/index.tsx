import { Title, useMantineTheme } from "@mantine/core";

import classes from "./index.module.scss";

interface PageTitleProps {
  pageName: string;
  pageDescription: string;
  onScroll: number;
}

export function PageTitle({
  onScroll,
  pageName,
  pageDescription,
}: PageTitleProps) {
  const theme = useMantineTheme();

  return (
    <div className={[classes.root, classes[theme.colorScheme]].join(" ")}>
      <Title
        style={{
          fontSize: onScroll >= 40 ? "90px" : "120px",
        }}
        className={classes.title}
      >
        {pageName}
      </Title>
      <Title className={classes.subTitle}>{pageDescription}</Title>
    </div>
  );
}
