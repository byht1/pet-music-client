import { Box } from "components/global/Box";
import { Button } from "components/global/Button";
import { Container } from "components/global/Container";
import { Number, Section, Span, Text, Title } from "./Hero.styled";

export const Hero = () => {
  return (
    <Section>
      <Container>
        <Box display="grid" justifyContent="flex-start">
          <Box
            bg="var(--form-background)"
            p="120px 60px"
            m="auto 0"
            borderRadius="32px"
          >
            <Title>
              <Span>Понад</Span>
              <Number>100000</Number> пісень
            </Title>
            <Text>
              Музика з усіх куточків світу на різні смаки! Окрім руzні ;)
            </Text>
            <Button type="button" w="198px">
              Слухати
            </Button>
          </Box>
        </Box>
      </Container>
    </Section>
  );
};
