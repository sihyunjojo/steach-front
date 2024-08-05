import React, { useState, useEffect } from 'react';
import './goUp.css';

const DetailQuiz: React.FC = () => {
  const [showChoices, setShowChoices] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [timer, setTimer] = useState<number>(3);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const correctAnswer = '확실하다'; // 정답 설정

  useEffect(() => {
    const emojiTimer = setTimeout(() => {
      setStartAnimation(true);
    }, 1500);

    const questionTimer = setTimeout(() => {
      setShowQuestion(true);
    }, 3000);

    const choicesTimer = setTimeout(() => {
      setIsVisible(false);
      setShowChoices(true);

      // 타이머 시작
      const countdownTimer = setInterval(() => {
        setTimer(prevTimer => {
          if (prevTimer > 1) {
            return prevTimer - 1;
          } else {
            clearInterval(countdownTimer);
            // 타이머가 0이 되었을 때 정답을 공개
            setShowAnswer(true);
            setIsClicked(true);

            return 0;
          }
        });
      }, 1000);
    }, 4000);

    return () => {
      clearTimeout(questionTimer);
      clearTimeout(choicesTimer);
      clearTimeout(emojiTimer);
    };
  }, []);

  const handleChoiceClick = (choice: string) => {
    setSelectedChoice(choice);
    setIsClicked(true)
  };

  return (
    <div id="quizContainer" className="relative w-[500px] h-[400px] text-center font-sans flex flex-col justify-start" style={{backgroundColor: 'rgb(242, 242, 242)'}}>
      <div className="relative h-[200px] flex-1">
        <div style={{ height: '50px' }} />
        <div id='quizEmoji' style={styles.quizEmoji}>
          {isVisible && (
            <img
              src="https://item.kakaocdn.net/do/33e4233498cbdb8141bbb5e5b5a7fd59f43ad912ad8dd55b04db6a64cddaf76d"
              alt="Animated GIF"
              style={{
                ...styles.emoji,
                ...(startAnimation ? styles.animate : {})
              }}
            />
          )}
        </div>

        <div
          id="clock"
          className={`absolute top-[20px] left-0 right-0 mx-auto opacity-0 text-white text-center transition-opacity duration-500 w-[40px] h-[40px] leading-[40px] rounded-full bg-purple-600 ${
            showChoices ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p>{timer}</p>
        </div>

        <div
          id="question"
          className={`absolute inset-0 top-[50px] text-2xl transition-transform duration-500 ease-in-out flex justify-center items-end pb-2 ${
            showQuestion ? 'opacity-100' : 'opacity-0'
          } ${showChoices ? 'transform translate-y-[-45px]' : 'transform translate-y-0'}`}
        >
          <p style={{ backgroundColor: '', padding: 10, width: '100%' }}>마루가 세상에서 제일 귀엽다?</p>
        </div>
      </div>
      <div id='answer' style={{ ...styles.choices, ...(showChoices ? styles.show : styles.hide) }}>
        {['O', 'X', '모르겠다', '확실하다'].map(choice => {
          const isCorrectChoice = choice === correctAnswer;
          return (
            <button
              key={choice}
              onClick={() => handleChoiceClick(choice)}
              style={{
                ...styles.button,
                backgroundColor: isClicked? 
                  ((selectedChoice !== choice)? getChoiceColor(choice).backgroundColor : getChoiceColor(choice).backgroundColor) :  
                    (
                      getChoiceColor(choice).backgroundColor
                    ),
                color: 'white',
                opacity: !isClicked? 
                  1 :
                  (
                    !showAnswer ? 
                    ((selectedChoice !== choice ? 0.2 : 1)):
                    (
                      (selectedChoice !== choice) && !isCorrectChoice?
                        0.2:
                        1
                    )
                  ), // 타이머가 끝난 후 틀린 선택지는 투명하게
                textAlign: 'left',
                paddingLeft: '10px',
                position: 'relative',
              }}
              disabled={selectedChoice !== null}
            >
              {choice}
              {showAnswer && (
                <span className="absolute right-2 top-1/2 transform -translate-y-1/2 font-bold">
                  {isCorrectChoice ? 'O' : 'X'}
                </span>
              )}
            </button>
          );
        })}
      </div>
      <div style={{ height: '50px' }} />
    </div>
  );
};

// 선택지에 따라 정답 여부에 따라 색상을 반환하는 함수
const getChoiceColor = (choice: string) => {
    switch (choice) {
      case 'O':
        return { backgroundColor: 'rgb(208, 53, 66)' };
      case 'X':
        return { backgroundColor: 'rgb(45, 106, 199)' };
      case '모르겠다':
        return { backgroundColor: 'rgb(208, 159, 54)' };
      case '확실하다':
        return { backgroundColor: 'rgb(67, 132, 38)' };
      default:
        return { backgroundColor: 'gray' };
    }
};

const styles: { [key: string]: React.CSSProperties } = {
  quizEmoji: {
    position: 'absolute',
    top: 100,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shrink: {
    transform: 'translateY(-45px)',
  },
  choices: {
    marginTop: 'auto',
    opacity: 0,
    transition: 'opacity 0.5s ease-in-out',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr'
  },
  show: {
    opacity: 1,
  },
  hide: {
    opacity: 0,
  },
  button: {
    fontSize: '18px',
    padding: '10px 20px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    height: '70px',
    position: 'relative',
    borderRadius: '3px',
    margin: '3px'
  },
  emoji: {
    width: '300px',
    height: '300px',
    transition: 'transform 2s ease-in-out, opacity 2s ease-in-out, font-size 2s ease-in-out',
    transform: 'translateY(0)',
  },
  animate: {
    transform: 'translateY(-80px) scale(0.4)'
  },
};

export default DetailQuiz;
