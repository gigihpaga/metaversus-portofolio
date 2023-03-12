'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, TypingText } from '../components';
import { map, people01, people02, people03 } from '../constants/images';

const World = () => (
    <section className={`${styles.paddings} relative z-10`}>
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex flex-col`}
        >
            <TypingText title="| People on the World" textStyle="text-center" />
            <TitleText
                title={
                    <>Track friends around you and invite them to play together in the same world</>
                }
                textStyle="text-center"
            />
            <motion.div
                variants={fadeIn('up', 'tween', 0.3, 1)}
                className="relative mt-[68px] flex w-full h-[550px]"
            >
                <Image
                    src={map}
                    alt="map"
                    className="w-full h-full object-cover"
                    width={1080}
                    height={1080}
                />
                <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
                    <Image
                        src={people01}
                        alt="people"
                        className="w-full h-full"
                        width={1080}
                        height={1080}
                    />
                </div>
                <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
                    <Image
                        src={people02}
                        alt="people"
                        className="w-full h-full"
                        width={1080}
                        height={1080}
                    />
                </div>
                <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
                    <Image
                        src={people03}
                        alt="people"
                        className="w-full h-full"
                        width={1080}
                        height={1080}
                    />
                </div>
            </motion.div>
        </motion.div>
    </section>
);

export default World;
