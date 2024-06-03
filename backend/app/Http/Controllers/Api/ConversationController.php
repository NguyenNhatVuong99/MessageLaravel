<?php

namespace App\Http\Controllers\Api;

use App\Commons\ApiResponse;
use App\Models\Conversation;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreConversationRequest;
use App\Http\Requests\StoreNewConverRequest;
use App\Http\Requests\UpdateConversationRequest;
use App\Services\ConversationService;

class ConversationController extends Controller
{
    protected $service;
    public function __construct(ConversationService $service)
    {
        $this->service = $service;
    }

    public function listConversation()
    {
        $data = $this->service->getListConversation();
        return ApiResponse::success($data);
    }
    public function detailConversation($id)
    {
        $data = $this->service->detailConversation($id);
        return ApiResponse::success($data);
    }

    public function createNewConversation(StoreConversationRequest $request)
    {
        $data = $this->service->createNewConversation($request);
        return ApiResponse::success($data);
    }
}
