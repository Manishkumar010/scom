<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$Name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();                                    
    $mail->Host       = 'smtp.gmail.com';               
    $mail->SMTPAuth   = true;                           
    $mail->Username   = 'mk519956@gmail.com';         
    $mail->Password   = 'llay vwib uatf bsqn';            
    $mail->SMTPSecure = 'tls';                          
    $mail->Port       = 587;                            

    $mail->setFrom('mk519956@gmail.com', 'Website');
    $mail->addAddress('mk519956@gmail.com');     

    $mail->isHTML(true);                                
    $mail->Subject = 'Contact Form Submission';
    $mail->Body    = "<strong>First Name:</strong> $Name  <br>
                      <strong>Email:</strong> $email <br>
                      <strong>Message:</strong>$message<br>";

    $mail->send();
    header("Location:formsubmited.html");
    exit;
    echo "Message Sent Successfully!";
} catch (Exception $e) {
    echo "Message could not be sent. Error: {$mail->ErrorInfo}";
}
?>
