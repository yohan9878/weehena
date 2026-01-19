"use client";
import SiteCard from "@/components/SiteCard";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const sites = [
    {
      name: "Weehena Farms",
      url: "https://weehenafarms.com",
      img: "/assets/farmslogo.png",
      h2: " text-xl w-70 text-left font-sans text-red-900  font-bold",
      p: " text-xs w-70 text-left font-sans font-semibold text-gray-600",
      cName: "",
    },
    {
      name: "Weehena Sausage",
      url: "https://weehenasausage.lk",
      img: "/assets/sausagelogo.png",
      h2: " text-xl w-70 text-left font-sans text-red-900  font-bold",
      p: " text-xs w-70 text-left font-sans font-semibold text-gray-600",
      cName: "",
    },
    {
      name: "Winchester Little England",
      url: "https://www.winchesterlk.com/",
      img: "/assets/hotelLogo.png",
      h2: " text-xl w-70 text-left font-sans text-red-900  font-bold",
      p: " text-xs w-70 text-left font-sans font-semibold text-gray-600",
      cName: "",
    },
    {
      name: "Weehena Animal Nutrition (Pvt) Ltd",
      url: "https://maps.app.goo.gl/ToMuVMiqWfCZrRg79",
      img: "/assets/wanLogo.jpg",
      h2: " text-xl w-70 text-left font-sans text-red-900  font-bold",
      p: " text-xs w-70 text-left font-sans font-semibold text-gray-600",
      cName: "",
    },
    {
      name: "Classy Missy.LK",
      url: "https://www.facebook.com/p/Classy-MissyLk-100064036170534/",
      img: "/assets/classyMissyLogo.jpg",
      h2: " text-xl w-70 text-left font-sans text-red-900  font-bold",
      p: " text-xs w-70 text-left font-sans font-semibold text-gray-600",
      cName: "",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -75 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 3, ease: "easeOut" }}
      className="flex flex-col justify-center md:mx-auto py-10 bg-center bg-black/50 min-w-screen min-h-screen bg-cover bg-blend-darken"
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
          className="mx-auto my-10 drop-shadow-2xl drop-shadow-black bg-white/90 rounded-full"
        />
        {/* heading (w-100 h-35) */}
        <h1 className="flex mx-auto border-4 border-red-900 w-fit px-5 py-2 text-white justify-center drop-shadow-xl drop-shadow-black text-center text-5xl font-sans font-bold mb-10 text-red-white transition ">
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
        className="grid justify-items-center xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 mx-auto gap-6 drop-shadow-2xl mt-5 "
      >
        {sites.map((site) => (
          <SiteCard key={site.name} {...site} />
        ))}
      </motion.div>
    </motion.div>
  );
}
