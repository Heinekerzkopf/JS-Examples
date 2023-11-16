<?php
// Получение значения параметра id
$id = $_GET['id'];

// Получение информации о выбранной картинке (замените этот код на вашу логику получения данных)
$imageData = array(
  '1' => array(
    'path' => 'path_to_image_1.jpg',
    'description' => 'Описание картинки 1'
  ),
  '2' => array(
    'path' => 'path_to_image_2.jpg',
    'description' => 'Описание картинки 2'
  )
);

// Проверка наличия выбранной картинки
if (isset($imageData[$id])) {
  $imagePath = $imageData[$id]['path'];
  $imageDescription = $imageData[$id]['description'];
} else {
  // Если выбранная картинка не найдена, можно выполнить какое-то действие, например, перенаправление на страницу ошибки
  header('Location: error.php');
  exit();
}
?>

<!DOCTYPE html>
<html>
<head>
  <title>Картинка</title>
</head>
<body>
  <h1>Картинка</h1>

  <img src="<?php echo $imagePath; ?>" alt="Выбранная картинка">
  <p><?php echo $imageDescription; ?></p>

  <!-- Дополнительный контент страницы -->

</body>
</html>
