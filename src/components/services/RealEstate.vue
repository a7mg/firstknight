<template>
    <div>

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
                        <div class="img-container"></div>
                    </div>
                </div>
            </section>

            <section class="home-section magna">
                <div class="row m-0 align-items-end justify-content-between">

                    <div class="col-md-6 p-0 mb-4 mb-sm-0 furniture-item">
                        <div class="img-container">
                            <img class="img-fluid w-100" :src="service.main_imagee" alt="">
                        </div>
                        <div class="furniture-details">
                            <h2>magna velit odie varius tellus</h2>
                            <p>
                                {{ service.description }}
                            </p>
                        </div>
                    </div>

                    <div class="col-md-5 col-xl-4 col-sm-8 p-0 mb-4 furniture-item furniture-img">
                        <div class="img-container">
                            <img class="img-fluid w-100" src="../../assets/images/estate/demo-2.jpg" alt="">
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
    name: 'RealEstate',
    data () {
        return {
            service: {
                "slug": "real-state",
                "name": "Real State",
                "description": "Aenean quis cursus tortor, sit amet tincidunt lectus. Morbi pulvinar sit amet eros et blandit. Cras vitae nunc feugiat, vestibulum quam in, venenatis neque. Nam tempor facilisis arcu eget sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed pulvinar urna in porta vulputate. Nulla facilisi. Nunc ac placerat turpis. Sed malesuada placerat orci, vitae convallis nibh ornare quis. Fusce at pulvinar ipsum, eu malesuada massa. Etiam eget dapibus augue.",
                "home_page_imagee": "https://dev.media-sci.com/first_knight/public/./uploads/12-2018/05f1a2b7e6c0cac3c73db602a95da49bf1c33b8c.jpeg",
                "main_imagee": "https://dev.media-sci.com/first_knight/public/./uploads/12-2018/1a27da7ada557919245e35db277024d091b670d7.jpeg",
                "left_imagee": "https://dev.media-sci.com/first_knight/public/./uploads/12-2018/3d75720e12d18966955513f3db1062fd2b2cb74a.jpeg",
                "right_imagee": "https://dev.media-sci.com/first_knight/public/./uploads/12-2018/a14589d0d9809275753c5e510c1f3c7efd9aede8.jpeg",
                "sliders": []
            }
        }
    },
    metaInfo: {
        titleTemplate: 'Real Estate | %s'
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData: () => {
            axios({
                method: "POST",
                data: {
                    language_symbol: 'en', //this.$i18n.locale
                    slug: 'real-state'
                },
                url: this.$store.state.apiUrl+"get-services"
            }).then(response => {
                this.service = response.data;
            }, error => {
                console.error(error);
            });
        }
    },
}
</script>