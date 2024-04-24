<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('trashbin', function (Blueprint $table) {
            $table->id();
            $table->string('name')->request();
            $table->string('status')->request();
            $table->string('location')->nullable();
            $table->string('type')->request();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('trashbin');
    }
};