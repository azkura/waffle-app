<template>
  <div>
    <TheHeader />
    <nuxt />
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader/TheHeader'

export default {
  components: {
    TheHeader
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
