<?php

namespace App\Models;

use App\Models\Traits\BaseModel;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Message extends Model
{
    use HasFactory, BaseModel;
    public $incrementing = false;

    protected $keyType = 'string';
    protected $fillable = [
        'conversation_id',
        'user_id',
        'content',
    ];
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
