<template>
    <div id="app" class="app">
        <transition name="nav-slide">
            <my-nav v-if="nav" class="nav-in"></my-nav>
        </transition>
        
        <my-header :navslide="nav"></my-header>
        <!-- <img src="./assets/logo.png"> -->
        <transition>
            <router-view></router-view>
        </transition>
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
}

.nav-slide-enter-active {
    animation: slide-enter 1s;
}

.nav-slide-leave-active {
    animation: slide-leave 1s;
}

@keyframes slide-enter {
    0% {
        width: 0;
        transform: translateX(0);
    }
    100% {
        width: 100%;
        transform: translateX(100%);
    }
}

@keyframes slide-leave {
    0% {
        width: 100%;
        transform: translateX(100%);
    }
    100% {
        width: 0;
        transform: translateX(0);
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
