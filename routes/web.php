<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::group(['middleware'=>['home-middleware','auth']], function () {
    Route::get('/', 'HomeController@home');

    Route::get('/tasksPanel', function(){
        return view("index");
    });


});



Auth::routes();