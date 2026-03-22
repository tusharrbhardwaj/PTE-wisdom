import { motion } from "framer-motion";

export const ScrollingMosaic = () => (
  <div className="h-full overflow-hidden grid grid-cols-2 gap-4 p-10">
    <motion.div animate={{ y: [0, -1000] }} transition={{ repeat: Infinity, duration: 30, ease: "linear" }} className="flex flex-col gap-4">
      {[1,2,3,4,5].map(i => <div key={i} className="h-64 bg-zinc-800 rounded-2xl" />)}
    </motion.div>
    <motion.div animate={{ y: [-1000, 0] }} transition={{ repeat: Infinity, duration: 30, ease: "linear" }} className="flex flex-col gap-4">
      {[1,2,3,4,5].map(i => <div key={i} className="h-64 bg-zinc-700 rounded-2xl" />)}
    </motion.div>
  </div>
);