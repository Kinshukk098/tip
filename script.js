function showHearts() {
  const canvas = document.getElementById('hearts');
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let hearts = [];

  function Heart() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height + Math.random() * 100;
    this.size = Math.random() * 20 + 10;
    this.speed = Math.random() * 2 + 1;
    this.opacity = Math.random();
    this.color = 'rgba(255, 105, 180,' + this.opacity + ')';

    this.draw = function () {
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.bezierCurveTo(
        this.x + this.size / 2,
        this.y - this.size,
        this.x + this.size * 2,
        this.y + this.size / 2,
        this.x,
        this.y + this.size * 2
      );
      ctx.bezierCurveTo(
        this.x - this.size * 2,
        this.y + this.size / 2,
        this.x - this.size / 2,
        this.y - this.size,
        this.x,
        this.y
      );
      ctx.fillStyle = this.color;
      ctx.fill();
    };

    this.update = function () {
      this.y -= this.speed;
    };
  }

  for (let i = 0; i < 100; i++) {
    hearts.push(new Heart());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hearts.forEach((heart) => {
      heart.update();
      heart.draw();
    });
    requestAnimationFrame(animate);
  }

  animate();
}
