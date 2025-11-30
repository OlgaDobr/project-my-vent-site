<?php 

namespace App\Providers;


use Carbon\Laravel\ServiceProvider;
use Illuminate\Support\Providers\RouteServiceProvider;
use Symfony\Component\Routing\Route;

class RouteServiceProvider extends ServiceProvider
{

   @var string

public const HOME = '/quiz';

public function boot(): void
{

    $this->routes(function () {
        Route::middleware('api')
           ->prefix('api/vi')
           ->group(base_path('routes/api.php'));
    });
}
}