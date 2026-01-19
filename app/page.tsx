"use client";
import SiteCard from "@/components/SiteCard";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const sites = [
    { name: "Weehena Farms", url: "https://weehenafarms.com", img: "" },
    { name: "Weehena Sausage", url: "https://weehenasausage.lk", img: "" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -75 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 3, ease: "easeOut" }}
      className="flex flex-col justify-center md:mx-auto bg-center bg-black/50 min-w-screen min-h-screen bg-cover bg-blend-darken"
      style={{ backgroundImage: "url('/assets/company2.jpg')" }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 2,
          scale: { type: "spring", visualDuration: 2, bounce: 0.5 },
        }}
      >
        {/* Weehena Logo */}
        <Image
          src="/assets/weehenaLogo.png"
          alt="Company Logo"
          width={200}
          height={200}
          className="mx-auto my-10"
        />
        {/* heading (w-100 h-35) */}
        <h1 className="flex mx-auto   justify-center drop-shadow-2xl text-center text-5xl font-sans font-bold mb-10 text-red-white ">
          WEEHENA GROUP OF COMPANIES
        </h1>
      </motion.div>

      {/* Site Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 2,
          scale: { type: "spring", visualDuration: 2, bounce: 0.5 },
        }}
        className="grid mx-auto gap-4 grid-cols-1 w-100 "
      >
        {sites.map((site) => (
          <SiteCard key={site.name} {...site} />
        ))}
      </motion.div>
    </motion.div>
  );
}
