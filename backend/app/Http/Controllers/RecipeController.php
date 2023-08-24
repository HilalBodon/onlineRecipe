<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\Recipe;
use App\Models\Like;
use App\Models\User;



class RecipeController extends Controller
{
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'cuisine' => 'required|string|max:255',
            'ingredients' => 'required|string',
            'image' => 'required|url', 
        ]);

        $recipe = Recipe::create([
            'name' => $validatedData['name'],
            'cuisine' => $validatedData['cuisine'],
            'ingredients' => $validatedData['ingredients'],
            'image' => $validatedData['image'], 
        ]);

        return response()->json($recipe, 201);
    }


    public function index()
    {
        $recipes = Recipe::all();
        return response()->json($recipes);
    }
    

    public function likeRecipe($id){

    $recipe = Recipe::findOrFail($id); 

    if (Auth::user()->likedRecipes()->where('recipe_id', $recipe->id)->exists()) {
        return response()->json(['message' => 'Recipe already liked by the user'], 400);
    }

$like = new Like(['recipe_id' => $recipe->id,'user_id' => Auth::user()->id]);
    Auth::user()->likedRecipes()->save($like);

    error_log(Auth::user());

    $recipe->load('likes');
    $likesCount = $recipe->likes->count();
    
    return response()->json(['message' => 'Recipe liked', 'likes_count' => $likesCount], 200);
}


public function unlikeRecipe($id)
{
    $recipe = Recipe::findOrFail($id);
    
    if (!Auth::user()->likedRecipes()->where('recipe_id', $recipe->id)->exists()) {
        return response()->json(['message' => 'Recipe is not liked by the user'], 400);
    }

    Auth::user()->likedRecipes()->detach($recipe->id);

    $recipe->load('likes');
    $likesCount = $recipe->likes->count();
    
    return response()->json(['message' => 'Recipe unliked', 'likes_count' => $likesCount], 200);
}

}
