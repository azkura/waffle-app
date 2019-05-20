<template>
    <header class="main-header" >
        <nav class="header-nav">
            <ul class="nav-links">
                <nuxt-link tag="li" to="/"  class="nav-link"><a>Home</a></nuxt-link>
                <nuxt-link tag="li" to="about/" class="nav-link"><a>About Us</a></nuxt-link>
                <nuxt-link tag="li" to="/"  class="nav-link"><a>Our Creations</a></nuxt-link>
                <nuxt-link tag="li" to="/"  class="nav-link"><a>Blog</a></nuxt-link>
                <nuxt-link tag="li" to="/"  class="nav-link"><a>Where to buy</a></nuxt-link>
                <nuxt-link tag="li" to="/"  class="nav-link"><a>Shop Online</a></nuxt-link>
                <nuxt-link tag="li" to="/"  class="nav-link"><a>FAQ</a></nuxt-link>
                <nuxt-link tag="li" to="/"  class="nav-link"><a>Contact Us</a></nuxt-link>
            </ul>  
        </nav>
    </header>
</template>

<script>

export default {
 
}
</script>

<style scoped>
.main-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 4.5rem;
}
.header-nav {
    height: 100%;
}
.nav-links {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.nav-link {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    padding: 0.3rem;
}
.nav-link a {
    display: block;
    text-decoration: none;
    color: black;
}
.nav-link a:hover,
.nav-link a:active,
.nav-link.nuxt-link-exact-active a {
    color: tomato;
}
.nav-link a:active {
    border-bottom: 1px solid black;
}

</style>





