'use client'

import Link from 'next/link'
import MenuPage from './Menu';
import '../../css/Header.scss'


// img
import Menu_btn from "@/public/images/common/icobtn-lined-menu-enabled-white.svg";
import Close_btn from "@/public/images/02_menu/icobtn-lined-menuclose-enabled-white.svg";
import Logo from "@/public/images/common/icobtn-lined-logo-enabled-white.svg";

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [on, setOn] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleLiClick = () => {
      setOn(false);
    };

    const lists = document.querySelectorAll('.gnb ul li');
    lists.forEach(li => {
      li.addEventListener('click', handleLiClick);
    });

    return () => {
      lists.forEach(li => {
        li.removeEventListener('click', handleLiClick);
      });
    };
  }, [pathname]);

  return (
    <header className={`Header ${on ? 'on' : ''} ${pathname === '/' ? '' : 'bg'}`}>
      <Link className='logo' href="/" passHref>
        <Logo />
      </Link>
      <button onClick={() => { setOn(!on) }}>
        {on ? <Close_btn /> : <Menu_btn />}
      </button>
      <MenuPage />
    </header>
  )
}

export default Header