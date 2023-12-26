import Navbar from "../components/Navbar";

export const metadata = {
  title: "Treasure Home",
  description: "This is my principal page of my online store",
  keywords: ['Treasure', 'Tesoro', 'Cofre'],
  authors: [{ name: 'LX Corp.', url: 'https://github.com/PatrickZurita' }],
  creator: 'Patrick Zurita',
  publisher: 'Patrick Zurita'
}

export default function RootLayout({children}){
return (
    <html>
      
      <body>
       <Navbar/>
          
       {children}
      </body>
    </html>
  );
}