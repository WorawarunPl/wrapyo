<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style_ingredient_whole.css">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
    <link href="">
    <title>Admin page</title>
</head>
<body>
    <!--sidebar-->
    <div class="sidebar">
        <h1 class="logo" style="font-weight: bold;">WRAPsYo!</h1>

        <div class="sidebar-menus">
            <a href="index_food_list.html"><ion-icon name="receipt-outline"></ion-icon> <i class="foodorder"></i><span>Food Order</span></a>
            <a href="index_ingredient_whole.html"><ion-icon name="storefront-outline"></ion-icon> <i class="ingredient"></i><span>Ingredients</span></a>
            <a href="index_notification.html"><ion-icon name="notifications-outline"></ion-icon><i class="notification"></i><span>Note</span></a>
        </div>
    </div>
    <!--main-->
    <div class="main">
        <div class="main-navbar">
            <div class="message">
                <span style="color: black;">Stock</span>
            </div>  
            <div class="profile">
               <a class="user" href="#"><ion-icon name="person-outline"></ion-icon></a>
            </div>
        </div>
        <div class="main-highlight">
            <!-- title section-->
            <div class="main-header">
                <h2 class="main-title">Meat</h2>
                
            </div>
            <div class="table-section">
                <table>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Ingredient</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>M1</td> <!--ถ้าเป็นรูปภาพให้ใส่img เอา-->
                            <td><img src="meatball.png"></td>
                            <td>Meatball</td>
                            <td><?php echo date('d/m/Y'); ?></td>
                            <td>Have</td>
                            <td>
                                <button> <a href="#"><ion-icon name="trash-outline"></ion-icon> <i class="delete"></i></a> </button>
                                 
                             </td>
                        </tr>
                        <tr>
                            <td>M2</td> <!--ถ้าเป็นรูปภาพให้ใส่img เอา-->
                            <td><img src="spicy chicken.png"></td>
                            <td>Spicy Chicken</td>
                            <td><?php echo date('d/m/Y'); ?></td>
                            <td>Have</td>
                            <td>
                                    <button> <a href="#"><ion-icon name="trash-outline"></ion-icon> <i class="delete"></i></a> </button>
                                     
                            </td>
                        </tr>
                        <tr>
                            <td>M3</td> <!--ถ้าเป็นรูปภาพให้ใส่img เอา-->
                            <td><img src="chicken teriyaki.png"></td>
                            <td>Chicken Teriyaki</td>
                            <td><?php echo date('d/m/Y'); ?></td>
                            <td>Have</td>
                            <td>
                                    <button> <a href="#"><ion-icon name="trash-outline"></ion-icon> <i class="delete"></i></a> </button>
                                     
                            </td>
                        </tr>
                        <tr>
                            <td>M4</td> <!--ถ้าเป็นรูปภาพให้ใส่img เอา-->
                            <td><img src="dolly.png"></td>
                            <td>Dolly</td>
                            <td><?php echo date('d/m/Y'); ?></td>
                            <td>Have</td>
                            <td>
                                    <button> <a href="#"><ion-icon name="trash-outline"></ion-icon> <i class="delete"></i></a> </button>
                                     
                            </td>
                        </tr>
                        <tr>
                            <td>M5</td> <!--ถ้าเป็นรูปภาพให้ใส่img เอา-->
                            <td><img src="shrimp.png"></td>
                            <td>shrimp</td>
                            <td><?php echo date('d/m/Y'); ?></td>
                            <td>Have</td>
                            <td>
                                    <button> <a href="#"><ion-icon name="trash-outline"></ion-icon> <i class="delete"></i></a> </button>
                                     
                            </td>
                        </tr>
                        <tr>
                            <td>M6</td> <!--ถ้าเป็นรูปภาพให้ใส่img เอา-->
                            <td><img src="ham.png"></td>
                            <td>Ham</td>
                            <td><?php echo date('d/m/Y'); ?></td>
                            <td>Have</td>
                            <td>
                                    <button> <a href="#"><ion-icon name="trash-outline"></ion-icon> <i class="delete"></i></a> </button>
                                     
                            </td>
                        </tr>
                        <tr>
                            <td>M7</td> <!--ถ้าเป็นรูปภาพให้ใส่img เอา-->
                            <td><img src="smoke-pork.png"></td>
                            <td>smoke Pork</td>
                            <td><?php echo date('d/m/Y'); ?></td>
                            <td>Have</td>
                            <td>
                                    <button> <a href="#"><ion-icon name="trash-outline"></ion-icon> <i class="delete"></i></a> </button>
                                     
                            </td>
                        </tr>
                        <tr>
                            <td>M8</td> <!--ถ้าเป็นรูปภาพให้ใส่img เอา-->
                            <td><img src="roast-beef.png"></td>
                            <td>Roast Beef</td>
                            <td><?php echo date('d/m/Y'); ?></td>
                            <td>Have</td>
                            <td>
                                    <button> <a href="#"><ion-icon name="trash-outline"></ion-icon> <i class="delete"></i></a> </button>
                                     
                            </td>
                        </tr>
                        <tr>
                            <td>M9</td> <!--ถ้าเป็นรูปภาพให้ใส่img เอา-->
                            <td><img src="tuna.png"></td>
                            <td>Tuna</td>
                            <td><?php echo date('d/m/Y'); ?></td>
                            <td>Have</td>
                            <td>
                                    <button> <a href="#"><ion-icon name="trash-outline"></ion-icon> <i class="delete"></i></a> </button>
                                     
                            </td>
                        </tr>
                        <tr>
                            <td>M10</td> <!--ถ้าเป็นรูปภาพให้ใส่img เอา-->
                            <td><img src="vegetable.png"></td>
                            <td>Vegetarian</td>
                            <td><?php echo date('d/m/Y'); ?></td>
                            <td>Have</td>
                            <td>
                                    <button> <a href="#"><ion-icon name="trash-outline"></ion-icon> <i class="delete"></i></a> </button>
                                     
                            </td>
                        </tr>
                    </tbody>

                </table>      
            </div>
            

            

            <div class="pagination">
                <div><a href="index_ingredient_whole.html"><ion-icon name="chevron-back"></ion-icon></a></div>

                <div><a href="index_ingredient_whole.html"><ion-icon name="caret-back"></ion-icon></a></div>

                <div><a href="index_ingredient_whole.html">1</a></div>

                <div><a href="index_ingredient_meat.html">2</a></div>

                <div><a href="index_ingredient_veget.html"><ion-icon name="caret-forward"></ion-icon></a></div>

                <div><a href="index_ingredient_topping.html"><ion-icon name="chevron-forward"></ion-icon></a></div>
            </div>

        </div>
        <!--main menu-->
    </div>
    
    
</body>
<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
</html>
