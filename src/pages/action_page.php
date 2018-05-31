<?php
	$email_subject = "New Form submission from zakariya-website";
    $email_body = "You have received a new message from the user $name.\n".
                           "Here is the message:\n \n$message".
    $to = "zakariyasattar03@gmail.com";

    $headers .= "Reply-To: $visitor_email \r\n";

    if (mail($to,$email_subject,$email_body, $headers)) {
        echo '<p>Your message has been sent!</p>';
    }
    else{
        echo '<p>Something went wrong.... please try again</p>';
    }
?>
