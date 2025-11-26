"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface StaggerContainerProps {
    children: React.ReactNode;
    delay?: number;
    staggerChildren?: number;
    className?: string;
}

export default function StaggerContainer({
    children,
    delay = 0,
    staggerChildren = 0.1,
    className = "",
}: StaggerContainerProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-10% 0px" });

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                delayChildren: delay,
                staggerChildren: staggerChildren,
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className={className}
        >
            {children}
        </motion.div>
    );
}
