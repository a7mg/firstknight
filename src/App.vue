<template>
    <div id="app">
        <vue-progress-bar></vue-progress-bar>
        <Header />
        <Auth />
        <Search />
        <Menu />
        <Cart />

        <!-- Router View // d-flex align-items-center-->
        <div class="main-content">
            <div class="content w-100">
                <router-view/>
            </div>
        </div>
        <!-- End Router View -->

        <Footer />
    </div>
</template>

<script>
import Header from './components/partial/Header';
import Auth from './components/partial/Auth';
import Menu from './components/partial/Menu';
import Search from './components/partial/Search';
import Cart from './components/partial/Cart';
import Footer from './components/partial/Footer';

export default {
  name: 'App', 
  data() {
      return {

      }
  },
  mounted() {
      this.$Progress.finish()
  },
  created() {
    this.$Progress.start()
    this.$router.beforeEach((to, from, next) => {
        if (to.meta.progress !== undefined) {
            let meta = to.meta.progress
            this.$Progress.parseMeta(meta)
        }
        this.$Progress.start()
        next()
    })
    this.$router.afterEach((to, from) => {
        this.$Progress.finish()
    })
  },
  components: {
      Header,
      Auth,
      Menu,
      Search,
      Cart,
      Footer
  }
}
</script>

<style lang="scss">
    // Include SCSS files
    @import './assets/sass/FirstKnight.scss';
</style>