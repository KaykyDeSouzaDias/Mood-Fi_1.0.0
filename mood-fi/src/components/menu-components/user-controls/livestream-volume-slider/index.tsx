import { Group, Slider, useMantineTheme } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { MaterialIcon } from "../../..";
import { useLivestream } from "../../../../hooks";
import { defineCustomTheme } from "../../../../theme";

import classes from "./index.module.scss";

export const LivestreamVolumeSlider = () => {
  const theme = useMantineTheme();
  const t = defineCustomTheme(theme);

  const { changeLivestreamVolume } = useLivestream();
  const [livestreamVolumeStorage, setLivestreamVolumeStorage] =
    useLocalStorage<number>({
      key: "LivestreamVolume",
      defaultValue: 20,
    });

  return (
    <Group className={[classes.root, classes[theme.colorScheme]].join(" ")}>
      <MaterialIcon
        sx={{ color: t.moodFiTheme.sliderFilled }}
        className={classes.iconSoundControl}
        iconName={
          livestreamVolumeStorage * 100 > 25
            ? "volume_up"
            : livestreamVolumeStorage * 100 <= 25 &&
              livestreamVolumeStorage * 100 > 0
            ? "volume_down"
            : "volume_off"
        }
        size={20}
      />

      <Slider
        className={classes.sliderSoundControl}
        thumbSize={10}
        size="xs"
        radius="md"
        value={Math.round(livestreamVolumeStorage * 100)}
        min={0}
        max={100}
        onChange={(value) => {
          changeLivestreamVolume(value / 100);
          setLivestreamVolumeStorage(value / 100);
        }}
        styles={(theme) => ({
          track: {
            "::before": {
              backgroundColor: t.moodFiTheme.onBackgroundMenu,
            },
          },

          thumb: {
            transition: "opacity 150ms ease",
            backgroundColor: t.moodFiTheme.onBackgroundMenuText,
            borderColor: t.moodFiTheme.onBackgroundMenuText,
          },

          bar: {
            backgroundColor: t.moodFiTheme.onBackgroundMenuText,
          },

          dragging: {
            backgroundColor: t.moodFiTheme.onBackgroundMenuText,
            opacity: 1,
          },
        })}
      />
    </Group>
  );
};
