import { Box } from "components/global/Box";
import { Text } from "components/global/Text";
import { LinkTo } from "components/global/Global.styled";

export const SoundQuality = () => {
  return (
    <Box display="flex" mt="120px" gridGap="12px">
      <Text>
        Обирайте формат FLAC, WAV, ALAC або AIFF для кращої якості звуку.
      </Text>
      <LinkTo to="/">Більше про якість звуку</LinkTo>
    </Box>
  );
};
