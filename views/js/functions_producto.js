async function listarproductos() {
    try {
        let respuesta = await fetch(base_url + 'controller/Producto.php?tipo=listar');

        json = await respuesta.json();
        if (json.status) {
            let datos = json.contenido;
            let cont = 0;
            datos.forEach(item =>{
                let nueva_fila = document.createElement("tr");
                nueva_fila.id = "fila"+item.id;
                cont++;
                nueva_fila.innerHTML = `
                           <th>${cont}</th>
                           <td>${item.codigo}</td>
                           <td>${item.nombre}</td>
                           <td>${item.stock}</td>
                           <td>${item.categoria.nombre}</td>
                           <td>${item.id_proveedor}</td>
                           <td>${item.opciones}</td>
                        
                `;
                document.querySelector('#tbl_productos').appendChild(nueva_fila);
                console.log(nueva_fila);
            });
        }
        console.log(json);
    } catch (error) {
     console.log("Ooops salio un error "+error);
    }
}
if (document.querySelector('#tbl_productos')){
    listarproductos();
}



async function registrarProducto() {
    let codigo = document.getElementById('codigo').values;
    let nombre = document.querySelector('#nombre').value;
    let detalle = document.querySelector('#detalle').value;
    let precio = document.querySelector('#precio').value;
    let stock = document.querySelector('#stock').value;
    let idCategoria = document.querySelector('#idCategoria').value;
    let imagen = document.querySelector('#imagen').value;
    let idProveedor = document.querySelector('#idProveedor').value;
    
    if (codigo == "" || nombre == "" || detalle == "" || precio == "" || stock == "" || idCategoria == "" || imagen == "" || idProveedor == "") {
        alert("Error, campos vacios");
        return;
    }
    try {
        //capturamos datos del formulario html
        const datos = new FormData(frmRegistrar);
        //enviar datos hacia el controlador
        let respuesta = await fetch(base_url + 'controller/Producto.php?tipo=registrar', {
            method: 'POST',
            mode: 'cors',
            cahe: 'no-cache',
            body: datos
        });
        json = await respuesta.json();
        if (json.status) {
            swal("Registro", json.mensaje, "success");
        } else {
            swal("Registro", json.mensaje, "error");
        }

        console.log(json);
    } catch (e) {
        console.log("Oops ocurrio un error" + e);
    }

}

async function listar_categoria() {
    try {
        let respuesta = await fetch(base_url + 'controller/Categoria.php?tipo=listar');

        json = await respuesta.json();
        if (json.status) {
            let datos = json.contenido;
            let contenido_select = '<option value="">Seleccione</option>';
            datos.forEach(element => {
                contenido_select += '<option value="'+ element.id +
                '">' + element.nombre+'</option>';
               /* $('#idCategoria').append($('<option />', {
                    text: `${element.nombre}`,
                    value: `${element.id}`
                }));*/
            });
            document.getElementById('idCategoria').innerHTML = 
            contenido_select;
        }
        console.log(respuesta);
    } catch (e) {
        console.log("Error al cargar categoria" + e);
    }
}
async function listar_proveedores(){
    try {
        let respuesta = await fetch(base_url + 'controller/persona.php?tipo=listarProveedor');
        json = await respuesta.json();
        if (json.status) {
            let datos = json.contenido;
            let contenido_select = '<option value="">Seleccione</option>';
            datos.forEach(element => {
                contenido_select += '<option value="'+element.id+'">'+element.razon_social+'</option>';
                /*$('#categoria').append($('<option />',{
                    text:${element.nombre},
                    value:${element.id}
                }));*/
            });
            document.getElementById('idProveedor').innerHTML = contenido_select;
        }
        console.log(respuesta);
    } catch (e) {
        console.log("Error  al cargar proveedor " + e);
    }
}

async function ver_producto(id) {
    //console.log('hola soy la funcion ver');
    const formData = new FormData();
    formData.append('id_producto', id);
    try {
        let respuesta = await fetch(base_url + 'controller/Producto.php?tipo=ver', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            body: formData
        });
        json = await respuesta.json();
        if (json.status) {
            document.querySelector('#id_producto').value = json.contenido.id;
            document.querySelector('#codigo').value = json.contenido.codigo;
            document.querySelector('#nombre').value = json.contenido.nombre;
            document.querySelector('#detalle').value = json.contenido.detalle;
            document.querySelector('#precio').value = json.contenido.precio;
            document.querySelector('#categoria').value = json.contenido.idCategoria;
            document.querySelector('#proveedor').value = json.contenido.idProveedor;
            document.querySelector('#img').value = json.contenido.imagen;
        } else {
            window.location = base_url + "productos";
        }
        console.log(json);
    } catch (error) {
        console.log("oops ocurrio un error " + error);
    }
}



async function actualizarProducto() {
    const datos = new FormData(frmactualizar);
    try {
        let respuesta = await fetch(base_url + 'controller/Producto.php?tipo=actualizar', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            body: datos
        });
        json = await respuesta.json();
        console.log(json);
    } catch (e) {

    }
}


async function eliminar_producto(id) {
    swal({
        title: "Estás seguro de que quieres eliminar el producto?",
        text: "",
        icon: "warning",
        buttons: true,
        dangerMode: true
    }).then((willDelete)=>{
        if (willDelete) {
            fnt_eliminar(id);
        }
    })
}


async function fnt_eliminar(id) {
    const formdata = new FormData();
    formdata.append('id_producto', id);
    try {
        let respuesta = await fetch(base_url + 'controller/Producto.php?tipo=eliminar', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            body: formdata
        });
        json = await respuesta.json();
        if (json.status) {
            swal("Eliminar", "Eliminado correctamente", "success");
            document.querySelector('#fila' + id).remove();
        }else{
            swal("Eliminar", "Error al eliminar", "warning");
        }
    } catch (e) {
        console.log("Ups, ocurrió un error, " + e);
    }
}