<template>
    <div id="app" class="app">
        <transition name="nav-slide">
            <my-nav class="nav-in"></my-nav>
        </transition>
        
        <my-header v-if="head"></my-header>
        <transition>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
            
        </transition>
        <my-footer v-if="footer"></my-footer>
    </div>
</template>

<script>

import myHeader from "./components/Header"
import myFooter from "./components/Footer"
import myNav from "./components/Nav"
import { mapState } from "vuex"

export default {
    name: 'app',
    data() {
        return {
            head: true,
            footer: false
        }
    },
    computed: {
        ...mapState({
            nav: state => state.nav,
        })
    },
    created() {
        this.toggleHead()
    },
    watch: {
        "$route": "toggleHead"
    },
    components: {
        myHeader,
        myNav,
        myFooter
    },
    methods: {
        toggleHead() {
            var path = this.$route.path
            if(/list/i.test(path)) {
                this.head = true
                this.footer = false
            } else if(/content/i.test(path)){
                this.head = false
                this.footer = true
            } else if(/comments/i.test(path)) {
                this.head = true
                this.footer = true
            }
        },
        backroute() {
            window.history.back()
        }
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
    position: absolute;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
    width: 100%;
    overflow: hidden;
    // -webkit-overflow-scrolling: touch;
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
        // position: relative;
    }
    #app{
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
