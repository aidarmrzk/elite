document.addEventListener('DOMContentLoaded', () => {

    const quizIndicators = document.querySelectorAll('.section-quiz-content-indicator');
    const quizBlocks = document.querySelectorAll('.quiz-block');
    const quizBoxes = document.querySelectorAll('.quiz-box');

    quizBoxes.forEach((element) => {
        element.addEventListener('click', () => {

            const selecteds = element.parentNode.querySelectorAll('.selected');
            selecteds.forEach((selected) => {
                selected.classList.remove('selected');
            });

            element.classList.add('selected');
            nextSlide();
        });
    });

    function nextSlide() {
        const activeBlock = document.querySelector(".quiz-block.active");
        const nextBlock = document.querySelector(".quiz-block.active").nextElementSibling;

        activeBlock.classList.remove("active");
        nextBlock.classList.add("active");
        changeProgress();
    }

    function changeProgress() {
        const activeBlockIndex = Array.from(quizBlocks).findIndex(block => block.classList.contains('active'));
        quizIndicators[activeBlockIndex - 1].classList.add('selected');
        if (quizBlocks[quizBlocks.length - 1].classList.contains('active')) {
            const quizIndicatorsBlock = document.querySelector('.section-quiz-content-indicators')
            // quizIndicatorsBlock.classList.add('opacity');
        }
    }

    function chooseQuizBlock() {
        quizIndicators.forEach((element, index) => {
            element.addEventListener('click', () => {
                const activeIndex = Array.from(quizBlocks).findIndex((e) => e.classList.contains('active'));
                if (index < activeIndex) {
                    quizIndicators.forEach((e, i) => {
                        if (i < index) {
                            e.classList.add('selected');
                        } else {
                            e.classList.remove('selected');
                        }
                    });
                    quizBlocks.forEach((e) => {
                        e.classList.remove('active');
                    });
                    quizBlocks[index].classList.add('active');
                }
            });
        });
    }
    chooseQuizBlock();

    function setQuizHeight() {
        const quizHeight = document.querySelector(".quiz-block").clientHeight;
  
        const quizBlocks = document.querySelectorAll(".quiz-block");
  
        quizBlocks.forEach((element) => {
          element.style.minHeight = quizHeight + 'px';
        });
    }
    setQuizHeight();


})