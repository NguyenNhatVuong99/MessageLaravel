<?php

namespace App\Http\Controllers\Api;

use App\Commons\ApiResponse;
use App\Commons\ApiService;
use App\Enums\ErrorExceptionEnum;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserRequest;
use App\Models\User;
use App\Services\UserService;
use ErrorException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;

class UserController extends Controller
{
    protected $userService;
    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = $this->userService->getAll();
        return ApiResponse::success($data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserRequest $request)
    {
        $data = $this->userService->create($request->validated());
        return ApiResponse::success($data);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $data = $this->userService->find($id);
        return ApiResponse::success($data);
       
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $data = $this->userService->find($id);
        return ApiResponse::success("Delete successfully");
    }
}
