<?php

namespace App\Repositories;

use App\Models\Conversation;
use App\Commons\ApiRepository;
use App\Models\Message;
use App\Models\Participant;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class ConversationRepository
{
    public function find($id)
    {
        return Conversation::findOrFail($id);
    }
    public function getListConversations($userId)
    {
        $conversationIds =  Participant::where("user_id", $userId)->pluck("conversation_id");
        // Fetch the conversations along with the participants, excluding the user
        $conversations = Conversation::whereIn('id', $conversationIds)
            ->with(['participants' => function ($query) use ($userId) {
                $query->where('user_id', '!=', $userId)->with('user');
            }])
            ->get();

        return $conversations;
    }
    public function detailConversation($conversationId)
    {
        return Message::where('conversation_id', $conversationId)
            ->with('user')
            ->get();
    }
    public function createNewConversation($arrayId)
    {
        return DB::transaction(function () use ($arrayId) {
            $conversation = new Conversation();
            $conversation->save();
            $conversationId = $conversation->id;

            foreach ($arrayId as $value) {
                // Check if the user exists
                $user = User::find($value);
                if (!$user) {
                    Log::error("User with ID $value does not exist.");
                    continue; // Skip to the next iteration
                }
                // Insert participant
                $participant = new Participant();
                $participant->conversation_id = $conversationId;
                $participant->user_id = $value;
                $participant->save();
            }

            return $conversation;
        });
    }
    public function haveCommonConversation($arrayId)
    {
        $user1Id = $arrayId[0];
        $user2Id = $arrayId[1];

        $commonConversations = Participant::where('user_id', $user1Id)
            ->whereIn('conversation_id', function ($query) use ($user2Id) {
                $query->select('conversation_id')
                    ->from('participants')
                    ->where('user_id', $user2Id);
            })
            ->exists();

        return $commonConversations;
    }
}
