<template>
  <div>
        <bounce-loader :loading="isLoading" :color="'#68d391'" :size="100"></bounce-loader>
        <px-assets-table  
        v-if="!isLoading"
        v-bind:assets="assets"></px-assets-table>
  </div>
</template>
<script>
import PxAssetsTable from "@/components/PxAssetsTable.vue";
import Api from "@/Api/api";

export default {
  
  name: "Home",

  components: { PxAssetsTable },

  data(){
    return{
      isLoading:false,
      assets: []
    }
  },

  created(){
    this.isLoading = true
    Api.getAssets().then(assets => (this.assets = assets)).finally(()=> this.isLoading=false);
  }
};
</script>
