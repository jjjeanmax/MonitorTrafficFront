<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="ip">IP</label>
        <input
          type="text"
          class="form-control"
          id="ip"
          required
          v-model="monitor.ip"
          name="ip"
        />
      </div>

      <button @click="saveMonitor" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
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
      MonitorDataService.CreateById(this.monitor.ip,data)
        .then((response: ResponseData) => {
          this.monitor.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e: Error) => {
          console.log(e);
        });
        this.$router.push("/monitors");
    },
    newMonitorl() {
      this.submitted = false;
      this.monitor = {} as Monitor;
    },
  },
});
</script>
