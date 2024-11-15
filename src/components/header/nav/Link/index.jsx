
import Link from 'next/link';
import { motion } from 'framer-motion';
import { slide, scale } from '../../anim';

export default function Index({data, isActive, setSelectedIndicator}) {
  
    const { title, href, index} = data;
  
    return (
      <motion.div className={'relative flex items-center'} onMouseEnter={() => {setSelectedIndicator(href)}} custom={index} variants={slide} initial="initial" animate="enter" exit="exit">
        <motion.div variants={scale} animate={isActive ? "open" : "closed"} className={'w-[10px] h-[10px] bg-white rounded-[50%] absolute left-[-30px]'}></motion.div>
        <Link href={href}>{title}</Link>
      </motion.div>
    )
  }