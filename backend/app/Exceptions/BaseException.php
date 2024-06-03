<?php

namespace App\Exceptions;

use App\Commons\ApiResponse;
use Exception;

class BaseException extends Exception
{
    protected $statusCode;
    protected $errorMessage;

    public function __construct(
        $message,
        $statusCode = 400,
        Exception $previous = null
    ) {
        parent::__construct($message, 0, $previous);
        $this->statusCode = $statusCode;
        $this->errorMessage = $message;
    }

    public function render($request)
    {
        return ApiResponse::error($this->errorMessage, $this->statusCode);
    }
}
