<?php

namespace App\Commons;

use App\Commons\ApiInterface;
use Illuminate\Database\Eloquent\Model;

abstract class ApiRepository implements ApiInterface
{
    protected $_model;
    public function __construct(Model $model)
    {
        $this->_model = $model;
    }
    public function getAll()
    {
        return $this->_model->orderBy('created_at', 'desc')->get();
    }
    public function find($id)
    {
        return $this->_model->findOrFail($id);
    }
    public function create($data)
    {
        return $this->_model->create($data);
    }
    public function update($id, $data)
    {
        $data = $this->_model->findOrFail($id);
        if ($data) {
            $data->update($data);
            return $data;
        }
        return null;
    }
    public function delete($id)
    {
        $data = $this->_model->findOrFail($id);
        if ($data) {
            $data->delete();
            return true;
        }
        return false;
    }
}
