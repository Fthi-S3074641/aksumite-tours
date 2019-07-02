<template>
     <v-layout>
    <v-flex xs10 offset-sm1>
      <v-card >
        <v-layout row class="primary mt-2 text-md-center">
          <v-flex  xs8 offset-xs2>
            <h2 class="mt-2 mb-0">{{ this.name }}</h2>
                        <p class="demo">
Dear guest we would like to welcome you to the booking page of the Axumite tour operator. All our communications are done via email including <br> 
the book confirmation for the itenarary of your selection.
                                    </p>
          </v-flex>
        </v-layout>
        <v-layout row mt-2>
          <v-flex >
            <form>
            <v-layout row>
                <v-flex xs8 offset-xs2>
                <v-text-field
                    v-model="this.trip"
                    name="tripid"
                    label="Itenerary code"
                    id="tripid"
                    disabled></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs8 offset-xs2>
                  <v-text-field
                    v-model="personname"
                    v-focus
                    name="personname"
                    label="Full name"
                    id="personname"
                    required></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs8 offset-xs2>
                  <v-text-field
                    v-model="personemail"
                    name="personemail"
                    label="Email address"
                    id="personemail"
                    required></v-text-field>
                </v-flex>
              </v-layout>


                                 
            <v-layout row>
                <v-flex xs8 offset-xs2>
                        <v-menu
                        v-model="datemenu"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        lazy
                        transition="scale-transition"
                        offset-y
                        full-width
                        min-width="290px"
                        >
                        <template v-slot:activator="{ on }">
                        <v-text-field
                            v-model="date"
                            label="Select tour date"
                            prepend-icon="event"
                            readonly
                            v-on="on"
                        ></v-text-field>
                        </template>
                        <v-date-picker v-model="date" @input="datemenu = false"></v-date-picker>
                    </v-menu>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs8 offset-xs2>
                  <v-text-field
                    v-model="preferences"
                    name="preferences"
                    label="Special preferences"
                    id="preferences"
                    required></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs8 offset-xs2 mb-3>
                <router-link :to="{name: 'newBook',
                  params: { myBook: getBooking, index: this.indx } }"
                  tag="span">
                  <v-btn small class="primary mr-2" :disabled="!formIsValid">Book</v-btn>
                </router-link>
                  <v-btn small class="info mr-2" @click="clear">Clear</v-btn>
                  <v-btn small class="secondary" @click="cancel">cancel</v-btn>
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
export default {
props: ['trip', 'name', 'index'],
    data(){
        return {
          date: new Date().toISOString().substr(0, 10),
          datemenu: false,
          personname: "",
          personemail: "",
          preferences: "",
          tripid: this.name,
		  indx: this.index
        }
    },
    methods: {
        newItem(dest){
            const newBook = {
            selectedtour: this.trip,
            personname: this.personname,
            personemail: this.personemail,
            tourDate: this.date,
            preferences: this.preferences,
            }
            console.log(newBook)
            this.$router.push(dest)
      },
    clear() {
        this.personname = ""
        this.personemail = ""
        this.date = ""
        this.preferences = ""

      },
      cancel() {
        this.$router.go(-1)
      }
    },
    computed: {
       formIsValid() {
          return (
            this.personname !== "" &&
            this.personemail !== "" &&
            this.date !== ""
          );
    },
    getBooking() {
      const nBook = {
        tripid: this.tripid,
        personname: this.personname,
        personemail: this.personemail,
        bookdate: this.date,
        preferences: this.preferences,
        state: "Not Confirmed"
      }
      return nBook
    }
    },
	created() {
	    if(!this.trip){
      this.$router.push('/')
    }
    else{
	console.log(this.indx)
    }
	}
}
</script>

<style scoped>

.demo {
  margin-top: 0;
  /* font-style: italic; */
  font-size: 13px;
}

</style>
