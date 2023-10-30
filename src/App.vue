<template>
  <main>
    <PxHeader :links="links"></PxHeader>
    <router-view class="container px-5 sm:px-20 py-20 flex justify-center" />
  </main>
</template>

<script>
import PxHeader from "./components/PxHeader.vue";
export default {
  name: "app",
  components: { PxHeader },

  data(){
    return{
      links: [
        {
          title: 'BTC',
          to: { name: 'CoinDetail', params: { id: 'bitcoin' } }
        },
        {
          title: 'ETH',
          to: { name: 'CoinDetail', params: { id: 'ethereum' } }
        },
        {
          title: 'USDT',
          to: { name: 'CoinDetail', params: { id: 'tether' } }
        }
      ]
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
