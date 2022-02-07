<template>
  <div id="app">
    <div class="top-nav-container">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
        <span v-show="authenticated">
          | 
          <router-link to="/login">Login</router-link>
        </span>
      </div>
    </div>
    <div class="main-content">
      <div id="side-nav" v-if="authenticated">
        <router-link class="side-nav-item" to="/Account">Account</router-link>
        <router-link class="side-nav-item" to="/Portfolio">Portfolio</router-link>
        <!-- <button class="side-nav-item" @click="setCurrentSideNavComponent(0)">
          Account
        </button>
        <button class="side-nav-item" @click="setCurrentSideNavComponent(1)">
          Portfolio
        </button> -->
        <!--         
        <button class="side-nav-item" @click="activeSideNavComponent = 'Account'">
          Account
        </button>
        <button class="side-nav-item" @click="activeSideNavComponent = 'Portfolio'">
          Portfolio
        </button> -->
        <div class="side-nav-item">
          nav-item 3
        </div>
        <div class="side-nav-item">
          nav-item 4
        </div>
      </div>

      <div class="content">
        Our router content is here beneath
        <br /> <br />
        <router-view/>
        <!-- <div v-if="getShowSideNavContent">
          <component
            :is="getCurrentSideNavComponent"
          ></component>
        </div>
        <div v-else>
          
        </div> -->
      </div>
    </div>
    
    
  </div>
</template>

<script>
import { mapState } from 'vuex'

/*
import Account from './components/sidenav/Account.vue'
import Portfolio from './components/sidenav/Portfolio.vue'
import Login from './components/Login.vue'
*/

export default ({
  data() {
    return {
      //sideNavComponent: [
        //'Account',
        //'Portfolio'
      //],
      showSideNavContent: true,
      currentSideNavComponent: 0,
      activeSideNavComponent: 'Account',
    };
  },
  components: {
    //Account,
    //Portfolio
    //Login
  },
  computed: {
    ...mapState({
      userName: state => state.userName,
      authenticated: state => state.authenticated
    }),
    getCurrentSideNavComponent() {
      return this.sideNavComponent[this.currentSideNavComponent];
    },
    getShowSideNavContent(){ return this.showSideNavContent }
  },
  methods: {
    setCurrentSideNavComponent(componentIndexClicked){
      console.log('setting index to ' + componentIndexClicked);
      this.showSideNavContent = true;
      this.currentSideNavComponent = componentIndexClicked;
    },
  },
})
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.top-nav-container {
  display: flex;
  justify-content: flex-end;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.main-content {
  height: 90vh;
  width: 100%;
  display: flex;
  text-align: center;
}

#side-nav {
display: flex;
flex: 0 1 100px;
z-index: 1;
flex-direction: column;


width: 35%;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

  .side-nav-item {
    width: 100px;
    height: 30px;
    background-color: azure;
  }
}

.content {
  flex-grow: 1;
  z-index: 1;
  background-color:darkgray;
}
</style>
