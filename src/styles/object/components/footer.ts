import { createStyles } from "@mantine/core";

//footer中にfooterを入れるようなイメージになってしまい、混乱のもと？
export const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 0,
    display: "flex",
    justifyContent: "center",
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));
