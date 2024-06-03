<?php

namespace App\Commons;

use Illuminate\Cache\Repository;

abstract class ApiService implements ApiInterface
{
    abstract public function getAll();
    abstract public function find($id);
    abstract public function create($data);
    abstract public function update($id, $data);
    abstract public function delete($id);
}
