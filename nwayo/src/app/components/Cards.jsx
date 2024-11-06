import Link from "next/link";



export default function Cards({title,description,link}) {
    return (

<Link href={link}>

<div className="relative w-96 p-6 bg-white shadow-lg rounded-lg transition-transform duration-300 transform hover:scale-105  block">
  
  {/* Top border segment */}
  <div
    className="absolute top-0 left-0 w-full h-1 bg-blue-500"
    style={{ width: '100%' }} 
  ></div>

  {/* Right border segment */}
  <div
    className="absolute top-0 right-0 h-full w-1 bg-red-500"
    style={{ height: '100%' }} 
  ></div>

  {/* Bottom border segment */}
  <div
    className="absolute bottom-0 left-0 w-full h-1 bg-red-500 "
    style={{ width: '100%' }} 
  ></div>

  {/* Left border segment */}
  <div
    className="absolute top-0 left-0 h-full w-1 bg-blue-500 "
    style={{ height: '100%' }} 
  ></div>
  
  <div className="relative z-10">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
  </div>
</div>
</Link>

);
}










