<template>
    <div>
        <div class="about">
            
            <section class="home-main">
                <div class="main-column flex-column-reverse d-flex flex-md-row">
                    <div class="col-md-4 p-0 d-flex align-items-center">
                        <h1 class="main-headline">
                            <span>ABOUT</span>
                        </h1>

                        <a href="#" class="go-down"></a>
                    </div>
                    <div class="col-md-8 p-0">
                        <div class="img-container"></div>
                    </div>
                </div>
            </section>

            <section class="home-section bio-section">
                <div class="container">
                    <div class="row flex-column-reverse flex-lg-row align-items-center">
                        <div class="col-lg-7 mb-4 pr-2 mb-lg-0 text-left images-container">
                            <div class="img-container">
                                <img src="../assets/images/about/demo-2.jpg" alt="">
                            </div>
                            <div class="img-container over">
                                <img src="../assets/images/about/demo-3.jpg" alt="">
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <h2>WHO WE ARE?</h2>

                            <p>
                                Aenean quis cursus tortor, sit amet tincidunt lectus. Morbi pulvinar sit amet eros et blandit.
                                Cras vitaeeijl nunc feugiat, vestibulum quam in, venenatis neque. Nam tempor facilisis arcu
                                eget sagittis. Pellentesqueo habitant morbi tristique senectus et netus et malesual fames ac
                                turpis egestas. Sed pulvinar urna in portame vulputate. Nulla facilisi. Nunc ac placerat
                                turpis.
                                Sed malesuada placerat orci, vitae convallis nibhmehi ornare quis. Fusce at pulvinar ipsum, eu
                                malesuadaig massa. Etiam eget dapibus augue.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="home-section our-clients">
                <div class="container">
                    <h2 class="section-title">OUR CLIENTS</h2>
                    <div class='row align-items-center'>
                        <div class="col-md-3">
                            <div class='items'>
                                <img src="../assets/images/about/demo-4.jpg" alt="">
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
        name: 'About',
        data () {
            return {}
        },
        metaInfo: {
            titleTemplate: 'About | %s'
        }
    }
</script>