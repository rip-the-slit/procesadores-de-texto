'use client';

import { useState } from 'react';
import type { QuizQuestion, Topic } from '@/lib/data';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { CheckCircle2, XCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { Progress } from './ui/progress';

interface QuizProps {
  topic: Pick<Topic, 'quiz' | 'title'>;
  onComplete: (score: number) => void;
}

type AnswerStatus = 'unanswered' | 'correct' | 'incorrect';

export default function Quiz({ topic, onComplete }: QuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answerStatus, setAnswerStatus] = useState<AnswerStatus>('unanswered');
  const [score, setScore] = useState(0);

  const currentQuestion = topic.quiz[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / topic.quiz.length) * 100;

  const handleCheckAnswer = () => {
    if (!selectedAnswer) return;

    if (selectedAnswer === currentQuestion.correctAnswer) {
      setAnswerStatus('correct');
      setScore(s => s + 1);
    } else {
      setAnswerStatus('incorrect');
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < topic.quiz.length - 1) {
      setCurrentQuestionIndex(i => i + 1);
      setSelectedAnswer(null);
      setAnswerStatus('unanswered');
    } else {
      onComplete(score);
    }
  };

  const getOptionClass = (option: string) => {
    if (answerStatus === 'unanswered') return '';
    if (option === currentQuestion.correctAnswer) return 'bg-green-100 dark:bg-green-900 border-green-500';
    if (option === selectedAnswer) return 'bg-red-100 dark:bg-red-900 border-red-500';
    return '';
  };

  return (
    <div className="container mx-auto p-4 md:p-8 flex flex-col items-center justify-center flex-grow">
      <Card className="w-full max-w-2xl shadow-2xl">
        <CardHeader>
          <Progress value={progress} className="mb-4 h-2" />
          <CardTitle className="font-headline text-2xl md:text-3xl text-center">
            Quiz: {topic.title}
          </CardTitle>
          <CardDescription className="text-center">
            Pregunta {currentQuestionIndex + 1} de {topic.quiz.length}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-lg font-semibold mb-6 text-center">{currentQuestion.question}</p>
          <RadioGroup
            value={selectedAnswer || ''}
            onValueChange={setSelectedAnswer}
            disabled={answerStatus !== 'unanswered'}
            className="space-y-4"
          >
            {currentQuestion.options.map((option, index) => (
              <Label
                key={index}
                htmlFor={`option-${index}`}
                className={`flex items-center gap-4 p-4 border-2 rounded-lg cursor-pointer transition-all ${getOptionClass(option)}`}
              >
                <RadioGroupItem value={option} id={`option-${index}`} />
                <span>{option}</span>
              </Label>
            ))}
          </RadioGroup>

          {answerStatus !== 'unanswered' && (
            <Card className="mt-6 bg-muted">
              <CardContent className="p-4 flex items-start gap-4">
                {answerStatus === 'correct' ? (
                  <CheckCircle2 className="h-8 w-8 text-green-500 mt-1 flex-shrink-0" />
                ) : (
                  <XCircle className="h-8 w-8 text-red-500 mt-1 flex-shrink-0" />
                )}
                <div>
                  <p className="font-bold">
                    {answerStatus === 'correct' ? '¡Correcto!' : '¡Casi! La respuesta correcta es:'}
                  </p>
                  <p className="text-muted-foreground">{currentQuestion.explanation}</p>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="mt-8 flex justify-between items-center">
            <Button variant="ghost" onClick={() => onComplete(score)}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Salir del quiz
            </Button>
            {answerStatus === 'unanswered' ? (
              <Button onClick={handleCheckAnswer} disabled={!selectedAnswer}>
                Comprobar
              </Button>
            ) : (
              <Button onClick={handleNextQuestion} className="bg-primary hover:bg-primary/90">
                {currentQuestionIndex === topic.quiz.length - 1 ? 'Finalizar Quiz' : 'Siguiente'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
