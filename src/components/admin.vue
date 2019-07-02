<template>
  <div>
    <v-card>
      <v-card-title>
        <h3>Manage booking</h3> &nbsp;&nbsp;&nbsp; (Type your email to view your booking)
        <v-spacer></v-spacer>
        <v-text-field
          append-icon="search"
          label="Email"
          single-line
          id="search"
          hide-details
          v-model="search"
          v-focus
        ></v-text-field>
      </v-card-title>

      <v-data-table
        :headers="headers"
        :items="tripbooks"
        :search="search"
      >
        <template slot="items" slot-scope="props">
          <td class="text-xs-left">{{ props.item.tripid }}</td>
          <td class="text-xs-left">{{ props.item.bookdate }}</td>
          <td class="text-xs-left">{{ props.item.personname }}</td>
          <td class="text-xs-left">{{ props.item.personemail }}</td>
          <td class="text-xs-left">{{ props.item.preferences }}</td>
          <td class="text-xs-left">{{ props.item.state }}</td>


                    <td class="text-xs-left">
            <router-link :to="{name: 'editBook',
              params: { item: props.item, from: '/admin'} }"
              tag="span">
              <v-icon class="mr-3">edit</v-icon>
            </router-link>

            </td>
        </template>

        <v-alert slot="no-results" :value="true" color="error">
         You don't have any booking with this email: "{{ search }}".
        </v-alert>

      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import format from "date-fns/format";
import addWeeks from "date-fns/add_weeks";
import { db } from './../firebase';

export default {
  props: ['email'],
  data() {
    return {
      search: this.email,
      selected: [],
      headers: [
        {
          text: "Itenerary",
          align: "left",
          sortable: false,
          value: "tripid"
        },
        {
          text: "Date of Trip",
          align: "left",
          sortable: false,
          value: "bookdate"
        },
        {
            text: "Full Name",
            align: "left",
            sortable: false,
            value: "personname"
        },
        {
            text: "Email Address",
            align: "left",
            sortable: false,
            value: "personemail"
        },
        {
            text: "Preferences",
            align: "left",
            sortable: false,
            value: "preferences"
        },
        {
          text: "Status",
          align: "left",
          sortable: false,
          value: "state"
        }
      ],
      tripbooks: []
    }
  },
  firestore() {
    return {
        tripbooks: db.collection('tripbooks'),
    }
  },
   computed: {
     getBooking(){
       console.log(this.$firestore.tripbooks)
       this.bookings = this.$firestore.tripbooks
        return this.$firestore.tripbooks
     }
    }
};
</script>

<style scoped>
.icon {
  margin-left: 0px;
  margin-right: 15px;
}
</style>