<template>
    <nav class="navbar navbar-expand-md navbar-light d-md-flex">
        <div class="container-fluid">

        <!-- Form -->
        <form class="form-inline me-4 d-none d-md-flex">
            
        </form>

        <!-- User -->
        <div class="navbar-user">

            <a href="./profile-posts.html" class="dropdown-item">{{data_navbar.nombres}} {{ data_navbar.apellidos }}</a>
            <a href="./account-general.html" class="dropdown-item">{{ data_navbar.rol }}</a>
            <!-- Dropdown -->
            <div class="dropdown">

            <!-- Toggle -->
            <a href="#" class="avatar avatar-sm avatar-online dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src="/assets/img/avatar-1.jpg" alt="..." class="avatar-img rounded-circle" style="-webkit-mask-image: none;">
            </a>

            <!-- Menu -->
            <div class="dropdown-menu dropdown-menu-end">
                <a href="./profile-posts.html" class="dropdown-item">Profile</a>
                <a href="./account-general.html" class="dropdown-item">Settings</a>
                <hr class="dropdown-divider">
                <a href="./sign-in.html" class="dropdown-item">Logout</a>
            </div>

            </div>

        </div>

        </div>
        </nav>
  </template>
  
  <script>
  export default {
    name: 'TopNav', 
    created() {
        this.data_navbar = localStorage.getItem("user");
    },   

    data() {
        return {
            data_navbar:[],

        }
    },
    beforeMount(){
        this.data_navbar = JSON.parse(localStorage.getItem("user"));
        console.log(data_navbar)
    }
  }
  
</script>
