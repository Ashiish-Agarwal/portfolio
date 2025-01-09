'use client';
import { useRef, useState } from 'react';
import { Cursor } from './ui/cursor';
import { AnimatePresence, motion } from 'motion/react';
import { PlusIcon } from 'lucide-react';
import Link from 'next/link';

export function CursorEffect() {
  const [isHovering, setIsHovering] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  const projectsData = [
    {link: 'https://github.com/',
      image: '/avatar.jpg',
      tital:'tital deg-1'},

      
    {link: '/google',
      image: '/avi.png',
      tital:'titalsd eg-1'},


    {link: '/google',
      image: '/avi.png',
      tital:'titalald eg-1'}

  ]

  const handlePositionChange = (x: number, y: number) => {
    if (targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      const isInside =
        x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
      setIsHovering(isInside);
    }
  };

  return (
    <div className='flex h-[400px] w-full items-center justify-center  '>
      <Cursor
        attachToParent
        variants={{
          initial: { scale: 0.3, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          exit: { scale: 0.3, opacity: 0 },
        }}
        springConfig={{
          bounce: 0.001,
        }}
        transition={{
          ease: 'easeInOut',
          duration: 0.15,
        }}
        onPositionChange={handlePositionChange}
      >
        <motion.div
          animate={{
            width: isHovering ? 80 : 16,
            height: isHovering ? 32 : 16,
          }}
          className='flex items-center justify-center rounded-[24px] bg-gray-500/40 backdrop-blur-md dark:bg-gray-300/40'
        >
          <AnimatePresence>
            {isHovering ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className='inline-flex w-full items-center justify-center'
              >
                <div className='inline-flex items-center text-sm text-white dark:text-black'>
                  More <PlusIcon className='ml-1 h-4 w-4' />
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.div>
      </Cursor>
      <div ref={targetRef} className=' grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3     '>
        kala
        {projectsData.map((elem)=>(

          <Link href={elem.link} key={elem.tital} className='flex h-full w-full p-10 bg-white-100 backdrop-filter backdrop-blur-lg   '>
            <div className='w-[20rem] h-[25rem] '> </div>

<img className='size-20 flex  ' src={elem.image} alt={elem.tital} />

          </Link>
        ))}
        
      </div>
    </div>
  );
}
