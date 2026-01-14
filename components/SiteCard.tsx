
type Props = {
  name: string;
  url: string;
};

export default function SiteCard({ name, url }: Props) {
  return (
    <div className="block rounded-3xl  bg-white/70 text-center  p-4 hover:shadow-2xl  hover:bg-white hover:not-only:">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        
      >
        <h2 className="text-xl font-sans text-red-950  font-bold">{name}</h2>
        <p className="text-sm font-sans font-semibold text-gray-600">{url}</p>
      </a>
    </div>
  );
}
