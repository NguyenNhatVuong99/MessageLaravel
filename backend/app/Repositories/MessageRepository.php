<?php

namespace App\Repositories;

use App\Models\Message;
use App\Commons\ApiRepository;

class MessageRepository
{
    public function send($request, $user_id)
    {
        $message = new Message();
        $message->user_id = $user_id;
        $message->content = $request->content;
        $message->conversation_id = $request->conversation_id;
        $message->save();
        return $message;
    }
}
