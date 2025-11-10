	
    <?php
    use Illuminate\Http\Request;
	use Illuminate\Support\Facades\Route;
	use App\Http\Controllers\Api\ProductController;
	use App\Http\Controllers\Api\ServiceController;
	use App\Http\Controllers\Api\ContactController;
	
	Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
	    return $request->user();
	});
	
	Route::get('/products', [ProductController::class, 'index']);
	Route::get('/products/{id}', [ProductController::class, 'show']);
	
	Route::get('/services', [ServiceController::class, 'index']);
	
	Route::post('/contact', [ContactController::class, 'send']);
	?>
