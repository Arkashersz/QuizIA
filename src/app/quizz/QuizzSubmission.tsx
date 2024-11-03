import { useEffect } from "react";
import Bar from "@/components/Bar";
import Image from "next/image";
import { useReward } from "react-rewards";

type Props = {
  scorePercentage: number;
  score: number;
  totalQuestions: number;
};

const QuizzSubmission = (props: Props) => {
  const { scorePercentage, score, totalQuestions } = props;
  const { reward } = useReward('rewardId', 'confetti');

  useEffect(() => {
    if (scorePercentage === 100) {
      reward();
    }
  }, [scorePercentage, reward]);

  const pluralize = (count: number, singular: string, plural: string) => {
    return count === 1 ? singular : plural;
  };

  const incorrect = totalQuestions - score;

  return (
    <div className="flex flex-col flex-1">
      <main className="py-11 flex flex-col gap-4 items-center flex-1 mt-24">
        <h2 className="text-3xl font-bold">Quiz Completo!</h2>
        <p>Sua pontuação foi: {scorePercentage}%</p>
        {scorePercentage === 100 ? (
          <div className="flex flex-col items-center">
            <p>Parabéns! 🎉</p>
            <div className="flex justify-center">
              <Image
                src="/images/owl-smiling.png"
                alt="Smiling Owl Imagem"
                width={400}
                height={400}
              />
            </div>
            <span id="rewardId" />
          </div>
        ) : (
          <>
            <div className="flex flex-row gap-8 mt-6">
              <Bar percentage={scorePercentage} color="green" />
              <Bar percentage={100 - scorePercentage} color="red" />
            </div>
            <div className="flex flex-row gap-8">
              <p>{score} {pluralize(score, "Acerto", "Acertos")}</p>
              <p>{incorrect} {pluralize(incorrect, "Incorreta", "Incorretas")}</p>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default QuizzSubmission;
