<?php

namespace App\Http\Requests;

use App\Enums\Themes;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateUserConfigRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'locale' => ['sometimes', Rule::in(['ar', 'en'])],
            'theme' => ['sometimes', Rule::enum(Themes::class)],
            'is_horizontal' => ['sometimes', 'boolean'],
            'is_boxed' => ['sometimes', 'boolean'],
            'is_card_bordered' => ['sometimes', 'boolean'],
        ];
    }
}
