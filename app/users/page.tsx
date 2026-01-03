import Link from "next/link";

export default function Users() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold">Welcome to the Users Page</h1>
        <Link href="/">Go to Home Page</Link>
        </main>
    );
    }
