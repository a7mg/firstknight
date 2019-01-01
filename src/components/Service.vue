<template>
    <div class="service-page">

        <div class="estate">
            <section class="home-main">
                <div class="main-column flex-column-reverse d-flex flex-md-row">
                    <div class="col-md-4 p-0 d-flex align-items-center">
                        <h1 class="main-headline">
                            <span>{{ service.name }}</span>
                        </h1>

                        <a href="#" class="go-down"></a>
                    </div>
                    <div class="col-md-8 p-0">
                        <div class="img-container" v-bind:style="{ 'background-image': 'url(' + service.main_imagee + ')' }"></div>
                    </div>
                </div>
            </section>

            <section class="home-section magna">
                <div class="row m-0 align-items-end justify-content-between">

                    <div class="col-md-6 p-0 mb-4 mb-sm-0 furniture-item">
                        <div class="img-container">
                            <img class="img-fluid w-100" :src="service.right_imagee" alt="">
                        </div>
                        <div class="furniture-details">
                            <h2>{{ service.name }}</h2>
                            <p>
                                {{ service.description }}
                            </p>
                        </div>
                    </div>

                    <div class="col-md-5 col-xl-4 col-sm-8 p-0 mb-4 furniture-item furniture-img">
                        <div class="img-container">
                            <img class="img-fluid w-100" :src="service.left_imagee" alt="">
                        </div>
                    </div>

                </div>
            </section>

            <section class="home-section contact-us">
                <div class="container">
                    <div class="bg-light p-4 px-md-5">
                        <div class="row align-items-center justify-content-between">
                            <div class="col-md-6 text-center text-md-left">
                                <h2>Looking for a great service?</h2>
                            </div>
                            <div class="col-md-6 text-center text-md-right">
                                <a href="#" class="btn btn-black">contact us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>

    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Service',
    data () {
        return {
            service: {name: ''}
        }
    },
    metaInfo () {
      return {
        titleTemplate: this.service.name+' | %s'
      }
    },
    created() {
        this.getData(this.$route.params.slug);
    },
    beforeRouteUpdate (to, from, next) {
        this.getData(to.params.slug);
        next();
    },
    methods: {
        getData(slug) {
            axios({
                method: "POST",
                data: {
                    language_symbol: this.$i18n.locale,
                    slug: slug
                },
                url: this.$root.apiUrl+"get-services"
            }).then(response => {
                this.service = response.data.data[0];
            }, error => {
                console.error(error);
            });
        }
    },
}
</script>