<template>
    <div class="normal-page profile-page checkout">
        <div class="container">

            <div class="cart-details">
                <div class="profile-page mt-5">
                    <div class="page-title d-flex align-items-center">
                        <h3>{{$t('message.order')}} #{{this.$route.params.orderId}}</h3>
                    </div>
                </div>
                <div class="table-responsive">
                    <table class="table larg text-center">
                        <tr>
                            <th></th>
                            <th>{{ $t("message.product") }}</th>
                            <th>{{ $t("message.price") }}</th>
                            <th>{{ $t("message.quantity") }}</th>
                            <th>{{$t('message.shippingStatus')}}</th>
                            <th>{{$t('message.date')}}</th>
                            <th>{{ $t("message.total") }}</th>
                        </tr>
                        <tr v-for="(item, index) in order" :key="index">
                            <td>
                                <router-link :to="{ name: 'ProductDetails', params: { slug: item.productt.slug, productId: item.productt.id } }">
                                <img :src="item.productt.image" alt="Responsive image">
                            </router-link>
                            </td>
                            <td>{{item.productt.name}}</td>
                            <td>{{$t('message.AED')+' '+item.price}}</td>
                            <td>
                                <div class="quantity-counter d-flex align-items-center justify-content-center p-1">
                                    <span>{{item.quantity}}</span>
                                </div>
                            </td>
                            <td>{{item.order_details_status}}</td>
                            <td>{{item.date}}</td>
                            <td>{{$t('message.AED')+' '+item.total}}</td>
                        </tr>
                    </table>
                    
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
            order: null
        }
    },
    created() {
        this.getOrder(this.$route.params.orderId)
    },
    methods: {
        getOrder(id) { // done
            this.$axios({
                method: "POST",
                data: { language_symbol: this.$i18n.locale, token: this.$store.state.auth.token, order_id: id },
                url: window.apiUrl+"get-order-items"
            }).then(response => {
                if(response.data.status)
                    this.order = response.data.data
            })
        },
    },
}
</script>