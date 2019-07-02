import Vue from 'vue'
import Vrouter from 'vue-router'

import newBook from './../components/newBook'
import tours from './../components/tours'
import tour from './../components/tour'
import places from './../components/places'
import home from './../components/home'
import book from './../components/book'
import admin from './../components/admin'
import editBook from './../components/editBook'

Vue.use(Vrouter)

export default new Vrouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/newBook',
            name: 'newBook',
            component: newBook,
            props: true
        },
        {
            path: '/admin',
            name: 'admin',
            component: admin, 
            props:true
        },
        {
            path: '/editBook',
            name: 'editBook',
            component: editBook,
            props: true
        },
        {
            path: '/trips',
            name: 'trips',
            component: tours
        },
        {
            path: '/tour/:tour_id', 
            name:'tourid', 
            component: tour,
            props:true
        },
        {
            path: '/places', 
            name:'places', 
            component: places
        },
        {
            path: '/book',
            name: 'book',
            component: book,
            props: true
        }

    ]
})
