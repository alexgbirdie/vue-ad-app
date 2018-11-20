<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3">My ads</h1>
                <v-card 
                    class="elevation-10 mb-3"
                    v-for="ad in ads"
                    :key="ad.id">
                    <v-layout row>
                        <v-flex xs4>
                            <v-img :src="ad.src" height="160px"></v-img>
                        </v-flex>
                        <v-flex xs8>
                            <v-card-text>
                                <h2 class="text--primary"> {{ ad.title }} </h2>
                                <p> {{ ad.description }} </p>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn 
                                    class="info"
                                    :to="'/ad/' + ad.id"
                                >Open</v-btn>
                            </v-card-actions>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
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
                }
            ]
        }
    }
}
</script>
