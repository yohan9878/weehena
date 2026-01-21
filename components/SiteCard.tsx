import Image from "next/image";

type Props = {
  name: string;
  url: string;
  img: string;
};

export default function SiteCard({ name, url, img }: Props) {
  return (
    <div className="flex mx-auto justify-center flex-col lg:flex-col-2 w-fit h-20 md:w-100 lg:w-100 lg:h-25 xl:w-100 xl:h-25 mb-2 rounded-full hover:shadow-2xl bg-red-100/80 hover:bg-white hover:shadow-red-100 duration-300 transform hover:scale-110 ease-in-out transition">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className="flex ml-5 xl:ml-5 mx-auto gap-2 sm:gap-0 lg:w-100 xl:w-100 h-25">
          <Image
            src={img}
            width={100}
            height={100}
            alt="logos"
            className="my-auto rounded-xl w-10 h-10 lg:w-15 lg:h-15 xl:w-15 xl:h-15"
          />
          <div className="flex flex-col mx-auto my-auto">
            <h2 className="text-sm md:text-lg lg:text-xl w-70  md:w-70 text-left font-sans text-red-900  font-bold">
              {name}
            </h2>
            <p className="text-xs w-50  md:w-70 text-left font-sans font-semibold text-gray-600">
              {url}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}
