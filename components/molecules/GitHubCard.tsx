import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

export const GitHubCard = () => {
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="../../public/Thumbnail.png"
          height={160}
          alt="GitHubStatus"
        />
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
