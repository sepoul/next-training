'use client'
import Image from "next/image";
// lets import react's useState
import { useState } from "react";

// lets write a simple counter component with + and - buttons

function Counter() {
  const [count, setCount] = useState(0);
  const doubleCount = count * 2;

  return (
    <div className="flex items-center gap-4">
      <button
        className="px-4 py-2 bg-red-500 text-white rounded"
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
      <span className="text-xl">{count}</span>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
      <span className="text-xl text-gray-500">Double: {doubleCount}</span>
    </div>
  );
}

// lets add another component that generates a random joke from an array of jokes
function JokeGenerator() {
  const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don't skeletons fight each other? They don't have the guts.",
    "What do you call fake spaghetti? An impasta!",
  ];

  const [joke, setJoke] = useState("");

  const generateJoke = () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    setJoke(jokes[randomIndex]);
  };
  return (
    <div className="mt-4">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={generateJoke}
      >
        Generate Joke
      </button>
      {joke && <p className="mt-2 text-lg">{joke}</p>}
    </div>
  );
}


// lets add a component to represent a table containing static data (for now) about llm models and tokens

function LLMTable() {
  const models = [
    { name: "GPT-3", tokens: 2048 },
    { name: "GPT-4", tokens: 8192 },
    { name: "Claude", tokens: 10000 },
  ];

  return (
    <table className="min-w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2">Model</th>
          <th className="border border-gray-300 px-4 py-2">Max Tokens</th>
        </tr>
      </thead>
      <tbody>
        {models.map((model) => (
          <tr key={model.name}>
            <td className="border border-gray-300 px-4 py-2">{model.name}</td>
            <td className="border border-gray-300 px-4 py-2">{model.tokens}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              When I find myself in times of trouble, Mother Mary comes to me
            </h1>
            {/* lets add the counter component */}
            <Counter />
          </div>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
            Otherwise call 911
          </p>
        </div>
        {/* lets add the joke generator component with some space around */}
        <div className="mt-8">
          <JokeGenerator />
        </div>
        {/* lets add the llm table component with some space around */}
        <div className="mt-8 w-full">
          <LLMTable />
        </div>

        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row mt-16">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Release app
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            More info
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub repo
          </a>
        </div>
      </main>
    </div>
  );
}
