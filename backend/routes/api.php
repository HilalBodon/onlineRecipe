<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\RecipeController;

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::post('/recipes/{recipe}/comment', [RecipeController::class, 'addComment']);
    Route::get('/recipes/{recipe}/comments', [RecipeController::class, 'listComments']);

    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
});

Route::post('/recipes/{recipe}/comment', [RecipeController::class, 'addComment']);
Route::get('/recipes/{recipe}/comments', [RecipeController::class, 'listComments']);

Route::post('login', [AuthController::class, 'login']);
Route::post('register', [AuthController::class, 'register']);

Route::post('recipes', [RecipeController::class, 'store']);
Route::get('recipes',  [RecipeController::class, 'index']);

Route::post('/recipes/{id}/like', [RecipeController::class, 'likeRecipe']);
Route::post('/recipes/{id}/unlike', [RecipeController::class, 'unlikeRecipe']);
Route::get('/recipes/{recipe}/is-liked', [RecipeController::class, 'isLiked']);



