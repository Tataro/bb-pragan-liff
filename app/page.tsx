import Card from "./ui/Card";

export default function Home() {
  const mockData = [
    {
      title: "Card 1",
      imageUrl: "https://placedog.net/300/200",
    },
    {
      title: "Card 2",
      imageUrl: "https://placedog.net/300/300",
    },
    {
      title: "Card 3",
      imageUrl: "https://placedog.net/200/300",
    },
    {
      title: "Card 4",
      imageUrl: "https://placedog.net/400/200",
    },
    {
      title: "Card 5",
      imageUrl: "https://placedog.net/400/300",
    },
    {
      title: "Card 6",
      imageUrl: "https://placedog.net/300/400",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockData.map((item, index) => (
        <Card key={index} title={item.title} imageUrl={item.imageUrl} />
      ))}
    </div>
  );
}
