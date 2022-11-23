<?php

namespace App\Services;

use App\Models\Image;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ProductService
{

    /**
     * Store a new product resource
     * @param Request $request
     * @return Product $product
     */
    public function storeProduct(Request $request): Product
    {
        $fields = $request->validate([
            'name' => ['required', 'string'],
            'regular_price' => ['required', 'string'],
            'small_price' => ['required', 'string'],
            'large_price' => ['required', 'string'],
        ]);

        $slug = Str::slug($request->name);

        $uploadedFileUrl = 'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg';

        if ($request->hasFile('image')) {
            // Upload an image file to cloudinary with one line of code
            // $uploadedFileUrl = cloudinary()->upload($request->file('image')->getRealPath())->getSecurePath();
            $uploadedFileUrl = $request->file('image')->store('pizza', 'public');
            $uploadedFileUrl = '/storage/' . $uploadedFileUrl;
        }

        $product = Product::create([
            'name' => $fields['name'],
            'slug' => $slug,
        ]);

        Image::create([
            'url' => $uploadedFileUrl,
            'imageable_id' => $product->id,
            'imageable_type' => 'App\Models\Product'
        ]);

        // Regular
        $product->product_attribute()->create([
            'size' => 'regular',
            'price' => $request->regular_price,
            'stocks' => 30
        ]);

        // Small
        $product->product_attribute()->create([
            'size' => 'small',
            'price' => $request->small_price,
            'stocks' => 30
        ]);

        // Large
        $product->product_attribute()->create([
            'size' => 'large',
            'price' => $request->large_price,
            'stocks' => 30
        ]);

        return $product;
    }
}
