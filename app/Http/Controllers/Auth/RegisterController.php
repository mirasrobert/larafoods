<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use App\Http\Controllers\Controller;

class RegisterController extends Controller
{
    public function __invoke()
    {
        // TODO: Implement Registration of User
        $fields = request()->validate([
            'name' => ['required', 'string'],
            'email' => ['required', 'email', 'unique:users,email'],
            'password' => ['required', 'string', 'confirmed']
        ]);

        $user = User::create([
            'name' => $fields['name'],
            'email' => $fields['email'],
            'password' => bcrypt($fields['password'])
        ]);


        $token = $user->createToken(config('sanctum.SANCTUM_SECRET_TOKEN'))->plainTextToken;

        return response()->json([
           'user' => $user,
           'token' => $token
        ], 201);


    }
}
