<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\WeatherApiController;
use App\Http\Controllers\TestController;

Route::post('/add_city',[WeatherApiController::class,'postData']);
Route::get('/show_city',[WeatherApiController::class,'getData']);

// Route::post('/add',[TestController::class,'check']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();   
});
