<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Weather;
use Illuminate\Support\Facades\DB;

class WeatherApiController extends Controller
{
    public function postData(Request $request){

        // return ["result"=>"Success"];
        $weather = new Weather;
        $weather->City = $request-> input('City');
        $weather->Country = $request-> input('Country');
 
        $weather->save();

        return response()->json([
            'status' => 200,
            'message' => 'Success',
        ]);

        

    }
    public function getData(){
        $users = DB::table('_weather_')->select('City','Country')->orderBy('City','ASC')->get();

        return response($users);
    }
}
