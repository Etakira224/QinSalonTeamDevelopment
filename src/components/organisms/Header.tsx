import {
  createStyles,
  Menu,
  Group,
  Center,
  Burger,
  Container,
  Title,
} from "@mantine/core";
import { Header as MHeader } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ThemeColorToggle } from "../atoms/ThemeColorToggle";
import { HeaderMenu } from "../molecules/HeaderMenu";
import { ModalMenu } from "./ModalMenu";

const useStyles = createStyles((theme) => ({
  header: {
    // backgroundColor: theme.fn.variant({
    //   variant: "filled",
    //   color: theme.primaryColor,
    // }).background,
    backgroundColor: theme.white,
    borderBottom: 0,
    width: "100%",
    paddingLeft: "15%",
    paddingRight: "15%",
  },

  inner: {
    height: 56,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: theme.white,
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: "filled", color: theme.primaryColor })
          .background,
        0.1
      ),
    },
  },

  linkLabel: {
    marginRight: 5,
  },
}));

interface HeaderSearchProps {
  //mantineのサンプルコードそのまま。linksの中にlinksが入っている形で若干ややこしい？
  links: {
    link: string;
    label: string;
    links: { link: string; label: string }[];
  }[];
}

export const Header = ({ links }: HeaderSearchProps) => {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();

  // itemsの定義。ここは分けてもいいのかもしれない。
  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" exitTransitionDuration={0}>
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });
  //上でreturnしたitems変数を下のreturnで使っている感じ。

  return (
    <MHeader height="fit-content" className={classes.header} mb={0}>
      <Container>
        <div className={classes.inner}>
          <Title order={2}>Shimabu IT University</Title>
          <Group spacing={5} className={classes.links}>
            {items}
            <HeaderMenu />
            <ThemeColorToggle />
          </Group>
          <ModalMenu />
          {/* <DarkColorToggle /> */}
        </div>
      </Container>
    </MHeader>
  );
};
