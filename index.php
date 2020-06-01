<?php
  include_once 'includes/database_handler.php';
  ?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <link rel="shortcut icon" href="favicon.ico" >

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Weather app</title>
    <link rel="stylesheet" href="/css/main.css">
  </head>
  <body>
    <div class="app-wrap">
      <header>
        <input type="text" autocomplete="off" class="search-box" placeholder="Search for a city...">
      </header>
      <main>
        <section class="location">
          <div class="city">City, Country</div>
          <div class="date">Day 1 Month Year</div>
        </section>
        <div class="current">
          <div class="temp">00<span>°c</span></div>
          <div class="weather">Sunny</div>
          <div class="hi-low">00°c / 00°c</div>
          <div class="suggestions">Suggested to wear:</div>
          <?php

          $sql = "SELECT * FROM items WHERE item_id=1;";
          $result = mysqli_query($connection, $sql);
          $resultCheck = mysqli_num_rows($result);
          if ($resultCheck >0) {
            while ($row = mysqli_fetch_assoc($result)) {
              echo  $row['item'] . "<br>";
            }
          }
           ?>
        </div>
      </main>
    </div>
    <script src="main.js "></script>
  </body>
</html>
