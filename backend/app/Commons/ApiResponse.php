<?php

namespace App\Commons;

class ApiResponse
{
    
    public static function success($data = [], $message = 'Success', $code = 200)
    {
        $response = [
            'success' => true,
            'message' => $message,
            'data' => $data,
            'timeStamp' => now()
        ];

        return response()->json($response, $code);
    }

    public static function error($message = 'Error', $code = 400)
    {
        $response = [
            'success' => false,
            'code' => $code,
            'message' => $message,
            'timeStamp' => now()
        ];

        return response()->json($response, $code);
    }
}
