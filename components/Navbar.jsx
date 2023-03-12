'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';
import { menu, search } from '../constants/images';

const Navbar = () => (
    <div>
        <motion.nav
            variants={navVariants}
            initial="hidden"
            whileInView="show"
            className={`${styles.xPaddings} py-8 relative`}
            // style={{ backgroundColor: 'red' }}
        >
            <div className="absolute w-[50%] inset-0 gradient-01" />
            <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
                <Image
                    src={search}
                    alt="search"
                    className="w-[24px] h-[24px] object-contain"
                    width={1080}
                    height={1080}
                    priority
                />
                <h2 className="font-extrabold text-[24px] leading-[34px] text-white uppercase">
                    metaversus
                </h2>
                <Image
                    src={menu}
                    alt="menu"
                    className="w-[24px] h-[24px] object-contain"
                    width={1080}
                    height={1080}
                    priority
                />
            </div>
        </motion.nav>
    </div>
);

export default Navbar;
