// Define the Ball class first
class Ball {
    constructor() {
      this.x = width / 2;
      this.y = height / 2;
      this.size = 50;
      this.color = color(random(255), random(255), random(255));
      this.xSpeed = random(-2, 2);
      this.ySpeed = random(-2, 2);
    }
  
    // Method to update ball position and keep it within canvas bounds
    update() {
      this.x += this.xSpeed;
      this.y += this.ySpeed;
  
      // Bounce the ball off the walls
      if (this.x > width - this.size / 2 || this.x < this.size / 2) {
        this.xSpeed *= -1;
      }
      if (this.y > height - this.size / 2 || this.y < this.size / 2) {
        this.ySpeed *= -1;
      }
    }
  
    // Method to display the ball
    display() {
      fill(this.color);
      noStroke();
      ellipse(this.x, this.y, this.size);
    }
  
    // Method to change the ball's size and color when clicked
    changeProperties() {
      this.size = random(30, 100);  // Change size
      this.color = color(random(255), random(255), random(255));  // Change color
    }
  }
  
  // Declare the ball object
  let ball;
  
  function setup() {
    createCanvas(600, 400);
    ball = new Ball();  // Initialize the ball
  }
  
  function draw() {
    background(220);
  
    ball.update();  // Update ball's position
    ball.display();  // Display ball
  
    // Change the ball's size and color when mouse is clicked
    if (mouseIsPressed) {
      ball.changeProperties();
    }
  }
  