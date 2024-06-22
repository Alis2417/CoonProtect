<?php
use Controllers\AuthController;
use Core\Request;
use Core\Response;

$request = new Request();
$response = new Response();

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$method = $_SERVER['REQUEST_METHOD'];

switch ($uri) {
    case '/register':
        if ($method == 'POST') {
            (new AuthController())->register($request, $response);
        } else {
            $response->json(['message' => 'Method Not Allowed'], 405);
        }
        break;
    case '/login':
        if ($method == 'POST') {
            (new AuthController())->login($request, $response);
        } else {
            $response->json(['message' => 'Method Not Allowed'], 405);
        }
        break;
    default:
        $response->json(['message' => 'Not Found'], 404);
        break;
}