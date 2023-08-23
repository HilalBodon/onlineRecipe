<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Recipe;

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
    

}
