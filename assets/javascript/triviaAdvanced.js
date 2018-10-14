
var correct = 0;
var incorrect = 0;
var number = 121;
var intervalId;
var unanswered = 0;

$(document).ready(function () {

    $(".btn").click(function () {
        $(".btn").css("display", "none")
        $("#question").show("display");
        $("p").show("display");

        questions = [
            { q: "Who invented Penicillin?", q1: "Alexandra Fleming", q2: "Thomas Edison", q3: "Marie Curie", q4: "George Orwell", a: "Alexandra Fleming", },
            { q: "What colour is Cerulean?", q1: "Red", q2: "Blue", q3: "Green", q4: "Purple", a: "Blue", },
            { q: "Which is the largest planet in the solar system?", q1: "Jupiter", q2: "Neptune", q3: "Earth", q4: "Mars", a: "Jupiter", },
            { q: "What does an average human brain weigh?", q1: "14 grams", q2: "1.4 kilograms", q3: "14 kilograms", q4: "4.1 kilograms", a: "1.4 kilograms", },
            { q: "Which side of your brain has more neurons?", q1: "Left", q2: "Right", q3: "Both are same", q4: "None", a: "Right", },
            { q: "What kind of animal is the jackrabbit?", q1: "Rabbit", q2: "Bunny", q3: "Hare", q4: "Hamster", a: "Hare", },
            { q: "What is the fastest water animal?", q1: "Porpoise", q2: "Tuna", q3: "Flying Fish", q4: "Sailfish", a: "Sailfish", },
        ];
        var questionIndex = 0;

        function renderQuestion() {

            if (questionIndex <= (questions.length - 1)) {

                $("#question").html(questions[questionIndex].q);
                $(".options-1").html(questions[questionIndex].q1);
                $(".options-2").html(questions[questionIndex].q2);
                $(".options-3").html(questions[questionIndex].q3);
                $(".options-4").html(questions[questionIndex].q4);
                function timeConverter() {

                    var minutes = Math.floor(number / 60);
                    var seconds = number % 60;

                    if (seconds < 10) {
                        seconds = "0" + seconds;
                    }

                    if (minutes === 0) {
                        minutes = "00";
                    }
                    else if (minutes < 10) {
                        minutes = "0" + minutes;
                    }

                    return minutes + ":" + seconds;
                }
                function run() {
                    clearInterval(intervalId);
                    intervalId = setInterval(decrement, 1000);
                };

                function decrement() {
                    number--;
                    $(".timer").html(timeConverter("<h2>" + number + "</h2>"));

                    // If Time's up hide questions and show score

                    if (number === 0) {
                        unanswered++;
                        $("#question").hide("display");
                        $("p").hide("display");
                        $(".timer").hide("display");
                        $("#time").html("Time's Up!!!");
                        $("#correct").text("Correct :" + correct);
                        $("#incorrect").text("Incorrect :" + incorrect);
                        $("#unanswered").text("Unanswered :" + unanswered);
                        $("#total").text("Attempted : " + (correct +incorrect+unanswered)+ " out of " + questions.length)

                        renderQuestion();
                        stop();
                       
                    }
                }
                function stop() {
                    clearInterval(intervalId);
                }
                run()
            }
            else {
                $("#question").html("Game Over!");
                $("p").hide("display");
                $("#correct").text("Correct :" + correct);
                $("#incorrect").text("Incorrect :" + incorrect);
                $("#unanswered").text("Unanswered :" + unanswered);
                function stop() {
                    clearInterval(intervalId);
                }
                stop();
                $(".timer").hide("display");
            }
        }
        function updateScore() {

            $("#correct").text("Correct :" + correct);
            $("#incorrect").text("Incorrect :" + incorrect);
        }
        renderQuestion();

        $("p").click(function (event) {

            var userInput = $(this).text();

            console.log(userInput + " user input ")

            if (userInput === questions[questionIndex].a) {
                correct++;
            }
            else {
                incorrect++;
            }
            questionIndex++;
            renderQuestion();
        });
    });
});
