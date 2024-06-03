<?php

namespace App\Http\Controllers\Api;

use App\Commons\ApiResponse;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\StoreUserRequest;
use App\Services\AuthService;
use Illuminate\Support\Facades\Validator;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;


class AuthController extends Controller
{
    protected $service;
    public function __construct(AuthService $service)
    {
        $this->service = $service;
    }


    /**
     * Register a User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(StoreUserRequest $request)
    {
        $data = $this->service->register($request->validated());
        return ApiResponse::success($data, 'Register successful');
    }


    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(LoginRequest $request)
    {
        $data = $this->service->login($request);
        return ApiResponse::success($data, 'Login successful');
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function profile()
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    // public function refresh()
    // {
    //     return $this->respondWithToken(JWTAuth::refresh());
    // }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */

    // public function changePassWord(Request $request)
    // {
    //     $validator = Validator::make($request->all(), [
    //         'old_password' => 'required|string|min:6',
    //         'new_password' => 'required|string|confirmed|min:6',
    //     ]);

    //     if ($validator->fails()) {
    //         return response()->json($validator->errors()->toJson(), 400);
    //     }
    //     $userId = auth()->user()->id;

    //     $user = User::where('id', $userId)->update(
    //         ['password' => bcrypt($request->new_password)]
    //     );

    //     return response()->json([
    //         'message' => 'User successfully changed password',
    //         'user' => $user,
    //     ], 201);
    // }
}
