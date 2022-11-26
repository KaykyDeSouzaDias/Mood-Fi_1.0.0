import { Group, Navbar, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MaterialIcon } from "../..";

import classes from "./index.module.scss";

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

export function NavBarMenu() {
  const theme = useMantineTheme();
  const minResolution = useMediaQuery("(max-width: 1000px)");

  const [activeMenuLink, setActiveMenuLink] = useState("Watch Live");

  const links = data.map((item) => (
    <Link
      to={item.link}
      key={item.label}
      onClick={() => setActiveMenuLink(item.label)}
      className={
        activeMenuLink === item.label
          ? classes.activeMenuLinks
          : classes.menuLinks
      }
      style={{
        justifyContent: minResolution ? "center" : "left",
      }}
    >
      <Group position={minResolution ? "center" : "left"}>
        <MaterialIcon iconName={item.icon} size={20} filled={item.isFilled} />
        {minResolution ? <></> : <span>{item.label}</span>}
      </Group>
    </Link>
  ));

  return (
    <Navbar
      p="xs"
      withBorder={false}
      width={{ base: minResolution ? 100 : 300 }}
      className={[classes.root, classes[theme.colorScheme]].join(" ")}
    >
      <Navbar.Section grow mt="md">
        {links}
      </Navbar.Section>
      <Navbar.Section>{/* Footer with user */}</Navbar.Section>
    </Navbar>
  );
}
