<template>
  <div class="block">
    <div class="block-item" v-for="value in block" :key="value.id">
      <div class="block-item__data">
        <div class="block-item__cover">
      </div>
      <h3 class="block-item__preuve">
        <p><span>IP:{{value.ip}}</span></p>
        <p><span>Continent:{{value.continent}}</span></p>
        <p><span>Capital:{{value.capital}}</span></p>
        <p><span>time:{{value.datetime}}</span></p>
      </h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Monitor from "../types/Monitor";
  import ResponseData from "../types/ResponseData";
  import { defineComponent } from "vue";
  import MonitorDataService from "../services/MonitorDataServices";

  export default defineComponent({
    name: 'Block',
    data() {
      return{
        block: [] as Monitor[],
      }
    },
  
    created() {
      MonitorDataService.getAll()
      .then((response:ResponseData) => {
        this.block = response.data
        console.log(response.data)
      })
      .catch((e:Error) => {
              console.log(e);
          })
    },
  })
</script>
