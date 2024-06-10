import { Montserrat  , Noto_Kufi_Arabic} from "next/font/google";
import "./globals.css";
import 'funuicss/css/fun.css'
import "aos/dist/aos.css"
const font = Montserrat({ subsets: ["latin"]  , weight:["100", "300", "400", "500","600","700","800"]});

export const metadata = {
  title: "Huwal Quran",
  description: "Read quran with any device",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <div >
      <body className={[font.className ]}>{children}</body>
      </div>
    </html>
  );
}
