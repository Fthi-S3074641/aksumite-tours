<template>
  <v-footer
    height="auto"
    color="primary lighten-1"
  >
    <v-layout
      justify-center
      row
      wrap
    >

      <v-btn
        color="white"
        flat
        round
            v-for="(link, index) in links"
            :key="index"
        :to="link.url"
      >
        {{ link.title }}
        </v-btn>
      
      <v-flex
        primary
        lighten-2
        py-3
        text-xs-center
        white--text
        xs12
      >
      <p> All the images in this website are taken from LonelyPlanet</p>
        &copy;{{ new Date().getFullYear() }} — <strong>Axumite Tours Northern Ethiopia</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      links: [
        {title: 'Home', url: '/'},
        {title: 'Attractions', url: '/places'},
        {title: 'Packages', url: '/trips'},
        {title: 'Admin', url: '/admin'},
        {title: 'Contact Us', url: '/'}
      ]
    })
  }
</script>
