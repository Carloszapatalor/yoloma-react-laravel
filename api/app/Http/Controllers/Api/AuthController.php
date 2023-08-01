<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function register (Request $request){

      //Validacion de datos
      $request -> validate([
        'matricula' => 'required',
        'name' => 'required',
        'email' => 'required | email | unique:users',
        'password' => 'required'
      ]);

      //alta del usuario
      $user = User::create([
        'matricula' => $request('matricula'),
        'name' => $request('name'),
        'email' => $request('email'),
        'password' => $request('password')
      ]);

      $token = $user->createToken('auth_token')->plainTextToken;

      return response()-> json([
        'access_token' => $token,
        'token_type' =>'Bearer'
      ]);

    }

    public function login (Request $request){
        
    }

    public function userProfile (Request $request){
        
    }

    public function logout (){
        
    }

    public function allUsers (Request $request){
        
    }
    
}
