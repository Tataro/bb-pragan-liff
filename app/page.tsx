import Image from "next/image";
import Card from "./ui/Card";

export default function Home() {
  const mockData = [
    { title: "Card 1", imageUrl: "/image1.jpg" },
    { title: "Card 2", imageUrl: "/image2.jpg" },
    { title: "Card 3", imageUrl: "/image3.jpg" },
    { title: "Card 4", imageUrl: "/image4.jpg" },
    { title: "Card 5", imageUrl: "/image5.jpg" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockData.map((item, index) => (
        <Card key={index} title={item.title} imageUrl={item.imageUrl} />
      ))}
    </div>
  );
}
