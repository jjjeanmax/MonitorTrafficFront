<template>
  <main role="main">
      <div class="album py-7 bg-light">
          <div class="content-wrapper">
              <div class="container-fluid">

                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="#">Dashboard</a>
                  </li>
                  <li class="breadcrumb-item active">Traffic on Site & Resources Monitor</li>
                </ol>
                <br>

                <!-- Icon Cards-->
                <div class="container" >
                  <div class="row">
                      <div class="col-sm-3 block">
                          <div class="circle a">
                              <p><b>CPU Usage </b>
                                  <br>
                                  <b>{{monitors.cpu_usage }}</b>
                              </p>

                          </div>
                      </div>
                      <div class="col-sm-3 block">
                          <div class="circle b">
                              
                              <p><b>RAM Usage </b> 
                                  <br>
                                  <b>{{ monitors.ram_usage }}</b>
                              </p>

                          </div>
                      </div>

                      <div class="col-sm-3 block">
                          <div class="circle c">

                              <p><b>Total Site Visits</b> 
                                  <br>
                                  <b>{{monitors.totalSiteVisits}} </b>
                              </p>

                          </div>
                      </div>
                      <div class="col-sm-3 block">
                          <div class="circle d">
                              <p><b>Unique Page Views</b>
                                  <br>
                                  <b>{{monitors.unique}} </b>
                              </p>
                          </div>
                      </div>

                  </div>
              </div>
              <!-- Example contextTables Card-->
              <div class="card mb-3">
                  <div class="card-header">
                    <b style="color: #0664c9;"><i class="fa fa-table"></i> User Sessions</b></div>
                  <div class="card-body">
                    <div class="table-responsive">
                      <table class="table table-bordered" id="contextTable"  width="100%" cellspacing="0" >
                        <thead>
                          <tr>
                            <th>Time</th>
                            <th>IP Address</th>
                            <th>Continent</th>
                            <th>Country</th>
                            <th>City</th>
                          </tr>
                        </thead>
                        <tfoot>
                          <tr>
                            <th>Time</th>
                            <th>IP Address</th>
                            <th>Continent</th>
                            <th>Country</th>
                            <th>City</th>
                          </tr>
                        </tfoot>

                        <tbody id="customer-table"  v-for="data in currentMonitor" :key="data">
                            <tr>
                                <td>{{ data.datetime }}</td>            
                                <td>{{ data.ip }}</td>
                                <td >{{ data.continent }}</td>
                                <td>{{ data.country }}</td>
                                <td>{{ data.city }}</td>
                            </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="card-footer small text-muted" >Updated at <span id="session-update-time">{{monitors.now}}</span></div>
                </div>
              </div>
          </div>
          
      </div>

  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MonitorDataService from "../services/MonitorDataServices";
import Monitor from "../types/Monitor";
import ResponseData from "../types/ResponseData";

export default defineComponent({
  name: "Monitor",
  data() {
    return {
      monitors: [] as Monitor[],
      currentMonitor: [] as Monitor[],
      id: "",
    }
  },
    created() {
        MonitorDataService.get()
        .then((response:ResponseData) => {
            this.monitors = response.data;
            console.log(response.data);
        })
        .catch((e: Error) => {
            console.log(e);
        });

        MonitorDataService.getAll()
        .then((response:ResponseData) => {
            this.currentMonitor = response.data;
            console.log(response.data);
        })
        .catch((e: Error) => {
            console.log(e);
        });
    },

});
</script>
