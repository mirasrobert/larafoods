<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Gloudemans\Shoppingcart\Facades\Cart;
use Illuminate\Http\Request;

class ShoppingCartController extends Controller
{
    public function index()
    {
        Cart::instance('default')->restore(auth()->user()->id);
        $cart = Cart::instance('default')->content();
        $cartContent = [];
        foreach ($cart as $key => $item) {
            // Same with array_push($cartContent, $item)
            $cartContent[] = $item;
        }
        return response()->json($cartContent);
    }

    public function store(Product $product, Request $request)
    {
        // Erase the old cart from the database
        Cart::instance('default')->erase(auth()->user()->id);

        $weight = 330;
        Cart::add(['id' => $product->id,
            'name' => $product->name,
            'qty' => $request->qty,
            'price' => $request->price,
            'weight' => $weight,
            'options' => [
                'size' => $request->size,
                'image' => $product->image->url,
            ]
        ]);

        // Replace the Old Cart from Database with the New Cart to the Database
        Cart::instance('default')->store(auth()->user()->id);

        return response()->json([
            'message' => 'A product has been added to your cart.'
        ]);
    }

    public function destroy($id)
    {
        Cart::instance('default')->remove($id);
        return response()->json([
            'message' => 'An item has been removed to cart.'
        ]);
    }

    public function count()
    {
        return response()->json(['count' => Cart::instance('default')->content()->count()]);
    }
}
