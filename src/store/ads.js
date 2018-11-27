export default {
    state: {
        ads: [
            {
              title: '1 card',
              description: '1 card desc',
              promo: false,
              id: '1',
              src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
            },
            {
              title: '2 card',
              description: '3 card desc',
              promo: true,
              id: '2',
              src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
            },
            {
              title: '3 card',
              description: '3 card desc',
              promo: true,
              id: '3',
              src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
            },
            {
              title: '4 card',
              description: '4 card desc',
              promo: true,
              id: '4',
              src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
            }
          ]
    },
    mutations: {
        createAd (state, payload) {
            state.ads.push(payload)
        }
    },
    actions: {
        createAd ({commit}, payload) {
            payload.id = 'adsdasdsa'

            commit('createAd', payload)
        }
    },
    getters: {
        ads (state) {
            return state.ads
        },
        promoAds (state) {
            return state.ads.filter(ad => {
                return ad.promo
            })
        },
        myAds (state) {
            return state.ads
        },
        adById (state) {
            return adId => {
                return state.ads.find(ad => ad.id === adId)
            }
        }
    }
}