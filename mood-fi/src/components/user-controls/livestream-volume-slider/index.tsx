import { Group, Slider, useMantineTheme } from "@mantine/core";
import { MaterialIcon } from "../..";
import { useLivestream } from "../../../hooks";
import { defineCustomTheme } from "../../../theme";

import classes from "./index.module.scss";

export const LivestreamVolumeSlider = () => {
  const theme = useMantineTheme();
  const t = defineCustomTheme(theme);

  const { changeLivestreamVolume } = useLivestream();

  return (
    <Group className={[classes.root, classes[theme.colorScheme]].join(" ")}>
      <MaterialIcon
        className={classes.iconSoundControl}
        iconName={"volume_up"}
        size={20}
      />
      <Slider
        className={classes.sliderSoundControl}
        thumbSize={10}
        size="xs"
        radius="md"
        defaultValue={20}
        min={0}
        max={100}
        onChange={(value) => changeLivestreamVolume(value / 100)}
        styles={(theme) => ({
          thumb: {
            transition: "opacity 150ms ease",
            backgroundColor: t.colors.deepYellow.p80,
            borderColor: t.colors.deepYellow.p80,
          },

          bar: {
            backgroundColor: t.colors.deepYellow.p80,
          },

          dragging: {
            backgroundColor: t.colors.deepYellow.p80,
            opacity: 1,
          },
        })}
      />
    </Group>
  );
};
