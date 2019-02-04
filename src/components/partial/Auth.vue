<template>
    <div v-if="!isLoggedIn" class="login-pop fixed-pop">
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
                                </div>
                                <div class="form-group">
                                    <label for="login-password">{{ $t("message.password") }}*</label>
                                    <input type="password" id="login-password" required v-model="login.data.password" class="form-control" >
                                </div>
                                <div class="form-group">
                                    <p class="message mb-3" v-if="login.static.message" v-bind:class="login.static.status? 'success':'error'">{{login.static.message}}</p>
                                    <button type="submit" class="btn btn-black" v-bind:class="login.static.loading" >{{ $t("message.login") }}</button>
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
                                    <p class="message mb-3" v-if="register.static.message" v-bind:class="register.static.status? 'success':'error'">{{register.static.message}}</p>
                                    <button type="submit" class="btn btn-black" v-bind:class="register.static.loading" >{{ $t("message.register") }}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Auth',
    data() {
        return {
            register: {
                static: {loading: null, status: null, message: null},
                data: {language_symbol: null, name: null, email: null, phone: null, password: null, c_password: null},
                errors: {name: null, email: null, phone: null, password: null, c_password: null},
            },
            login: {
                static: {loading: null, status: null, message: null},
                data: {language_symbol: null, email: null, password: null}
            }
        }
    },
    computed : {
        isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
    },
    methods: {
        handleRegister() {
            this.register.static.loading = 'loading';
            this.register.data.language_symbol = this.$i18n.locale;
            this.$store.dispatch('register', this.register.data)
                .then(response => {
                    this.register.static = response;
                    if(!response.status)
                        this.register.errors = response.messages
                    else {
                        this.setNull(this.register);
                        this.$router.push({ name: 'Profile' });
                    }
                })
        },
        handleLogin() {
            this.login.static.loading = 'loading';
            this.login.data.language_symbol = this.$i18n.locale;
            this.$store.dispatch('login', this.login.data)
                .then(response => {
                    this.login.static = response;
                    if(response.status)
                        this.setNull(this.login);
                    // this.$router.push({ name: 'Profile' })
                })
        },
        setNull(obj){
            if(typeof obj === 'object' && obj !== null) {
                Object.keys(obj).map((key, index)=>{
                    if(typeof obj[key] === 'object' && obj[key] !== null) {
                        this.setNull(obj[key])
                    } else obj[key] = null
                })
            } else obj = null
        }
        /*validEmail: function (email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }*/
    }
}
</script>