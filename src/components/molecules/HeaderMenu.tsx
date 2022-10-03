import Link from "next/link";
import { createStyles, Group } from "@mantine/core";
import { navItems } from "../../constants/page";

const useStyles = createStyles({
  menu: {
    display: "flex",
  },
  list: {
    listStyle: "none",
    marginRight: "1rem",
  },
});
//リファクタ時にすっきりさせること
export const HeaderMenu = () => {
  const { classes } = useStyles();

  return (
    //HeaderLink作ったんだから使おうねえ
    // <ul className={classes.menu}>
    //   <li className={classes.list}>
    //     <Link href="/About">
    //       <a>About</a>
    //     </Link>
    //   </li>
    //   <li className={classes.list}>
    //     <Link href="/Blog">
    //       <a>Blog</a>
    //     </Link>
    //   </li>
    //   <li className={classes.list}>
    //     <Link href="/Portfolio">
    //       <a>Portfolio</a>
    //     </Link>
    //   </li>
    //   <li className={classes.list}>
    //     <Link href="/Contact">
    //       <a>Contact</a>
    //     </Link>
    //   </li>
    // </ul>
    <Group>
      {navItems.map((item, i) => (
        <Link key={i} href={item.href}>
          <a>{item.title}</a>
        </Link>
      ))}
    </Group>
  );
};
