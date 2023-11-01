<?php

namespace Database\Factories;

use App\Models\RoomCategory;
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
            'number' => fake()->unique()->regexify('[A-Z][0-9]{3}'),
            'category_id' => RoomCategory::inRandomOrder()->first()->id,
        ];
    }
}
