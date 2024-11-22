import React from 'react';
import style from "./nav-link.module.css";
import Link from "next/link";
import {usePathname} from "next/navigation";

const NavLink = ({href, children}) => {

  const path = usePathname()

  return (
    <Link href={href} className={path === href ? style.active : undefined}>
      {children}
    </Link>
  );
};

export default NavLink;