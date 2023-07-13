import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-5xl font-bold">Hello Next.js</h1>
      <Image src="/next.svg" alt="Next.js Logo" width={300} height={300} />
    </main>
  );
}
