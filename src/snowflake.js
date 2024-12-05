// Snowflakes JavaScript Code
// Snowflakes JavaScript Code with Optional Enhancements
(function() {
    // Configuration
    const snowflakeCount = 150; // Number of snowflakes
    const snowflakeSize = 40; // Maximum size of snowflakes
    const snowflakeColor = '#FFFAFA'; // Snowflake color
    const snowflakeSymbols = ['❄', '✻', '✼', '❅', '❆']; // Different snowflake symbols
    const windMultiplier = 1; // Adjust for more or less horizontal movement

    // Create a container for snowflakes
    const snowContainer = document.createElement('div');
    snowContainer.style.position = 'fixed';
    snowContainer.style.top = '0';
    snowContainer.style.left = '0';
    snowContainer.style.width = '100%';
    snowContainer.style.height = '100%';
    snowContainer.style.pointerEvents = 'none';
    snowContainer.style.zIndex = '9999';
    document.body.appendChild(snowContainer);

    // Function to create a single snowflake
    function createSnowflake() {
        const snowflake = document.createElement('div');
        // Randomize snowflake symbol
        snowflake.textContent = snowflakeSymbols[Math.floor(Math.random() * snowflakeSymbols.length)];
        snowflake.style.position = 'absolute';
        // Randomize initial positions
        snowflake.style.top = Math.random() * window.innerHeight + 'px';
        snowflake.style.left = Math.random() * window.innerWidth + 'px';
        snowflake.style.fontSize = Math.random() * snowflakeSize + 5 + 'px';
        snowflake.style.color = snowflakeColor;
        snowflake.style.opacity = Math.random();
        snowflake.style.userSelect = 'none';
        snowflake.style.pointerEvents = 'none';
        snowContainer.appendChild(snowflake);

        // Randomize speed and horizontal drift
        const speed = Math.random() * 1 + 0.5; // Vertical speed
        let xSpeed = (Math.random() - 0.5) * windMultiplier; // Horizontal speed

        // Animation
        const fall = () => {
            let y = parseFloat(snowflake.style.top);
            let x = parseFloat(snowflake.style.left);

            y += speed;
            x += xSpeed;

            // Reset position if out of bounds
            if (y > window.innerHeight) {
                y = -10;
                x = Math.random() * window.innerWidth;
                snowflake.style.opacity = Math.random();
                snowflake.style.fontSize = Math.random() * snowflakeSize + 5 + 'px';
                // Randomize xSpeed again
                xSpeed = (Math.random() - 0.5) * windMultiplier;
            }

            if (x > window.innerWidth) {
                x = -10;
            } else if (x < -10) {
                x = window.innerWidth + 10;
            }

            snowflake.style.top = y + 'px';
            snowflake.style.left = x + 'px';

            requestAnimationFrame(fall);
        };
        fall();
    }

    // Create multiple snowflakes
    for (let i = 0; i < snowflakeCount; i++) {
        createSnowflake();
    }

    // Optional: Update snowflakes on window resize
    window.addEventListener('resize', () => {
        snowContainer.innerHTML = '';
        for (let i = 0; i < snowflakeCount; i++) {
            createSnowflake();
        }
    });
})();