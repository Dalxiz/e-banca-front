<template>
    <div>
        <sidebar/>
        <!-- MAIN CONTENT -->
        <div class="main-content">

            <TopNav />

        <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-12 col-lg-10 col-xl-8">

            <!-- Header -->
            <div class="header mt-md-5">
                <div class="header-body">
                <div class="row align-items-center">
                    <div class="col">

                    <!-- Pretitle -->
                    <h6 class="header-pretitle">
                        Usuarios
                    </h6>

                    <!-- Title -->
                    <h1 class="header-title">
                        Nuevo usuario
                    </h1>

                    </div>
                </div> <!-- / .row -->
                <div class="row align-items-center">
                    <div class="col">

                    <!-- Nav -->
                    <ul class="nav nav-tabs nav-overflow header-tabs">
                        <li class="nav-item">
                        <a class="nav-link active">
                            Nuevo usuario 
                        </a>
                        </li>
                        <li class="nav-item">
                            <router-link to="/usuarios/index" class="nav-link" >Todos los usuarios</router-link>
                                               
                        </li>
                        
                    </ul>

                    </div>
                </div>
                </div>
            </div>

            <!-- Form -->
           
            

                <div class="row">
                <div class="col-12 col-md-6">

                    <!-- First name -->
                    <div class="form-group">

                    <!-- Label -->
                    <label class="form-label">
                        Nombres
                    </label>

                    <!-- Input -->
                    <input type="text" class="form-control" v-model="colaborador.nombres" placeholder="Alan Garcia">

                    </div>

                </div>
                <div class="col-12 col-md-6">

                    <!-- Last name -->
                    <div class="form-group">

                    <!-- Label -->
                    <label class="form-label">
                        Apellidos
                    </label>

                    <!-- Input -->
                    <input type="text" class="form-control" v-model="colaborador.apellidos" placeholder="Morales Castillo">

                    </div>

                </div>
                <div class="col-12">

                    <!-- Email address -->
                    <div class="form-group">

                    <!-- Label -->
                    <label class="mb-1">
                        Correo electrónico
                    </label>

                    <!-- Form text -->
                    <small class="form-text text-muted">
                        This contact will be shown to others publicly, so choose it carefully.
                    </small>

                    <!-- Input -->
                    <input type="email" class="form-control" v-model="colaborador.email" placeholder="alan@email.com">

                    </div>

                </div>
                
                <div class="col-12 col-md-6">

                    <!-- Birthday -->
                    <div class="form-group">

                    <!-- Label -->
                    <label class="form-label">
                        Cargo
                    </label>

                    <!-- Input -->
                    <select name="" class="form-select" v-model="colaborador.rol">
                        <option value="" disabled selected>Seleccione Rol</option>
                        <option value="Administrador">Administrador</option>
                        <option value="Vendedor">Ejecutivo</option>
                        <option value="Inventariado">Jefe Sucursal</option>
                    </select>
                    </div>

                </div>

                </div> <!-- / .row -->

                <!-- Divider -->
                



                <hr class="my-5">

                <!-- Button -->
                <button type="" class="btn btn-primary" v-on:click="validar()">
                Guardar Usuario
                </button>


            

            <br><br>

            </div>
        </div> <!-- / .row -->
        </div>

        </div>
    </div>
</template>
  
  <script>

import Sidebar from '../../components/Sidebar.vue';
import TopNav from '../../components/TopNav.vue';
import axios from 'axios';
  
  export default {
    name: 'CreateUsuario',
    data() {
        return {
            colaborador : {
                rol: "",
            },
        }
    },
    methods: {
        validar(){
            if(!this.colaborador.nombres){
                this.$notify({
                group: 'foo',
                title: 'Error',
                text: 'Ingrese Nombres',
                type: 'error'
                });
            }else if(!this.colaborador.apellidos){
                this.$notify({
                group: 'foo',
                title: 'Error',
                text: 'Ingrese Apellidos',
                type: 'error'
                });
            }else if(!this.colaborador.email){
                this.$notify({
                group: 'foo',
                title: 'Error',
                text: 'Ingrese Correo Electronico',
                type: 'error'
                });
            }else if(!this.colaborador.rol){
                this.$notify({
                group: 'foo',
                title: 'Error',
                text: 'Seleccione Rol',
                type: 'error'
                });
            }else{
                this.crearColaborador();
            }
        },

        crearColaborador(){
            axios.post(this.$url+'/registro_usuario_admin', this.colaborador,{
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': this.$token
              }
            }).then((result)=>{
                if(result.data.data == undefined){
                    this.$notify({
                    group: 'foo',
                    title: 'Error',
                    text: result.data.message,
                    type: 'error'
                    });
                }else{
                    this.$notify({
                    group: 'foo',
                    title: 'SUCCESS',
                    text: 'Se registro Usuario',
                    type: 'success'
                    });

                    this.$router.push({name: 'usuario-index'})
                }
            }).catch((error)=>{
                console.log(error)
            });
        }
    },

    mounted() {
        
    },
    components: {
        Sidebar,
        TopNav
      
    }
  }
  </script>
  