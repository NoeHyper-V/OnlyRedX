var url = "Conexion_BD/crud.php";

var appMoviles = new Vue({    
el: "#appMoviles",   
data:{     
     Usuarios:[],  
     Usuario:"",   
 
     Passwords:"",
     Correo:"",
     Producto:"",
     searchQuery: ''
   
 },    
methods:{  
    //BOTONES        
    btnAlta:async function(){                    
        const {value: formValues} = await Swal.fire({
        title: 'NUEVO',
        html:
        '<div class="row"><label class="col-sm-3 col-form-label">Usuario</label><div class="col-sm-7"><input id="user" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Password</label><div class="col-sm-7"><input id="pass" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Correo</label><div class="col-sm-7"><input id="email" type="text" class="form-control"></div></div> <div class="row"><label class="col-sm-3 col-form-label">Producto</label><div class="col-sm-7"><input id="Producto" type="text" class="form-control"></div></div>   <div class="row"><label class="col-sm-3 col-form-label">Fecha de registro</label><div class="col-sm-7"><input id="date" type="date" class="form-control"></div></div>',              
        focusConfirm: false,
        showCancelButton: true,
    
        confirmButtonText: 'Guardar',          
        confirmButtonColor:'#1cc88a',          
        cancelButtonColor:'#3085d6',  
        preConfirm: () => {            
            return [
              this.Usuario = document.getElementById('user').value,
              this.Passwords = document.getElementById('pass').value,
              this.Correo = document.getElementById('email').value, 
              this.Producto = document.getElementById('Producto').value,       
              this.Fecha_registro = document.getElementById('date').value        
            ]
          }
        })        
        if(this.Usuario == "" || this.Passwords == "" || this.Correo == "" || this.Producto == "" || this.Fecha_registro == ""){
          const Toast = Swal.mixin({
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 3000
          });
          Toast.fire({
            type: 'error',
            icon: "error",
            title: '⚠️¡Datos incompletos!⚠️',
            background: "#141a25",
          })
        }       
        else{          
          this.altaMovil();          
          const Toast = Swal.mixin({
              toast: true,
              position: 'bottom-end',
              showConfirmButton: false,
              timer: 3000
            });
            Toast.fire({
              type: 'success',
              icon: "success",
              title: '¡Usuario registrado!',
              background: "#141a25",
            })                
        }
    },           
    btnEditar:async function(ID,Usuario,Passwords,Correo,Producto){                            
        await Swal.fire({
        title: 'EDITAR',
      
        html:
        '<div class="form-group"><div class="row"><label class="col-sm-3 col-form-label">Usuario</label><div class="col-sm-7"><input id="user" value="'+Usuario+'" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Password</label><div class="col-sm-7"><input id="Password" value="'+Passwords+'" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Correo</label><div class="col-sm-7"><input id="Correo" value="'+Correo+'" type="text" class="form-control"></div></div></div>  <div class="row"><label class="col-sm-3 col-form-label">Producto</label><div class="col-sm-7"><input id="Producto" value="'+Producto+'" type="text" class="form-control"></div></div></div>', 
        focusConfirm: false,
        showCancelButton: true,                         
        }).then((result) => {
          if (result.value) {                                             
            Usuario = document.getElementById('user').value,    
            Passwords = document.getElementById('Password').value,
            Correo= document.getElementById('Correo').value,    
           Producto= document.getElementById('Producto').value,   
                
            
            this.editarMovil(ID,Usuario,Passwords,Correo,Producto);
            const Toast =  Swal.mixin({
              toast: true,
              position: 'bottom-end',
              showConfirmButton: false,
              timer: 3000
            });
            Toast.fire({
              type: 'success',
              icon: "success",
              title: '✔️¡El registro ha sido actualizado.!✔️',
              background: "#141a25",
            })                  
          }
        });
        
    },        
    btnBorrar:function(id){        
        Swal.fire({
          title: '¿Está seguro de borrar el registro: '+id+" ?",         
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor:'#d33',
          cancelButtonColor:'#3085d6',
          confirmButtonText: 'Borrar'
        }).then((result) => {
          if (result.value) {            
            this.borrarMovil(id);             
            //y mostramos un msj sobre la eliminación  
            const Toast =  Swal.mixin({
              toast: true,
              position: 'bottom-end',
              showConfirmButton: false,
              timer: 3000
            });
            Toast.fire({
              type: 'success',
              icon: "success",
              title: '✔️¡El registro ha sido borrado.!✔️',
              background: "#141a25",
            })  


            
          }
        })                
    }, 
    //PROCEDIMIENTOS para el CRUD     
    listarMoviles:function(){
        axios.post(url, {opcion:4}).then(response =>{
           this.Usuarios = response.data;       
        });
    },    
    //Procedimiento CREAR.
    altaMovil:function(){
        axios.post(url, {opcion:1, Usuario:this.Usuario, Passwords:this.Passwords,Correo:this.Correo,Producto:this.Producto,Fecha_registro:this.Fecha_registro }).then(response =>{
            this.listarMoviles();
        });        
         this.Usuario = "",
         this.Passwords = "",
         this.Correo = "",
         this.Producto = "",
         this.Fecha_registro = ""
    },               
    //Procedimiento EDITAR.
    editarMovil:function(ID,Usuario,Passwords,Correo,Producto){       
       axios.post(url, {opcion:2, ID:ID, Usuario:Usuario, Passwords:Passwords,Correo:Correo,Producto:Producto }).then(response =>{           
           this.listarMoviles();           
        });                              
    },    
    //Procedimiento BORRAR.
    borrarMovil:function(id){
        axios.post(url, {opcion:3, ID:id}).then(response =>{           
            this.listarMoviles();
            });
    }             
},      
created: function(){            
   this.listarMoviles();            
},    
computed:{
    totalStock(){
        this.total = 0;
        for(movil of this.Usuarios){
            this.total = this.total + parseInt(movil.stock);
        }
        return this.total;   
    }
}

});




