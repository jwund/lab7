<!DOCTYPE HTML>
<html>
<body>
<?php
    echo '<table border=\"0\">'; // creates lines between numbers
    $num = $_POST['size']; // $_GET didn't work, assuming because method=post in .html
    $row = $num;
    $col = $num;
    for ($i = 0; $i <= $row; $i++) {
        echo '<tr>';
        for ($j = 0; $j <= $col; $j++) {
            if ($i == 0 and $j == 0) {
                echo '<td> </td>'; // for empty space at top left
            } elseif ($j == 0) {
                echo '<td>'.$i.'</td>';
            } elseif ($i == 0) {
                echo '<td>'.$j.'</td>';
            } else {
                echo '<td>'.$i*$j.'</td>';
            }
        }
        echo '</tr>';
    }
    echo '</table>';
?>
</body>
<html>