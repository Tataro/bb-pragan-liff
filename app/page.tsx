import Image from "next/image";
import Card from "./ui/Card";

export default function Home() {
  const mockData = [
    {
      title: "Card 1",
      imageUrl: "https://cataas.com/cat?width=800&height=600",
    },
    {
      title: "Card 2",
      imageUrl: "https://cataas.com/cat?width=700&height=600",
    },
    {
      title: "Card 3",
      imageUrl: "https://cataas.com/cat?width=600&height=600",
    },
    {
      title: "Card 4",
      imageUrl: "https://cataas.com/cat?width=500&height=600",
    },
    {
      title: "Card 5",
      imageUrl: "https://cataas.com/cat?width=400&height=600",
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
