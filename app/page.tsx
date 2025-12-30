import ClientBox from "./ClientBox";

console.log("[Server Page] module loaded (server ONLY)");
await new Promise(r => setTimeout(r, 2000));

export default function Page() {
  console.log("[Server Page] component rendered (server ONLY)");
  
  return (
    <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Server Component</h1>
        <p className="mb-4">
          This is a server component. The code here runs only on the server.
        </p>
        <p>
          typeof window (server) = <b>{typeof window}</b>
        </p>
        <ClientBox />
      </div>
    </main>
  );
}