<template>
  
    
    <div class="container-fluid">
      <Sidebar/>
      
    <top-nav/>
    <div class="container">
      <h1>Dashboards</h1>
    </div>
    </div>
    
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/Sidebar.vue';
import TopNav from '@/components/TopNav.vue';

export default {
  name: 'HomeView',
  components: {
    Sidebar,
    TopNav
  }
}
</script>
