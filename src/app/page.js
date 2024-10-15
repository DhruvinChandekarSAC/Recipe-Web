// import Image from "next/image";
// import Link from "next/link";

// export default function Home() {
//   return (
//    <div>
//     <h1>Welcome to Recipe App</h1>
//     <Link href = {"/recipe-list"}>Explore Recipes</Link>
//     </div>
//   );
// }
import Image from "next/image"; // If you want to use an image
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-200 to-gray-800"> {/* Gradient from light gray to dark gray */}
      <h1 className="text-5xl font-bold mb-6 text-gray-800">Welcome to Recipe App</h1>
      {/* You can add an image here if desired */}
      {/* <Image 
        src="/path/to/your/image.jpg" 
        alt="Recipe Banner" 
        width={600} 
        height={300} 
        className="mb-6 rounded-md shadow-lg"
      /> */}
      <Link href="/recipe-list" className="px-6 py-3 mt-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all">
        Explore Recipes
      </Link>
    </div>
  );
}
