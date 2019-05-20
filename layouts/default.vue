<template>
  <div>
    <TheHeader />
    <nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader/TheHeader'
import TheFooter from '~/components/TheFooter/TheFooter'

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>


<style>
html {
  font-family: 'Open Sans', sans-serif;
  
}

* {
  box-sizing: border-box;
  margin: 0;
}

.main-content{
  margin-top: 5rem;
  margin-bottom: 10rem;
}

</style>
