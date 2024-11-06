import './ui/globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Your App Title</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>
     
      <body>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main  className="flex-grow">{children}</main>
        <Footer />
        </div>
      </body>
    </html>
  );
}
