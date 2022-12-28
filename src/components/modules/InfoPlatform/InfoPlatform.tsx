import { Box } from "components/global/Box";
import { Container } from "components/global/Container";
import { LinkTo } from "components/global/Global.styled";
import { Text } from "components/global/Text";
import { List } from "./InfoPlatform.styled";

export const InfoPlatform = () => {
  return (
    <section>
      <Container>
        <Box mt="60px" pb="120px">
          <List>
            <li>
              <Text family="roboto" size={14} lh={20} color="border">
                Підтримувані типи та розміри файлів
              </Text>
            </li>
            <li>
              <Text family="roboto" size={14} lh={20} color="border">
                •
              </Text>
            </li>
            <li>
              <Text family="roboto" size={14} lh={20} color="border">
                Поширені питання
              </Text>
            </li>
            <li>
              <Text family="roboto" size={14} lh={20} color="border">
                •
              </Text>
            </li>
            <li>
              <Text family="roboto" size={14} lh={20} color="border">
                Про авторські права
              </Text>
            </li>
          </List>
          <Text mt={16} family="roboto" size={14} lh={20} color="border">
            Завантажуючи, ви підтверджуєте, що ваші звуки відповідають нашим{" "}
            <LinkTo to={"/"}>Умовам використання</LinkTo> та не порушуєте чиїсь
            права.
          </Text>
        </Box>
      </Container>
    </section>
  );
};
