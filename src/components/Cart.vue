<template>
    <div class="normal-page profile-page cart">
        <div class="container">

            <div class="page-title d-flex align-items-center">
                <div class="mr-auto">
                    <h3>my cart</h3>
                </div>
            </div>

            <div class="cart-details">
                <div class="table-responsive">
                    <table class="table larg text-center">
                        <tr>
                            <th></th>
                            <th>PRODUCT</th>
                            <th>PRICE</th>
                            <th>Quantity</th>
                            <th>total</th>
                            <th></th>
                        </tr>
                        <tr>
                            <td>
                                <img src="../assets/images/cart.jpg" alt="">
                            </td>
                            <td>Mason High Back </td>
                            <td>AED 364</td>
                            <td>
                                <div class="quantity-counter d-flex align-items-center justify-content-center p-1">
                                    <button class="minus-btn" type="button" name="button">-</button>
                                    <input class="text-center" type="text" name="name" value="1">
                                    <button class="plus-btn" type="button" name="button">+</button>
                                </div>
                            </td>
                            <td>AED 364</td>
                            <td>
                                <a class='underline-link ml-3' href="#"><span>Remove</span></a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="../assets/images/cart.jpg" alt="">
                            </td>
                            <td>Mason High Back </td>
                            <td>AED 364</td>
                            <td>
                                <div class="quantity-counter d-flex align-items-center justify-content-center p-1">
                                    <button class="minus-btn" type="button" name="button">-</button>
                                    <input class="text-center" type="text" name="name" value="1">
                                    <button class="plus-btn" type="button" name="button">+</button>
                                </div>
                            </td>
                            <td>AED 364</td>
                            <td>
                                <a class='underline-link ml-3' href="#"><span>Remove</span></a>
                            </td>
                        </tr>
                    </table>

                    <table class='table small col-md-4 ml-auto'>
                        <tr>
                            <td>Subtotal</td>
                            <td>AED 364</td>
                        </tr>
                        <tr>
                            <td>Shipping</td>
                            <td>AED 20</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>AED 384</td>
                        </tr>
                    </table>
                </div>
                <a class='btn btn-black w-100 mb-5' href="#">PROCEED TO CHECKOUT</a>

            </div>

        </div>
    </div>

</template>

<script>
export default {
    name: 'Cart',
    data() {
        return {
            
        }
    },
}
</script>