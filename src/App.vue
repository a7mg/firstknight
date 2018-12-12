<template>
  <div id="app">
    <header class="d-flex">
        <div class="d-flex align-items-center mr-auto">
            <a href="index.html" class="logo">
                <img src="./assets/images/logo.png" alt="">
            </a>
            
            <div class="menu-btn d-flex align-items-center">
                <div><span></span><span></span><span></span></div>
                <label>Menu</label>
            </div>
        </div>

        <div class="">
            <ul class="menu">
                <li><span class="icon search"></span> search</li>
                <li><a href=""><span class="icon user"></span> login</a></li>
                <li><a href=""><span class="icon cart"></span> cart</a></li>
                <li><a href="javascript:void(0)" @click="changeLang">{{this.$root.lang}}</a></li>
            </ul>
        </div>

    </header>

    
    <router-view/>

    
    <footer>
        <div class="container">
            <div class="footer-top">
                <div class="d-md-flex align-items-end justify-content-between text-center">
                    <div class="py-md-0 py-2 mb-3 mb-md-0">
                        <div class="subscribe">
                            <h6>Sign up for our newsletter</h6>
                            <div class="form">
                                <input type="text" class="form-control" placeholder="Your Email address" />
                                <button class="btn btn-black">subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div class="py-md-0 py-2 d-flex align-items-center justify-content-center">
                        <span>Follow Us</span>
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
                    <div class="py-md-0 py-2">All rights reserved, First Knight 2018</div>
                    <div class="py-md-0 py-2">Powered by <a href="http://media-sci.com">MediaSci</a> <a class="power-logo" href="http://media-sci.com"><img src="./assets/images/logo-media-sci.png" alt=""></a></div>
                </div>
            </div>
        </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App', 
  data() {
      return {
          
      }
  },
  methods: {
      changeLang() {
        if(this.$root.lang == 'en')
            this.$root.lang = "ar"
        else
            this.$root.lang = "en"
        // location.reload()
      },
  }
}
</script>

<style lang="scss">
    // Include SCSS files
    @import '../node_modules/bootstrap/scss/bootstrap.scss';
    @import './assets/sass/FirstKnight.scss';
</style>