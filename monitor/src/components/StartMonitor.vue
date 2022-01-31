<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <button @click="saveMonitor" class="btn btn-success">START</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MonitorDataService from "../services/MonitorDataServices";
import Monitor from "../types/Monitor";
import ResponseData from "../types/ResponseData";
export default defineComponent({
  name: "add-monitor",
  data() {
    return {
      monitor: {
        id: null,
        ip: "",

      } as Monitor,
      submitted: false,
    };
  },
  methods: {
    saveMonitor() {
      let data = {
        ip: this.monitor.ip,
      };
      MonitorDataService.create()
        .then((response: ResponseData) => {
          this.monitor = response.data;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e: Error) => {
          console.log(e);
        });
        this.$router.push("/monitors");
    },
  },
});
</script>
