<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Departamento;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class DepartamentoController extends Controller
{
    
    public function index()
    {
        $departamentos = Departamento::all();
        return response()->json ($departamentos);
    }

   
    public function store(Request $request)
    {
        $regla =['nombre' => 'required| string | min:1 | max:100 | unique:departamentos'];
        $validacion = Validator::make($request->input(),$regla);
        if ($validacion->fails()){
            return response()->json([
                'status' => false,
                'errors' => $validacion->errors()->all()
            ],400);
        }
        $departamento = new Departamento($request->input());
        $departamento->save();
        return response()->json([
            'status' => true,
            'message' => 'Se creo satisfactoriamente'
        ],200);


        
    }

   
    public function show(Departamento $departamento)
    {
        return response()->json(['status'=>true, 'data'=>$departamento]);
    }

    
    public function update(Request $request, Departamento $departamento)
    {
        $regla =['nombre' => 'required|string|min:1|max:100'];
        $validacion = Validator::make($request->input(),$regla);
        if ($validacion->fails()){
            return response()->json([
                'status' => false,
                'errors' => $validacion->errors()->all()
            ],400);
        }
        $departamento->update($request->input());
        return response()->json([
            'status' => true,
            'message' => 'Se actualizo satisfactoriamente'
        ],200);

        
    }

   
    public function destroy(Departamento $departamento)
    {
        $departamento -> delete();
        return response()->json([
            'status' => true,
            'message' => 'Departamento Eliminado satisfactoriamente'
        ],200);
    }
}
