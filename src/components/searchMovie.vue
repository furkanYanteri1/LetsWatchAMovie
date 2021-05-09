<template>
  <v-container v-if="loading">
    <div class="text-xs-center" align="center">
      <v-progress-circular indeterminate :size="300" :width="8" color="yellow">
      </v-progress-circular>
    </div>
  </v-container>
  <v-container v-else-if="noData">
    <div class="text-center">
      <h2>Sorry,We can't find a movie named {{ this.name }} in 2020</h2>
    </div>
  </v-container>
  <v-container v-else grid-list-md>
    <v-layout
      wrap
      justify-space-around
      v-for="(movieResponse, rootIndex) in movieResponses"
      :key="rootIndex"
    >
      <v-flex xs3 v-for="(item, index) in movieResponse" :key="index" mb-2>
        <v-card>
          <v-img
            :src="item.Poster"
            lazy-src="../assets/movie-svgrepo-com.svg"
          ></v-img>
          <v-card-title primary-title>
            <div>
              <h5>{{ item.Title }}</h5>
              <h6>Year: {{ item.Year }}</h6>
              <h6>IMDB-id:{{ item.imdbID }}</h6>
            </div>
          </v-card-title>
          <v-card-actions class="justify-center">
            <v-btn color="primary" text @click="movieDetails(item.imdbID)">
              <v-icon class="mx-2"> mdi-movie-open-play </v-icon>
              DETAILS
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import omdbmovieApi from "../services/omdbMovieApi";
export default {
  props: ["name"],
  data() {
    return {
      movieResponses: [],
      loading: true,
      noData: false,
    };
  },
  methods: {
    movieDetails(id) {
      this.$router.push("/movie/" + id);
    },

    getMovies(value) {
      this.loading = true;
      this.movieResponses = [];
      for (let pageNumber = 1; pageNumber < 10; pageNumber++) {
        omdbmovieApi
          .getMoviesInAllPages(value, pageNumber)
          .then((response) => {
            if (response.Response === "True") {
              this.movieResponses.push(response.Search);
              this.loading = false;
              this.noData = false;
            } else {
              if (pageNumber == 1) {
                this.noData = true;
              }
              this.loading = false;
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
  mounted() {
    this.getMovies(this.name);
  },
  watch: {
    name(value) {
      this.getMovies(value);
    },
  },
};
</script>
