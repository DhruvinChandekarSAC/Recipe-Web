// import RecipeDetailsItem from "@/components/recipe-details";

// async function fetchRecipeDetails(currentRecipeId) {
//   try {
//     const apiResponse = await fetch(
//       `https://dummyjson.com/recipes/${currentRecipeId}`
//     );
//     const data = await apiResponse.json();

//     return data;
//   } catch (error) {
//     throw new Error(error);
//   }
// }

// export default async function RecipeDetails({ params }) {
//   const getRecipeDetails = await fetchRecipeDetails(params?.details);

//   return <RecipeDetailsItem getRecipeDetails={getRecipeDetails} />;
// }
import RecipeDetailsItem from "@/components/recipe-details";

// Fetch recipe details from the API
async function fetchRecipeDetails(currentRecipeId) {
  try {
    const apiResponse = await fetch(
      `https://dummyjson.com/recipes/${currentRecipeId}`
    );
    const data = await apiResponse.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

// RecipeDetails page component
export default async function RecipeDetails({ params }) {
    const getRecipeDetails = await fetchRecipeDetails(params?.details);
  
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-800"> {/* Gradient from light gray to dark gray */}
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Recipe Details
          </h1>
          <RecipeDetailsItem getRecipeDetails={getRecipeDetails} />
        </div>
      </div>
    );
  }
  