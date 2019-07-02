<template>
 <v-layout row wrap >
<v-flex xs6 v-for="(trip, index) in getTours" :key="index">
            <v-card style="margin: 10px;" @click="goTourSpecific(trip, index)">
                    <v-img
                    :src="`${trip.repo}`"
                    height="300px"
                    ></v-img>

                    <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-0">{{trip['title']}}</h3>
                    </div>
                    </v-card-title>

                    <v-card-actions>
                  <router-link :to="{path: `/tour/${index}`}"
                    tag="span">
                    <v-btn  color="orange">Read more >> </v-btn>
                  </router-link>
				  <v-spacer> </v-spacer>
                      <router-link :to="{name: 'book',
                        params: { trip: trip['id'], name: trip['title'], index: index} }"
                        tag="span">
                        <v-btn  color="primary" depressed>    Book Itenerary   </v-btn>
                      </router-link>
                    </v-card-actions>
                </v-card>
  </v-flex>
    </v-layout>
</template>

<script>
import tourD from './../resources/itenerary'

  export default {
    data () {
      return {
        card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.',
        tourid: this.$route.params.tour_id,
        tourData: {},
        tourDetails: [],
        itenerary: []
      }
    },
	methods: {
		goTourSpecific(trip, index) {
			this.$router.push(`/tour/${index}`)
		}
	},
    computed: {
      getTours(){
        return tourD.results
      }
    }
  }
</script>