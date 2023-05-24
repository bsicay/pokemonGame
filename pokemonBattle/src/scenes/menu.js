export default function menuScene() {
    const title = 'MY GAME';
    const titleChars = [...title];
    titleChars.forEach((char, index) => {
        const charObj = add([
            text(char, { size: 48 }),  // Ajusta el tamaño del texto como necesites
            pos(width() / 2 + index * 48, -100),  // Ajusta la posición inicial como necesites
            'titleChar'
        ]);
        charObj.action(() => {
            if (charObj.pos.y < 100) {  // Ajusta la posición final como necesites
                charObj.move(0, 100);  // Ajusta la velocidad de caída como necesites
            }
        });
    });

    // Crea el texto "Press space bar to continue" que se hace grande y pequeño
    let scaleDirection = 1;
    const prompt = add([
        text('Press space bar to continue', { size: 32 }),  // Ajusta el tamaño inicial del texto como necesites
        pos(width() / 2, height() / 2),  // Ajusta la posición como necesites
        'prompt'
    ]);
    prompt.action(() => {
        if (prompt.scale.x >= 2) {  // Ajusta el tamaño máximo como necesites
            scaleDirection = -1;
        } else if (prompt.scale.x <= 1) {  // Ajusta el tamaño mínimo como necesites
            scaleDirection = 1;
        }
        prompt.scale.x += 0.01 * scaleDirection;  // Ajusta la velocidad de escala como necesites
        prompt.scale.y += 0.01 * scaleDirection;  // Ajusta la velocidad de escala como necesites
    });

    // Cambia a la escena del juego cuando se presiona la barra espaciadora
    keyPress('space', () => {
        go('game');
    });
}
