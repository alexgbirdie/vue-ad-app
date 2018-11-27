<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3">Creat new ad</h1>
                <v-form ref="form" v-model="valid" validation>
                  <v-text-field 
                    name="title" 
                    label="Ad title" 
                    type="text"
                    v-model="title"
                    required
                    :rules="[v => !!v || 'Title is req']"
                  ></v-text-field>
                  <v-textarea 
                    name="description" 
                    label="Ad description" 
                    type="text"
                    v-model="description"
                    :rules="[v => !!v || 'Description is req']"
                  ></v-textarea >
                </v-form>
                <v-layout row>
                    <v-flex>
                        <v-btn
                            color="warning"
                            class="white--text mb-3"
                            >
                            Upload
                            <v-icon right dark>cloud_upload</v-icon>
                        </v-btn>

                        <v-img
                            height="100px"
                            
                        ></v-img>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <v-switch
                        label="Add to promo"
                        v-model="promo"
                        ></v-switch>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <v-spacer></v-spacer>
                        <v-btn 
                            class="success" 
                            @click="creatAd"
                            :disabled="!valid"
                        >Creat ad</v-btn>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    data () {
        return {
            title: '',
            description: '',
            promo: false,
            valid: false
        }
    },
    methods: {
        creatAd () {
            if(this.$refs.form.validate()) {
                const ad = {
                    title: this.title,
                    description: this.description,
                    promo: this.promo,
                    src: 'https://w-dog.net/wallpapers/15/3/437850330584583/leo-color-view.jpg'
                }

                console.log(ad)

                this.$store.dispatch('createAd', ad)
            }
            
        }
    }
}
</script>
