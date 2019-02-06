<template>
    <div class="normal-page profile-page checkout">
        <div class="container">

            <div class="cart-details">
                <p>
                    RETURNING CUSTOMER?
                    <a class='font-weight-bold' href="#">
                        CLICK HERE TO LOG IN
                    </a>
                </p>
                <div class='row flex-row-reverse'>
                    <div class='col-md-6 pl-md-5 my-4'>
                        
                        <div class='cart-card border border-dark'>
                            <p class='mb-4'>your order</p>
                            <div class="row">

                                <div class="col-md-3 p-0">
                                    <img class="img-thumbnail border-0" src="images/cart.jpg" alt="Responsive image">
                                </div>

                                <div class="col-md-9 p-0">
                                    <h5 class="text-uppercase mb-2">Mason High Back</h5>
                                    <div class='d-flex align-items-center justify-content-between'>
                                        <p>AED 364</p>
                                        <div class="quantity-counter d-flex align-items-center justify-content-center p-1">
                                            <button class="minus-btn" type="button" name="button">-</button>
                                            <input class="text-center" type="text" name="name" value="1">
                                            <button class="plus-btn" type="button" name="button">+</button>
                                        </div>
                                    </div>
                                    <a class='underline-link' href="#"><span>Remove</span></a>
                                </div> 
                            </div>
                            <hr>
                            <div class='d-flex align-items-center justify-content-between'>
                                <p class='m-0'>Total</p>
                                <p class='m-0'>AED 364</p>
                            </div>
                        </div>
                    </div>

                    <div class='col-md-6 pr-md-5 pt-md-4 my-4'>
                        <h2 class='mb-4'>PERSONAL INFORMATION</h2>
                        <div class='profile-form'>
                            <form class="form">
                                <div class="form-group">
                                    <label for="profile-name">
                                        name*
                                    </label>
                                    <input type="text" id="profile-name" class="form-control">
                                </div>
                                <div class="form-group">
                                    <label for="company-name">
                                        COMPANY *
                                    </label>
                                    <input type="text" id="company-name" class="form-control">
                                </div>
                                <div class="form-group">
                                    <label for="profile-email">
                                        e-mail*
                                    </label>
                                    <input type="email" id="profile-email" class="form-control">
                                </div>
                                <div class="form-group">
                                    <label for="profile-city">
                                        city*
                                    </label>
                                    <input type="text" id="profile-city" class="form-control">
                                </div>
                                <div class="form-group">
                                    <label for="profile-country">
                                        country*
                                    </label>
                                    <select id="profile-country" class="form-control">
                                        <option name="Egypt" value="1">
                                            Egypt
                                        </option>
                                        <option name="United Arab Emirates" value="2">
                                            United Arab Emirates
                                        </option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="profile-address">
                                        address*
                                    </label>
                                    <input type="text" id="profile-address" class="form-control">
                                </div>
                                <div class="form-group">
                                    <label for="profile-code">
                                        ZIP/POSTAL CODE*
                                    </label>
                                    <input type="text" id="profile-code" class="form-control">
                                </div>
                                <div class="form-group">
                                    <label for="profile-phone">
                                        phone*
                                    </label>
                                    <input type="number" id="profile-phone" class="form-control">
                                </div>
                                <div class="form-group">
                                    <label for="another-address">
                                        SHIP TO A DIFFERENT ADDRESS?
                                    </label>
                                    <input type="text" id="another-address" class="form-control">
                                </div>

                                <div class="form-group text-center">
                                    <button type="submit" class="btn btn-black">PLACE YOUR ORDER</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>

</template>

<script>
export default {
    name: 'Checkout',
    data() {
        return {
            
        }
    },
}
</script>