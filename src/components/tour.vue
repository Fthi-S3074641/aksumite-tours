<template>
<v-flex xs10 offset-sm1>
  <v-card >
    <v-toolbar card color="primary" dark >
      <v-toolbar-title>{{ getTitle }}</v-toolbar-title>
      <v-spacer> </v-spacer>
      <v-btn color="error" :to="'/trips'"> Exit reading mode </v-btn>
    </v-toolbar>
   
      <div v-for="(i, index) in tourDetails">
       <v-card-text>
      <h3> Day {{index + 1}}: {{i.topic}} </h3>
      <p> {{i.text}} </p>
        </v-card-text>
      </div>
      <v-divider class="my-1"></v-divider>

    <v-card-actions>
          <v-btn color="error" depressed :to="'/trips'">    Go Back     </v-btn>
      <v-spacer></v-spacer>
			
			<router-link :to="{name: 'book',
                        params: { trip: this.tourData['id'], name: this.tourData['title'], index: this.tourid} }"
                        tag="span">
                        <v-btn  color="primary" depressed>    Book Itenerary   </v-btn>
                      </router-link>
    </v-card-actions>
  </v-card>
  </v-flex>
</template>

<script>
import tourD from './../resources/itenerary'

  export default {
    data() {
        return {
            tourid: this.$route.params.tour_id,
            tourData: {},
            tourDetails: []
        }
    },
    watch: {
        '$route': 'changeTour'
    },
    methods: {
        changeTour() {
            this.tourid = this.$route.params.tour_id
            this.tourData = tourD.results[this.tourid]
            this.tourDetails = this.tourData['detailes']
        }
    },
    computed: {
        getTitle() {
            return this.tourData['title']
        }
    },
    created(){
      this.changeTour()
    }
  }
</script>
