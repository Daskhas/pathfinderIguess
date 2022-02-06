let isNodePressed = false
let nodes = []
let edges = []
let setsrc = false
let src,dest
let toBeEdged = false;
let val;

class position{
    constructor(x,y){
        this.x=x
        this.y=y
    }
    positionX(){
        return this.x;
    }
    positionY(){
        return this.y;
    }
}

function create(){
    for (var node of nodes) {
      if (node.isPressed()) {
          isNodePressed = true;
          handleEdge(node)
          break
      }
  }
  if (!isNodePressed) {
    
    srcSet = false
    let val = new position(mouseX,mouseY);
      console.log(val.positionX(),val.positionY());
    nodes.push(new Node(val.positionX(), val.positionY(), 1, '#28fc03'))
  }
  else {
      isNodePressed = false
  }
    
  }

  function handleEdge(node) {
    if (!srcSet) {
        src = node
        srcSet = true
        //redraw()
    }
    else {
        dest = node
        toBeEdged= true;
    }

    
    
   
}

function setup() {
   canvas = createCanvas(window.innerWidth, window.innerHeight-90);
   canvas.mouseReleased(create)
  }
  
  function draw() {
    background(5,150,200);

    if (toBeEdged) {
        edges.push(new Edge(src, dest, 5))
        toBeEdged = false
        srcSet = false
    }

    for (var node of nodes) {
        node.display()
    }

   

    for (var edge of edges) {
        console.log(edge.getSource().getX(), edge.getSource().getY(), edge.getDest().getX(), edge.getDest().getY())
        edge.display()
    }

  }


  


 