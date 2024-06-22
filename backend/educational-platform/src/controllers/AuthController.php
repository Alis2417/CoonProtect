<?php
namespace Controllers;

use Models\User;
use Core\Request;
use Core\Response;

class AuthController {
    public function register(Request $request, Response $response) {
        $data = $request->getBody();
        $userModel = new User();

        if ($userModel->findByEmail($data['email'])) {
            return $response->json(['message' => 'Email already exists'], 400);
        }

        $userId = $userModel->create($data['username'], $data['email'], $data['password']);
        return $response->json(['message' => 'User created', 'user_id' => $userId], 201);
    }

    public function login(Request $request, Response $response) {
        $data = $request->getBody();
        $userModel = new User();
        $user = $userModel->findByEmail($data['email']);

        if (!$user || !password_verify($data['password'], $user['password'])) {
            return $response->json(['message' => 'Invalid credentials'], 401);
        }

        $token = bin2hex(random_bytes(16)); // Простой токен
        return $response->json(['access_token' => $token, 'token_type' => 'Bearer']);
    }
}