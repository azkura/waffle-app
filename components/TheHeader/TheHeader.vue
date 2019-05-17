<template>
<header class="header" :style="{backgroundImage: 'url(' + require('@/assets/blurred.jpg') + ')'}"
>
    <nav class="header-nav">
            
                <ul class="nav-links">
                    <nuxt-link tag="li" to=""  class="nav-link"><a>Home</a></nuxt-link>
                    <nuxt-link tag="li" to=""  class="nav-link"><a>About Us</a></nuxt-link>
                    <nuxt-link tag="li" to=""  class="nav-link"><a>Our Creations</a></nuxt-link>
                    <nuxt-link tag="li" to=""  class="nav-link"><a>Blog</a></nuxt-link>
                    <nuxt-link tag="li" to=""  class="nav-link"><a>Where to buy</a></nuxt-link>
                    <nuxt-link tag="li" to=""  class="nav-link"><a>Shop Online</a></nuxt-link>
                    <nuxt-link tag="li" to=""  class="nav-link"><a>FAQ</a></nuxt-link>
                    <nuxt-link tag="li" to=""  class="nav-link"><a>Contact Us</a></nuxt-link>
                </ul>
            
    
       
        
    </nav>
</header>
    
</template>

<script>

export default {
  /*  props: {
        thumbnailImage:String,
        required: true 
    }, 
    data () {
        return {
            thumbnailImage: "@/assets/img/bread-cherries.jpg"
        }  
    } */
    
}
</script>

<style scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 300px; 
    background-repeat: no-repeat;
    background-size: 100% 100%;
  /*  background-image:url('@/assets/blurred.jpg') */
}

.header-nav {
    height: 100%;
}

.nav-links {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.nav-link {
    list-style: none;
}

.nav-link a {
    color: black;
    text-decoration: none;
}

.nav-link a:hover,
.nav-link a:active {
    color: aliceblue;
}

.nav-link a:active {
    border-bottom: 1px solid black;
}

</style>





