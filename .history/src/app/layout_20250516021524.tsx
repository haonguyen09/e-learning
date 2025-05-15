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
				{/* <ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				> */}
						{children}
				{/* </ThemeProvider> */}
				</body>
			</html>
		</ClerkProvider>
	);
}
