<template>
  <v-app>
    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon />
      <v-icon class="mx-2" medium>mdi-movie-open-play</v-icon>
      <v-toolbar-title class="align-center">
        <span class="title">LetsWatchAMovie</span>
      </v-toolbar-title>
      <v-spacer />
      <v-text-field
        class="mt-7"
        solo
        placeholder="Search for a Movie"
        single-line
        append-icon="mdi-magnify"
        color="white"
      />
      <v-spacer />
      <v-list>
        <v-list-item>
          <v-list-item-action>
            <v-switch v-model="theme" color="yellow" />
          </v-list-item-action>
          <v-list-item-title>Dark Theme</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-card class="d-flex align-center mb-6">
          <v-img
            class="mx-10"
            width="40px"
            :src="`https://cankayacicekcilik.com.tr/images/urun/b_11667829_-beyaz-papatya-kutusu-cicek-siparisi-min.jpg`"
          />
          <v-card-subtitle>Subtitle here</v-card-subtitle>
          <v-card-text> Text here </v-card-text>
          <v-card-actions>
            <v-btn color="primary" text>
              <v-icon class="mx-2"> mdi-movie-open-play </v-icon>
              Watch
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    theme: false,
  }),
};
</script>
