import {Navbar} from '@/components/Navbar/Navbar';
import '@/styles/globals.css';
import "@flaticon/flaticon-uicons/css/all/all.css";

//import "@/node_modules/plyr/dist/plyr.css";
import {Footer} from '@/components/Footer/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navbar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
