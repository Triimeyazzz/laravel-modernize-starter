<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use App\Enums\Themes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory;
    use Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function config(): HasOne
    {
        return $this->hasOne(UserConfig::class)->withDefault([
            'mini_sidebar' => false,
            'theme' => Themes::Blue->value,
            'locale' => 'en',
            'is_horizontal' => false,
            'is_boxed' => true,
            'is_card_bordered' => false,
        ]);
    }
}
