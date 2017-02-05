
function showData() {                        // Indicar dados sobre a ship

    context.fillStyle = 'rgba(255, 255, 255,1)'; // zona para dados sobre a particula com fundo 100% limpo (opacity 1)
    context.fillRect(0, 0, 200, 250); //limpar bem zona de dados  

    context.fillStyle = 'black';

    context.fillText("Position X: " + Ship_A.position.getX().toFixed(2), 0, 10);
    context.fillText("Position Y: " + Ship_A.position.getY().toFixed(2), 0, 20);

    context.fillText("Speed X: " + Ship_A.velocity.getX().toFixed(2), 0, 40);
    context.fillText("Speed Y: " + Ship_A.velocity.getY().toFixed(2), 0, 50);

    context.fillText("Bearing: " + (Ship_A.bearing.getAngle() / (Math.PI * 2) * 360 + 90).toFixed(2), 0, 70);

    context.fillText("Thrust X: " + Ship_A.acceleration.getX().toFixed(2), 0, 90);
    context.fillText("Thrust Y: " + Ship_A.acceleration.getY().toFixed(2), 0, 100);

    context.fillText("Thrusting?: " + Ship_A.thrusting, 0, 120);

    context.fillText("Turning Left?: " + Ship_A.turningLeft, 0, 140);
    context.fillText("Turning Right?: " + Ship_A.turningRight, 0, 150);

    context.fillText("Live Asteroids?: " + Asteroids.length, 0, 170);

    context.fillText("Live Laser Shots?: " + Lasers.length, 0, 190);
    context.fillText("Live Missle Shots?: " + Missiles.length, 0, 200);

    context.fillText("SCORE: " + Math.floor(Score), 0, 220);

    context.fillText("Start ?: " + GameStart, 0, 240);

};
