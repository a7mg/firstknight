<template>
    <div class="normal-page profile-page cart">
        <div class="container">

            <div class="page-title d-flex align-items-center">
                <div class="mr-auto">
                    <h3>{{ $t("message.myCart") }}</h3>
                </div>
            </div>

            <div v-if="!cart.items" class="cart-details">
                <p class="text-center my-5">{{ $t("message.emptyCart") }}.</p>

                <div class='text-center my-5'>
                    <router-link class="btn btn-black w-100" :to="{ name: 'ReadyMade' }">{{ $t("message.continueShopping") }}</router-link>
                </div>
            </div>
            <div v-else class="cart-details">
                <div class="table-responsive">
                    <table class="table larg text-center">
                        <tr>
                            <th></th>
                            <th>{{ $t("message.product") }}</th>
                            <th>{{ $t("message.price") }}</th>
                            <th>{{ $t("message.quantity") }}</th>
                            <th>{{ $t("message.total") }}</th>
                            <th></th>
                        </tr>
                        <tr v-for="(item, index) in cart.items" :key="index">
                            <td>
                                <router-link :to="{ name: 'ProductDetails', params: { slug: item.productt.slug, productId: item.productt.id } }">
                                <img :src="item.productt.image" alt="Responsive image">
                            </router-link>
                            </td>
                            <td>{{item.productt.name}}</td>
                            <td>{{$t('message.AED')+' '+item.price}}</td>
                            <td>
                                <div class="quantity-counter d-flex align-items-center justify-content-center p-1">
                                    <button class="minus-btn" type="button" name="button">-</button>
                                    <input class="text-center" type="text" name="name" :value="item.quantity">
                                    <button class="plus-btn" type="button" name="button">+</button>
                                </div>
                            </td>
                            <td>{{$t('message.AED')+' '+item.total}}</td>
                            <td>
                                <a class='underline-link ml-3' href="javascript:void(0)" @click="deleteItem(item.id)"><span>{{ $t("message.remove") }}</span></a>
                            </td>
                        </tr>
                    </table>

                    <table class='table small col-md-4 ml-auto'>
                        <tr>
                            <td class="text-capitalize">{{$t('message.total')}}</td>
                            <td>{{$t('message.AED')+' '+cart.total}}</td>
                        </tr>
                        <tr></tr>
                    </table>
                </div>
                <router-link class="btn btn-black w-100 mb-5" :to="{ name: 'Checkout' }">{{ $t("message.proceedToCheckout") }}</router-link>
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