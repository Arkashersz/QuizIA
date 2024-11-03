import React from "react";
import { clsx } from "clsx";
import { cn } from "@/lib/utils";

type Props = {
  isCorrect: boolean | null;
  correctAnswer: string;
};

const ResultCard = (props: Props) => {
  const { isCorrect } = props;

  if (isCorrect === null) {
    return null;
  }

  const text = isCorrect
    ? "Correto!"
    : "Errado! A resposta correta é: " + props.correctAnswer;

  const borderClasses = clsx({
    "border-green-500": isCorrect,
    "border-red-500": !isCorrect
  })

  return <div className={cn(
    borderClasses,
    "border-2",
    "rounred-lg",
    "p-4",
    "text-center",
    "text-lg",
    "font-semibold",
    "my-04",
    "bg-secondary"
  )}>{text}</div>;
};

export default ResultCard;
