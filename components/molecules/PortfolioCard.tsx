import { Card, Text, Badge, Button, Group } from "@mantine/core";
import Image from "next/image";

export const PortfolioCard = () => {
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section>
        {/* mantineのImageコンポをnextのものに変更し、画像をpublic参照 */}
        <Image
          src="/Thumbnail.png"
          height={160}
          alt="shimabu-AndHisArmy"
        />
      </Card.Section>

      {/* <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>IT KINGDOM</Text>
        <Badge color="pink" variant="light">
          On Sale
        </Badge>
      </Group> */}

      <Text size="sm" color="dimmed">
        当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。
      </Text>
      <Text size="xs">2021.10 - 2021.12</Text>
    </Card>
  );
};
