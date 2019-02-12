<template>
    <div>
        <div class="readymade">

            <section class="home-main">
                <div class='container'>
                    <h1 class="main-headline">
                        <span>{{ $t("message.ReadyMade") }}</span>
                    </h1>
                </div>
            </section>

            <section class="home-section">
                <div class="container">
                    <div class='card-columns'>
                        <div class="card" v-for="(category, index) in Categories" :key="index">
                            <div class="card-body" v-wow="{ 'animation-name': 'slideUpIn','animation-duration': '2s' }">
                                <div class="img-container">
                                    <img class="img-fluid w-100" :src="category.image" alt="">
                                </div>
                                <div class="d-lg-flex align-items-center">
                                    <div class="mr-auto text-center">
                                        <h3>{{ category.name }}</h3>
                                    </div>
                                    <div class="text-center"> <!-- , query: { category_id: category.id } -->
                                        <router-link class="more" :to="{ name: 'Products', params: { slug: category.slug, catId: category.id } }">{{ $t("message.viewMore") }}</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'readyMade',
        data () {
            return {
                Categories: {}
            }
        },
        metaInfo: {titleTemplate: 'ReadyMade | %s'},
        // metaInfo() {return {titleTemplate: 'ReadyMade | %s'}},
        created() {
            this.getCategories();
        },
        beforeRouteUpdate (to, from, next) {
            this.getCategories();
            next();
        },
        methods: {
            getCategories() {
                this.$axios({
                    method: "POST",
                    data: { language_symbol: this.$i18n.locale },
                    url: this.$root.apiUrl+"get-categories"
                }).then(response => {
                    if(response.status)
                        this.Categories = response.data.data;
                    // this.$router.push({ name: 'Error' })
                }, error => {
                    console.error(error);
                });
            }
        },
    }
</script>