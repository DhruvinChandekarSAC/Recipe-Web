// import Link from "next/link";

// export default function RecipeDetailsItem({ getRecipeDetails }) {
//   return (
//     <div>
//       <Link href={"/recipe-list"}>Go to recipe list</Link>
//       <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
//         <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
//           <div className="w-full lg:sticky top-0 sm:flex gap-2">
//             <img
//               src={getRecipeDetails?.image}
//               name={getRecipeDetails?.name}
//               className="w-4/5 rounded object-cover"
//             />
//           </div>
//           <div>
//             <h2 className="text-3xl font-extrabold text-gray-950">
//               {getRecipeDetails?.name}
//             </h2>
//             <div className="gap-4 mt-5">
//               <p className="text-2xl text-gray-700">
//                 {getRecipeDetails?.mealType[0]}
//               </p>
//             </div>
//             <div className="mt-5">
//               <p className="text-xl text-gray-800">
//                 {getRecipeDetails?.cuisine}
//               </p>
//             </div>
//             <div className="mt-5">
//               <h3 className="text-lg font-bold text-gray-700">Ingredients</h3>
//               <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-700">
//                 {getRecipeDetails?.ingredients.map((item) => (
//                   <li>{item}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import Link from "next/link";

export default function RecipeDetailsItem({ getRecipeDetails }) {
  return (
    <div>
      <Link href="/recipe-list">
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200 mb-4">
          Go to recipe list
        </button>
        </Link>
      <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="w-full lg:sticky top-0 sm:flex gap-2">
            <img
              src={getRecipeDetails?.image}
              alt={getRecipeDetails?.name || "Recipe Image"} // Added alt for accessibility
              className="w-full rounded object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-gray-950">
              {getRecipeDetails?.name || "Recipe Name Not Available"} {/* Fallback */}
            </h2>
            <div className="gap-4 mt-5">
              <p className="text-2xl text-gray-700">
                {getRecipeDetails?.mealType[0] || "Meal Type Not Available"} {/* Fallback */}
              </p>
            </div>
            <div className="mt-5">
              <p className="text-xl text-gray-800">
                {getRecipeDetails?.cuisine || "Cuisine Not Available"} {/* Fallback */}
              </p>
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-bold text-gray-700">Ingredients</h3>
              <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-700">
                {getRecipeDetails?.ingredients && getRecipeDetails.ingredients.length > 0 ? (
                  getRecipeDetails.ingredients.map((item, index) => ( // Use index as key
                    <li key={index}>{item}</li> // Added key prop
                  ))
                ) : (
                  <li>No ingredients available.</li> // Fallback message
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
