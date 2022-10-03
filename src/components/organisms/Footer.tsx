import { createStyles, Container, Group, Anchor, Text } from "@mantine/core";
import * as styles from "../../styles";

interface FooterSimpleProps {
  links: { link: string; label: string }[];
}

export function Footer({ links }: FooterSimpleProps) {
  const { classes } = styles.footer.useStyles();
  const items = links.map((link) => (
    <Anchor<"a">
      color="dimmed"
      key={link.label}
      href={link.link}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Text size="sm">&copy; 2022 Shimabu IT University</Text>
      </Container>
    </div>
  );
}
