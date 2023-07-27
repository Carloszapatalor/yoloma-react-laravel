<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Terapeuta;
use Illuminate\Http\Request;

class TerapeutaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $terapeutas=Terapeuta::all();
        return $terapeutas;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request )
    {
        $terapeuta  = new Terapeuta();
        $terapeuta -> nombre = $request->nombre;
        $terapeuta->apellido_paterno = $request -> apellido_paterno;
        $terapeuta->apellido_materno = $request -> apellido_materno;
        $terapeuta->especialidad = $request -> especialidad;
        $terapeuta->correo = $request -> correo;
        $terapeuta->telefono = $request -> telefono;
        $terapeuta->matricula = $request -> matricula;

        $terapeuta->save();
    }

    /**
     * Display the specified resource.
     */
    public function show ($id)
    {
       $terapeuta =  Terapeuta::find($id);
       return $terapeuta;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
       $terapeuta = Terapeuta::findOrFail($request ->id);
       $terapeuta->nombre = $request->nombre;
       $terapeuta->apellido_materno = $request->apellido_materno;
       $terapeuta->especialidad = $request->especialidad;
       $terapeuta->correo = $request->correo;
       $terapeuta->telefono = $request->telefono;
       $terapeuta->matricula = $request->matricula;

       $terapeuta->save();
       return $terapeuta;

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $terapeuta = Terapeuta:: destroy($id);
        return $terapeuta;
    }
}
