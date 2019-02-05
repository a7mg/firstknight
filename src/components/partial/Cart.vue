<template>
    <div class="cart-pop fixed-pop">
        <div class="cart-container pop-container">
            <span class="close-pop black ml-auto mr-md-4"></span>
            
            <div class="cart-content p-md-4">
                <h4>{{ $t("message.myCart") }}</h4>
                
                <div v-if="!cart.items">
                    <p>{{ $t("message.emptyCart") }}.</p>
                    <hr class='w-100'>
                    <div class='text-center'>
                        <a href="#" class="btn btn-black w-100">{{ $t("message.continueShopping") }}</a>
                    </div>
                </div>

                <div v-else>
                    <div v-for="(item, index) in cart.items" :key="index" class='cart-card'>
                        <div class="row">

                            <div class="col-md-3 p-0">
                                <img class="img-thumbnail border-0" :src="item.productt.image" alt="Responsive image">
                            </div>

                            <div class="col-md-9 p-0">
                                <h5 class="text-uppercase mb-2">{{item.productt.name}}</h5>
                                <div class='d-flex align-items-center justify-content-between'>
                                    <p>{{$t('message.AED')+' '+item.total}}</p>
                                    <div class="quantity-counter d-flex align-items-center justify-content-center p-1">
                                        <input class="text-center" type="text" name="name" :value="item.quantity">
                                    </div>
                                </div>
                                <span class='underline-link' @click="deleteItem(item.id)">Remove</span>
                            </div> 
                        </div>
                    </div>
                    <hr class='w-100'>
                    <div class='text-center'>
                        <div class='d-flex align-items-center justify-content-between'>
                            <p>{{$t('message.total')}}</p>
                            <p>{{$t('message.AED')+' '+cart.total}}</p>
                        </div>
                        <a href="#" class="btn btn-black my-2">{{$t('message.cart')}}</a>
                        <a href="#" class="btn btn-black my-2">{{$t('message.checkout')}}</a>
                    </div>
                </div>
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
    computed : {
        cart : function(){return this.$store.getters.cart}
    },
    methods: {
        deleteItem(cartId) {
            this.$store.dispatch('deleteItem', cartId)
        }
    },
}
</script>