import { Box } from "components/global/Box";
import { ButtonLink } from "components/global/button/ButtonLink";
import { Container } from "components/global/Container";
import { Text } from "components/global/Text";
import React, { useState } from "react";
import { Progress } from "../Progress";
import { Links, Section } from "./NewPushTrack.style";

export const NewPushTrack = () => {
  const [progress] = useState(50);
  return (
    <Section>
      <Container>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          backgroundColor="var(--background)"
          p="36px 96px 32px 61px"
          border="2px solid var(--gradient)"
          borderRadius="24px"
        >
          <Box width="686px">
            <Text mb={24}>Використано 50% безкоштовних завантажень</Text>
            <Progress value={progress} />

            <Box display="flex" mt="12px">
              <Links to="/">Оберіть тариф,</Links>
              <Text color="border">щоб завантажувати більше.</Text>
            </Box>
            {/* <p> </p> */}
          </Box>

          <ButtonLink link="/tariffs">Обрати тариф</ButtonLink>
        </Box>
      </Container>
    </Section>
  );
};
