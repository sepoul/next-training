// lets add a use client directive at the top
"use client";
import Link from "next/link";
import React, { use } from "react";
// lets import the counter component from layout

// lets add a counter component
function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
      <Counter />
      <Link href="/users">Go to Users Page</Link>
    </main>
  );
}