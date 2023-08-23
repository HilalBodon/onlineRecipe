<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Recipe;

class RecipesTableSeeder extends Seeder
{
    public function run()
    {
        Recipe::create([
            'name' => 'Pasta Carbonara',
            'cuisine' => 'Italian',
            'ingredients' => 'Pasta, eggs, cheese, pancetta',
            'image' => "https://images.pexels.com/photos/3434523/pexels-photo-3434523.jpeg?auto=compress&cs=tinysrgb&w=600"
        ]);

        Recipe::create([
            'name' => 'Chicken Curry',
            'cuisine' => 'Indian',
            'ingredients' => 'Chicken, curry spices, coconut milk',
            'image' => "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=600"
        ]);

        Recipe::create([
            'name' => 'Chicken Curry',
            'cuisine' => 'Indian',
            'ingredients' => 'Chicken, curry spices, coconut milk',
            'image' => " https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=600"
        ]); 

        Recipe::create([
            'name' => 'Chicken Curry',
            'cuisine' => 'Indian',
            'ingredients' => 'Chicken, curry spices, coconut milk',
            'image' => "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=600"
        ]);
        
        Recipe::create([
            'name' => 'Chicken Curry',
            'cuisine' => 'Indian',
            'ingredients' => 'Chicken, curry spices, coconut milk',
            'image' => "https://images.pexels.com/photos/2983099/pexels-photo-2983099.jpeg?auto=compress&cs=tinysrgb&w=600"
        ]);

        Recipe::create([
            'name' => 'Chicken Curry',
            'cuisine' => 'Indian',
            'ingredients' => 'Chicken, curry spices, coconut milk',
            'image' => "https://images.pexels.com/photos/604969/pexels-photo-604969.jpeg?auto=compress&cs=tinysrgb&w=600"
        ]);

        }

    }


