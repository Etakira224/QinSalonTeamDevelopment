import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

export const BlogCard = () => {
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section>
        <Text size="md" color="dimmed">
          記事のタイトルです。
        </Text>
        <Text size="sm">
          当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。
        </Text>
      </Card.Section>

      {/* <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>IT KINGDOM</Text>
        <Badge color="pink" variant="light">
          On Sale
        </Badge>
      </Group> */}
    </Card>
  );
};
