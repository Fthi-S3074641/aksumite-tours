<template>
  <v-app>
    <v-toolbar color="white">
    <router-link :to="'/'">
          <img  style="padding-bottom: 2px;" height="60px" :src="'https://raw.githubusercontent.com/Fthi-S3074641/aksumitetours/master/dist/l.png'">
          </router-link>
                <v-toolbar-title class="black--text ml-3">
        <strong style="margin-top: 20px;"> Aksumite Ethiopia Tours</strong>
      </v-toolbar-title>

      <v-spacer/>

      <v-toolbar-items>
        <v-btn flat :to="'/'" class="black--text"> Home  </v-btn>
        <v-btn flat :to="'/places'" class="black--text"> Destinations  </v-btn>
          <v-menu 
          open-on-hover
          transition="scale-transition"
          right
          bottom
           >
            <template v-slot:activator="{ on }" offset-sm2>
              <v-btn flat v-on="on" :to="'/trips'"> Itenerary  </v-btn>
            </template>
            <v-list>
              <v-list-tile v-for="(item, index) in hovers" :key="index">
                  <router-link :to="{path: `/tour/${index}`}"
                    tag="span">
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  </router-link>
                
              </v-list-tile>
            </v-list>
          </v-menu>
          <v-btn flat :to="'/trips'" class="black--text"> Packages  </v-btn>
      </v-toolbar-items>
    </v-toolbar>



    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

<Footer />
  </v-app>
</template>

<script>
import Footer from './components/footer'
export default {
  data () {
    return {
       hovers: [
        { title: 'Gherealta churches tour 2D 1N'},
        { title: 'Simien mountains tour 12D 11N'},
        { title: 'Danakil depression tour 3D 2N'},
        { title: 'Aksum city tour 1D 1N'},
        { title: 'Historic Root 6D 6N'},
        { title: 'Lalibela churches tour 2D 1N'},
        { title: 'Simien Mountains tour 2D 1N'},
        { title: 'Tigrai churches tour 5D 4N'}
      ]
    }
  },
  components: {
    Footer
  }
}
</script>
