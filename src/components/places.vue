<template>
<v-row >
 <v-col cols="6" v-for="(trip, index) in getTours" :key="index">
      <v-card
      style="margin: 10px;"
      xs12 md8 sm6
      >
        <v-img
            :src="`${trip.repo}`"
            height="200px"
            >
      </v-img>

                    <v-card-title primary-title>
                    <div>
                        <h5 class="headline ">{{trip['title']}}</h5>
                    </div>
                    </v-card-title>
                  <v-card-text>
                  {{trip['description']}}
              </v-card-text>
        </v-card>
        </v-col>
</v-row>
</template>

<script>
import Destinations from './../resources/destinations'

  export default {
    data () {
      return {
      }
    },
    computed: {
      getTours(){
        return Destinations.results
      }
    }
  }
</script>
