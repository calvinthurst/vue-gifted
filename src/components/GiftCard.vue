<template>
  <div v-if="gift.opened == false" class="col-3 unopened">
    <img src="https://media2.giphy.com/media/l3vRebb6HyeIgvmQ8/giphy.gif" alt="">
  </div>
  <div v-else @click="openGift(gift.id)" class="home-card col-3 bg-white rounded elevation-3">
    <img :src="gift.url" :alt="gift.tag">
    <p class="my-5 rounded text-center">
      {{ gift.tag }}
    </p>
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { Gift } from "../models/Gift.js";
import Pop from "../utils/Pop.js";
import { giftService } from "../services/GiftService.js";
export default {
  props: { gift: Gift },
  setup() {
    return {
      // async openGift(id) {
      //   try {
      //     debugger
      //     await giftService.openGift(id)
      //   } catch (error) {
      //     logger.log(error)
      //     Pop.error(error)
      //   }
      // }
    }
  }
};
</script>


<style lang="scss" scoped>
.unopened {
  height: 330px;
  // background-image: url('https://media2.giphy.com/media/l3vRebb6HyeIgvmQ8/giphy.gif');
  object-position: center;
  object-fit: contain;
}

.home-card {
  >img {
    height: 200px;
    max-width: 200px;
    width: 100%;
    object-fit: contain;
    object-position: center;
  }
}
</style>