<template>
    <div>
        <div class="content">
            <section class="home-main">
                <div class="main-column flex-column-reverse d-flex flex-md-row">
                    <div class="col-md-4 p-0 d-flex align-items-center">
                        <h1 class="main-headline">
                            <span>We Have</span>
                            <span>No Rule</span>
                        </h1>

                        <a href="#" class="go-down d-none d-md-block"></a>
                    </div>
                    <div class="col-md-8 p-0">
                        <div class="img-container"></div>
                    </div>
                </div>
            </section>

            <section class="home-section services">
                <h2 class="section-title">Services</h2>
                <div class="row m-0">
                    <div class="col-12 col-lg-3 col-sm-6 p-0">
                        <div class="img-container">
                            <img src="../assets/images/service-1.jpg" alt="">
                        </div>
                        <h4>Real Estate</h4>
                    </div>
                    <div class="col-12 col-lg-3 col-sm-6 p-0">
                        <div class="img-container">
                            <img src="../assets/images/service-2.jpg" alt="">
                        </div>
                        <h4>Interior Design</h4>
                    </div>
                    <div class="col-12 col-lg-3 col-sm-6 p-0">
                        <div class="img-container">
                            <img src="../assets/images/service-3.jpg" alt="">
                        </div>
                        <h4>Exhibitions</h4>
                    </div>
                    <div class="col-12 col-lg-3 col-sm-6 p-0">
                        <div class="img-container">
                            <img src="../assets/images/service-4.jpg" alt="">
                        </div>
                        <h4>Maintenance</h4>
                    </div>
                </div>
            </section>

            <section class="home-section furniture">
                <h2 class="section-title">Furniture</h2>

                <div class="row m-0 align-items-end">
                    <div class="col-sm-5 p-0 mb-4 mb-sm-0 furniture-item">
                        <div class="img-container">
                            <img class="img-fluid w-100" src="../assets/images/demo-3.jpg" alt="">
                        </div>
                        <div class="d-lg-flex align-items-center">
                            <div class="mr-auto text-center">
                                <h3>ReadyMade</h3>
                            </div>
                            <div class="text-center">
                                <a href="" class="more">view more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 offset-xl-2 col-sm-5 offset-sm-1 p-0 furniture-item">
                        <div class="img-container">
                            <img class="img-fluid w-100" src="../assets/images/demo-2.jpg" alt="">
                        </div>
                        <div class="d-lg-flex align-items-center">
                            <div class="mr-auto text-center">
                                <h3>CustoiimMade</h3>
                            </div>
                            <div class="text-center">
                                <a href="" class="more">view more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="home-section bio-section">
                <div class="container">
                    <div class="row flex-column-reverse flex-lg-row align-items-center">
                        <div class="col-lg-5">
                            <h2>With a style for any style</h2>

                            <p>Donec ac tellus eu dui pulvinar laoreet et nec tellus. Etiam molestie hendrerit orci ut tincidunt nullam ullamcorper</p>

                            <div>
                                <a href="#" class="btn btn-black">View More</a>
                            </div>
                        </div>
                        <div class="col-lg-7 mb-4 mb-lg-0 text-right images-container">
                            <div class="img-container">
                                <img src="../assets/images/demo-4.jpg" alt="">
                            </div>
                            <div class="img-container over">
                                <img src="../assets/images/demo-5.jpg" alt="">
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
  name: 'HomePage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>