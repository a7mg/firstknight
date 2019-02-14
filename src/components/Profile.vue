<template>
    <div class="normal-page profile-page">
        <div class="container">

            <div class="page-title d-flex align-items-center">
                <div class="mr-auto"><h3>{{ $t("message.myProfile") }}</h3></div>
                <div><a href="javascript:void(0)" @click="logout"><span>{{ $t("message.logout") }}</span></a></div>
            </div>

            <div class="profile-tabs">
                <ul class="list-inline">
                    <li class="list-inline-item"><a href="#orders-tab">{{ $t("message.orders") }}</a></li>
                    <li class="list-inline-item"><a href="#address-tab">{{ $t("message.address") }}</a></li>
                    <li class="list-inline-item"><a href="#profile-tab" class="active">{{ $t("message.profile") }}</a></li>
                </ul>
            </div>

            <!-- START TABS -->
            <div class="profile-content">

                <div id="profile-tab" class="active">
                    <div>
                        <form class="form" @submit.prevent="handleUpdateProfile">
                            <div class="form-group">
                                <label for="profile-name">{{ $t("message.name") }}*</label>
                                <input type="text" id="profile-name" v-model="profile.data.name" class="form-control" >
                                <p class="message error" v-if="profile.errors.name">{{profile.errors.name}}</p>
                            </div>
                            <div class="form-group">
                                <label for="profile-email">{{ $t("message.email") }}*</label>
                                <input type="email" id="profile-email" v-model="profile.data.email" class="form-control" >
                                <p class="message error" v-if="profile.errors.email">{{profile.errors.name}}</p>
                            </div>
                            <div class="form-group">
                                <label for="profile-country">{{ $t("message.country") }}*</label>
                                <select id="profile-country" v-model="profile.data.country_id" class="form-control">
                                    <option v-for="(country, index) in countries" :key="index" :value="country.id" :name="country.name">{{ country.name }}</option>
                                </select>
                                <p class="message error" v-if="profile.errors.country_id">{{profile.errors.name}}</p>
                            </div>
                            <div class="form-group">
                                <label for="profile-city">{{ $t("message.city") }}*</label>
                                <input type="text" id="profile-city" v-model="profile.data.city" class="form-control" >
                                <p class="message error" v-if="profile.errors.city">{{profile.errors.name}}</p>
                            </div>
                            <div class="form-group">
                                <label for="profile-phone">{{ $t("message.phone") }}*</label>
                                <input type="number" id="profile-phone"  v-model="profile.data.phone" class="form-control" >
                                <p class="message error" v-if="profile.errors.phone">{{profile.errors.name}}</p>
                            </div>

                            <div class="form-group text-center">
                                <p class="message mb-3" v-if="profile.static.message" v-bind:class="profile.static.status? 'success':'error'">{{profile.static.message}}</p>
                                <button type="submit" class="btn btn-black" v-bind:class="profile.static.loading" >{{ $t("message.update") }}</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div id="orders-tab">
                    <div class="table-responsive">
                        <table class="table larg text-center">
                            <tr>
                                <th>{{$t('message.order')}} #</th>
                                <th>{{$t('message.date')}}</th>
                                <th>{{$t('message.shippingStatus')}}</th>
                                <th>{{$t('message.total')}}</th>
                            </tr>
                            <tr v-for="(order, index) in orders" :key="index" >
                                <td><router-link :to="{ name: 'Order', params: { orderId: order.id } }">{{order.id}}</router-link></td>
                                <td>{{order.date}}</td>
                                <td>{{order.order_status}}</td>
                                <td>{{$t("message.AED") + " " + order.total}}</td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div id="address-tab">
                    <div>
                        <div class="table-responsive">
                            <table class="table">
                                <tr v-for="(item, index) in addresses" :key="index" :class="item.is_default?'default':''">
                                    <td>
                                        <p>{{ item.address }}</p>
                                        <p>{{ item.country }}</p>
                                        <p>{{ item.city }}, {{ item.zip_code }}</p>
                                        <p>{{ item.phone }}</p>
                                    </td>
                                    <td>
                                        <label @click="setDefualt(item.id)" class="set-default">
                                            <span class="align-middle">{{ $t("message.default") }}</span> <span class="icon star"></span>
                                        </label>
                                    </td>
                                    <td>
                                        <a href="javascript:void(0)" @click="editAddress(item.id)">{{ $t("message.edit") }}</a>
                                        <a href="javascript:void(0)" class="removeAddress" :data-message='$t("message.confRemoveAddress")' @click="removeAddress(item.id)">{{ $t("message.remove") }}</a>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <form class="form" @submit.prevent="handelAddress">
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
                                    {{ (updateAddressId == null)?$t("message.addAddress"):$t("message.editAddress") }}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
            <!-- END TABS -->

        </div>
    </div>
</template>

<script>
    export default {
        name: 'Error',
        data () {
            return {
                countries: null,
                profile: {
                    static: {loading: null, status: null, message: null},
                    data: {},
                    errors: {name: null, email: null, phone: null, country_id: null, city: null}
                },
                address: {
                    static: {loading: null, status: null, message: null},
                    data: {address_id: null, language_symbol: null, token: this.$store.state.auth.token, address: null, country_id: null, city: null, zip_code: null, phone: null},
                    errors: {address: null, country_id: null, city: null, zip_code: null, phone: null},
                },
                addresses: [],
                orders: [],
                updateAddressId: null
            }
        },
        created() {
            this.getCountries()
            this.getAddresses()
            this.getOrders()
            this.profile.data = {... this.user}
        },
        computed : {
            isLoggedIn : function(){ return this.$store.getters.isLoggedIn},
            user: function() {return this.$store.state.auth.user}
        },
        metaInfo: {
            titleTemplate: 'Profile | %s'
        },
        methods: {
            handleUpdateProfile() { // done
                this.profile.static.loading = 'loading';
                if(this.isLoggedIn) {
                    this.profile.data.language_symbol = this.$i18n.locale;
                    this.$store.dispatch('update', this.profile.data)
                    .then(response => {
                        this.profile.static = response.staticObj
                        if(!response.staticObj.status)
                            this.profile.errors = response.errors
                        else
                            this.setNull(this.profile.errors)
                    })
                }
            },
            logout() { // done
                this.$store.dispatch('logout').then(() => {
                    this.$router.push({ name: 'Home' })
                })
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
            findAddress(id) { // done
                return this.addresses.find(address => address.id === id)
            },
            getAddresses() { // done
                this.$axios({
                    method: "POST",
                    data: { language_symbol: this.$i18n.locale, token: this.$store.state.auth.token },
                    url: window.apiUrl+"get-addresses"
                }).then(response => {
                    if(response.data.status)
                        this.addresses = response.data.data
                })
            },
            setDefualt(id) { // done
                this.$axios({
                    method: "POST",
                    data: { language_symbol: this.$i18n.locale, token: this.$store.state.auth.token, address_id: id },
                    url: window.apiUrl+"change-favorite-address"
                }).then(response => {
                    if(response.data.status)
                        this.getAddresses()
                })
            },
            removeAddress(id) { // done
                var r = confirm(this.$i18n.t('message.confRemoveAddress'));
                if (r == true) {
                    this.$axios({
                        method: "POST",
                        data: { language_symbol: this.$i18n.locale, token: this.$store.state.auth.token, address_id: id},
                        url: window.apiUrl+"delete-address"
                    }).then(response => {
                        if(response.data.status)
                            this.getAddresses()
                    })
                }
            },
            handelAddress() { // done
                this.address.static.loading = 'loading';
                this.address.data.language_symbol = this.$i18n.locale;
                
                let addressUrl = "";
                if(this.updateAddressId == null)
                    addressUrl = window.apiUrl+"add-address";
                else
                    addressUrl = window.apiUrl+"edit-address";

                this.$axios({
                    method: "POST",
                    data: this.address.data,
                    url: addressUrl
                }).then(response => {
                    this.address.static.loading = null;
                    if(!response.data.status) {
                        this.address.errors = response.data.data;
                        this.address.static.status = response.data.status;
                        this.address.static.message = response.data.message;
                    }
                    else {
                        // Reset all address vars
                        this.updateAddressId = null
                        this.setNull(this.address)
                        this.address.static.status = response.data.status;
                        this.address.static.message = response.data.message;

                        // if(this.updateAddressId == null) {
                        //     let newAddress = response.data.data
                        //     newAddress.country = this.findCountry(response.data.data.country_id).name
                        //     this.addresses.unshift(newAddress)
                        // }
                        this.getAddresses();
                        $('html, body').animate({scrollTop: 0});
                    }
                })
            },
            editAddress(id) { // done - when click edit button in table
                this.updateAddressId = id
                this.address.data = this.findAddress(id);
                this.address.data.token = this.$store.state.auth.token;
                this.address.data.address_id = this.updateAddressId;
                $('html, body').animate({scrollTop: $('#address-tab form').offset().top - 100});
            },
            getOrders() { // done
                this.$axios({
                    method: "POST",
                    data: { language_symbol: this.$i18n.locale, token: this.$store.state.auth.token },
                    url: window.apiUrl+"get-orders"
                }).then(response => {
                    if(response.data.status)
                        this.orders = response.data.data
                })
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
        }
    }
</script>