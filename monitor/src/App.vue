<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">GET STARTED</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/monitors" class="nav-link">MONITOR</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">ADD COMPUTER</router-link>
        </li>
      </div>
    </nav>
    <section class="jumbotron text-center">
      <div class="container">
          <h1 class="jumbotron-heading"><i class="fa fa-desktop" aria-hidden="true"></i> <strong> Monitor Computer of Visitors </strong></h1>
              <p class="lead text-muted">Contact <a href="#">developer</a> if CPU & RAM exceeds 80%</p>
      </div>
    </section>
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>
