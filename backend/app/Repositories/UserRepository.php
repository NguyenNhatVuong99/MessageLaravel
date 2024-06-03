<?php

namespace App\Repositories;

use App\Models\User;
use App\Commons\ApiRepository;

class UserRepository extends ApiRepository
{
    public function __construct(User $model)
    {
        parent::__construct($model);
    }
}
