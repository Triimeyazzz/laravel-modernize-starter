<?php

use App\Enums\Themes;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('user_configs', function (Blueprint $table) {
            $table->id();
            $table->boolean('mini_sidebar')->default(false);
            $table->string('theme', 25)->default(Themes::Blue->value);
            $table->char('locale', 2)->default('en');
            $table->boolean('is_horizontal')->default(false);
            $table->boolean('is_boxed')->default(true);
            $table->boolean('is_card_bordered')->default(false);
            $table->foreignIdFor(User::class)->constrained()->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_configs');
    }
};
