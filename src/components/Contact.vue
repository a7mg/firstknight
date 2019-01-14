<template>
    <div>
        <div class="contact">
            <section class="home-main">
                <div class="main-column flex-column-reverse d-flex flex-md-row">
                    <div class="col-md-4 p-0 d-flex align-items-center">
                        <h1 class="main-headline">
                            <span>{{ $t('message.contactUs') }}</span>
                        </h1>

                        <a href="#" class="go-down"></a>
                    </div>
                    <div class="col-md-8 p-0">
                        <div class="embed-responsive embed-responsive-16by9">
                            <iframe class="embed-responsive-item"
                                :src="'https://maps.google.com/maps?q='+this.$root.settings.contact_lat+','+this.$root.settings.contact_lng+'&hl=es;z=14&amp;output=embed'" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </section>

            <section class="home-section contact-details">
                <div class="container">
                    <div class='row align-items-start'>

                        <div class='col-md-4 d-flex align-items-start'>
                            <img class='' src="../assets/images/icons/address.png" alt="">
                            <div class='px-4'>
                                <h4 class="text-capitalize">{{ $t("message.address") }}</h4>
                                <p>{{ this.$root.settings.contact_address }}</p>
                            </div>
                        </div>
        
                        <div class='col-md-4 d-flex align-items-start'>
                            <img class='' src="../assets/images/icons/email.png" alt="">
                            <div class='px-4'>
                                <h4 class="text-capitalize">{{ $t("message.email") }}</h4>
                                <p>
                                    <a :href="'mailto:'+this.$root.settings.contact_email">{{ this.$root.settings.contact_email }}</a>
                                </p>
                            </div>
                        </div>

                        <div class='col-md-4 d-flex align-items-start'>
                            <img class='' src="../assets/images/icons/call.png" alt="">
                            <div class='px-4'>
                                <h4 class="text-capitalize">{{ $t("message.call_us") }}</h4>
                                <p>
                                    <a :href="'tel:+'+this.$root.settings.contact_phone">{{ this.$root.settings.contact_phone }}</a>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section class="home-section bg-light">
                <h2 class='text-center contact-form-title'>{{ $t("message.drop_us_aline") }}</h2>
                <form class="login-container" @submit.prevent="sendContact">
                    <div class="container">
                        <div class="d-md-flex">
                            <div class="col-md-6 px-md-5 mb-5 mb-md-0">
                                <div class="form-group">
                                    <label for="name">{{ $t("message.name") }}*</label>
                                    <input type="text" class="form-control" v-model="contact.data.name">
                                    <p class="message error" v-if="contact.errors.name">{{contact.errors.name}}</p>
                                </div>
                                <div class="form-group">
                                    <label for="email">{{ $t("message.email") }}*</label>
                                    <input type="email" class="form-control" v-model="contact.data.email">
                                    <p class="message error" v-if="contact.errors.email">{{contact.errors.email}}</p>
                                </div>
                                <div class="form-group">
                                    <label for="phone">{{ $t("message.phone") }}*</label>
                                    <input type="number" class="form-control" v-model="contact.data.phone">
                                    <p class="message error" v-if="contact.errors.phone">{{contact.errors.phone}}</p>
                                </div>
                            </div>
                            <div class="col-md-6 px-md-5 mb-5 mb-md-0">
                                <div class="form-group">
                                    <label for="message">{{ $t("message.message") }}*</label>
                                    <textarea class="form-control" rows="8" v-model="contact.data.message"></textarea>
                                    <p class="message error" v-if="contact.errors.message">{{contact.errors.message}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="form-group mb-0 mt-5 text-center">
                            <button type="submit" class="btn btn-black contact-form-btn" v-bind:class="contact.loading">{{ $t("message.send") }}</button>
                        </div>
                        <p class="message text-center mt-4 mb-0" v-if="contact.response.message" v-bind:class="contact.response.status? 'success':'error'">{{ contact.response.data }}</p>
                    </div>
                </form>
            </section>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'Contact',
        data () {
            return {
                contact: {
                    loading: null,
                    data: {language_symbol: null, name: null, email: null, phone: null, message: null},
                    errors: {name: null, email: null, phone: null, message: null},
                    response: {status: null, message: null, data: null}
                }
            }
        },
        metaInfo: {
            titleTemplate: 'Contact | %s'
        },
        methods: {
            sendContact() {
                this.contact.loading = 'loading';
                this.contact.data.language_symbol = this.$i18n.locale;
                this.$axios({
                    method: "POST",
                    data: this.contact.data,
                    url: window.apiUrl+"add-contactus"
                }).then(response => {
                    this.contact.loading = null;
                    if(!response.data.status)
                        this.contact.errors = response.data.data;
                    else {
                        this.contact.response = response.data;
                        this.contact.errors = {name: null, email: null, phone: null, message: null}
                    }
                })
            }
        },
    }
</script>