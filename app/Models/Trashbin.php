<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Trashbin extends Model
{
    use HasFactory;
    use Notifiable;

    protected $fillable = [
        'name',
        'status',
        'location',
        'type',
    ];
}