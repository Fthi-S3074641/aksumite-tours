<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-layout row class="primary" wrap>
          <v-flex xs12 sm6 offset-sm3>
            <h3 class="mt-2  mb-2 white--text">Update booking status</h3>
          </v-flex>
        </v-layout>
        <v-divider class="mb-3"></v-divider>

        <v-layout row>
          <v-flex xs12>
          <form @submit.prevent="editBook">


          <v-layout row>
          <v-flex xs8 offset-xs2>
          <v-text-field
          label="Admin Password"
          v-model="password"
          :type="'password'"
          required
          ></v-text-field>

          </v-flex>
          </v-layout>

             <v-layout row>
                <v-flex xs8 offset-xs2>
                <v-select
                    :items="values"
                    label="Select status"
                    id="status"
                    v-model="item.state"
                    ></v-select>
                </v-flex>
              </v-layout>


              <v-layout row>
                <v-flex xs12 sm8 offset-sm3 mb-3>
                  <v-btn small class="primary mr-2" :disabled="!formIsValid" type="submit" >Update</v-btn>
                  <v-btn small class="error mr-2" :disabled="!formIsValid" @click="RemoveBook()" >Delete Booking</v-btn>
                  <v-btn small class="secondary mr-2" @click="$router.go(-1)">Exit</v-btn>
                </v-flex>
              </v-layout>
            </form>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { db } from './../firebase'

export default {
  props: ["item", "from"],
  data() {
    return {
        values: ['waiting confirmation', 'Accepted', 'Not possible'],
        password: ""
    };
  },
  firestore() {
      return {
        tripbooks: db.collection('tripbooks')
      }
    },
  methods: {
    editBook() {
        const updateBook = {
        tripid: this.item['tripid'],
        bookdate: this.item['bookdate'],
        personname: this.item['personname'],
        personemail: this.item['personemail'],
        preferences: this.item['preferences'],
        state: this.item.state
       }
        this.$router.push(this.from);
        this.$firestore.tripbooks.doc(this.item['.key']).update(updateBook)
    },
    RemoveBook() {
        this.$firestore.tripbooks.doc(this.item['.key']).delete()
        this.$router.go(-1);
    }
  },
  computed: {
    formIsValid() {
      return (
        this.password === "axumitetours"
      )
    }
  },
  created() {
    this.password = ""
  }
};
</script>

<style scoped>

</style>