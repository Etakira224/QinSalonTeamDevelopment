import { useState } from "react";
import { Modal, Group, createStyles } from "@mantine/core";
import { Burger } from "@mantine/core";
import { ClassNames } from "@emotion/react";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  // modal: {
  //   backgroundColor: "#E64980",
  // },
  group: {
    // backgroundColor: "E64980",
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));
export const ModalMenu = () => {
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";
  const { classes } = useStyles();

  // if(props.value === ) {

  // }
  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        // className={classes.modal}
        title="This is fullscreen modal!"
        fullScreen
        //色もまとめて管理しようよ.なぜか色が変わらない。
        overlayColor="#E64980"
      >
        {/* Modal content */}
        <ul>
          <li>
            <Link href={"/About"}>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href={"/Blog"}>
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href={"/Portfolio"}>
              <a>Portfolio</a>
            </Link>
          </li>
          <li>
            <Link href={"/Contact"}>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </Modal>

      <Group position="center" className={classes.group}>
        <Burger
          opened={opened}
          onClick={() => setOpened((o) => !o)}
          title={title}
          className={classes.burger}
        />
      </Group>
    </>
  );
};
