<template>
  <v-container fluid>

    <v-layout row wrap>
	
	      <v-flex xs12 sm6 md6 order-md1 >
        <v-card style="padding: 3px;">
          			<v-img
            :src="'https://raw.githubusercontent.com/Fthi-S3074641/aksumitetours/master/dist/aksum.jpg'"
			style="margin: 0px;"
            ></v-img>
        </v-card>
      </v-flex>
      <v-flex xs12 sm3 md3 order-md2>
        <v-card style="padding: 2px;">
           <v-img
            :src="'https://raw.githubusercontent.com/Fthi-S3074641/aksumitetours/master/dist/gherealta.jpg'"
			style="margin-top: 1px;"
            ></v-img>
			<v-img
            :src="'https://raw.githubusercontent.com/Fthi-S3074641/aksumitetours/master/dist/lalibela.jpg'"
			style="margin-top: 3px;"
            ></v-img>
        </v-card>
      </v-flex>
      <v-flex xs12 sm5 md3 order-md3  >
        <v-card style="margin-left: 1px;" max-width="300">
          <v-card-text class="black--text">
		  <h3 class="text-xs-center"> Axumite Tour Operator</h3>
		  <p> We are an exprienced tour operator across Ethiopia. We especially give tours on the Northern part of Ethiopia but also we give tours to the Southern part. 
		  <br> 
		  </p>
		  
		  
		  		   <v-flex xs8  offset-sm1 style="margin-bottom: 10px;">
            <v-text-field
                v-model="email"
                label="Enter email"
                id="email"
                required></v-text-field>
          <router-link class="link" :to="{name: 'admin',
                  params: { email: this.email} }"
                  tag="span">
                  <v-btn small class="primary">View Booking</v-btn>
          </router-link>
	 </v-flex>
	 <v-divider> </v-divider>
	 <v-flex style="padding-top: 15px;">
	 
   		  <strong class="black--text"> Contact Information</strong>
             <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title ><strong>+251930073921</strong></v-list-tile-title>
              <v-list-tile-sub-title>Phone number</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

        <v-list-tile >
            <v-list-tile-content>
              <v-list-tile-title ><strong>axumitetours@gmail.com</strong></v-list-tile-title>
              <v-list-tile-sub-title>Email address</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
		  
		  </v-flex>
		  </v-card-text>
  
        </v-card>

      </v-flex>
    </v-layout>
	      
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      email: ""
    }
  }
}
</script>
