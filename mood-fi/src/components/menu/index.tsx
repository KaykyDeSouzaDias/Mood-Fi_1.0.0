import { useState } from "react";
import { Navbar, Group, Code, useMantineTheme, Box } from "@mantine/core";
import { Link } from "react-router-dom";
import { MaterialIcon } from "../material-icon";

import classes from "./index.module.scss";
import { useMediaQuery } from "@mantine/hooks";

const data = [
  {
    link: "/",
    icon: "online_prediction",
    isFilled: false,
    label: "Watch Live",
  },
  {
    link: "/discover",
    icon: "manage_search",
    isFilled: false,
    label: "Discover",
  },
  {
    link: "/references",
    icon: "temp_preferences_custom",
    isFilled: false,
    label: "References",
  },
  { link: "/settings", icon: "settings", isFilled: true, label: "Settings" },
];

export function LateralMenu() {
  const theme = useMantineTheme();

  const minResolution = useMediaQuery("(max-width: 1000px)");

  const links = data.map((item) => (
    <Link to={item.link} key={item.label} className={classes.menuLinks}>
      <Group position={minResolution ? "center" : "left"}>
        <MaterialIcon iconName={item.icon} size={20} filled={item.isFilled} />
        {minResolution ? <></> : <span>{item.label}</span>}
      </Group>
    </Link>
  ));

  return (
    <div>
      <Navbar
        p="xs"
        width={{ base: minResolution ? 100 : 300 }}
        className={[classes.root, classes[theme.colorScheme]].join(" ")}
      >
        <Navbar.Section>
          <Box className={classes.navBarHeader}>
            <Group position="apart">
              {/* <Logo colorScheme={colorScheme} /> */}
              <Code className={classes.version}>v3.1.2</Code>
            </Group>
          </Box>
        </Navbar.Section>
        <Navbar.Section grow mt="md">
          {links}
        </Navbar.Section>
        <Navbar.Section>{/* Footer with user */}</Navbar.Section>
      </Navbar>
    </div>
  );
}
