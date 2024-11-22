"use client"

import React from 'react';
import Link from "next/link";
import Image from "next/image";

import logo from '@/assets/logo.png';
import style from "./main-header.module.css";
import MainHeaderBackground from "@/components/main-header/main-header-background";
import NavLink from "@/components/main-header/nav-link";

const MainHeader = () => {


  return (
    <>
      <MainHeaderBackground/>
      <header className={style.header}>
        <Link className={style.logo} href="/">
          <Image src={logo} width={100} height={100} alt="A plate with a food" priority/>
          NextLevel Food
        </Link>
        <nav className={style.nav}>
          <ul>
            <li>
              <NavLink
                href="/meals"
              >
                Browse Meals
              </NavLink>
            </li>
            <li>
              <NavLink
                href="/community"
              >
                Foodies Community
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>

  );
};

export default MainHeader;
