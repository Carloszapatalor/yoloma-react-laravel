<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use PhpParser\Parser\Tokens;

class AuthController extends Controller
{
   public function create(Request $request){
    $reglas =[
      'name' => 'required | string | max:100',
      'email' => 'required | string | email | max:100 | unique:users',
      'password' => 'required | string | min:8'
    ];

    $validacion = Validator::make($request->input(),$reglas);
    if ($validacion->fails()){
      return response()->json([
        'status' => false,
        'errors' =>$validacion->errors()->all()
      ],400);
    }
    $user = User::create([
      'name' => $request->name,'email' => $request->email,
      'password' => Hash::make($request->password)
    ]);

    return response()->json([
      'status' => true,
      'message' =>'Usuario creado satisfactoriamente',
      'token' => $user->createToken('API TOKEN')->plainTextToken
    ],200);

   }

   public function login(Request $request){
    $reglas =[
      'email' => 'required | string | email | max:100',
      'password' => 'required | string '
    ];
    $validacion = Validator::make($request->input(),$reglas);
    if ($validacion->fails()){
      return response()->json([
        'status' => false,
        'errors' => $validacion->errors()->all()
      ],400);
    }
    if(!Auth::attempt($request->only('email','password'))){
      return response()->json([
        'status' => false,
        'errors' => ['No autorizado']
      ],401);
    }
    $user = User::where('email',$request->email)->first();
    return response ()->json([
      'status' => true,
      'message'=> 'Inicio sesion satisfactoriamente',
      'data' => $user,
      'token' => $user->createToken('API TOKEN')->plainTextToken
    ],200);
  }

    public function logout (){
      
      auth()-> user() -> tokens() -> delete();
      return response ()->json([
        'status' => true,
        'message ' => 'Se cerro sesion satisfacotriamente',
      
      ],200);

    }}