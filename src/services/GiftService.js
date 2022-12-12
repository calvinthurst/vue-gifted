import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js"
import { logger } from "../utils/Logger.js"
import { giftApi } from "./AxiosService.js"


class GiftService {
  async getGifts() {
    const res = await giftApi.get('')
    AppState.gifts = res.data.map(g => new Gift(g))
    logger.log(AppState.gifts)
  }
  // async openGift(gift) {
  //   const res = await giftApi.put(gift)
  //   logger.log(res.data)
  // AppState.gifts = res.data}
  async createGift(giftData) {
    // const res = await giftApi.post(form)
    logger.log(giftData)
  }

}
export const giftService = new GiftService()