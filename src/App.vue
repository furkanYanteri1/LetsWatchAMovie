<template>
  <v-app>
    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon />
      <v-icon class="mx-2" medium>mdi-movie-open-play</v-icon>
      <v-toolbar-title class="align-center">
        <span class="title" v-if="this.$vuetify.theme.dark ==true" style="color:yellow;" >LetsWatchAMovie</span>
        <span class="title" v-else>LetsWatchAMovie</span>
      </v-toolbar-title>
      <v-spacer />
      <v-text-field
        class="mt-7"
        solo
        placeholder="Search for a Movie"
        single-line
        append-icon="mdi-magnify"
        color="white"
        label="Movie Name"
        v-model="searchString"
        @keypress.enter="searchMovie"
      />
      <v-spacer />
      <v-list>
        <v-list-item>
          <v-list-item-action>
            <v-switch v-model="theme" color="yellow" />
          </v-list-item-action>
          <v-list-item-title>Switch to {{themeName}}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    theme: false,
    searchString: " ",
    themeName:"Dark",
  }),
  methods: {
    searchMovie() {
      this.$router.push("/SearchMovie/" + this.searchString);
      this.searchString = "";
    },
  },
  computed: {
    dataAvailable() {
      return this.searchString !== null && this.searchString !== "";
    },
  },
  watch:{
    theme:function(next){
      this.$vuetify.theme.dark = next
      if (this.themeName == "Dark") {
        this.themeName="Light"
      }
      else{
        this.themeName="Dark"
      }
    }
  }
};
</script>
