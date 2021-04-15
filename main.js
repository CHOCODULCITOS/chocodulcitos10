//variables//

const btnDepartamentos = document.getElementById('btn-departamentos'),
       btnCerrarMenu = document.getElementById('.btn-menu-cerrar'),
        grid = document.getElementById('grid'),
        contenedorEnlacesNav = document.querySelector('#menu .contenedor-enlaces-nav'),
        contenedorSubCategorias = document.querySelector('#grid .contenedor-subcategorias'),
        esDispositivoMovil = () => window.innerWidth <= 700;

 btnDepartamentos.addEventListener('mouseover', () => {
         if (!esDispositivoMovil()){
                grid.classList.add('activo');
         }
        
 });  
 
 grid.addEventListener('mouseleave',() => {
         if (!esDispositivoMovil()){
                grid.classList.remove('activo');
         }
 })

 document.querySelectorAll('#menu .categorias a').forEach((elemento) => {
        elemento.addEventListener('mouseenter',(e) => { 
                if(!esDispositivoMovil ()){
                        document.querySelectorAll('#menu .subcategorias').forEach((categoria) => {
                                categoria.classList.remove('activo');
                                if(categoria.dataset.categoria == e.target.dataset.categoria){
                                        categoria.classList.add('activo');
                                }
                      });
                
                };
        });
 });

 document.querySelector('#btn-menu-barras').addEventListener('click',(e) => {
         e.preventDefault();
         if(contenedorEnlacesNav.classList.contains('activo')){
                contenedorEnlacesNav.classList.remove('activo');  
         }else{
                contenedorEnlacesNav.classList.add('activo'); 
         }
 });

 // click//

 btnDepartamentos.addEventListener('click',(e) => {
        e.preventDefault();
        grid.classList.add('activo');
        
});
document.querySelector('#grid .categorias .btn-regresar').addEventListener('click', (e) => { 
        e.preventDefault();
        grid.classList.remove('activo');
       
});

document.querySelectorAll('#menu .categorias a').forEach((elemento) => {
        elemento.addEventListener('click', (e) => {
                if(esDispositivoMovil()){
                        contenedorSubCategorias.classList.add('activo');
                        document.querySelectorAll('#menu .subcategorias').forEach((categoria) => {
                                categoria.classList.remove('activo');
                                if(categoria.dataset.categoria == e.target.dataset.categoria){
                                        categoria.classList.add('activo');
                                }
                        });
                }
        });
});


document.querySelectorAll('#grid .contenedor-subcategorias .btn-regresar').forEach((boton) => {
        boton.addEventListener('click', (e) => { 
                e.preventDefault();
                contenedorSubCategorias.classList.remove('activo');
                
});
 document.querySelector('body').style.overflow = 'visible';


});