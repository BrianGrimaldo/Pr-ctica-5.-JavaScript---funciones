function computerAidedLearning() {
    const motivationalMessages = [
        "Well done!",
        "Very good!",
        "Correct!",
        "Keep it up!",
        "Nice work!"
    ];

    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);

    const correctAnswer = num1 + num2;

    let userAnswer;
    do {
        userAnswer = parseInt(prompt(`¿Cuánto es ${num1} + ${num2}?`), 10);

        if (userAnswer === correctAnswer) {
            const randomMessage =
                motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
            alert(randomMessage);
        } else {
            alert("Respuesta incorrecta. Vuelva a intentarlo.");
        }
    } while (userAnswer !== correctAnswer);
}

computerAidedLearning();
