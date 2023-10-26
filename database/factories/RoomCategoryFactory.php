<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\RoomCategory>
 */
class RoomCategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->unique()->word,
            'image' => fake()->imageUrl,
            'description' => fake()->text,
            'capacity' => fake()->numberBetween(1, 11),
            'price' => fake()->numberBetween(100, 10000),
            'discount' => fake()->numberBetween(0, 50),
        ];
    }
}
