<template>
    <div class="d-flex align-items-center bg-auth border-top border-top-2 border-primary" style="height: 100% !important">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-md-5 col-xl-4 my-5">

                <!-- Heading -->
                
                
                
                
                    <h1 v-for="item in empresa" class="display-4 text-center mb-3">
                    <img src="../../public/logo.jpg"  alt="...">
                    <br>
                    {{ item.nombre }}
                </h1>
                

                <!-- Subheading -->
                <p class="text-muted text-center mb-5">
                    Iniciar sesión
                </p>

                <!-- Form -->
                <form>

                    <div v-if="msm_error" class="alert alert-danger" role="alert">
                        {{msm_error}}
                    </div>


                    <!-- Email address -->
                    <div class="form-group">

                    <!-- Label -->
                    <label class="form-label">
                        Correo eletrónico
                    </label>

                    <!-- Input -->
                    <input type="email" class="form-control" v-model="email" placeholder="name@address.com">

                    </div>

                    <!-- Password -->
                    <div class="form-group">
                    <div class="row">
                        <div class="col">

                        <!-- Label -->
                        <label class="form-label">
                            Contraseña
                        </label>

                        </div>
                      
                    </div> <!-- / .row -->

                    <!-- Input group -->
                    <div class="input-group input-group-merge">

                        <!-- Input -->
                        <input class="form-control" v-model="password" type="password" placeholder="Enter your password">

                        <!-- Icon -->
                        <span class="input-group-text">
                        <i class="fe fe-eye"></i>
                        </span>

                    </div>
                    </div>

                    <!-- Submit -->
                    <button class="btn btn-lg w-100 btn-primary mb-3" type="button" v-on:click="validar()">
                        Ingresar
                    </button>

         

                </form>

                </div>
            </div> <!-- / .row -->
        </div> <!-- / .container -->
    </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'LoginApp',
  data() {
      return {
        empresa: [],
          email: '',
          password: '',
          msm_error: ''
      }
  },
  created(){
    console.log(this.$url);
    this.getEmpresa();
  },
  beforeMount() {
        axios.get('http://localhost:4201/res_empresa/listar_empresa').then((result)=>{
            this.empresa = result.data;
            console.log(empresa)
        }).catch((error)=>{
            console.log(error);
        })
      },
  methods: {
      validar(){
        if(!this.email){
            this.msm_error = 'Ingrese un correo electrónico';
        }else if(!this.password){
            this.msm_error = 'Ingrese una contraseña';
        }else{
            this.msm_error = '';
            this.login();
        }
        console.log(this.msm_error);
      },

      login(){
        let data = {
            email: this.email,
            password: this.password
            }   

        axios.post(this.$url+'/login_usuario',data,{
            headers: {
                  'Content-Type': 'application/json',
                  'Authorization': this.$token
              }
        }).then((result)=>{
            if (result.data.data == undefined) {
                this.msm_error = result.data.message;
            } 

            if(result.data.token){                
                console.log(result);
                localStorage.setItem('token', result.data.token);
                localStorage.setItem('user',JSON.stringify(result.data.usuario));
                this.$router.push({name: 'HomeView'});
            
            }
        }).catch((error)=>{
            console.log(error)
        });
      },
      getEmpresa() {
        axios.get('http://localhost:4201/res_empresa/listar_empresa').then((result)=>{
            this.empresa = result.data;
            console.log(empresa)
        }).catch((error)=>{
            console.log(error);
        })
      },
  },
  components: {

  }
}
</script>