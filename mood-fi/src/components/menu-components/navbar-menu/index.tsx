import { Group, Navbar, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MaterialIcon, NavBarFooter } from "../..";

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
        paddingLeft: minResolution ? "0px" : "20px",
      }}
    >
      <Group
        style={{
          width: "100%",
          height: "100%",

          display: "flex",
          alignItems: "center",
          justifyContent: minResolution ? "center" : "left",
        }}
        position={minResolution ? "center" : "left"}
      >
        <MaterialIcon iconName={item.icon} size={20} filled={item.isFilled} />
        {minResolution ? <></> : <span>{item.label}</span>}
      </Group>
    </Link>
  ));

  return (
    <Navbar
      withBorder={false}
      width={{ base: minResolution ? 100 : 300 }}
      className={[classes.root, classes[theme.colorScheme]].join(" ")}
    >
      <Group
        className={classes.navBarHeader}
        style={{
          justifyContent: minResolution ? "center" : "space-between",
        }}
        position={"apart"}
      >
        <img
          src={
            minResolution
              ? "../../../../public/Mood-Fi mini logo.svg"
              : "../../../../public/Mood-Fi logo.svg"
          }
          width={minResolution ? 70 : 80}
          height={minResolution ? 60 : 70}
          alt=""
        />
        {minResolution ? <></> : <p className={classes.version}>v2.0.0</p>}
      </Group>
      <Navbar.Section grow p="xs" mt="md">
        {links}
      </Navbar.Section>
      <Navbar.Section style={{ position: "relative" }}>
        <NavBarFooter />
      </Navbar.Section>
    </Navbar>
  );
}
