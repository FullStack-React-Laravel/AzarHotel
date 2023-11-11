import { motion } from "framer-motion";
import { toolTipVar } from "./toolTipAnim";

export default function Tooltip({ children }) {
    return (
        <motion.div
            variants={toolTipVar}
            initial="initial"
            animate="enter"
            exit="exit"
            transition={{ duration: 0.3 }}
            className={`absolute bottom-[100%] left-1/2  w-[120%] rounded-xl bg-white shadow-2xl`}
        >
            {children}
            <span className=" absolute bottom-[-10px] left-1/2 block h-5 w-5 translate-x-[-50%] rotate-45 bg-white"></span>
        </motion.div>
    );
}
