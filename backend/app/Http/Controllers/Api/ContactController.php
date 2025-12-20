<?php
	namespace App\Http\Controllers\Api;
	
	use App\Http\Controllers\Controller;
	use Illuminate\Http\Request;
	use Illuminate\Support\Facades\Mail; // Для отправки писем	use App\Mail\ContactFormReceived; // Ваш класс письма
	
	class ContactController extends Controller
	{
	    public function send(Request $request)
	    {
	        $request->validate([
	            'name' => 'required',
	            'email' => 'required|email',
	            'phone' => 'nullable',
	            'message' => 'required',
	        ]);
	
	        // Отправка письма администратору
	        Mail::to('admin@yourcompany.com')->send(new ContactFormReceived($request->all()));
	
	        // Или сохранение в базу данных, или отправка в CRM
	
	        return response()->json(['message' => 'Thank you for your message! We will contact you shortly.']);
	    }
	}
?>
