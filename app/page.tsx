"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import SiteCard from "../components/SiteCard";
import { useEffect, useState } from "react";
import Link from "next/link";

type otherCompanies = {
  name: string;
  img: string;
};

const sites = [
  {
    name: "Weehena Farms",
    url: "https://weehenafarms.com",
    img: "/assets/farmslogo.png",
    site: "www.weehenafarms.com",
  },
  {
    name: "Weehena Sausage",
    url: "https://weehenasausage.lk",
    img: "/assets/sausagelogo.png",
    site: "www.weehenasausage.lk",
  },

  {
    name: "Weehena Animal Nutrition (Pvt) Ltd",
    url: "https://maps.app.goo.gl/ToMuVMiqWfCZrRg79",
    img: "/assets/wanLogo.jpg",
    site: "Google Maps Location",
  },
];

const otherCompanies = [
  {
    name: "Weehena Farms (Pvt) Ltd",
    img: "/assets/weehenaFarmsLogoBgremoved.png",
  },
  {
    name: "Weehena Agricultural Estate (Pvt) Ltd",
    img: "/assets/agriculturalStateLogo.png",
  },
  {
    name: "Weehena Estate (Pvt) Ltd",
    img: "/assets/stateBgremoved.png",
  },
  {
    name: "Classy Missy.LK",
    img: "/assets/classyMissyLogo.jpg",
  },
  {
    name: "Winchester Little England",
    img: "/assets/hotelLogoBg.png",
  },
  {
    name: "Bio Recycle (Pvt) Ltd",
    img: "/assets/bioRecycleLogo.jpg",
  },
  {
    name: "St. Anthony's Forages Stores (Pvt) Ltd",
    img: "/assets/storesLogoBgremoved.png",
  },
];

const footerLinks = [
  {
    href: "https://www.facebook.com/WeehenaGroup",
    icon: "/assets/fb.png",
    alt: "Facebook",
    label: "Weehena Group",
    external: true,
  },
  {
    href: "https://www.facebook.com/weehena.farms/",
    icon: "/assets/fb.png",
    alt: "Facebook",
    label: "Weehena Farms",
    external: true,
  },
  {
    href: "https://www.facebook.com/p/Weehena-Sausage-61585445033293/",
    icon: "/assets/fb.png",
    alt: "Facebook",
    label: "Weehena Sausage",
    external: true,
  },
  {
    href: "https://www.instagram.com/weehenafarms/",
    icon: "/assets/insta.png",
    alt: "Instagram",
    label: "Weehena Farms",
    external: true,
  },
  {
    href: "https://www.instagram.com/weehena_sausage/",
    icon: "/assets/insta.png",
    alt: "Instagram",
    label: "Weehena Sausage",
    external: true,
  },
  {
    href: "tel:+94322254209",
    icon: "/assets/phone.png",
    alt: "Telephone",
    label: "032 2 254 209",
    external: false,
  },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div>
      <motion.div
        initial={mounted && isDesktop ? { opacity: 0, y: -75 } : undefined}
        animate={mounted && isDesktop ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 3, ease: "easeOut" }}
        className="relative content-center flex flex-col justify-center mx-auto my-auto md:mx-auto py-10 bg-center bg-black/50 w-screen min-h-screen bg-cover bg-blend-darken bg-[url('/assets/mobileBg.jpg')] lg:bg-[url('/assets/companyRainbow.png')]"
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
            loading="eager"
            className="w-30 h-30 md:w-40 md:h-40 lg:w-50 lg:h-50 xl:w-50 xl:h-50 mx-auto my-10 drop-shadow-2xl drop-shadow-black bg-white/90 rounded-full"
          />

          <h1 className="flex mx-4 md:mx-auto w-fit px-2 md:px-4 text-white  py-1 justify-center drop-shadow-xl drop-shadow-black text-center text-3xl lg:text-4xl xl:text-5xl font-sans font-bold mb-10 text-red-white transition ">
            Weehena Group of Companies
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
          className="grid 2xl:justify-stretch 2xl:grid-cols-3 lg:grid-cols-1 md:grid-cols-1 w-fit mx-auto gap-8 drop-shadow-2xl mt-5 2xl:mb-20 xl:mb-10 lg:mb-5 mb-20 px-4"
        >
          {sites.map((site) => (
            <SiteCard key={site.name} {...site} />
          ))}
        </motion.div>

        {/* Other companies */}
        <div className="2xl:absolute bottom-0 content-center px-10 xl:px-0 md:pt-10 pb-0 mx-auto mt-10 mb-10 w-full overflow-hidden">
          {/* DESKTOP Infinite Scroll */}
          {isDesktop && (
            <motion.div
              className="flex gap-16 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 50,
                ease: "linear",
                repeat: Infinity,
                delay: 3.5,
              }}
            >
              {[...otherCompanies, ...otherCompanies, ...otherCompanies].map(
                (company, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center xl:duration-300 xl:transform xl:hover:scale-110 transition"
                  >
                    <Image
                      src={company.img}
                      alt={company.name}
                      width={200}
                      height={200}
                      loading="eager"
                      className="h-20 w-auto object-contain rounded-sm"
                    />
                    <p className="mt-2 text-white w-80 xl:w-100 text-center font-semibold font-mono text-lg text-shadow-2xl">
                      {company.name}
                    </p>
                  </div>
                ),
              )}
            </motion.div>
          )}

          {/* MOBILE  Grid */}
          {!isDesktop && (
            <div className="grid mt-4 xl:grid-cols-5 justify-center gap-10">
              {otherCompanies.map((company) => (
                <div key={company.name} className="transition">
                  <Image
                    width={100}
                    height={100}
                    alt={company.name}
                    src={company.img}
                    loading="lazy"
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

      {/* footer */}
      <footer className="bg-[url('/assets/footerBg.png')] bg-cover bg-center bg-white text-sm md:text-lg text-red-900 font-sans font-medium text-center w-full px-4 pt-8 pb-4">
        <p>
          &copy; {new Date().getFullYear()} Weehena Group of Companies. All
          rights reserved.
        </p>

        <ul className="flex flex-col items-start gap-3 w-fit mx-auto py-4 sm:flex-row sm:flex-wrap sm:justify-center sm:items-center sm:w-full sm:max-w-3xl sm:gap-x-8">
          {footerLinks.map(({ href, icon, alt, label, external }) => (
            <li key={href}>
              <a
                href={href}
                {...(external && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                className="flex items-center gap-2 text-red-950 text-base hover:underline"
              >
                <Image
                  src={icon}
                  alt={`${alt} icon`}
                  width={28}
                  height={28}
                  className="size-7 shrink-0"
                />
                <span>{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
}
