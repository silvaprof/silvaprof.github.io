// Desenvolvido por silvaprof
// silvaprof.github.io 

// ----- Funcao  - Escrever na tela ----- //
function typeWrite(elementId, text, speed = 100, callback) {
    const element = document.getElementById(elementId);
    let i = 0;
    const cursor = '<span class="cursor">|</span>';
    element.innerHTML = ''; // limpa antes de começar

    const interval = setInterval(() => {
        element.innerHTML = text.substring(0, i) + cursor;
        i++;
        if (i > text.length) {
            clearInterval(interval);
            element.innerHTML = text; 
            if (callback) callback();
        }
    }, speed);
}

// Sequência de digitação:
window.onload = () => {
    typeWrite('typewriter', 'Seja bem-vindo ao meu site!', 60, () => {
        typeWrite('title', 'José Eduardo Silva', 100, () => {
            typeWrite('description', 'Professor de Matemática & Desenvolvedor.', 80, () => {
                typeWrite('description_2', '< Apaixonado por educação e tecnologia. 💻🚀 />', 80, () => {
                    typeWrite('cursor_final', '|', 80);
                });
            });
        });
    });
};


// ----- Funcao - Numeros e codigos no fundo ----- //

const canvas = document.getElementById('background-code');
const ctx = canvas.getContext('2d');

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

// Palavras de código Python + números
const elements = [
    'def', 'class', 'if', 'else', 'elif', 'return',
    'import', 'from', 'for', 'while', 'in',
    'True', 'False', 'None', 'print()', 'len()',
    '+', '-', '*', '/', '=', '==', '!=', '<', '>',
    'and', 'or', 'not',
    'range()', 'input()', 'str()', 'int()',
    '(', ')', '{', '}', '[', ']',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];

const particles = [];
const count = 90; // quantidade total

for (let i = 0; i < count; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speedX: (Math.random() - 0.5) * 0.6,
        speedY: (Math.random() - 0.5) * 0.6,
        text: elements[Math.floor(Math.random() * elements.length)],
        size: Math.random() * 18 + 14,
        opacity: Math.random() * 0.6 + 0.4
    });
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        ctx.font = `bold ${p.size}px monospace`;
        ctx.fillStyle = `rgba(0, 255, 204, ${p.opacity})`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(p.text, p.x, p.y);

        p.x += p.speedX;
        p.y += p.speedY;

        // Loop nas bordas
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
    });

    requestAnimationFrame(animate);
}

animate();