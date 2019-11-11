/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

console.log("Soal Paket 1");

var resultsDisplayed = 0;

(
  function() {
  const myQuestions = [
    {
      question: "Tentukan hasil dari #3sqrt(48) + 2sqrt(27) - 5sqrt(125)#.",
      answers: {
        a: "#18sqrt(3) - 25sqrt(5)#.",
        b: "#6sqrt(3) + 5sqrt(5)#.",
        c: "#41sqrt(15)#.",
        d: "#43sqrt(15)#"
      },
      correctAnswer: "a"
    },
    {
      question: "Bentuk sederhana dari #(x^(-1) + 2y^(-1))^(-1)# adalah ....",
      answers: {
        a: "#(2xy)/(2x + y)#",
        b: "#(2x)/(x + 2y)#",
        c: "#(xy)/(2x + y)#",
        d: "#(xy)/(x + 2y)#"
      },
      correctAnswer: "c"
    },
    {
      question: "Akar persamaan dari #3x + 2 = 3(5x + 4)# adalah ....",
      answers: {
        a: "#-1 5/6#",
        b: "#-1 1/2#",
        c: "#- 4/6#",
        d: "#- 5/6#"
      },
      correctAnswer: "d"
    },
        {
      question: "Penyelesaian dari #3x + 10 > 2x - 3# adalah ....",
      answers: {
        a: "#x < 13#",
        b: "#x > -13#",
        c: "#x < -7#",
        d: "#x > 7#"
      },
      correctAnswer: "b"
    },
        {
      question: "Pak Andi 28 tahun lebih tua dari umur Amira. Umur Bu Andi 6 tahun lebih muda dari Pak Andi. Jika jumlah umur Pak Andi, Bu Andi, dan Amira adalah 119 tahun, maka jumlah umur Bu Andi dan Amira adalah ....",
      answers: {
        a: "86 tahun",
        b: "74 tahun",
        c: "47 tahun",
        d: "68 tahun"
      },
      correctAnswer: "d"
    },
        {
      question: "Enam anak, 3 laki-laki dan 3 perempuan, duduk berjajar. Peluang  3 perempuan duduk berdampingan adalah ....",
      answers: {
        a: "#1/60#",
        b: "#1/30#",
        c: "#1/15#",
        d: "#1/10#",
        e: "#1/5#"
      },
      correctAnswer: "e"
    },
        {
      question: "Seorang penjahit akan membuat 2 model pakaian. Dia mempunyai persediaan kain batik 40 meter dan kain polos 15 meter. Model A memerlukan 1 meter kain batik dan 1,5 meter kain polos, sedangkan model B memerlukan 2 meter kain batik dan 0,5 meter kain polos. Jumlah maksimum pakaian yang dapat dibuat adalah ....",
      answers: {
        a: "10",
        b: "22",
        c: "34",
        d: "46",
        e: "58"
      },
      correctAnswer: "b"
    },
        {
      question: "Empat orang siswa akan mengikuti lomba karya tulis, untuk itu diperlukan biaya Rp900.000,00. Karena masing-masing memiliki kondisi keuangan yang berbeda, besar kontribusi masing-masing siswa tidak sama. Siswa A memberikan kontribusi setengah dari jumlah kontribusi tiga siswa lainnya. Siswa B memberikan kontribusi sepertiga dari jumlah kontribusi tiga siswa lainnya. Siswa C memberikan kontribusi seperempat dari jumlah kontribusi ketiga siswa lainnya. Besar kontribusi siswa D adalah ....",
      answers: {
        a: "Rp150.000,00",
        b: "Rp180.000,00",
        c: "Rp195.000,00",
        d: "Rp225.000,00",
        e: "Rp300.000,00"
      },
      correctAnswer: "c"
    },
        {
      question: "Tiga puluh data mempunyai rata-rata #p#, jika rata-rata 20% data di antaranya adalah #p + 0,1#; 40% lainnya adalah #p – 0,5#; dan rata-rata  30% data sisanya adalah #p + q#, maka #q =# ....",
      answers: {
        a: "#1/5#",
        b: "#7/30#",
        c: "#4/15#",
        d: "#3/10#",
        e: "#1/3#"
      },
      correctAnswer: "c"
    },
        {
      question: "<img src='https://cdn.glitch.com/917c8578-7c3c-4e42-b48a-84df6a15face%2Ftest.jpg?v=1572957876100' width=80%></img><br/><br/>Diketahui harga 2 buah buku, 2 buah pulpen dan sebuah spidol adalah Rp14.000,00. Di toko yang sama, harga sebuah buku, sebuah pulpen dan 2 buah spidol adalah Rp13 000,00. Sedangkan harga sebuah buku, 3 buah pulpen dan sebuah spidol adalah Rp15.000,00. Jika Reski ingin membeli sebuah buku, sebuah pulpen dan sebuah spidol, maka berapakah uang yang harus dibayarkan?",
      answers: {
        a: "Rp12.000,00.",
        b: "Rp11.000,00.",
        c: "Rp9.000,00.",
        d: "Rp8.000,00."
      },
      correctAnswer: "c"
    }
  ];

  function buildQuiz() {
    
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${currentQuestion.answers[letter]}      
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
    currentContainer.innerHTML = `Soal ${curQuest} dari ${myQuestions.length}`;
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");
    
    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "green";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    let scoreTrue = numCorrect / myQuestions.length * 100;
    resultsContainer.style.display = "inline-block";
    resultsContainer.innerHTML = `${numCorrect} soal benar dari ${myQuestions.length} soal.<br/>Skor: ${scoreTrue.toFixed(0)}`;
    
    submitButton.style.display = "none";
    explainButton.style.display = "inline-block";
    resultsDisplayed++
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
      if (resultsDisplayed === 1) {
      explainButton.style.display = "inline-block";
      }
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
      explainButton.style.display = "none";
      if (resultsDisplayed === 1) {
      explainButton.style.display = "none";
      }
    }
    
    if (resultsDisplayed === 1) {
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
    curQuest++
    currentContainer.innerHTML = `Soal ${curQuest} dari ${myQuestions.length}`;
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
    curQuest--
    currentContainer.innerHTML = `Soal ${curQuest} dari ${myQuestions.length}`;
  }
  
  function goExplain1() {
        location.replace("/pembahasan1.html")
  }
  
  var curQuest = 1;  
  
  const currentContainer = document.getElementById("curquestion");
  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const explainButton = document.getElementById("explain");

  // display quiz right away
  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  // on submit, show results
  submitButton.addEventListener("click", showResults);
  explainButton.addEventListener("click", goExplain1);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
