<?php
    //var_dump($_COOKIE);
    if ( !isset($_COOKIE['email']) OR trim($_COOKIE['email']) ==''){
        header("Location: index.html");
        exit; 
    }
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/cabinet.css">
    <title>Document</title>
</head>

<body>
    <div class="wrapper">
        <div class="wrapper__container">
            <main class="mainblock">
                <div class="mainblock__title">
                    <h1>Thanks for registartion!</h1>
                </div>
            </main>
            <footer class="footer">
                <div class="footer__container">
                    <button class="footer__button" id="logout">Log out</button>
                    <form class="footer__form">
                        <p>You can change your settings here:</p>
                        <div>name: <input type="text" name="name" id="signup-name"></div>
                        <div>password: <input type="text" name="pass" id="signup-pass"></div>
                        <div>birthday: <input type="text" name="birthday" id="signup-birthday"></div>
                        <input type="submit" value="update" class="footer__update" id="signup-submit">
                    </form>
                </div>
            </footer>
        </div>
    </div>

    <script src="script/ajax.js"></script>
    <script src="script/get_user_data.js"></script>
    <script src="script/logout.js"></script>
</body>

</html>