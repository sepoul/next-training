// lets import use state from react
// lets add use client directive at the top
import React from "react";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("[layout] rendered");
  return (
    <html>
      <body>
        <nav>Shared nav</nav>
        {children}
      </body>
    </html>
  );
}
