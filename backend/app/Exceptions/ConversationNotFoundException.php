<?php

namespace App\Exceptions;

use App\Enums\ErrorExceptionEnum;
use Exception;

class ConversationNotFoundException extends BaseException
{
    public function __construct(
        $message = "CONVERSATION NOT FOUND",
        $statusCode = 404,
        Exception $previous = null
    ) {
        parent::__construct($message, $statusCode, $previous);
    }
}
