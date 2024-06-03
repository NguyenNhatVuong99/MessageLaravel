<?php

namespace App\Models;

use App\Models\Traits\BaseModel;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Conversation extends Model
{
    use HasFactory, BaseModel;
    public $incrementing = false;

    protected $keyType = 'string';
    protected $fillable = [
        'type',
        'name',
        "last_message_id",
    ];
    protected $hidden = [
        'created_at',
        'updated_at',
    ];
    public function participants(): HasMany
    {
        return $this->hasMany(Participant::class);
    }
}
