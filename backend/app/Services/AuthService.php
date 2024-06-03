<?php

namespace App\Services;

use App\Commons\ApiResponse;
use App\Exceptions\Unauthentication;
use App\Repositories\UserRepository;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;

class AuthService
{
    protected $userRepository;
    protected $userService;
    public function __construct(UserRepository $userRepository, UserService $userService)
    {
        $this->userRepository = $userRepository;
        $this->userService = $userService;
    }
    public function register($data)
    {
        $user = $this->userService->create($data);
        $token = auth()->login($user);
        // Return the token
        return $this->respondWithToken($token);
    }
    public function login($data)
    {
        $credentials = request(['email', 'password']);

        if (!$token = auth()->attempt($credentials)) {
            throw new Unauthentication();
        }

        return $this->respondWithToken($token);
    }
    protected function respondWithToken($token)
    {
        return [
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => JWTAuth::factory()->getTTL() * 60,
            'user' => auth()->user()
        ];
    }
}
