<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\RecipeController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();

});

// Route::middleware('auth:sanctum')->post('recipes/{recipe}/like', 'RecipeController@likeRecipe');
// Route::middleware('auth:sanctum')->post('recipes/{recipe}/unlike', 'RecipeController@unlikeRecipe');




Route::post('login', [AuthController::class, 'login']);
Route::post('register', [AuthController::class, 'register']);
Route::post('logout', [AuthController::class, 'logout']);
Route::post('refresh', [AuthController::class, 'refresh']);


Route::post('recipes', [RecipeController::class, 'store']);
Route::get('recipes',  [RecipeController::class, 'index']);

Route::post('/recipes/{id}/like',[RecipeController::class, 'likeRecipe']);
Route::post('/recipes/{id}/unlike', [RecipeController::class,'unlikeRecipe']);


