<template>
    <div class="normal-page profile-page checkout">
        <div class="container">

            <div class="cart-details" v-if="cart.items">
                <div class='row flex-row-reverse'>
                    <div class='col-md-6 pl-md-5 my-4'>
                        <div class='cart-card border border-dark'>
                            <p class='mb-4'>{{$t('message.yourOrder')}}</p>
                            <div class="row mb-5" v-for="(item, index) in cart.items" :key="index">

                                <div class="col-3 p-0">
                                    <img class="img-thumbnail border-0" :src="item.productt.image" alt="Responsive image">
                                </div>

                                <div class="col-9 p-0">
                                    <h5 class="text-uppercase mb-2">{{item.productt.name}}</h5>
                                    <div class='d-flex align-items-center justify-content-between'>
                                        <p>{{$t('message.AED')+' '+item.total}}</p>
                                        <div class="quantity-counter d-flex align-items-center justify-content-center p-1">
                                            <button @click="countDown(item.id, item.quantity)">-</button>
                                            <span>{{item.quantity}}</span>
                                            <button @click="countUp(item.id, item.quantity)">+</button>
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
                        <div v-if="addresses.length" class="mb-5">
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

                        <div class="mb-5">
                            <h2 class='mb-4'>{{$t('message.addAddress')}}</h2>
                            <div class="profile-form">
                                <form class="form" @submit.prevent="addAddress">
                                    <div class="form-group">
                                        <label for="address-address">{{ $t("message.address") }}*</label>
                                        <input type="text" id="address-address" v-model="address.data.address" class="form-control" >
                                        <p class="message error" v-if="address.errors.address">{{address.errors.address}}</p>
                                    </div>
                                    <div class="form-group">
                                        <label for="address-country">{{ $t("message.country") }}*</label>
                                        <select id="address-country" v-model="address.data.country_id" class="form-control">
                                            <option v-for="(country, index) in countries" :key="index" :value="country.id" :name="country.name">{{ country.name }}</option>
                                        </select>
                                        <p class="message error" v-if="address.errors.country_id">{{address.errors.country_id}}</p>
                                    </div>
                                    <div class="form-group">
                                        <label for="address-city">{{ $t("message.city") }}*</label>
                                        <input type="text" id="address-city" v-model="address.data.city" class="form-control">
                                        <p class="message error" v-if="address.errors.city">{{address.errors.city}}</p>
                                    </div>
                                    <div class="form-group">
                                        <label for="address-zip_code">{{ $t("message.zip") }}*</label>
                                        <input type="text" id="address-zip_code" v-model="address.data.zip_code" class="form-control">
                                        <p class="message error" v-if="address.errors.zip_code">{{address.errors.zip_code}}</p>
                                    </div>
                                    <div class="form-group">
                                        <label for="address-phone">{{ $t("message.phone") }}*</label>
                                        <input type="number" id="address-phone" v-model="address.data.phone" class="form-control" >
                                        <p class="message error" v-if="address.errors.phone">{{address.errors.phone}}</p>
                                    </div>

                                    <div class="form-group text-center">
                                        <p class="message mb-3" v-if="address.static.message" v-bind:class="address.static.status? 'success':'error'">{{address.static.message}}</p>
                                        <button type="submit" class="btn btn-black" v-bind:class="address.static.loading" >
                                            {{ $t("message.addAddress") }}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="text-center">
                    <p class="message mb-3" v-if="order.static.message" v-bind:class="order.static.status? 'success':'error'">
                        {{order.static.message}}
                    </p>
                    <p class="message mb-3 error" v-for="(error, index) in this.order.errors" :key="index">{{error}}</p>
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
            countries: null,
            order: {
                addressId: null,
                static: {loading: null, status: null, message: null},
                errors: null
            },
            address: {
                static: {loading: null, status: null, message: null},
                data: {address_id: null, language_symbol: null, token: this.$store.state.auth.token, address: null, country_id: null, city: null, zip_code: null, phone: null},
                errors: {address: null, country_id: null, city: null, zip_code: null, phone: null},
            },
            addresses: []
        }
    },
    computed : {
        cart : function(){return this.$store.getters.cart}
    },
    created() {
        this.getCountries()
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
        getCountries() { // done
            this.$axios({
                method: "POST",
                data: {language_symbol: this.$i18n.locale},
                url: window.apiUrl+"get-countries"
            }).then(response => {
                this.countries = response.data.data;
            })
        },
        findCountry(id) { // done
            return this.countries.find(country => country.id === id)
        },
        findAddress(id) {
            return this.addresses.find(address => address.id === id)
        },
        getAddresses() { // done
            this.$axios({
                method: "POST",
                data: { language_symbol: this.$i18n.locale, token: this.$store.state.auth.token },
                url: window.apiUrl+"get-addresses"
            }).then(response => {
                if(response.data.status) {
                    this.addresses = response.data.data
                    if(this.addresses.length)
                        this.order.addressId = this.defaultAddress()
                }
            })
        },
        addAddress() { // done
            this.address.static.loading = 'loading';
            this.address.data.language_symbol = this.$i18n.locale;
            
            this.$axios({
                method: "POST",
                data: this.address.data,
                url: window.apiUrl+"add-address"
            }).then(response => {
                this.address.static.loading = null;
                if(!response.data.status) {
                    this.address.errors = response.data.data;
                    this.address.static.status = response.data.status;
                    this.address.static.message = response.data.message;
                }
                else {
                    this.setNull(this.address)
                    this.address.static.status = response.data.status;
                    this.address.static.message = response.data.message;

                    this.getAddresses();
                    $('html, body').animate({scrollTop: 0});
                }
            })
        },
        countUp(id, quant) { // done
            let update = {id: id, quant: parseInt(quant) + 1}
            this.$store.dispatch('updateQunt', update)
        },
        countDown(id, quant) { // done
            let update = {id: id, quant: parseInt(quant) - 1}
            this.$store.dispatch('updateQunt', update)
        },
        addOrder() {
            this.order.static.loading = 'loading'
            let cartIds = []
            if(this.$store.getters.cart.items) {
                let items = this.$store.getters.cart.items
                Object.keys(items).map((key, index)=>{
                    cartIds.push(items[key].id)
                })
                this.$axios({
                    method: "POST",
                    data: {
                        language_symbol: this.$i18n.locale,
                        token: this.$store.state.auth.token,
                        total: this.cart.total,
                        address_id: this.order.addressId,
                        cart_ids: cartIds
                    },
                    url: window.apiUrl+"add-order"
                }).then(response => {
                    this.order.static.loading = null
                    this.order.static.status = response.data.status
                    if(!response.data.status)
                        this.order.errors = response.data.data
                    else {
                        this.order.static.message = response.data.data
                        this.order.errors = {}
                        setTimeout(() => {
                            this.$store.dispatch('getCart')
                            this.$router.push({ name: 'Profile' })
                        }, 3000)
                    }
                })
            }
        },
        setNull(obj){
            if(typeof obj === 'object' && obj !== null) {
                Object.keys(obj).map((key, index)=>{
                    if(typeof obj[key] === 'object' && obj[key] !== null) {
                        this.setNull(obj[key])
                    } else obj[key] = null
                })
            } else obj = null
        }
    },
}
</script>