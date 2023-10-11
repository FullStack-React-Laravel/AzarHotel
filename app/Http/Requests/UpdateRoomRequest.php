<?php

namespace App\Http\Requests;

use App\Models\Room;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateRoomRequest extends FormRequest
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
            'room_number' => [
                'required',
                'regex:/[A-Z][0-9]{3}/',
                Rule::unique('rooms')->ignore($this->room)
            ],
            'type' => 'required',
            'price' => 'required|numeric|min:0',
            'capacity' => 'required|integer|min:0'
        ];
    }
}
