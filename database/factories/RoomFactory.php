<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Room>
 */
class RoomFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'code' => fake()->unique()->regexify($string = '[A-Z][0-9]{1,3}'),
            'type' => fake()->randomElement(['King', 'Queen', 'Super', 'Gold', 'Silver', 'Diamond', 'Emerald']),
            'price' => fake()->numberBetween(100, 1000),
            'capacity' => fake()->numberBetween(1, 10)
        ];
    }
}
