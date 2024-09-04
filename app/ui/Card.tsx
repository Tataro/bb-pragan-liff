export default function Card({
  title,
  imageUrl,
}: {
  title: string;
  imageUrl: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-500 mt-2">
          This is a sample description of the card.
        </p>
      </div>
    </div>
  );
}
