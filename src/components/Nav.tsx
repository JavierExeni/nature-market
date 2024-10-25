import { motion } from "framer-motion";
import { useState } from "react";

const navMotion = {
  visible: {
    opacity: 1,

    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
  hidden: {
    opacity: 0,
  },
};
const itemMotion = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};
const itemMotionDesktop = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 1, x: 0 },
};
const navLinks = [
  { name: "Inicio", href: "/", id: 1 },
  { name: "Productos", href: "/", id: 2 },
  { name: "Contáctenos", href: "/contact", id: 3 },
  { name: "Apoyo al emprendedor", href: "/contact", id: 4 },
];

const NavLinks = ({
  isMobile,
  className,
}: {
  isMobile: boolean;
  className: string;
}) => (
  <div className={className}>
    {navLinks.map(({ name, href, id }) => (
      <motion.a
        className="cursor-pointer hover:text-gray-600"
        key={id}
        variants={isMobile ? itemMotion : itemMotionDesktop}
        href={href}
      >
        {name}
      </motion.a>
    ))}
  </div>
);

export default function Nav() {
  const [toggled, setToggled] = useState(false);
  return (
    <>
      <header className="max-w-[1440px] mx-auto p-3 md:p-4 flex justify-between items-center relative">
        <img className="w-8" src="/leaf.png" alt="Logo Naturaleza" />

        <div className="gap-10 text-lg hidden lg:flex">
          <NavLinks
            className="flex lg:items-center lg:gap-8"
            isMobile={false}
          />
        </div>

        <div
          onClick={() => setToggled(!toggled)}
          className="space-y-1.5 cursor-pointer block lg:hidden z-50"
        >
          <motion.span
            animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
            className="block h-0.5 w-8 bg-black"
          ></motion.span>
          <motion.span
            animate={{
              width: toggled ? 0 : 24,
            }}
            className="block h-0.5 w-6 bg-black"
          ></motion.span>
          <motion.span
            animate={{
              rotateZ: toggled ? -45 : 0,
              y: toggled ? -8 : 0,
              width: toggled ? 32 : 16,
            }}
            className="block h-0.5 w-4 bg-black"
          ></motion.span>
        </div>

        {toggled && (
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 25 }}
            className={`shadow-lg fixed bottom-0 left-0 h-screen w-full bg-white z-40 flex items-center justify-center`}
          >
            <motion.div
              variants={navMotion}
              animate="visible"
              initial="hidden"
              className="flex flex-col gap-10 text-lg"
            >
              <NavLinks
                className="flex flex-col gap-12 text-lg font-semibold"
                isMobile={true}
              />
            </motion.div>
          </motion.div>
        )}
      </header>
    </>
  );
}
