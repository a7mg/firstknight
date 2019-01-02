<template>
    <div>
        <div class="contact">

            <section class="home-main">
                    <div class="main-column flex-column-reverse d-flex flex-md-row">
                        <div class="col-md-4 p-0 d-flex align-items-center">
                            <h1 class="main-headline">
                                <span>CONTACT</span>
                                <span>US</span>
                            </h1>

                            <a href="#" class="go-down"></a>
                        </div>
                        <div class="col-md-8 p-0">
                            <div class="embed-responsive embed-responsive-16by9">
                                <iframe class="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d465130.3070333909!2d54.278418183283314!3d24.387198384855537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e440f723ef2b9%3A0xc7cc2e9341971108!2sAbu+Dhabi+-+United+Arab+Emirates!5e0!3m2!1sen!2seg!4v1522768308067"
                                    allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="home-section contact-details">
                    <div class="container">
                        <div class='row align-items-start'>

                            <div class='col-md-4 d-flex align-items-start'>
                                <img class='' src="../assets/images/icons/address.png" alt="">
                                <div class='px-4'>
                                    <h4>ADDRESS</h4>
                                    <p>
                                        Office No.702, 7th Floor kamala Tower, Al khalidiya
                                        Abu Dhabi, UAE
                                    </p>
                                </div>
                            </div>
            
                            <div class='col-md-4 d-flex align-items-start'>
                                <img class='' src="../assets/images/icons/email.png" alt="">
                                <div class='px-4'>
                                    <h4>EMAIL</h4>
                                    <p>
                                        Info@firstknightgroup.com
                                    </p>
                                </div>
                            </div>

                            <div class='col-md-4 d-flex align-items-start'>
                                <img class='' src="../assets/images/icons/call.png" alt="">
                                <div class='px-4'>
                                    <h4>CALL US</h4>
                                    <p>
                                        +971 26760660
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section class="home-section bg-light">
                    <h2 class='text-center'>DROP US A LINE</h2>
                    <div class="login-container">
                        <div class="container">
                            <div class="user-login-form d-md-flex">
                                <div class="col-md-6 px-md-4 mb-5 mb-md-0">
                                    <form class="login-form">
                                        <div class="form-group">
                                            <label for="name">Name*</label>
                                            <input type="text" id="name" class="form-control">
                                        </div>
                                        <div class="form-group">
                                            <label for="email">E-MAIL*</label>
                                            <input type="text" id="email" class="form-control">
                                        </div>
                                        <div class="form-group">
                                            <label for="phone">PHONE*</label>
                                            <input type="text" id="phone" class="form-control">
                                        </div>
                                    </form>
                                </div>
                                <div class="col-md-6 px-md-4 mb-5 mb-md-0">
                                    <form class="login-form">
                                        <div class="form-group">
                                            <label for="message">MESSAGE*</label>
                                            <textarea class="form-control" id="message" rows="8"></textarea>
                                        </div>
                                    </form>
                                </div>

                            </div>
                            <form class="text-center">
                                <div class="form-group mb-0 mt-4">
                                    <button type="submit" class="btn btn-black">SEND</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'Contact',
        data () {
            return {}
        },
        metaInfo: {
            titleTemplate: 'Contact | %s'
        }
    }
</script>