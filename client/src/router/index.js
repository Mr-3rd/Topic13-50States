
// import the vue router
import { createRouter, createWebHashHistory } from "vue-router";

// import the data from the statelist
import StateList from "@/components/StateList.vue";
// import the about site info
import AboutSite from "@/components/AboutSite.vue";

// export the vue route to the path for the statelist
export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            //Set the route of the state data of app
            path: '/',
            name: 'StateList',
            component: StateList
        },
        {
            //Set the AboutSite Info of app
            path: '/about',
            name: 'AboutSite',
            component: AboutSite
        }
    ]
})