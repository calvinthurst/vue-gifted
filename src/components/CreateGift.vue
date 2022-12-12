<template>
  <section class="row">
    <div class="col-12">
      <form action=" " @submit.prevent="createGift">
        <input class="form-control col-12" type="text" v-model="giftData.url" placeholder="Gift Title">
        <input class="form-control col-10" type="text" v-model="giftData.tag" placeholder="Gift Img Url">
        <button type="submit" class="btn btn-outline-warning">make gift</button>
      </form>
    </div>
  </section>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import Pop from "../utils/Pop.js";
import { giftService } from "../services/GiftService.js";
export default {
  setup() {
    const giftData = reactive({
      url: '',
      tag: ''
    })
    return {
      giftData,
      async createGift(giftData) {
        try {
          await giftService.createGift(giftData)
        } catch (error) {
          logger.log(error)
          Pop.error(error)
        }
      }

    }
  }
};
</script>


<style lang="scss" scoped>

</style>