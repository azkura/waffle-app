<template>
  <div>
    <Logo />
    <TheHeader />
    <main class="main-content">
       <nuxt />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader/TheHeader'
import TheFooter from '~/components/TheFooter/TheFooter'
import Logo from '~/components/TheHeader/Logo'


export default {
  components: {
    TheHeader,
    TheFooter,
    Logo
  }
}
</script>


<style>

* {
  box-sizing: border-box;
  margin: 0;
}

body {
  font-family: 'Open Sans', sans-serif;
  background: rgb(235, 232, 232);
}

.main-content{
  margin-top: 4.5rem;
  margin-bottom: 4.5rem;
}

</style>
