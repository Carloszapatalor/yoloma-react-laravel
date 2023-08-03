<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\TerapeutaController;
use App\Models\Terapeuta;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\DepartamentoController;
use App\Http\Controllers\Api\EmpleadoController;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

/* Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
}); 
 */
/*
|--------------------------------------------------------------------------
| Rutas de proteccion 
|--------------------------------------------------------------------------
*/

Route::post('auth/register',[AuthController::class,'create']);
Route::post('auth/login',[AuthController::class,'login']);

Route::middleware(['auth:sanctum']) ->group(function(){
/*
|--------------------------------------------------------------------------
| Rutas de Empleados y Departamentos
|--------------------------------------------------------------------------
*/

Route::resource('departamentos', DepartamentoController::class);
Route::resource('empleados',EmpleadoController::class);
Route::get('empleadosall',[EmpleadoController::class,'all']);
Route::get('empleadosxdepartamento',[EmpleadoController::class,'EmpleadosxDepartamento']);
Route::get('auth/logout', [AuthController::class, 'logout']);

/*
|--------------------------------------------------------------------------
| Rutas de Terapeutas
|--------------------------------------------------------------------------
*/
Route::controller(TerapeutaController::class)->group(function(){
    Route::get ('/terapeutas','index');
    Route::post ('/terapeuta','store');
    Route::get ('/terapeuta/{id}','show');
    Route::put ('/terapeuta/{id}','update');
    Route::delete ('/terapeuta/{id}','destroy');
});

});