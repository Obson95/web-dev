// components/Header.js
export default function Header() {
    return (
        <header className="p-4 text-black flex items-center justify-center bg-white shadow-md relative ">
        <nav className="flex flex-col items-center w-full">
          <div className="flex justify-center">
            <a href="/" className="mr-4">Home</a>
            <a href="/about" className="mr-4">About</a>
            <a href="/contact">Contact</a>
          </div>
        
        </nav>
      </header>
    );
  }
  
  