import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "utils/motion";

interface TextProps {
  title?: any;
  textStyles?: string;
}

export const TypingText = ({ textStyles, title }: TextProps) => {
  return (
    <motion.p
      variants={textContainer}
      className={`font-normal text-[14px] text-slate-500 ${textStyles}`}
    >
      {Array.from(title as string).map((letter, index) => (
        <motion.span variants={textVariant2} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.p>
  );
};

export const TitleText = ({ textStyles, title }: TextProps) => {
  return (
    <motion.h2
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`mt-[8px] font-bold md:text-[64px] text-[40px] ${textStyles} gradient-title`}
    >
      {title}
    </motion.h2>
  );
};
