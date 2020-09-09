   
   var cajones=document.getElementById('ul');
   var btn=document.getElementById('boton');
   var calificacion=document.getElementById('datos');
   var datoCajones=document.getElementById('cajas');
  var opcion1=document.getElementById('opcion1');
  var opcion2=document.getElementById('opcion2');
  var opcion3=document.getElementById('opcion3');
  var opcion4=document.getElementById('opcion4');


      var jugar={
                preguntas:[
                          {x:'Cual es el entorno que esta conformado por elementos que nacen de forma natural?', 
                          opciones:['A) ambiente','B) medio ambiente natural',
                          'C) ciudades','D) colonias'],respuesta:2},

                          {x:'Que es lo que mas causa el ser humano?',
                         opciones:['A) Destruccion ','B) Recursos naturales','C) Bienestar',
                         'D) Contaminacion'],respuesta:4},
                        
                          {x:'A que se refiere el incremento de la temperatura en el planeta?',
                          opciones:['A) ebullicion','B) calentamiento global ',
                          'C) coccion','D) temperatura alta '],respuesta:2},
 
                         {x:'Cuales son consejos para el cuidado del medio ambiente?', 
                           opciones:['A) ahorrar agua','B) plantar arboles',
                           'C)evitar botar basura','D) todos los anteriores'],respuesta:4},

                         {x:'La contaminacion a quien puede afectar?', 
                           opciones:['A) todos los seres vivos','B) los arboles',
                           'C) el hombre','D) los animales'],respuesta:1},
                           
                          {x:'Cuales pueden ser agentes contaminantes?', 
                           opciones:['A) plaguicidas','B) herbicidas',
                           'C) cianuro','D) todos los anteriores'],respuesta:4}, ],
                        
         

                contador:0,
                cargar:function(){
                	   if(this.contador<=this.preguntas.length-1){
                        datoCajones.innerHTML=this.contador+1+". "+this.preguntas[this.contador].x;      
                        opcion1.innerHTML=this.preguntas[this.contador].opciones[0];
                        opcion2.innerHTML=this.preguntas[this.contador].opciones[1];
                        opcion3.innerHTML=this.preguntas[this.contador].opciones[2];
                        opcion4.innerHTML=this.preguntas[this.contador].opciones[3];
                           this.calificar();
                        }
                        else{

                           datoCajones.innerHTML="Gracias por intentarlo! ^-^ "      
                        opcion1.style.display="none";
                        opcion2.style.display="none";
                        opcion3.style.display="none";
                        opcion4.style.display="none";
                        btn.style.display="none";
                        } 
                },


                avanzarPregunta:function(){
                    this.contador++;
                    this.cargar();
                 },
                verificarRespuesta:function(seleccion){
                   
                         var dato=seleccion.id.split('');
                         
                         if(dato[dato.length-1]==this.preguntas[this.contador].respuesta){
                         	this.puntos++;
                         	seleccion.className="correcto";
                         	seleccion.innerHTML="correcto";
                         	this.calificar();
                         }
                         else{
                         	seleccion.className="error";
                         	seleccion.innerHTML="error";
                         }
                },
                restringir:function(){
                       for(let i=0;i<cajones.children.length;i++){
                       	    cajones.children[i].style.pointerEvents="none";
                       }
                },

                desmarcar:function(){
                       for(let i=0;i<cajones.children.length;i++){
                       	    cajones.children[i].style.pointerEvents="auto";
                       	    cajones.children[i].className=''

                       }
                },
                puntos:0,
                calificar:function(){
                  calificacion.innerHTML=+this.puntos+"/"+this.preguntas.length;
                }
 
           }

           window.onload=jugar.cargar();

           function button(seleccion){
           	     jugar.verificarRespuesta(seleccion);
           	     jugar.restringir();
           }

           function  avanzarPregunta(){
              jugar.avanzarPregunta();
              jugar.desmarcar();
           } 



