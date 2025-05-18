"use client";

import Link from 'next/link';
import { Button } from "@juspay/ui/button";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">Hello World</h1>
      <Button onClick={() => alert("Hello")} className='bg-blue-500 text-white cursor-pointer w-fit mx-auto px-4 py-2 rounded-md'>This button is coming from the ui package</Button>
      <p className="text-fd-muted-foreground pt-5">
        You can open{" "}
        <Link
          href="/docs"
          className="text-fd-foreground font-semibold underline"
        >
          /docs
        </Link>{" "}
        and see the documentation.
      </p>
    </main>
  );
}
