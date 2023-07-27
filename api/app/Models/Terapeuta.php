<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Terapeuta extends Model
{
    use HasFactory;
    protected $fillabel = ['nombre', 'apellido_paterno', 'apellido_materno', 'especialidad', 'correo', 'telefono','matricula'];
}
