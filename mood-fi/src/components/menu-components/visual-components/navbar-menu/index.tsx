import { Group, Navbar, NavLink, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { MaterialIcon, NavBarFooter } from "../../..";
import { defineCustomTheme } from "../../../../theme";

import classes from "./index.module.scss";

export function NavBarMenu() {
  const theme = useMantineTheme();
  const th = defineCustomTheme(theme);
  const { t } = useTranslation();

  const minWidthResolution = useMediaQuery("(max-width: 1000px)");
  const minHeightResolution = useMediaQuery("(max-height: 680px)");

  const [activeMenuLink, setActiveMenuLink] = useState(t("watchLiveButton"));

  const data = [
    {
      link: "/",
      icon: "online_prediction",
      isFilled: false,
      label: t("watchLiveButton"),
    },
    {
      link: "/discover",
      icon: "manage_search",
      isFilled: false,
      label: t("discoverButton"),
    },
    {
      link: "/references",
      icon: "temp_preferences_custom",
      isFilled: false,
      label: t("referencesButton"),
    },
    {
      link: "/settings",
      icon: "settings",
      isFilled: true,
      label: t("settingsButton"),
    },
  ];

  const links = data.map((item, index) => {
    return (
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
          justifyContent:
            minWidthResolution || minHeightResolution ? "center" : "left",
          paddingLeft:
            minWidthResolution || minHeightResolution ? "0px" : "20px",
        }}
      >
        <Group
          className={classes.linkLabel}
          style={{
            justifyContent:
              minWidthResolution || minHeightResolution ? "center" : "left",
          }}
          position={
            minWidthResolution || minHeightResolution ? "center" : "left"
          }
        >
          <MaterialIcon iconName={item.icon} size={20} filled={item.isFilled} />
          {minWidthResolution || minHeightResolution ? (
            <></>
          ) : (
            <span>{item.label}</span>
          )}
        </Group>
      </Link>
    );
  });

  return (
    <Navbar
      className={[classes.root, classes[theme.colorScheme]].join(" ")}
      withBorder={false}
      width={{ base: minWidthResolution || minHeightResolution ? 100 : 200 }}
      style={{ backgroundColor: th.moodFiTheme.menuBackground }}
    >
      <Group
        className={classes.navBarHeader}
        style={{
          justifyContent:
            minWidthResolution || minHeightResolution
              ? "center"
              : "space-between",
        }}
        position={"apart"}
      >
        <img
          src={
            minWidthResolution || minHeightResolution
              ? theme.colorScheme === "dark"
                ? "../../../../public/Mood-Fi mini logo.svg"
                : "../../../../../public/Mood-Fi mini logo light mode.svg"
              : theme.colorScheme === "dark"
              ? "../../../../public/Mood-Fi logo.svg"
              : "../../../../../public/Mood-Fi logo light mode.svg"
          }
          width={minWidthResolution || minHeightResolution ? 60 : 70}
          height={minWidthResolution || minHeightResolution ? 50 : 60}
          alt=""
        />
        {minWidthResolution || minHeightResolution ? (
          <></>
        ) : (
          <p
            className={classes.version}
            style={{ color: th.moodFiTheme.onBackgroundMenuText }}
          >
            v2.0.0
          </p>
        )}
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
