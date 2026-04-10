function setup() {
  createCanvas(600, 600);// tamaño de lienzo 
  background(255,250,250)// color fondo 
}
   function draw() {
     
    fill(0);// color negro 
    noStroke();
    
    let t = 92;// Separacion en Y
    let e =95;// Separacion X
    
    // Fila 1
    ellipse(80,80,t,t);
    ellipse(80+e,80,t,t);
    ellipse(80 + 2*e, 80, t, t);
    ellipse(80 + 3*e, 80, t, t);
    ellipse(80 + 4*e, 80, t, t);
    
  //Fila 2
    ellipse(80,80+e,t,t);
    ellipse(80+e,80+e,t,t);
    fill(230, 90, 120); // Circulo rosado
    ellipse(80+2*e,80+e,t,t);
    fill(0)
    ellipse(80+3*e,80+e,t,t);
    ellipse(80+4*e,80+e,t,t);
    
 //Fila 3  
   ellipse(80, 80 + 2*e, t, t);
   ellipse(80 + e, 80 + 2*e, t, t);
   ellipse(80 + 2*e, 80 + 2*e, t, t);
   ellipse(80 + 3*e, 80 + 2*e, t, t);
   ellipse(80 + 4*e, 80 + 2*e, t, t);
    
 //Fila 4
    ellipse(80, 80 + 3*e, t, t);
   ellipse(80 + e, 80 + 3*e, t, t);
   ellipse(80 + 2*e, 80 + 3*e, t, t);
   ellipse(80 + 3*e, 80 + 3*e, t, t);
   ellipse(80 + 4*e, 80 + 3*e, t, t);
    
//Fila 5 
    ellipse(80, 80 + 4*e, t, t);
   ellipse(80 + e, 80 + 4*e, t, t);
   ellipse(80 + 2*e, 80 + 4*e, t, t);
   ellipse(80 + 3*e, 80 + 4*e, t, t);
   ellipse(80 + 4*e, 80 + 4*e, t, t);
    
  fill(78, 46, 81); // cuadrado morado
    noStroke();
    rect(363,80,95);
    
    fill(44,86,87) //cuadrado verde
    noStroke()
    rect(78,175,95)
    
     fill(8,28,120) //cuadrado azul
    noStroke()
    rect(78,365,95)
    
    fill(220,95,40) //cuadrado naranjo
    noStroke()
    rect(174,270,95)
    
    fill(255,225,95) //cuadrado amarillo
    noStroke()
    rect(269,365,95)
    
    
    fill(255,250,250); // triangulo blnaco 
noStroke();
triangle(370, 270, 318, 190, 270, 270);
}
    
    
    
    
    