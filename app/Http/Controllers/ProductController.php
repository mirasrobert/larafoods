<?php

namespace App\Http\Controllers;

use App\Models\Image;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use App\Services\ProductService;


class ProductController extends Controller
{
    public function index()
    {
        return response()->json(Product::with(['image', 'product_attribute'])->get());
    }

    public function store(Request $request)
    {
        $product = new ProductService();
        $product = $product->storeProduct($request);
        return response()->json($product);
    }

    public function show($id)
    {
        $product = Product::with(['image', 'product_attribute'])->find($id);

        if (!$product) {
            return response()->json([
                'message' => 'Product not found'
            ], 404);
        }

        return response()->json($product);
    }

    public function update(Request $request, Product $product)
    {
        $fields = $request->validate([
            'name' => ['required', 'string'],
        ]);

        $slug = Str::slug($request->name);

        $product->update([
            'name' => $fields['name'],
            'slug' => $slug
        ]);

        return response()->json($product);
    }

    public function destroy(Product $product)
    {
        $id = $product->id;
        $product->delete();
        return response([
            'message' => 'Removed',
            'id' => $id
        ]);

    }
}
