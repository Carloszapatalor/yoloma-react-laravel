<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Empleado;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class EmpleadoController extends Controller
{
    
    public function index()
    {
        $empleados = Empleado::select('empleados.*', 'departamentos.nombre as departamento')
        ->join('departamentos','departamentos.id','=','empleados.departamento_id')
        ->paginate(10);
        return response()->json($empleados);
    }

   
    public function store(Request $request)
    {
        $regla = [ 
            'nombre'=> 'required|string|min:1|max:100 ',
            'correo'=> 'required|email|max:80',
            'telefono'=> 'required|max:15',
            'departamento_id'=> 'required|numeric'
        ];

        $validacion = Validator::make($request->input(),$regla);
        if($validacion->fails()){
            return response()->json([
                'status'=>false,
                'errors'=>$validacion->errors()->all()
            ],400);
        }
            $empleado = new Empleado($request->input());
            $empleado->save();
            return response()->json([
                'status' => true,
                'message' => 'Se creo satisfactoriamente'
            ],200);
        

    }

   
    public function show(Empleado $empleado)
    {
        return response()->json(['status'=>true, 'data'=>$empleado]);
    }

   
    public function update(Request $request, Empleado $empleado)
    {
        $regla = [ 
            'nombre'=> 'required|string|min:1|max:100 ',
            'correo'=> 'required|email|max:80',
            'telefono'=> 'required|max:15',
            'departamento_id'=> 'required|numeric'
        ];

        $validacion = Validator::make($request->input(),$regla);
        if($validacion->fails()){
            return response()->json([
                'status'=>false,
                'errors'=>$validacion->errors()->all()
            ],400);
        }

            $empleado-> update($request->input());
            return response()->json([
                'status'=> true,
                'message'=>'Empleado actualizado satisfactoriamente'
            ],200);
        
    }

   
    public function destroy(Empleado $empleado)
    {
        $empleado->delete();
        return response()->json([
            'status' => true,
            'message' =>'Empleado eliminado satisfactoriamente'
        ],200);
    }

    public function EmpleadosxDepartamento(){

        $empleados = Empleado::select(DB::raw('count(empleados.id) as count, departamentos.nombre'))
        ->rightjoin('departamentos', 'departamentos.id','=','empleados.departamento_id')
        ->groupBy('departamentos.nombre')->get(); 
        
        return response()->json($empleados);
        
    }

    public function all(){
        $empleados =Empleado::select('empleados.*', 'departamentos.nombre as departamento')
        ->join('departamentos', 'departamentos.id','=','empleados.departamento_id')
        ->get();
        
        return response()->json($empleados);
    }

    
}
