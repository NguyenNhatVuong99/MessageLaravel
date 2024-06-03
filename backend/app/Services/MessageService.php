<?php

namespace App\Services;

use App\Events\MessagePushed;
use App\Repositories\MessageRepository;

class MessageService
{
    /**
     * @var [type]
     */
    protected $userId;
    /**
     * @var [type]
     */
    protected $messageRepository;
    /**
     * @var [type]
     */
    protected $conversationService;
    public function __construct(
        MessageRepository $messageRepository,
        ConversationService $conversationService
    ) {
        $this->userId = auth()->id();
        $this->messageRepository = $messageRepository;
        $this->conversationService = $conversationService;
    }
    public function send($request)
    {
        $this->conversationService->find($request->conversation_id);

        $message = $this->messageRepository->send($request, $this->userId);
        event(new MessagePushed($message));
        return $message;
    }
}
