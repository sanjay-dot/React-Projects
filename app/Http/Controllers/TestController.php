<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{
    function check(){
        return ["result"=>"Success"];
    }
}
