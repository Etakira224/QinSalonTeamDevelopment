import { Card, Image, Text, Badge, Button, Group, Avatar } from "@mantine/core";

export const TwitterCard = () => {
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section>
        <Avatar radius="xl" src="" alt="" />
        <div>
          <Text size="sm" color="dimmed">
            various informations
          </Text>
          <Text size="xs">2021.10 - 2021.12</Text>
        </div>
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
