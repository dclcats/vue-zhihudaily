<template>
    <div id="app" class="app">
        <transition name="nav-slide">
            <!-- <my-nav class="nav-in"></my-nav> -->
            <my-nav v-if="nav" class="nav-in"></my-nav>
        </transition>
        
        <my-header></my-header>
        <!-- <img src="./assets/logo.png"> -->
        <transition>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
            
        </transition>
    </div>
</template>

<script>

import myHeader from "./components/Header"
import myNav from "./components/Nav"
import { mapState } from "vuex"

export default {
    name: 'app',
    data() {
        return {
            // nav: false
        }
    },
    computed: {
        ...mapState({
            nav: state => state.nav,
        })
    },
    components: {
        myHeader,
        myNav
    },
    methods: {
    }
}
</script>

<style lang="scss">
@mixin min-screen($res){
    @media only screen and ( min-width: $res ) {
        @content;
    }
}
.app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* margin-top: 60px; */
    min-height: 100%;
    overflow: hidden;
}

.nav-slide-enter-active {
    animation: slide-enter .5s ease-in-out;
}

.nav-slide-leave-active {
    animation: slide-leave .5s ease-in-out;
}

@keyframes slide-enter {
    0% {
        left: -420px;
        // width: 0px;
    }
    100% {
        left: 0px;
        // width: 420px;
    }
}

@keyframes slide-leave {
    0% {
        left: 0px;
        // width: 420px;
    }
    100% {
        left: -420px;
        // width: 0px;
    }
}

@include min-screen(640px) {
    html, body {
        position: relative;
    }
    #app{
        position: absolute;
        width: 640px;
        left: 50%;
        transform: translate(-50%,0);
    }
}
/* @media screen and (min-width: 640px){
    html, body {
        position: relative;
    }
    #app{
        position: absolute
        width: 640px;
        left: 50%;
        transform: translate(-50%,0);
    }
} */
</style>
