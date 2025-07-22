<?php
// Contact Form and Newsletter Handler
header('Content-Type: application/json');

// Start session for CSRF protection
session_start();

// Prevent direct access
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Generate CSRF token if not exists
if (!isset($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}

// Check if this is a newsletter subscription
if (isset($_POST['action']) && $_POST['action'] === 'newsletter') {
    handleNewsletter();
} else {
    handleContactForm();
}

function handleNewsletter() {
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    
    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Please enter a valid email address']);
        exit;
    }
    
    // Here you would typically save to database or email service
    // For now, we'll just send a confirmation email
    $to = $email;
    $subject = "Newsletter Subscription Confirmation - Malen Auto Repair";
    $message = "Thank you for subscribing to our newsletter!\n\n";
    $message .= "You'll receive updates about our services, special offers, and automotive tips.\n\n";
    $message .= "Best regards,\nMalen Auto Repair Team";
    
    $headers = "From: needhelprepair@gmail.com\r\n";
    $headers .= "Reply-To: needhelprepair@gmail.com\r\n";
    
    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(['success' => true, 'message' => 'Thank you for subscribing to our newsletter!']);
    } else {
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Sorry, there was an error processing your subscription.']);
    }
}

function handleContactForm() {
    // CSRF Protection for contact form
    if (!isset($_POST['csrf_token']) || $_POST['csrf_token'] !== $_SESSION['csrf_token']) {
        http_response_code(403);
        echo json_encode(['success' => false, 'message' => 'Invalid request']);
        exit;
    }

// Sanitize and validate input
$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
$subject = filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_STRING);
$message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);

// Validation
$errors = [];

if (empty($name) || strlen($name) < 2) {
    $errors[] = 'Name must be at least 2 characters long';
}

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Please enter a valid email address';
}

if (empty($subject)) {
    $errors[] = 'Please select a service type';
}

if (empty($message) || strlen($message) < 10) {
    $errors[] = 'Message must be at least 10 characters long';
}

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Validation failed', 'errors' => $errors]);
    exit;
}

// Email configuration
$to = 'needhelprepair@gmail.com'; // Use consistent email
$email_subject = "New Contact Form Submission: $subject";
$email_body = "You have received a new message from your website contact form.\n\n";
$email_body .= "Name: $name\n";
$email_body .= "Email: $email\n";
$email_body .= "Subject: $subject\n";
$email_body .= "Message:\n$message\n";

$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send email
if (mail($to, $email_subject, $email_body, $headers)) {
    echo json_encode(['success' => true, 'message' => 'Thank you! Your message has been sent successfully.']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Sorry, there was an error sending your message.']);
}
}
?>
