import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Tooltip from "./Tooltip";

export default function BoxTooltip({ children, toolTip }) {
    const [showToolTip, setShowToolTip] = useState(false);

    const mouseEnter = () => setShowToolTip(true);
    const mouseLeave = () => setShowToolTip(false);

    return (
        <motion.div
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            className=" relative cursor-pointer"
        >
            {children}
            <AnimatePresence>
                {showToolTip && <Tooltip>{toolTip}</Tooltip>}
            </AnimatePresence>
        </motion.div>
    );
}
