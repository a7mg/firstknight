<template>
    <div class="normal-page profile-page checkout">
        <div class="container">

            <div class="cart-details">
                <div class='row flex-row-reverse'>
                    <div class='col-md-6 pl-md-5 my-4'>
                        
                        <div class='cart-card border border-dark'>
                            <p class='mb-4'>{{$t('message.yourOrder')}}</p>
                            <div class="row" v-for="(item, index) in cart.items" :key="index">

                                <div class="col-3 p-0">
                                    <img class="img-thumbnail border-0" :src="item.productt.image" alt="Responsive image">
                                </div>

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
                                    <a class='underline-link' href="javascript:void(0)" @click="deleteItem(item.id)"><span>{{ $t("message.remove") }}</span></a>
                                </div> 
                            </div>
                            <hr>
                            <div class='d-flex align-items-center justify-content-between'>
                                <p class='m-0'>{{$t('message.total')}}</p>
                                <p class='m-0'>{{$t('message.AED')+' '+cart.total}}</p>
                            </div>
                        </div>
                    </div>

                    <div class='col-md-6 pr-md-5 pt-md-4 my-4'>
                        <h2 class='mb-4'>{{$t('message.chooseAddress')}}</h2>
                        
                        <div class="profile-form">
                            <div class="table-responsive">
                                <div class="my-4">
                                    <select v-model="order.addressId" class="form-control">
                                        <option v-for="(address, index) in addresses"
                                            :selected="address.is_default"
                                            :key="index" :value="address.id">
                                            {{address.address}}{{address.is_default?' - ['+$t('message.defualt')+']':''}}
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center">
                    <p class="message mb-3" v-if="order.static.message" v-bind:class="order.static.status? 'success':'error'">
                        {{order.static.message}}
                    </p>
                </div>
                <button class="btn btn-black w-100 mb-5" v-bind:class="order.static.loading" @click="addOrder">{{ $t("message.confirmOrder") }}</button>
            </div>

        </div>
    </div>

</template>

<script>
export default {
    name: 'Checkout',
    data() {
        return {
            order: {
                addressId: null,
                static: {loading: null, status: null, message: null},
                errors: null
            },
            addresses: []
        }
    },
    computed : {
        cart : function(){return this.$store.getters.cart}
    },
    created() {
        this.getAddresses()
    },
    methods: {
        deleteItem(cartId) {
            this.$store.dispatch('deleteItem', cartId).then(response => {
                if(!this.$store.getters.cart.items)
                    this.$router.go(-1)
            })
        },
        defaultAddress() {
            return this.addresses.find(address => address.is_default === 1).id
        },
        findAddress(id) {
            return this.addresses.find(address => address.id === id)
        },
        getAddresses() {
            this.$axios({
                method: "POST",
                data: { language_symbol: this.$i18n.locale, token: this.$store.state.auth.token },
                url: window.apiUrl+"get-addresses"
            }).then(response => {
                if(response.data.status) {
                    this.addresses = response.data.data
                    this.order.addressId = this.defaultAddress()
                }
            })
        },
        addOrder() {
            this.order.static.loading = 'loading'
            this.$axios({
                method: "POST",
                data: {
                    language_symbol: this.$i18n.locale,
                    token: this.$store.state.auth.token,
                    total: this.cart.total,
                    address_id: this.order.addressId,
                    product_ids: null
                },
                url: window.apiUrl+"add-order"
            }).then(response => {
                this.order.static.loading = null
                this.order.static.status = response.data.status
                this.order.static.message = response.data.message
                console.log(response);
            })
        }
    },
}
</script>