"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import SiteCard from "../components/SiteCard";
import { useEffect, useState } from "react";

type otherCompanies = {
  name: string;
  img: string;
};

const sites = [
  {
    name: "Weehena Farms",
    url: "https://weehenafarms.com",
    img: "/assets/farmslogo.png",
  },
  {
    name: "Weehena Sausage",
    url: "https://weehenasausage.lk",
    img: "/assets/sausagelogo.png",
  },
  {
    name: "Winchester Little England",
    url: "https://www.winchesterlk.com/",
    img: "/assets/hotelLogo.png",
  },
  {
    name: "Weehena Animal Nutrition (Pvt) Ltd",
    url: "https://maps.app.goo.gl/ToMuVMiqWfCZrRg79",
    img: "/assets/wanLogo.jpg",
  },
  {
    name: "Classy Missy.LK",
    url: "https://www.facebook.com/p/Classy-MissyLk-100064036170534/",
    img: "/assets/classyMissyLogo.jpg",
  },
];

const otherCompanies = [
  {
    name: "Weehena Farms (Pvt) Ltd",
    img: "/assets/weehenaFarmsLogo.jpg",
  },
  {
    name: "Weehena Agricultural State (Pvt) Ltd",
    img: "/assets/agriculturalStateLogo.png",
  },
  {
    name: "Weehena State (Pvt) Ltd",
    img: "/assets/stateLogo.jpg",
  },
  {
    name: "St. Anthony's Forage Stores (Pvt) Ltd",
    img: "/assets/storesLogo.jpg",
  },
  {
    name: "Bio Recycle (Pvt) Ltd",
    img: "/assets/bioRecycleLogo.jpg",
  },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 1536 });

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div>
      <motion.div
        initial={mounted && isDesktop ? { opacity: 0, y: -75 } : undefined}
        animate={mounted && isDesktop ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 3, ease: "easeOut" }}
        className="relative content-center flex flex-col justify-center mx-auto md:mx-auto py-10 bg-center bg-black/50 min-w-screen min-h-screen bg-cover bg-blend-darken"
        style={{ backgroundImage: "url('/assets/company2.jpg')" }}
      >
        <motion.div
          initial={mounted && isDesktop ? { opacity: 0, scale: 0 } : undefined}
          animate={mounted && isDesktop ? { opacity: 1, scale: 1 } : undefined}
          transition={
            isDesktop
              ? {
                  duration: 2,
                  scale: { type: "spring", visualDuration: 2, bounce: 0.5 },
                }
              : undefined
          }
          className="w-fit mx-auto"
        >
          {/* Weehena Logo */}
          <Image
            src="/assets/weehenaLogo.png"
            alt="Company Logo"
            width={200}
            height={200}
            className="w-30 h-30 md:w-40 md:h-40 lg:w-50 lg:h-50 xl:w-50 xl:h-50 mx-auto my-10 drop-shadow-2xl drop-shadow-black bg-white/90 rounded-full"
          />

          <h1 className="flex mx-4 md:mx-auto w-fit px-2 md:px-4 text-white  py-1 justify-center drop-shadow-xl drop-shadow-black text-center text-xl md:text-3xl lg:text-4xl xl:text-5xl font-sans font-bold mb-10 text-red-white transition ">
            WEEHENA GROUP OF COMPANIES
          </h1>
        </motion.div>
        <motion.div
          initial={mounted && isDesktop ? { opacity: 0, scale: 0 } : undefined}
          animate={mounted && isDesktop ? { opacity: 1, scale: 1 } : undefined}
          transition={
            isDesktop
              ? {
                  duration: 2,
                  scale: { type: "spring", visualDuration: 2, bounce: 0.5 },
                }
              : undefined
          }
          className="grid 2xl:justify-stretch 2xl:grid-cols-3 lg:grid-cols-1 md:grid-cols-1 w-fit mx-auto gap-8 drop-shadow-2xl mt-5"
        >
          {sites.map((site) => (
            <SiteCard key={site.name} {...site} />
          ))}
        </motion.div>

        {/* Other companies */}
        <div className="bottom-0 content-center px-10 xl:px-0 md:pt-10 pb-10 mx-auto mt-10 my-auto w-full overflow-hidden">
          {/* DESKTOP Infinite Scroll */}
          {isDesktop && (
            <motion.div
              className="flex gap-16 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 25,
                ease: "linear",
                repeat: Infinity,
                delay: 3.5,
              }}
            >
              {[...otherCompanies, ...otherCompanies].map((company, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center xl:duration-300 xl:transform xl:hover:scale-110 transition"
                >
                  <Image
                    src={company.img}
                    alt={company.name}
                    width={200}
                    height={200}
                    className="h-20 w-auto object-contain rounded-sm"
                  />
                  <p className="mt-2 text-white w-80 xl:w-100 text-center font-semibold font-mono text-lg text-shadow-2xl">
                    {company.name}
                  </p>
                </div>
              ))}
            </motion.div>
          )}

          {/* MOBILE  Grid */}
          {!isDesktop && (
            <div className="grid mt-10 xl:grid-cols-5 justify-center gap-10">
              {otherCompanies.map((company) => (
                <div key={company.name} className="transition">
                  <Image
                    width={1000}
                    height={1000}
                    alt={company.name}
                    src={company.img}
                    className="mx-auto rounded-sm w-auto h-20 object-fill"
                  />
                  <p className="mx-auto text-white text-center font-semibold font-mono text-sm mt-2 text-shadow-2xl">
                    {company.name}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
