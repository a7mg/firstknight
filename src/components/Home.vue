<template>
    <div class="home-page">

        <section class="home-main">
            <div class="main-column flex-column-reverse d-flex flex-md-row">
                <div class="col-md-4 p-0 d-flex align-items-center">
                    <h1 class="main-headline">
                        <span>{{ $t("message.weHave") }}</span>
                        <span>{{ $t("message.noRule") }}</span>
                    </h1>

                    <a href="#" class="go-down d-none d-md-block"></a>
                </div>
                <div class="col-md-8 p-0">
                    <div class="img-container" v-bind:style="{ 'background-image': 'url(' + homepage.banner.image + ')' }"></div>
                </div>
            </div>
        </section>

        <section class="home-section services">
            <h2 class="section-title">{{ $t("message.services") }}</h2>
            <div class="row m-0">
                <div v-for="service in homepage.services" class="col-6 col-lg-3 col-sm-6 p-0">
                    <router-link :to="{ name: 'Service', params: { slug: service.slug } }">
                        <div class="img-container">
                            <img :src="service.home_page_imagee" alt="">
                        </div>
                        <h4>{{ service.name }}</h4>
                    </router-link>
                </div>
            </div>
        </section>

        <section class="home-section furniture">
            <h2 class="section-title">{{ $t("message.furniture") }}</h2>

            <div class="row m-0 align-items-end">
                <div class="col-sm-5 p-0 mb-5 mb-sm-0 furniture-item">
                    <div class="img-container">
                        <img class="img-fluid w-100" :src="homepage.ready_made.image" alt="">
                    </div>
                    <div class="d-lg-flex align-items-center">
                        <div class="mr-auto text-center">
                            <h3>{{ $t("message.ReadyMade") }}</h3>
                        </div>
                        <div class="text-center">
                            <router-link class="more" :to="{ name: 'ReadyMade' }">{{ $t("message.viewMore") }}</router-link>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 offset-xl-2 col-sm-5 offset-sm-1 p-0 furniture-item">
                    <div class="img-container">
                        <img class="img-fluid w-100" :src="homepage.custom_made.image" alt="">
                    </div>
                    <div class="d-lg-flex align-items-center">
                        <div class="mr-auto text-center">
                            <h3>{{ homepage.custom_made.name }}</h3>
                        </div>
                        <div class="text-center">
                            <router-link class="more" :to="{ name: 'CustomMade', params: { slug: 'custommade' } }">{{ $t("message.viewMore") }}</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="home-section bio-section">
            <div class="container">
                <div class="row flex-column-reverse flex-lg-row align-items-center">
                    <div class="col-lg-5">
                        <h2>{{ homepage.aboutus.title }}</h2>

                        <p>{{ homepage.aboutus.description }}</p>

                        <div>
                            <router-link class="btn btn-black" :to="{ name: 'About' }">{{ $t("message.viewMore") }}</router-link>
                        </div>
                    </div>
                    <div class="col-lg-7 mb-4 mb-lg-0 text-right images-container">
                        <div class="img-container">
                            <img :src="homepage.aboutus.left_imagee" alt="">
                        </div>
                        <div class="img-container over">
                            <img :src="homepage.aboutus.right_imagee" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>


<script>
export default {
    name: 'Home',
    data () {
        return {
            homepage: {
                banner: {image: null},
                services: [],
                ready_made: {name: null, image: null},
                custom_made: {slug: null, name: null, image: null},
                aboutus: {
                    slug: null,
                    name: null,
                    title: null,
                    description: null,
                    left_imagee: null,
                    right_imagee: null
                }
            }
        }
    },
    created() {
        this.getData();
    },
    beforeRouteUpdate (to, from, next) {
        this.getData();
        next();
    },
    methods: {
        getData() {
            this.$axios({
                method: "POST",
                data: { language_symbol: this.$i18n.locale },
                url: this.$root.apiUrl+"get-homepage"
            }).then(response => {
                if(response.data.status)
                    this.homepage = response.data.data;
            }, error => {
                console.error(error);
            });
        }
    }
}
</script>