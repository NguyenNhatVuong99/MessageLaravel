<?php

namespace App\Commons;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class ValidationExceptionHandler
{
    public static function failedValidation(Validator $validator)
    {
        $message = $validator->errors()->first();

        throw new HttpResponseException(
            ApiResponse::error($message)
        );
    }
}
