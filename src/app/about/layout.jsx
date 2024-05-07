import { IBM_Plex_Mono } from "next/font/google";

const ibm = IBM_Plex_Mono({ subsets: ["latin"], weight:['400', '700'] });

export const metadata = {
  title: "About Ecommerce",
  description: "Fundamentals of React",
};

export default function RootLayout({ children }) {
  return (
      <div className={ibm.className}>

        <div>this is about layout</div>
        {children}
      </div>
  );
}

