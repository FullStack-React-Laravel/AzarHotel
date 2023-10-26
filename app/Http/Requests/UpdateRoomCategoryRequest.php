<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateRoomCategoryRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => [
                'required', 'alpha', 'min:3',
                Rule::unique(' room_categories')->ignore($this->roomCategory)
            ],
            'image' => 'sometime|image',
            'price' => 'required|numeric|min:0',
            'capacity' => 'required|integer|min:0',
            'discount' => 'required|numeric|min:0',
        ];
    }
}
