<?php

if((isset($_POST['studentname']))&&(isset($_POST['email'])!=""&&$_POST['contact']!="")){ 
  $to = 'rudrakshacmkt777@gmail.com';
  $subject = 'Elective';
  $message = '
        <html>
            <head>
                <title>Your Elective</title>
            </head>
            <body>
            <p>You Have recieved this email because you opted for an elective . Kindly check your information and contact your class teacher in case of any incorrect data</p>
                <p><b>Name:</b> '.$_POST['studentname'].'</p>
                <p><b>Register Number:</b> '.$_POST['registernumber'].'</p>
                <p><b>Email ID:</b> '.$_POST['email'].'</p>
                <p><b>Contact:</b> '.$_POST['contact'].'</p>
                <p><b>Department:</b> '.$_POST['department'].'</p>
                <p><b>Elective:</b> '.$_POST['electivesubject'].'</p>
          

            </body>
        </html>'; 
  $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
$headers .= "From: CSE HELPDESK <hiitsmerudr@leaveapp.rudrthakur.dx.am>\r\n"; 
mail($to, $subject, $message, $headers);

  echo json_encode(array('status' => 'success'));
} else {
  echo json_encode(array('status' => 'error'));
}

?>