// import { Card, CardContent } from "@/components/ui/card";
// import Link from "next/link";

// export default function RecipeList({ recipeList }) {
//   console.log(recipeList);
//   return (
//     <div>
//       <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
//         <h2 className="text-4xl font-bold text-gray-800 mb-12">Recipes</h2>
//         <Link href={"/"}>Go Home</Link>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {recipeList && recipeList.length > 0
//             ? recipeList.map((recipe) => (
//                 <Link href={`/recipe-list/${recipe.id}`}>
//                   <Card>
//                     <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.1] transition-all">
//                       <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
//                         <img
//                           src={recipe.image}
//                           alt={recipe.name}
//                           className="h-full w-full object-cover object-top"
//                         />
//                       </div>
//                       <div className="p-6">
//                         <h3 className="text-lg font-bold text-gray-900">
//                           {recipe.name}
//                         </h3>
//                         <div className="mt-4 flex items-center flex-wrap gap-2">
//                           <p className="text-lg text-gray-600">
//                             Rating: {recipe.rating}
//                           </p>
//                           <div className="ml-auto">
//                             <p className="text-lg text-gray-600 font-bold">
//                               {recipe.cuisine}
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </Link>
//               ))
//             : null}
//         </div>
//       </div>
//     </div>
//   );
// }
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function RecipeList({ recipeList }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-200 to-gray-800"> {/* Gradient from light gray to dark gray */}
      <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Recipes</h2>
        <Link href="/" className="inline-block mb-4">
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200">
            Go Home
          </button>
        </Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipeList && recipeList.length > 0 ? (
            recipeList.map((recipe) => (
              <Link key={recipe.id} href={`/recipe-list/${recipe.id}`}>
                <Card>
                  <CardContent className="bg-gray-100 rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"> {/* Updated background color for cards */}
                    <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                      <img
                        src={recipe.image}
                        alt={recipe.name}
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900">
                        {recipe.name}
                      </h3>
                      <div className="mt-4 flex items-center flex-wrap gap-2">
                        <p className="text-lg text-gray-600">
                          Rating: {recipe.rating}
                        </p>
                        <div className="ml-auto">
                          <p className="text-lg text-gray-600 font-bold">
                            {recipe.cuisine}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))
          ) : (
            <p className="text-lg text-gray-600">No recipes available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
