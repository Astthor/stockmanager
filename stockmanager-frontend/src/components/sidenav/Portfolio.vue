<template>
  <div>
    Portfolio page
    <div v-if="dataLoaded == true">
      {{ apiResponse }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'

//var res = [];

export default {
  data: function() {
    return {
      apiResponse: []
        /* {
          id: null,
          balance: null,
          created: null,
          playerId: null,
          name: null
        } */
      //],
    };
  },
  computed: {
    dataLoaded(){
      return this.apiResponse.length > 1;
    }
  },
  mounted() {
    //var arr = [];
    axios.get('http://localhost:3000/testapi')
      .then((response) => {
        response.data.forEach((element) => {
          console.log(element);
          this.apiResponse.push({
            id: element.account_id,
            balance: element.balance,
            created: element.created,
            playerId: element.player_id,
            name: element.name
          })
        })
      }).catch((error) => {
        console.log(error);
      })
    
    /*axios.get('http://localhost:3000/testapi')
      .then((response) => {
        response.data.forEach((element) => {
          console.log(element);
          arr.push({
            id: element.account_id,
            balance: element.balance,
            created: element.created,
            playerId: element.player_id,
            name: element.name
          })
        })
      })
      .catch(function (error) {
          // handle error
          console.log(error);
      }).then(function (data) {
        /* data.forEach((element) => {
          console.log(element);
          arr.push({
            id: element.account_id,
            balance: element.balance,
            created: element.created,
            playerId: element.player_id,
            name: element.name
          }) 
          //this.apiResponse.push(element);
          //this.apiResponse.push(element);
        });
          // always executed
      });
      */
  }
}
</script>

<style>

</style>