<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'email' => 'alex@email.com',
            'password' => 'alex111',
            'firstname' => 'alex',
            'lastname' => 'alexs',
            'company' => 'alex doo',
            'country' => 'serbia',
        ]);

    }
}
