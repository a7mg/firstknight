<template>
    <div>
        <div class="about">
            
            <section class="home-main">
                <div class="main-column flex-column-reverse d-flex flex-md-row">
                    <div class="col-md-4 p-0 d-flex align-items-center">
                        <h1 class="main-headline">
                            <span>{{ $t("message.about") }}</span>
                        </h1>

                        <a href="#" class="go-down"></a>
                    </div>
                    <div class="col-md-8 p-0">
                        <div class="img-container" v-bind:style="{ 'background-image': 'url(' + about.main_imagee + ')' }"></div>
                    </div>
                </div>
            </section>

            <section class="home-section bio-section">
                <div class="container">
                    <div class="row flex-column-reverse flex-lg-row align-items-center">
                        <div class="col-lg-7 mb-4 pr-2 mb-lg-0 text-left images-container">
                            <div class="img-container">
                                <img :src="about.left_imagee" alt="">
                            </div>
                            <div class="img-container over">
                                <img :src="about.right_imagee" alt="">
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <h2>{{ about.name }}</h2>

                            <p>
                                {{ about.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section v-if="about.sliders" class="home-section our-clients">
                <div class="container">
                    <h2 class="section-title">{{ $t("message.our_clients") }}</h2>
                    <div class='row align-items-center'>
                        <div class="col-md-3" v-for="client in about.sliders">
                            <div class='items'><img :src="client" alt=""></div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </div>
</template>

<script>
export default {
    name: 'About',
    data () {
        return {about: {}}
    },
    metaInfo () {
      return {
        titleTemplate: 'About | %s'
      }
    },
    created() {
        this.getData('aboutus');
    },
    beforeRouteUpdate (to, from, next) {
        this.getData('aboutus');
        next();
    },
    methods: {
        getData(slug) {
            this.$axios({
                method: "POST",
                data: {
                    language_symbol: this.$i18n.locale,
                    slug: slug
                },
                url: this.$root.apiUrl+"get-services"
            }).then(response => {
                if(response.data.data[0].slug)
                    this.about = response.data.data[0];
                else
                    this.$router.push({ name: 'Error' })
            }, error => {
                console.error(error);
            });
        }
    },
}
</script>