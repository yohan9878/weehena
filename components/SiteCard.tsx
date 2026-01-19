import Image from "next/image";

type Props = {
  name: string;
  url: string;
  img: string;
  h2: string;
  p: string;
};

export default function SiteCard({ name, url, img, h2, p }: Props) {
  return (
    <div className="flex mb-2 justify-center rounded-full bg-gray-100/70 text-center hover:shadow-2xl  hover:bg-white hover:shadow-red-100 transition">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className="flex flex-col-2 p-1 gap-2 w-100 h-25 ml-5">
          <Image
            src={img}
            width={80}
            height={60}
            alt="logos"
            className="my-auto rounded-xl "
          />
          <div className="flex flex-col my-auto">
            <h2 className={h2}>{name}</h2>
            <p className={p}>{url}</p>
          </div>
        </div>
      </a>
    </div>
  );
}
