<template>
  <div>
      <router-view></router-view>
      <Footer/>
  </div>
</template>

<script>
  import Footer from './components/Footer/Footer' 

  export default {
    name: 'App',
  
    components: {
      Footer,
    },

  }
</script>

<style>

</style>
