<template>
    <div id="app" class="app">
        <transition name="nav-slide">
            <!-- <my-nav class="nav-in"></my-nav> -->
            <my-nav class="nav-in"></my-nav>
        </transition>
        
        <my-header v-if="head"></my-header>
        <!-- <img src="./assets/logo.png"> -->
        <transition>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
            
        </transition>
        <my-footer v-if="!head"></my-footer>
        <!-- <div v-if="!head" class="footer">
            <p @click="backroute"><=</p>
        </div> -->
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
            // nav: false,
            head: true
        }
    },
    computed: {
        ...mapState({
            nav: state => state.nav,
            head: state => state.head
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
            // console.log(":",path)
            if(path.search(/\/list/i) === -1) {
                this.head = false
            } else {
                this.head = true
            }
            // console.log(path)
        },
        backroute() {
            // this.$router.go(-1)
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
