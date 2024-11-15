'use client'
import styles from './style.module.scss'
import { useEffect, useState } from 'react';
import Nav from './nav';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Home() {

  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect( () => {
    if(isActive) setIsActive(false)
  }, [pathname])

  const bg = isActive ? 'bg-[#6c44ac]' : 'bg-[#455CE9]';

  return (
    <>
    <div className={'des:hidden'}>

      <div className={`p-[30px] fixed right-0 z-[20] mob:p-[20px]`}>
        <div onClick={() => {setIsActive(!isActive)}} className={`w-[80px] h-[80px] rounded-[50%] ${bg} cursor-pointer flex items-center justify-center mob:w-[70px] mob:h-[70px]`}>
          <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
        </div>
      </div>

    </div>
    <AnimatePresence mode="wait">
      {isActive && <Nav />}
    </AnimatePresence>
    </>
  )
}
