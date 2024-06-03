<?php

namespace App\Services;

use App\Exceptions\ConversationNotFoundException;
use App\Repositories\ConversationRepository;
use App\Repositories\UserRepository;
use Illuminate\Support\Facades\Auth;

class ConversationService
{
    private $userId;
    protected $userService;
    protected $userRepository;
    protected $conversationRepository;
    public function __construct(
        UserService $userService,
        UserRepository $userRepository,
        ConversationRepository $conversationRepository
    ) {
        $this->userId = Auth::id();
        $this->userService = $userService;
        $this->userRepository = $userRepository;
        $this->conversationRepository = $conversationRepository;
    }
    public function find($id){
        try {
            return $this->conversationRepository->find($id);
        } catch (\Throwable $th) {
            throw new ConversationNotFoundException();
        }
    }
    public function getListConversation()
    {
        return $this->conversationRepository->getListConversations($this->userId);
    }
    public function detailConversation($id)
    {
        $this->find($id);
        return $this->conversationRepository->detailConversation($id);
    }
    public function createNewConversation($request)
    {
        $userId2 = $request->input("id");
        $partner = $this->userService->find($userId2);
        $arrayId = [$this->userId, $userId2];
        if (!$this->haveCommonConversation($arrayId)) {
            return $this->conversationRepository->createNewConversation($arrayId);
        };
    }
    public function haveCommonConversation($arrayId)
    {
        return $this->conversationRepository->haveCommonConversation($arrayId);
    }
}
