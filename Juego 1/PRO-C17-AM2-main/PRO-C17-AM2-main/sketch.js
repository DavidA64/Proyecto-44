
var Harry
var Guardia
var Guardias 
var coleccionables
var municion
var pared1,pared2,pared3,pared4,puerta,llave,contadordellaves=0,puertaFalsa 



function preload(){

 

}




function setup(){
  createCanvas(windowWidth,windowHeight)
  pared1 = createSprite(10,10,3000,10)
  pared2 = createSprite(5,350,10,680)
  pared3 = createSprite(10,695,3000,10)
  pared4 = createSprite(1505,350,10,680)
  puerta = createSprite(500,500,30,80)
  puertaFalsa = createSprite(500,500,40,80)
  puertaFalsa.visible = false
  llave = createSprite(600,100,10,10)
  Harry = createSprite(300,400,60,60)
  Guardia = createSprite(10,100,60,60)  
  coleccionables = createSprite(400,200,10,10)
  Guardia.velocityX=5



  edges= createEdgeSprites();
  //rightEdge= createEdgeSprites();
  //bottomEdge = createEdgeSprites();
  
  //Guardias= new Group()
  //Guardia.add(Guardias)
 
 


 

 
  Harry.scale = 0.6
  Guardia.scale =0.6
  
  Guardia.debug = true
 
  Harry.debug = true 
  Guardia.rotation=360

  Guardia.setCollider("circle",80,0,80)
 
  Harry.setCollider("circle",0,0,30)
  

 







}



function draw(){
  background("black")
  drawSprites()
  volar()
  //Atrapado() 
  disparos()
  //Movimientoguardia() 
  coleccionar()
  movimientoHarry()
  Puertas()  
  console.log("puerta",puerta.width/2+Harry.width/2)
  console.log("harry",Harry.x,Harry.y)
  

  


  if(Harry.isTouching(Guardia)){
    Guardia.velocityX=0
    Guardia.velocityY=0
    Harry.destroy()
  }
  /*if(Guardia.isTouching(edges)){
    Guardia.rotation=90   
    Guardia.velocityX=0
    Guardia.velocityY=5
  }*/

 
 
 
 
}
function movimientoHarry(){
  if(keyDown("W")|| keyDown("w")){
    Harry.y += -5
  }
  if(keyDown("S")|| keyDown("s")){
    Harry.y += 5
  }
  if(keyDown("A")|| keyDown("a")){
    Harry.x +=-5
  }
  if(keyDown("D")|| keyDown("d")){
    Harry.x += 5
  }






}
function Atrapado(){
if(Harry.isTouching(Guardia)){
  Guardia.velocityX=0
  Guardia.velocityY=0
}
}



function Movimientoguardia(){
 //Guardia.velocityX=15
 
 
   


  
}

function volar(){




  
    if(Guardia.isTouching(pared4)){
      Guardia.velocityX=0
      Guardia.velocityY = 5
      Guardia.rotation = 90
    }
    //Guardia.velocityX=5
    if(Guardia.isTouching(pared3)){
      Guardia.velocityY= 0
      Guardia.velocityX = -5
      Guardia.rotation = 180
    }
    
    if(Guardia.isTouching(pared2)){
    Guardia.velocityY= -5
    Guardia.velocityX = 0
    Guardia.rotation = 270
  }
 
  if(Guardia.isTouching(pared1)){
    Guardia.velocityX=5
    Guardia.velocityY = 0
    Guardia.rotation = 360
  }
  
  
  } 

function coleccionar(){
  if(Harry.isTouching(coleccionables)){
    coleccionables.destroy()
  }
 
}

function disparos(){

if(keyWentDown(32)){
municion = createSprite(Harry.x,Harry.y,20,20)
    municion.velocityX=5
 
} 
}

function Puertas(){
   Harry.collide(puerta)
   if(Harry.collide(llave)){
  llave.destroy()
  contadordellaves=1

 
 }
  if(contadordellaves==1 && Harry.x==467 && (Harry.y>400&&Harry.y<600)){
    puerta.rotation = 90
    
  }
  
}


function matarJefe(){
 

}










