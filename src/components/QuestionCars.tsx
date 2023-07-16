import { AnswerObject } from "../App";

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNum: number;
  totalQuestions: number;
};

const QuestionCars: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNum,
  totalQuestions,
}) => {
  return (
    <div>
      <p className="number">
        Question: {questionNum} / {totalQuestions}
      </p>
      <p>{question}</p>
      <div>
        {answers.map((answer, i) => {
          return (
            <div key={i}>
              <button disabled={userAnswer ? true : false} onClick={callback}>
                <span>{answer}</span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default QuestionCars;
