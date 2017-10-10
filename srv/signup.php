<?php
include('./models/SignupModel.php');

use \models\SignupModel;

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (!empty($_POST['Signup'])) {
        $model = new SignupModel($_POST['Signup']);

        if ($model->isValid()) {
            echo json_encode([
                "result" => true,
                "message" => "Your account have been created. We sent you an email with a link to get started. You’ll be in your account in no time."
            ]);
        } else {
            echo json_encode([
                "result" => false,
                "message" => "Errors found",
                "errors" => $model->errors
            ]);
        }
    }
}
