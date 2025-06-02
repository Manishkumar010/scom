<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$Name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$number = $_POST['number'];

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();                                    
    $mail->Host       = 'smtp.gmail.com';               
    $mail->SMTPAuth   = true;                           
    $mail->Username   = 'scomexperiences@gmail.com';         
    $mail->Password   = 'wncc hurs ajel eupa';            
    $mail->SMTPSecure = 'tls';                          
    $mail->Port       = 587;                            

    $mail->setFrom('scomexperiences@gmail.com', 'Website');
    $mail->addAddress('scomexperiences@gmail.com');     

    $mail->isHTML(true);                                
    $mail->Subject = 'Contact Form Submission';
    $mail->Body    = "<strong>First Name:</strong>$Name <br>
                      <strong>Email:</strong> $email<br>
                      <strong>Email:</strong> $number<br>
                      <strong>Message:</strong>$message<br>";

    $mail->send();
    header("Location:formsubmited.html");
    exit;
    echo "Message Sent Successfully!";
} catch (Exception $e) {
    echo "Message could not be sent. Error: {$mail->ErrorInfo}";
}
?>
