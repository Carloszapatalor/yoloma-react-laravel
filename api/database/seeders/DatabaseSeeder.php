<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\Departamento::factory(4)->create();
        \App\Models\Empleado::factory(25)->create();

         \App\Models\User::factory()->create([
            'name' => 'Test User',
            'email' => 'sistemas@example.com',
            'password' => '12345678',
         ]);
    }
}
