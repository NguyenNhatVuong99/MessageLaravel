<?php

namespace App\Services;

use App\Commons\ApiService;
use App\Exceptions\UserNotFoundException;
use App\Repositories\RoleRepository;
use App\Repositories\UserRepository;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class UserService extends ApiService
{

    protected $userRepository;
    protected $roleRepository;
    public function __construct(UserRepository $userRepository, RoleRepository $roleRepository)
    {
        $this->userRepository = $userRepository;
        $this->roleRepository = $roleRepository;
    }
    public function getAll()
    {
        return $this->userRepository->getAll();
    }
    public function getById($id)
    {
        try {
            return $this->userRepository->find($id);
        } catch (\Throwable $th) {
            throw new UserNotFoundException();
        }
    }
    public function find($id)
    {
        return $this->getById($id);
    }
    public function create($data)
    {
        $userRole = $this->roleRepository->findByName('user');
        $user = $this->userRepository->create($data);
        $user->assignRole($userRole);
        return $user;
    }
    public function update($id, $data)
    {
        $user = $this->getById($id);
        if ($user) {
            return $this->userRepository->update($id, $data);
        }
    }
    public function delete($id)
    {
        $user = $this->getById($id);
        if ($user) {
            return $this->userRepository->delete($id);
        }
    }
}
