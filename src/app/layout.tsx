import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Navigation, AuthProvider } from "../../components";
import { ChampionManager } from "../../helpers";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(options);

  // const allChempions: string = "All";

  // const res = await fetch(
  //   "https://ddragon.leagueoflegends.com/cdn/13.19.1/data/en_US/champion.json"
  // );
  // const { data } = await res.json();
  // const championManager = new ChampionManager(data);
  // championManager.addTag(allChempions);
  // const tags = championManager.getAllUniqueTags();
  // const chempions = championManager.getChempionsInArray();

 
  return (
    <html lang='en'>
      <body className={`${inter.className} `}>
        <AuthProvider>
          {children}
          <Navigation />
        </AuthProvider>
      </body>
    </html>
  );
}
