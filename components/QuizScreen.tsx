import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import questions from '@/quiz.json';

export default function QuizScreen() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [answerStatus, setAnswerStatus] = useState<'correct' | 'incorrect' | null>(null);

  const handleAnswerPress = (selected: string) => {
    if (selectedOption !== null) return;

    setSelectedOption(selected);
    const isCorrect = selected === questions[currentQuestionIndex].correctAnswer;
    setAnswerStatus(isCorrect ? 'correct' : 'incorrect');
    if (isCorrect) setScore(score + 1);

    setTimeout(() => {
      setSelectedOption(null);
      setAnswerStatus(null);
      const nextQuestion = currentQuestionIndex + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestionIndex(nextQuestion);
      } else {
        setShowScore(true);
      }
    }, 700);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
    setAnswerStatus(null);
  };

  return (
    <SafeAreaView className="flex-1 bg-gradient-to-b from-blue-100 to-white">
      <View className="flex-1 justify-center items-center px-4">
        {showScore ? (
          <View className="items-center bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
            <Text className="text-4xl font-extrabold text-blue-700 mb-4 text-center">
              Quiz Finished!
            </Text>
            <Text className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              You scored {score} out of {questions.length}
            </Text>
            <TouchableOpacity
              className="bg-blue-600 px-8 py-4 rounded-full shadow"
              onPress={resetQuiz}
            >
              <Text className="text-white text-lg font-semibold">Play Again</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
            <View className="mb-6 flex-row justify-between items-center">
              <Text className="text-base text-blue-600 font-semibold">
                Question {currentQuestionIndex + 1}
              </Text>
              <Text className="text-base text-gray-400">
                {currentQuestionIndex + 1}/{questions.length}
              </Text>
            </View>
            <Text className="text-xl font-bold text-gray-800 mb-8 text-center">
              {questions[currentQuestionIndex].question}
            </Text>
            <ScrollView
              className="mb-4"
              contentContainerStyle={{ paddingBottom: 8 }}
              showsVerticalScrollIndicator={false}
            >
              {questions[currentQuestionIndex].options.map((option: string, index: number) => {
                let bgColor = 'bg-white';
                let borderColor = 'border-gray-200';
                let textColor = 'text-gray-700';
                if (selectedOption === option) {
                  if (answerStatus === 'correct') {
                    bgColor = 'bg-green-100';
                    borderColor = 'border-green-400';
                    textColor = 'text-green-700';
                  } else if (answerStatus === 'incorrect') {
                    bgColor = 'bg-red-100';
                    borderColor = 'border-red-400';
                    textColor = 'text-red-700';
                  }
                }
                return (
                  <TouchableOpacity
                    key={index}
                    className={`${bgColor} ${borderColor} p-4 rounded-xl border-2 shadow-sm my-2 items-center`}
                    onPress={() => handleAnswerPress(option)}
                    disabled={selectedOption !== null}
                    activeOpacity={0.8}
                  >
                    <Text className={`text-base font-medium ${textColor}`}>{option}</Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
            <View className="mt-4 flex-row justify-between">
              <Text className="text-sm text-gray-400">Score: {score}</Text>
              <Text className="text-sm text-gray-400">Remaining: {questions.length - currentQuestionIndex}</Text>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
