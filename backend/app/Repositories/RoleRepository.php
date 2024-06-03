<?php

namespace App\Repositories;

use App\Models\Role;
use App\Commons\ApiRepository;
use Spatie\Permission\Models\Role as ModelsRole;

class RoleRepository extends ApiRepository
{
    public function __construct(ModelsRole $model)
    {
        parent::__construct($model);
    }
    public function findByName($name)
    {
        return ModelsRole::findByName($name);
    }
}
