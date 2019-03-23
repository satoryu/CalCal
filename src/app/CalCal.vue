<template>
  <v-app>
    <Header></Header>
    <Calculator></Calculator>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Header from './components/Header.vue'
import Calculator from './components/Calculator.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Calculator,
    Footer
  }
};
</script>
