import SiteCard from "@/components/SiteCard";
import Image from "next/image";

export default function Home() {
  const sites = [
    { name: "Weehena Farms", url: "https://weehenafarms.com" },
    { name: "Weehena Sausage", url: "https://weehenasausage.lk" },
  ];

  return (
    <div className="flex flex-col justify-center md:mx-auto bg-center bg-black/50 min-w-screen min-h-screen bg-cover bg-blend-darken" style={{ backgroundImage: "url('/assets/company2.jpg')" }}>
      <div>
        <Image
          src="/assets/weehenaLogo.png"
          alt="Company Logo"
          width={150}
          height={150}
          className="mx-auto my-10"
        />
      </div>
      <h1 className="flex mx-10 justify-center drop-shadow-2xl text-center text-5xl font-sans font-bold mb-10 text-red-white ">
        WEEHENA GROUP OF COMPANIES
      </h1>

      <div className="grid mx-auto gap-4 md:grid-cols-2 w-1/2 ">
        {sites.map((site) => (
          <SiteCard key={site.name} {...site} />
        ))}
      </div>
    </div>
  );
}
