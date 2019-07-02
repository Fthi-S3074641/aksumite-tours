<template v-show="this.mbook === myBook">
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img
          :src="this.getImage"
          height="200px"
        >
        <h3 padding-top="10px" align="center" class="white--text"> Congradulations! Itenerary booking succesful</h3>
          <v-layout column fill-height>
            <v-spacer></v-spacer>

            <v-card-title class="white--text pl-5 pt-5" style="margin-bottom: 10px;">
              <div class="display-1 pl-5 pt-5">{{ this.mBook.personname}}</div>
            </v-card-title>
          </v-layout>
        </v-img>

        <v-list two-line>
          <v-list-tile @click="">
          <v-list-tile-action>           </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ this.mBook.tripid }}</v-list-tile-title>
              <v-list-tile-sub-title>Itenerary</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile @click="">
            <v-list-tile-action></v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ this.mBook.bookdate}}</v-list-tile-title>
              <v-list-tile-sub-title>Date of Trip</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-divider inset></v-divider>

          <v-list-tile @click="">
            <v-list-tile-action>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ this.mBook.personemail}}</v-list-tile-title>
              <v-list-tile-sub-title>email</v-list-tile-sub-title>
             </v-list-tile-content>
          </v-list-tile>

          <v-list-tile @click="">
            <v-list-tile-action></v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ this.mBook.preferences}}</v-list-tile-title>
              <v-list-tile-sub-title>Preferences</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-divider inset></v-divider>

          <v-list-tile @click="">
            <v-list-tile-action>           </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ this.mBook.state}}</v-list-tile-title>
              <v-list-tile-sub-title>Status</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
         
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { db } from './../firebase';
import tourD from './../resources/itenerary'

export default {
props: ['myBook', 'index'],
  data() {
    return {
      mBook: this.myBook,
	  indx: this.index
    }
  },
    firestore() {
    return {
        tripbooks: db.collection('tripbooks'),
    }
  },
  methods: {
    saveFirebase() {
      this.$firestore.tripbooks.add(this.mBook)
    }
  },
  computed: {
      getImage() {
        const nf = tourD.results[this.indx]
        return nf.repo
      }
  },
  created() {
      if(!this.mBook){
        this.$router.push('/')
      }
      else{
        this.saveFirebase()
      }
  }
}
</script>