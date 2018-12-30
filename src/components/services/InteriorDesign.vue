<template>
    <div>
        <div class="interior">

            <section class="home-main">
                <div class="main-column flex-column-reverse d-flex flex-md-row">
                    <div class="col-md-4 p-0 d-flex align-items-center">
                        <h1 class="main-headline">
                            <span>Interior Design</span>
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
                            <img class="img-fluid w-100" src="../../assets/images/interior/demo-3.jpg" alt="">
                        </div>
                        <div class="furniture-details">
                            <h2>magna velit odie varius tellus</h2>
                            <p>
                                Aenean quis cursus tortor, sit amet tincidunt lectus. Morbi pulvinar sit amet eros et
                                blandit. Cras vitae nunc feugiat,
                                vestibulum quam in, venenatis neque. Nam tempor facilisis arcu eget sagittis.
                                Pellentesque habitant morbi tristique
                                senectus et netus et malesuada fames ac turpis egestas. Sed pulvinar urna in porta
                                vulputate. Nulla facilisi. Nunc ac
                                placerat turpis. Sed malesuada placerat orci, vitae convallis nibh ornare quis. Fusce
                                at pulvinar ipsum, eu malesuada
                                massa. Etiam eget dapibus augue.
                            </p>
                        </div>
                    </div>

                    <div class="col-md-5 col-xl-4 col-sm-8 p-0 mb-4 furniture-item furniture-img">
                        <div class="img-container">
                            <img class="img-fluid w-100" src="../../assets/images/interior/demo-2.jpg" alt="">
                        </div>
                    </div>
                </div>
            </section>

            <section class="home-section slider-sec">
                <div class="owl-carousel owl-theme">
                <div class="item"><img src="../../assets/images/interior/demo-4.jpg" alt=""></div>
                <div class="item"><img src="../../assets/images/interior/demo-4.jpg" alt=""></div>
                <div class="item"><img src="../../assets/images/interior/demo-4.jpg" alt=""></div>
                <div class="item"><img src="../../assets/images/interior/demo-4.jpg" alt=""></div>
                <div class="item"><img src="../../assets/images/interior/demo-4.jpg" alt=""></div>
                <div class="item"><img src="../../assets/images/interior/demo-4.jpg" alt=""></div>
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
import '@/assets/OwlCarousel/owl.carousel.min.js'
export default {
    name: 'InteriorDesign',
    data () {
        return {}
    },
    metaInfo: {
        titleTemplate: 'Interior Design | %s'
    },
    mounted() {
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 100,
            nav: false,
            items: 1.35,
            responsive: {
                0: {
                    margin: 20,
                },
                600: {
                    margin: 30
                },
                1000: {
                    
                }
            }
        });
    },
}
</script>

<style lang="scss">
    @import "../../assets/OwlCarousel/owl.carousel.min.css";
</style>
