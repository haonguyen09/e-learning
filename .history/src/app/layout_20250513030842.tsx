"use client";

import { manrope } from "@/utils";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className={manrope.className}>
					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
