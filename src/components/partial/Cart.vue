<template>
    <div class="cart-pop fixed-pop">
        <div class="cart-container pop-container">
            <span class="close-pop black mr-auto"></span>
            
            <div class="cart-content">
                <h4>{{ $t("message.myCart") }}</h4>

                <p>{{ $t("message.emptyCart") }}.</p>
            </div>
            <a href="#" class="btn btn-black w-100">{{ $t("message.continueShopping") }}</a>
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