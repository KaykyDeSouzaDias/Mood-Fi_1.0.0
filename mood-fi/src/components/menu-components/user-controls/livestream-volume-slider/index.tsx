import { Group, Slider, useMantineTheme } from "@mantine/core";
import { MaterialIcon } from "../../..";
import { useLivestream } from "../../../../hooks";
import { defineCustomTheme } from "../../../../theme";

import classes from "./index.module.scss";

export const LivestreamVolumeSlider = () => {
  const theme = useMantineTheme();
  const t = defineCustomTheme(theme);

  const { changeLivestreamVolume } = useLivestream();

  return (
    <Group className={[classes.root, classes[theme.colorScheme]].join(" ")}>
      <MaterialIcon
        sx={{ color: t.moodFiTheme.sliderFilled }}
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
        color={"orange"}
        onChange={(value) => changeLivestreamVolume(value / 100)}
        styles={(theme) => ({
          track: {
            "::before": {
              backgroundColor: t.moodFiTheme.sliderTrack,
            },
          },

          thumb: {
            transition: "opacity 150ms ease",
            backgroundColor: t.moodFiTheme.sliderFilled,
            borderColor: t.moodFiTheme.sliderFilled,
          },

          bar: {
            backgroundColor: t.moodFiTheme.sliderFilled,
          },

          dragging: {
            backgroundColor: t.moodFiTheme.sliderFilled,
            opacity: 1,
          },
        })}
      />
    </Group>
  );
};
