import Link from "next/link"
import { createStyles } from '@mantine/core';

//リファクタ時にすっきりさせること
export const HeaderMenu = () => {
  return (
    <ul>
      <li>
        <Link href='/About'>
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href='/Blog'>
          <a>Blog</a>
        </Link>
      </li>
      <li>
        <Link href='/Portfolio'>
          <a>Portfolio</a>
        </Link>
      </li>
      <li>
        <Link href='/Contact'>
          <a>Contact</a>
        </Link>
      </li>
    </ul>
  )
}