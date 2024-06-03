<?php

namespace App\Http\Controllers\Api;

use App\Commons\ApiResponse;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreMessageRequest;
use Illuminate\Http\Request;
use App\Services\MessageService;

class MessageController extends Controller
{
    protected $service;
    public function __construct(MessageService $service)
    {
        $this->service = $service;
    }
    public function index()
    {
        return ApiResponse::success("ok");
    }
    public function send(StoreMessageRequest $request)
    {
        $data = $this->service->send($request);
        return ApiResponse::success($data);
    }
}
