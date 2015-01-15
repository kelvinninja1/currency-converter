<?php
    // Sent e-mail to:
    $email_to = "superkalo91@gmail.com";
    $email_subject = "Съобщение от сайта currency.superkalo.com";
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $email_from = $_POST['email'];
    $comments = $_POST['comments'];
    $email_message = "Съобщение, изпратено през контактната форма на Валутния Калкулатор и Конвертор :)\n\n";
    $email_message .= "Име: ".$first_name."\n";
    $email_message .= "Фамилия: ".$last_name."\n";
    $email_message .= "E-mail: ".$email_from."\n";
    $email_message .= "Съобщение: ".$comments."\n";
	// create email headers
	$headers = 'From: '.$email_from."\r\n".
	'Reply-To: '.$email_from."\r\n" .
	'X-Mailer: PHP/' . phpversion();
	@mail($email_to, $email_subject, $email_message, $headers); 	header('Location: http://currency.superkalo.com/contacts.html');
?>