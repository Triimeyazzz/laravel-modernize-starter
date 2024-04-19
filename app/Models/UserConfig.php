<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class UserConfig extends Model
{
    use HasFactory;

    protected $appends = ['is_rtl'];

    protected $fillable = [
        'mini_sidebar',
        'theme',
        'locale',
        'is_horizontal',
        'is_boxed',
        'is_card_bordered',
        'user_id',
    ];

    protected function casts(): array
    {
        return [
            'mini_sidebar' => 'boolean',
            'is_horizontal' => 'boolean',
            'is_boxed' => 'boolean',
            'is_card_bordered' => 'boolean',
        ];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function isRtl(): Attribute
    {
        return Attribute::get(fn () => in_array($this->locale, ['ar']));
    }
}
