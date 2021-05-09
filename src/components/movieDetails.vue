<template>
  <v-container v-if="loading" fluid style="height: 100vh">
    <div class="text-xs-center" justify="center" align="center" fill-height>
      <v-progress-circular indeterminate :size="200" :width="10" color="yellow">
      </v-progress-circular>
    </div>
  </v-container>
  <v-container v-else>
    <v-layout wrap>
      <v-flex xs12 mx-2>
        <v-card>
          <v-img :src="movieDetails.Poster" aspect-ratio="1.3"></v-img>
          <v-card-title primary-title>
            <div>
              <v-divider></v-divider>
              <h1 class="text-center">{{ movieDetails.Title }} ({{ movieDetails.Year }})</h1>
              <v-divider></v-divider>
              <p class="grey--text mb-2">{{ movieDetails.Plot }}</p>
              <v-divider></v-divider>
              <h2 class="text-center">IMDB  {{ movieDetails.imdbRating }}</h2>
              <v-divider></v-divider>
              <h2 class="text-center" v-if="this.$vuetify.theme.dark ==true" style="color:yellow;">{{ movieDetails.Genre }}</h2>
              <h2 class="text-center" v-else >{{ movieDetails.Genre }}</h2>
              <v-divider></v-divider>
              <h3>Directed by:</h3>
              {{ movieDetails.Director }}
              <h3>Actors:</h3>
              {{ movieDetails.Actors }}
              <h3>Awards: {{movieDetails.Awards}}</h3>
              <h3>Language: {{movieDetails.Language}}</h3>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn color="purple" x-large text @click="back">
              <v-icon class="mx-2" large> mdi-undo-variant </v-icon>
              BACK TO SEARCH
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import omdbMovieApi from "../services/omdbMovieApi";
export default {
  props: ["id"],

  data() {
    return {
      movieDetails: "",
      loading: true,
    };
  },

  mounted() {
    omdbMovieApi
      .fetchSingleMovie(this.id)
      .then((response) => {
        this.movieDetails = response;
        this.loading = false;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>
