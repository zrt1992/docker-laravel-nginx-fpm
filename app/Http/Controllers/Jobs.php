<?php

namespace App\Http\Controllers;

use App\Jobs\TestJob;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Log;

class Jobs extends BaseController
{
    function index(){
       // sleep(5);
        // die;
//        Log::info('test');
        for($i=1;$i<100;$i++){

            TestJob::dispatch($i);
        }

//        echo 'yeah';
    }
}
