<template>
  <section class="row justify-content-end m-0">

    <button class="btn btn-primary col-2 " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling"
      aria-controls="offcanvasScrolling">Create a gift</button>

    <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
      id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Create a gift here</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <CreateGift />
      </div>
    </div>
    <section class="row m-0">
      <GiftCard v-for="g in gifts" :gift="g" />
      <!-- <div v-for="g in gifts" :gift=g class="home-card col-4 p-5 bg-white rounded elevation-3">
          <img :src="g.url">
          <h1 class="my-5 bg-dark text-white p-3 rounded text-center">
            Gift title
          </h1>
        </div> -->
    </section>
  </section>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
import { AppState } from "../AppState.js";
import CreateGift from "../components/CreateGift.vue";
import { giftService } from "../services/GiftService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";


export default {
  setup() {
    onMounted(() => { getGifts() })
    async function getGifts() {
      try {
        await giftService.getGifts()
      } catch (error) {
        logger.log(error)
        Pop.error(error)
      }
    }
    return {
      gifts: computed(() => AppState.gifts),
    };
  },
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;


}
</style>
