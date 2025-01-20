import Image from "next/image";

const thingshome = ["石鹸類", "タオル", "ドライヤー", "iphone充電器", "歯ブラシ・歯磨き粉", "洗濯機・乾燥機" ];

export default function TripLog() {
  return (
    <main className="p-4">
      <div className="p-4 max-w-5xl m-auto bg-green-100 rounded-lg">
        <h1 className="text-3xl">Welcome to Hotel Remi</h1>
        <p>2 bedrooms + living room + kitchen + bathroom / Max 4 guests</p>
        <Image
          src="/images/bergshamra.jpeg"
          alt="Hotel Remi"
          width={400}
          height={300}
          className="rounded"
        />
        <h2>家にあるもの</h2>
        <ul>
          {thingshome.map((thing) => (
            <li key={thing}> □ {thing}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
