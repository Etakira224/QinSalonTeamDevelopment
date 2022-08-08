import { createStyles, Title, Text, Button, Container, ActionIcon, Group } from '@mantine/core';
// import { Dots } from './Dots';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingTop: 120,
    paddingLeft: '15%',
    paddingBottom: 80,
    paddingRight: '15%',
    backgroundColor: '#E64980',

    '@media (max-width: 755px)': {
      paddingTop: 80,
      paddingBottom: 60,
    },
  },

  inner: {
    position: 'relative',
    zIndex: 1,
  },

  dots: {
    position: 'absolute',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],

    '@media (max-width: 755px)': {
      display: 'none',
    },
  },

  dotsLeft: {
    left: 0,
    top: 0,
  },

  title: {
    textAlign: 'center',
    fontWeight: 800,
    fontSize: 40,
    letterSpacing: -1,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    marginBottom: theme.spacing.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    '@media (max-width: 520px)': {
      fontSize: 28,
      textAlign: 'left',
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6],
  },

  description: {
    textAlign: 'center',

    '@media (max-width: 520px)': {
      textAlign: 'left',
      fontSize: theme.fontSizes.md,
    },
  },

  controls: {
    marginTop: theme.spacing.lg,
    display: 'flex',
    justifyContent: 'center',

    '@media (max-width: 520px)': {
      flexDirection: 'column',
    },
  },

  control: {
    '&:not(:first-of-type)': {
      marginLeft: theme.spacing.md,
    },

    '@media (max-width: 520px)': {
      height: 42,
      fontSize: theme.fontSizes.md,

      '&:not(:first-of-type)': {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },
  social: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

export function Hero() {
  const { classes } = useStyles();

  return (
    <Container className={classes.wrapper} size={1400}>
      {/* <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} /> */}

      <div className={classes.inner}>
        <Title className={classes.title}>
          Shimabu IT University
          <br />
          しまぶーのポートフォリオのためのページです
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" color="dimmed" className={classes.description}>
            しまぶーのポートフォリオのためのページです
          </Text>
        </Container>

        <div className={classes.controls}>
          <Group spacing={0} className={classes.social} position="right" noWrap>
            <ActionIcon size="lg">
              <IconBrandTwitter size={18} stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg">
              <IconBrandYoutube size={18} stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg">
              <IconBrandInstagram size={18} stroke={1.5} />
            </ActionIcon>
          </Group>
        </div>
      </div>
    </Container>
  );
}