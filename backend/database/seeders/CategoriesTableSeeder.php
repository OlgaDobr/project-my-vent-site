<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('categories')->insert([
            ['category_name' => 'Вентилятор'],
            ['category_name' => 'Решетка'],
            ['category_name' => 'Рекуператор тепла'],
            ['category_name' => 'Система фильтрации воздуха'],
            ['category_name' => 'Воздуховод гибкий'],
            ['category_name' => 'Клапан'],
            ['category_name' => 'Расходные материалы'],
            ['category_name' => 'Пожарные клапаны'],
        ]);
    }
}
