<?php

namespace App\Exceptions;

use App\Enums\ErrorExceptionEnum;
use Exception;

class UserNotFoundException extends BaseException
{
    public function __construct(
        $message = "USER_NOT_FOUND",
        $statusCode = 404,
        Exception $previous = null
    ) {
        parent::__construct($message, $statusCode, $previous);
    }
}
