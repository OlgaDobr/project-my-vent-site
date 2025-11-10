<?php
	namespace App\Http\Controllers\Api;

	use App\Http\Controllers\Controller;
	use App\Models\Product; // Предполагается, что у вас есть модель Product
	use Illuminate\Http\Request;
	
	class ProductController extends Controller
	{
	    public function index()
	    {
	        // Получаем все продукты из базы данных
	        $products = Product::all();
	        return response()->json($products);
	    }
	
	    public function show($id)
	    {
	        // Получаем один продукт по ID
	        $product = Product::find($id);
	        if (!$product) {
	            return response()->json(['message' => 'Product not found'], 404);
	        }
	        return response()->json($product);
	    }
	}
?>