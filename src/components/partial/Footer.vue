<template>
    <footer>
        <div class="container">
            <div class="footer-top">
                <div class="d-md-flex align-items-end justify-content-between text-center">
                    <div class="py-md-0 py-2 mb-3 mb-md-0">
                        <div class="subscribe">
                            <h6>{{ $t("message.newsletter") }}</h6>
                            <form class="form" @submit.prevent="handleSubscribe">
                                <!--  @submit.prevent -->
                                <input type="text" v-model="subscribe.email" class="form-control" v-bind:placeholder='$t("message.yourEmailAddress")' />
                                <button type="submit" class="btn btn-black">{{ $t("message.subscribe") }}</button>
                                
                            </form>
                            <p class="message" v-bind:class="{ error: !subscribe.status }" v-if="subscribe.data">{{subscribe.data}}</p>
                        </div>
                    </div>
                    <div class="py-md-0 py-2 d-flex align-items-center justify-content-center">
                        <span>{{ $t("message.followUs") }}</span>
                        <ul class="follow">
                            <li><a href="#" class="facebook"></a></li>
                            <li><a href="#" class="instagram"></a></li>
                            <li><a href="#" class="twitter"></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="footer-bottom">
                <div class="d-md-flex align-items-end justify-content-between text-center">
                    <div class="py-md-0 py-2">{{ $t("message.rights") }}</div>
                    <div class="py-md-0 py-2">{{ $t("message.powered") }} <a href="http://media-sci.com">MediaSci</a> <a class="power-logo" href="http://media-sci.com"><img src="../../assets/images/logo-media-sci.png" alt=""></a></div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            subscribe: { email: null, status: null, message: null, data: null }
        }
    },
    methods: {
        handleSubscribe(e) {
            this.$axios({
                method: "POST",
                data: {
                    language_symbol: this.$i18n.locale,
                    email: this.subscribe.email
                },
                url: this.$apiUrl+"add-subscribe"
            }).then(response => {
                this.subscribe.status = response.data.status;
                this.subscribe.message = response.data.message;
                this.subscribe.data = response.data.data;
            }, error => {
                console.error(error);
            });
            e.preventDefault();
        },
    },
}
</script>