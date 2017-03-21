<template>
    <div id="app">
        <my-header></my-header>
        <!-- <img src="./assets/logo.png"> -->
        <transition>
            <router-view></router-view>
        </transition>
        <my-nav v-if="nav"></my-nav>
    </div>
</template>

<script>

import myHeader from "./components/Header"
import myNav from "./components/Nav"

export default {
    name: 'app',
    data() {
        return {
            nav: false
        }
    },
    components: {
        myHeader,
        myNav
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* margin-top: 60px; */
    min-height: 100%;
}
</style>
