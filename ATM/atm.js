class billete {
  constructor(v, c) {
    this.valor = v;
    this.cantidad = c;
  }
}

function entregarDinero() {
  var t = getElementById("dinero");
  dinero = parseInt(t.value);
  for (var bi of caja) {
    if (dinero > 0) {
      div = Math.floor(dinero / bi.valor);
      if (div > bi.cantidad) 
      {
        papales = bi.cantidad;
      } else {
        papales = div;
      }

      entregad.push( new billete(bi.valor, papeles) );
      dinero -= ( bi.valor * papeles );
    }
  }

  if (dinero > 0) {
    
    r.innerHTML = "Soy un cajero pobre y no tengo dinero";
  }else{
    for (var e of entregad) {
      if (e.cantidad > 0) {
        r.innerHTML += e.cantidad + "billetes de $" + e.valor + "<br />"; 
      }      
    }
  }
}

var caja = [];
var entregad = [];

caja.push(new billete(50, 20));
caja.push(new billete(20, 30));
caja.push(new billete(10, 50));

var dinero = 0;
var div = 0;
var papeles = 0;

var r = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
