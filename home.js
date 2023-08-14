const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
      question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
    
        answer.classList.toggle('show');
    
        faqQuestions.forEach(otherQuestion => {
          if (otherQuestion !== question) {
            const otherAnswer = otherQuestion.nextElementSibling;
            otherAnswer.classList.remove('show');
          }
        });
      });
    });