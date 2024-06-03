<?php

namespace App\Commons;

interface ApiInterface
{
    function getAll();
    function find($id);
    function create($data);
    function update($id, $data);
    function delete($id);
}
