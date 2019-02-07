<template>
  <header class="d-flex position-fixed">
    <div class="d-flex align-items-center mr-auto">
      <router-link :to="{ name: 'Home' }" class="logo">
        <img src="../../assets/images/logo.png" alt>
      </router-link>

      <div class="menu-btn open-pop d-flex align-items-center" data-target="menu-pop">
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <label>{{ $t("message.menu") }}</label>
      </div>
    </div>

    <div class>
      <ul class="menu">
        <li>
          <a href="javascript:void(0)" class="open-pop" data-target="search-pop">
            <span class="icon search"></span>
            <span>{{ $t("message.search") }}</span>
          </a>
        </li>
        <li v-if="!isLoggedIn">
          <a href="javascript:void(0)" class="open-pop" data-target="login-pop">
            <span class="icon user"></span>
            <span>{{ $t("message.login") }}</span>
          </a>
        </li>
        <li v-if="isLoggedIn">
          <router-link :to="{ name: 'Profile' }">
            <span class="icon user"></span>
            <span>{{ user.name }}</span>
          </router-link>
        </li>
        <!-- <li v-if="isLoggedIn">
                    <a href="javascript:void(0)" class="lang-change" @click="logout"><span>{{ $t("message.logout") }}</span></a>
        </li>-->
        <li class="position-relative">
          <span v-if="cart.items" class="badge badge-light">{{cart.items.length}}</span>
          
          <a href="javascript:void(0)" class="open-pop" data-target="cart-pop">
            <span class="icon cart"></span>
            <span>{{ $t("message.cart") }}</span>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)" @click="changeLang">{{($i18n.locale =='en')?'ع':'EN'}}</a>
        </li>
      </ul>
    </div>
  </header>
</template>


<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  computed: {
    user: function() {return this.$store.state.auth.user;},
    isLoggedIn: function() {return this.$store.getters.isLoggedIn;},
    cart : function(){return this.$store.getters.cart}
  },
  methods: {
    changeLang() {
      if (this.$i18n.locale == "en") this.$root.locale = "ar";
      else this.$root.locale = "en";

      // location.reload()
    },
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push({ name: "Home" });
      });
    }
  }
};
</script>