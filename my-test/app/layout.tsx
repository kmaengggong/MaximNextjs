import Header from "@/components/header";
import "./globals.css";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="kr">
			<body>
                <div className="bg-green-400 container mx-auto max-w-xl">
                <Header />
                <div className="bg-fuchsia-700 p-10">
                    {children}
                </div>
                </div>
            </body>
		</html>
	);
}
