import { Card, Image, Text, Badge, Button, Group, Title } from "@mantine/core";

export const BlogCard = () => {
  return (
    <Card>
      {/* <Card.Section> */}
        {/* <Text size="md" color="dimmed">
          This is a header.
        </Text>
        <Text size="sm">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.{" "}
        </Text> */}
        <article>
          <Title order={3}>This is a header.</Title>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.{" "}
          </p>
          <p>2022.08.08</p>
        </article>
      {/* </Card.Section> */}

      {/* <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>IT KINGDOM</Text>
        <Badge color="pink" variant="light">
          On Sale
        </Badge>
      </Group> */}
    </Card>
  );
};
