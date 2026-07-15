import type { Question, SpecialQuestion } from './types';

type SessionQuestion = Question | SpecialQuestion;

export interface SessionAnswerTransition {
  answers: Record<string, number>;
  questions: SessionQuestion[];
  nextIndex: number | null;
}

export function applySessionAnswer(
  currentQuestion: SessionQuestion,
  currentIndex: number,
  questions: SessionQuestion[],
  answers: Record<string, number>,
  specialQuestions: SpecialQuestion[],
  value: number,
): SessionAnswerTransition {
  const nextAnswers = { ...answers, [currentQuestion.id]: value };
  let nextQuestions = questions;

  if (currentQuestion.id === 'drink_gate_q1' && value === 3) {
    const trigger = specialQuestions.find(question => question.kind === 'drink_trigger');
    if (trigger && !questions.some(question => question.id === trigger.id)) {
      nextQuestions = [...questions];
      nextQuestions.splice(currentIndex + 1, 0, trigger);
    }
  } else if (currentQuestion.id === 'drink_gate_q1') {
    nextQuestions = questions.filter(question => question.id !== 'drink_gate_q2');
    delete nextAnswers.drink_gate_q2;
  }

  return {
    answers: nextAnswers,
    questions: nextQuestions,
    nextIndex: currentIndex < nextQuestions.length - 1 ? currentIndex + 1 : null,
  };
}
