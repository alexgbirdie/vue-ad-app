<template>
  <v-app>
    <v-navigation-drawer 
      app
      temporary
      v-model="drawer"
    >
      <v-list>
          <v-list-tile
            :to="link.url"
            v-for="link of links"
            :key="link.title"
          >
            <v-list-tile-action>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="link.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile
            @click="onLogout"
            v-if="isUserLogin"
          >
            <v-list-tile-action>
              <v-icon>exit_to_app</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Logout</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
    </v-navigation-drawer>
    <v-toolbar 
      app
      dark
      color="primary"
      >
      <v-toolbar-side-icon 
        @click="drawer = !drawer"
        class="hidden-md-and-up"
      ></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" class="cursor-pointer">Ad app</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn 
          flat
          :to="link.url"
          v-for="link of links"
          :key="link.title"
        >
          {{ link.title }}
          <v-icon right dark>{{ link.icon }}</v-icon>
        </v-btn>
        <v-btn 
          flat
          @click="onLogout"
          v-if="isUserLogin"
        >
          Logout
          <v-icon right dark>exit_to_app</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <template v-if="error">
      <v-snackbar
        @input="closeError"
        color="error"
        :multi-line="true"
        :timeout="5000"
        :value="true"
      >
        {{error}}
        <v-btn
          dark
          flat
          @click.native="closeError"
        >
          Close
        </v-btn>
      </v-snackbar>
    </template>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false
    }
  },
  computed: {
    error () {
      return this.$store.getters.error
    },
    isUserLogin () {
      return this.$store.getters.isUserLogin
    },
    links () {
      if (this.isUserLogin) {
        return [
          {title: 'Orders', icon: 'bookmark_border', url: '/orders'},
          {title: 'New ad', icon: 'note_add', url: '/new'},
          {title: 'My ad', icon: 'list', url: '/list'}
        ]
      }

      return [
        {title: 'Login', icon: 'lock', url: '/login'},
        {title: 'Registration', icon: 'face', url: '/registration'}
      ]
    }
  },
  methods: {
    closeError () {
      this.$store.dispatch('clearError')
    },
    onLogout () {
      this.$store.dispatch('logoutUser')
      this.$router.push('/')
    }
  },
  name: 'App'
}
</script>
<style scoped>
  .cursor-pointer {
    cursor: pointer;
  }
</style>