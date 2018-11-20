<template>
    <div>
        <v-container>
            <v-layout row>
                <v-flex xs12>
                    <v-carousel>
                        <v-carousel-item
                        v-for="ad in ads"
                        :key="ad.id"
                        :src="ad.src"
                        >
                        <div class="car-link">
                            <v-btn class="error" :to="'/ad/' + ad.id">{{ad.title}}</v-btn>
                        </div>
                        </v-carousel-item>
                    </v-carousel>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container
            grid-list-lg>
            <v-layout row wrap>
                <v-flex 
                    xs12
                    sm6
                    md4
                    v-for="ad in ads"
                    :key="ad.id">
                    <v-card>
                        <v-img
                        :src="ad.src"
                        aspect-ratio="2.75"
                        height="200px"
                        ></v-img>
                        <v-card-title primary-title>
                            <div>
                                <h3 class="headline mb-0">{{ad.title}}</h3>
                                <div>{{ad.description}}</div>
                            </div>
                        </v-card-title>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn flat :to="'/ad/' + ad.id">Open</v-btn>
                            <v-btn raised class="primary">Buy</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>
<script>
export default {
    data () {
        return {
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
        }
    }
}
</script>
<style scoped>
    .car-link {
        position: absolute;
        bottom: 50px;
        left: 50%;
        background-color: rgba(0, 0, 0, .5);
        transform: translate(-50%, 0);
        padding: 5px 15px;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
    }
</style>
