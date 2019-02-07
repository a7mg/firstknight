<template>
    <div class="cart-pop fixed-pop">
        <div class="cart-container pop-container">
            <span class="close-pop black ml-auto mr-md-4"></span>
            
            <div class="cart-content p-md-4">
                <h4>{{ $t("message.myCart") }}</h4>
                
                <div v-if="!cart.items">
                    <p class="my-5">{{ $t("message.emptyCart") }}.</p>
                    <hr class='w-100'>
                    <div class='text-center'>
                        <router-link class="btn btn-black w-100" :to="{ name: 'ReadyMade' }">{{ $t("message.continueShopping") }}</router-link>
                    </div>
                </div>

                <div v-else>
                    <div v-for="(item, index) in cart.items" :key="index" class='cart-card'>
                        <div class="row">

                            <router-link class="col-3 p-0" :to="{ name: 'ProductDetails', params: { slug: item.productt.slug, productId: item.productt.id } }">
                                <img class="img-thumbnail border-0" :src="item.productt.image" alt="Responsive image">
                            </router-link>
                            <div class="col-9 p-0">
                                <h5 class="text-uppercase mb-2">{{item.productt.name}}</h5>
                                <div class='d-flex align-items-center justify-content-between'>
                                    <p>{{$t('message.AED')+' '+item.total}}</p>
                                    <div class="quantity-counter d-flex align-items-center justify-content-center p-1">
                                        <button class="minus-btn" type="button" name="button">-</button>
                                        <input class="text-center" type="text" name="name" :value="item.quantity">
                                        <button class="plus-btn" type="button" name="button">+</button>
                                    </div>
                                </div>
                                <span class='underline-link' @click="deleteItem(item.id)">{{ $t("message.remove") }}</span>
                            </div> 
                        </div>
                    </div>
                    <hr class='w-100'>
                    <div class='text-center'>
                        <div class='d-flex align-items-center justify-content-between'>
                            <p class="text-capitalize">{{$t('message.total')}}</p>
                            <p>{{$t('message.AED')+' '+cart.total}}</p>
                        </div>
                        <div class="row">
                            <div class="col-md-6 mb-md-0 mb-3">
                                <router-link class="btn btn-black w-100 px-0" :to="{ name: 'Cart' }">{{ $t("message.cart") }}</router-link>
                            </div>
                            <div class="col-md-6">
                                <router-link class="btn btn-black w-100 px-0" :to="{ name: 'Checkout' }">{{ $t("message.checkout") }}</router-link>
                            </div>
                        </div>
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