<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Spatie\Permission\Models\Role;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $adminRole = Role::findByName('admin');
        $user = new User();
        $user->name = 'Administrator';
        $user->email = 'admin@gmail.com';
        $user->email_verified_at = now();
        $user->password = Hash::make('password');
        $user->remember_token = Str::random(10);
        $user->save();
        $user->assignRole($adminRole);

        $userRole = Role::findByName('user');

        for ($i = 0; $i < 100; $i++) {
            $user = new User();
            $user->name = fake()->name();
            $user->email = $i . "@gmail.com";
            $user->email_verified_at = now();
            $user->password = Hash::make('password');
            $user->remember_token = Str::random(10);
            $user->save();
            $user->assignRole($userRole);
        }
    }
}
