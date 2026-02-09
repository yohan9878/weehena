import Image from "next/image";

type Props = {
  name: string;
  url: string;
  img: string;
  site: string;
};

export default function SiteCard({ name, url, img, site }: Props) {
  return (
    <div className="flex mx-auto justify-center flex-col lg:flex-col-2 w-fit h-20 md:w-100 lg:w-100 lg:h-25 xl:w-100 xl:h-25 mb-2 rounded-full xl:hover:shadow-2xl bg-white/80 xl:hover:bg-white xl:hover:shadow-red-100 xl:duration-300 xl:transform xl:hover:scale-110 xl:ease-in-out transition">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className="flex px-4 mx-auto gap-2 sm:gap-0 h-25">
          <Image
            src={img}
            width={100}
            height={100}
            alt="logos"
            className="my-auto rounded-xl w-10 h-10 lg:w-15 lg:h-15 xl:w-15 xl:h-15"
          />
          <div className="flex flex-col mx-auto my-auto">
            <h2 className="text-sm md:text-lg lg:text-xl w-70 md:w-70 text-left font-sans text-red-900  font-bold">
              {name}
            </h2>
            <p className="text-xs w-70  md:w-70 text-left font-sans font-semibold text-gray-600">
              {site}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}
