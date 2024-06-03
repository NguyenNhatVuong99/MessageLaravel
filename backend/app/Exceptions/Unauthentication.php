<?php

namespace App\Exceptions;

use App\Enums\ErrorExceptionEnum;
use Exception;

class Unauthentication extends BaseException
{
    public function __construct(
        $message = "Unauthentication",
        $statusCode = 401,
        Exception $previous = null
    ) {
        parent::__construct($message, $statusCode, $previous);
    }
}
