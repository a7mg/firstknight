<template>
  <div id="app">
    <header class="d-flex">
        <div class="d-flex align-items-center mr-auto">
            <router-link :to="{ name: 'Home' }" class="logo">
                <img src="./assets/images/logo.png" alt="">
            </router-link>
            
            <div class="menu-btn open-pop d-flex align-items-center" data-target="menu-pop">
                <div><span></span><span></span><span></span></div>
                <label>{{ $t("message.menu") }}</label>
            </div>
        </div>

        <div class="">
            <ul class="menu">
                <li><a href="javascript:void(0)" class="open-pop" data-target="search-pop"><span class="icon search"></span> <span>{{ $t("message.search") }}</span></a></li>
                <li><a href="javascript:void(0)" class="open-pop" data-target="login-pop"><span class="icon user"></span> <span>{{ $t("message.login") }}</span></a></li>
                <li><a href="javascript:void(0)" class="open-pop" data-target="cart-pop"><span class="icon cart"></span> <span>{{ $t("message.cart") }}</span></a></li>
                <li>
                    <a href="javascript:void(0)" @click="changeLang">
                        {{($i18n.locale =='en')?'ع':'EN'}}
                    </a>
                </li>
            </ul>
        </div>

    </header>

    <div class="search-pop fixed-pop">
        <div class="search-container pop-container">
            <span class="close-pop black m-auto"></span>
            <div class="search-form">
                <input type="text" v-bind:placeholder='$t("message.search")'>
            </div>
        </div>
    </div>

    <div class="menu-pop fixed-pop">
        <div class="menu-container pop-container">
            <span class="close-pop"></span>
            <ul>
                <li><router-link :to="{ name: 'Home' }">{{ $t("message.home") }}</router-link></li>
                <li class="dropdown">
                    <a href="#">{{ $t("message.services") }}</a>
                    <ul>
                        <li><router-link :to="{ name: 'Service', params: { slug: 'real-estate' } }">Real Estate</router-link></li>
                        <li><router-link :to="{ name: 'Service', params: { slug: 'interior-design' } }">Interior Design</router-link></li>
                        <li><router-link :to="{ name: 'Service', params: { slug: 'exhibitions' } }">Exhibitions</router-link></li>
                        <li><router-link :to="{ name: 'Service', params: { slug: 'maintenance' } }">Maintenance</router-link></li>
                    </ul>
                </li>
                <li class="dropdown">
                    <a href="#">{{ $t("message.furniture") }}</a>
                    <ul>
                        <!-- <li><router-link :to="{ name: 'ReadyMade' }">ReadyMade</router-link></li>
                        <li><router-link :to="{ name: 'CustoiimMade' }">CustoiimMade</router-link></li> -->
                    </ul>
                </li>
                <li><router-link to="/about">{{ $t("message.about") }}</router-link></li>
                <li><router-link to="/contact">{{ $t("message.contactUs") }}</router-link></li>
            </ul>
        </div>
    </div>

    <div class="cart-pop fixed-pop">
        <div class="cart-container pop-container">
            <span class="close-pop black mr-auto"></span>
            
            <div class="cart-content">
                <h4>{{ $t("message.myCart") }}</h4>

                <p>{{ $t("message.emptyCart") }}.</p>
            </div>
            <a href="#" class="btn btn-black w-100">{{ $t("message.continueShopping") }}</a>
        </div>
    </div>

    <div class="login-pop fixed-pop open" style="display: block;">
        <div class="login-container pop-container">
            <div class="container">
                <span class="close-pop black m-auto"></span>
            
                <div class="user-login-form d-md-flex">
                    <div class="col-md-6 pr-md-5 mb-5 mb-md-0">
                        <div class="pr-lg-5">
                            <h4>{{ $t("message.login") }}</h4>
                            <form class="login-form form" @submit.prevent="handleLogin">
                                <div class="form-group">
                                    <label for="login-email">{{ $t("message.email") }}*</label>
                                    <input type="email" id="login-email" required v-model="login.data.email" class="form-control" >
                                    <p class="message error" v-if="login.errors.email">{{login.errors.email}}</p>
                                </div>
                                <div class="form-group">
                                    <label for="login-password">{{ $t("message.password") }}*</label>
                                    <input type="password" id="login-password" required v-model="login.data.password" class="form-control" >
                                    <p class="message error" v-if="login.errors.email">{{login.errors.password}}</p>
                                </div>
                                <div class="form-group">
                                    <p class="message success" v-if="login.status">{{login.message}}</p>
                                    <button type="submit" class="btn btn-black" v-bind:class="login.loading" >{{ $t("message.login") }}</button>
                                </div>
                                <div class="form-group">
                                    <a href="#">{{ $t("message.forgetPassword") }}?</a>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-md-6 pl-md-5">
                        <div class="pl-lg-5">
                            <h4>{{ $t("message.register") }}</h4>
                            <form class="form" @submit.prevent="handleRegister">
                                <div class="form-group">
                                    <label for="register-name">{{ $t("message.name") }}*</label>
                                    <input type="text" autocomplete="off" required id="register-name"  v-model="register.data.name" class="form-control" >
                                    <p class="message error" v-if="register.errors.name">{{register.errors.name}}</p>
                                </div>
                                <div class="form-group">
                                    <label for="register-email">{{ $t("message.email") }}*</label>
                                    <input type="email" autocomplete="off" required id="register-email"  v-model="register.data.email" class="form-control" >
                                    <p class="message error" v-if="register.errors.email">{{register.errors.email}}</p>
                                </div>
                                <div class="form-group">
                                    <label for="register-phone">{{ $t("message.phone") }}*</label>
                                    <input type="number" autocomplete="off" required id="register-phone"  v-model="register.data.phone" class="form-control" >
                                    <p class="message error" v-if="register.errors.phone">{{register.errors.phone}}</p>
                                </div>
                                <div class="form-group">
                                    <label for="register-password">{{ $t("message.password") }}*</label>
                                    <input type="password" required id="register-password"  v-model="register.data.password" class="form-control">
                                    <p class="message error" v-if="register.errors.password">{{register.errors.password}}</p>
                                </div>
                                <div class="form-group">
                                    <label for="register-c_password">{{ $t("message.c_password") }}*</label>
                                    <input type="password" required id="register-c_password"  v-model="register.data.c_password" class="form-control">
                                    <p class="message error" v-if="register.errors.c_password">{{register.errors.c_password}}</p>
                                </div>
                                <div class="form-group">
                                    <p class="message success" v-if="register.status">{{register.message}}</p>
                                    <button type="submit" class="btn btn-black" v-bind:class="register.loading" >{{ $t("message.register") }}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="main-content d-flex align-items-center">
        
        <div class="content w-100">
            <router-view/>
        </div>

    </div>

    
    <footer>
        <div class="container">
            <div class="footer-top">
                <div class="d-md-flex align-items-end justify-content-between text-center">
                    <div class="py-md-0 py-2 mb-3 mb-md-0">
                        <div class="subscribe">
                            <h6>{{ $t("message.newsletter") }}</h6>
                            <form class="form" @submit.prevent="handleSubscribe">
                                <!--  @submit.prevent -->
                                <input type="text" v-model="subscribe.email" class="form-control" v-bind:placeholder='$t("message.yourEmailAddress")' />
                                <button type="submit" class="btn btn-black">{{ $t("message.subscribe") }}</button>
                                
                            </form>
                            <p class="message" v-bind:class="{ error: !subscribe.status }" v-if="subscribe.data">{{subscribe.data}}</p>
                        </div>
                    </div>
                    <div class="py-md-0 py-2 d-flex align-items-center justify-content-center">
                        <span>{{ $t("message.followUs") }}</span>
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
                    <div class="py-md-0 py-2">{{ $t("message.rights") }}</div>
                    <div class="py-md-0 py-2">{{ $t("message.powered") }} <a href="http://media-sci.com">MediaSci</a> <a class="power-logo" href="http://media-sci.com"><img src="./assets/images/logo-media-sci.png" alt=""></a></div>
                </div>
            </div>
        </div>
    </footer>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'App', 
  data() {
      return {
        subscribe: { email: null, status: null, message: null, data: null },
        register: {
            loading: null,
            status: null,
            message: null,
            data: {language_symbol: this.$i18n.locale, name: null, email: null, phone: null, password: null, c_password: null},
            errors: {name: null, email: null, phone: null, password: null, c_password: null},
        },
        login: {
            loading: null,
            status: null,
            message: null,
            data: {language_symbol: this.$i18n.locale, email: null, password: null},
            errors: {email: null, password: null},
        }
      }
  },
  methods: {
      changeLang() {
        if(this.$i18n.locale == 'en')
            this.$i18n.locale = this.$root.locale = "ar"
        else
            this.$i18n.locale = this.$root.locale = "en"
        
        this.$router.replace({ params: {lang: this.$i18n.locale} })
        // location.reload()
      },
      handleSubscribe(e) {
        axios({
            method: "POST",
            data: {
                language_symbol: this.$i18n.locale,
                email: this.subscribe.email
            },
            url: this.$root.baseUrl+"add-subscribe"
        }).then(response => {
            this.subscribe.status = response.data.status;
            this.subscribe.message = response.data.message;
            this.subscribe.data = response.data.data;
        }, error => {
            console.error(error);
        });
        e.preventDefault();
      },
      handleRegister(e) {
        this.register.loading = 'loading';
        axios({
            method: "POST",
            data: this.register.data,
            url: this.$root.baseUrl+"register"
        }).then(response => {
            this.register.loading = null;
            this.register.status = response.data.status;
            if(!response.data.status)
                this.register.errors = response.data.data
        }, error => {
            console.error(error);
        });
        e.preventDefault();
      },
      handleLogin(e) {
        this.login.loading = 'loading';
        axios({
            method: "POST",
            data: this.login.data,
            url: this.$root.baseUrl+"login"
        }).then(response => {
            this.login.loading = null;
            this.login.status = response.data.status;
            if(!response.data.status)
                this.login.errors = response.data.data;
            else {
                this.login.message = response.data.message;
                $('.close-pop').trigger('click');
            }
        }, error => {
            console.error(error);
        });
        e.preventDefault();
      }
      /*validEmail: function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }*/
  }
}
</script>

<style lang="scss">
    // Include SCSS files
    @import './assets/sass/FirstKnight.scss';
</style>