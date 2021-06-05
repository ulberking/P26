var student1, student2
function setup() {
  createCanvas(800,800);
  student1 = new Student(2,4,6,3,6)
  student2 = new Student(2,4,6,0,1)
  student1.average()
  student2.average()
}

function draw() {
  background("black");  

  
}




