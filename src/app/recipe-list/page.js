import RecipeList from "@/components/ui/recipe-list";

async function fetchListOfRecipes() {
    try {
      const apiResponse = await fetch("https://dummyjson.com/recipes");
      const data = await apiResponse.json();
  
      return data?.recipes;
    } catch (e) {
      throw new Error(e);
    }
  }
export default async function Recipes() {
    const recipeList = await fetchListOfRecipes();
    return <RecipeList recipeList={recipeList} />;
  }

// Page.js of recipe-list to components->recipe-list->index.js