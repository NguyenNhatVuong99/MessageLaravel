<?php

use App\Http\Controllers\Api\MessageController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\ConversationController;
use App\Models\Message;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);
Route::group([
    'middleware' => ['authentication'],
], function () {
    Route::post("logout", [AuthController::class, "logout"]);
    Route::get("profile", [AuthController::class, "profile"]);
    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::post('change-pass', [AuthController::class, 'changePassWord']);

    Route::resource("users", UserController::class);

    Route::group([
        'prefix' => 'conversations',
    ], function () {
        Route::get('', [ConversationController::class, 'listConversation']);
        Route::get('{id}', [ConversationController::class, 'detailConversation']);
        Route::post('createNew', [ConversationController::class, 'createNewConversation']);
    });
    Route::group([
        'prefix' => 'messages',
    ], function () {
        Route::get('', [MessageController::class, 'index']);
        Route::post('', [MessageController::class, 'send']);
    });
});
