import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import questions from '@/quiz.json';
import '@/global.css'

const ANIMATION = { 0: { opacity: 0, scale: 0.95 }, 1: { opacity: 1, scale: 1 } };
const ANIMATION_DURATION = 300;

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
    <SafeAreaView className="flex-1 bg-gradient-to-b from-gray-100 to-gray-300 flex justify-center items-center">
      <View className="w-full md:w-1/2 p-6">
      <Animatable.View
      className="flex-1 justify-center items-center px-4"
      animation={ANIMATION}
      duration={ANIMATION_DURATION}
      useNativeDriver
      >
      {showScore ? (
        <Animatable.View
        className="justify-center bg-gray-50 rounded-2xl shadow-lg p-8 w-full"
        animation={ANIMATION}
        duration={ANIMATION_DURATION}
        useNativeDriver
        >
        <Animatable.Text
          className="text-2xl font-semibold text-gray-800 mb-4 text-center "
          animation={ANIMATION}
          duration={ANIMATION_DURATION}
          useNativeDriver
        >
        Quiz finished! You scored {score} out of {questions.length}
        </Animatable.Text>
        <Animatable.View
          animation={ANIMATION}
          duration={ANIMATION_DURATION}
          useNativeDriver
        >
          <TouchableOpacity
          className="bg-indigo-700 px-8 py-4 rounded-full shadow"
          onPress={resetQuiz}
          >
          <Text className="text-white text-lg font-semibold">Play Again</Text>
          </TouchableOpacity>
        </Animatable.View>
        </Animatable.View>
      ) : (
        <Animatable.View
        className="w-full max-w-md bg-gray-50 rounded-2xl shadow-lg p-6"
        animation={ANIMATION}
        duration={ANIMATION_DURATION}
        key={currentQuestionIndex}
        useNativeDriver
        >
        <Animatable.View
          className="mb-6 flex-row justify-between items-center"
          animation={ANIMATION}
          duration={ANIMATION_DURATION}
          useNativeDriver
        >
          <Text className="text-base text-indigo-700 font-semibold">
          Question {currentQuestionIndex + 1}
          </Text>
          <Text className="text-base text-gray-600">
          {currentQuestionIndex + 1}/{questions.length}
          </Text>
        </Animatable.View>
        <Animatable.Text
          className="text-xl font-bold text-gray-900 mb-8 text-center"
          animation={ANIMATION}
          duration={ANIMATION_DURATION}
          useNativeDriver
        >
          {questions[currentQuestionIndex].question}
        </Animatable.Text>
        <ScrollView
          className="mb-4"
          contentContainerStyle={{ paddingBottom: 8 }}
          showsVerticalScrollIndicator={false}
        >
          {questions[currentQuestionIndex].options.map((option: string, index: number) => {
          let bgColor = 'bg-gray-200';
          let borderColor = 'border-gray-400';
          let textColor = 'text-gray-900';
          if (selectedOption === option) {
            if (answerStatus === 'correct') {
            bgColor = 'bg-green-100';
            borderColor = 'border-green-500';
            textColor = 'text-green-700';
            } else if (answerStatus === 'incorrect') {
            bgColor = 'bg-red-100';
            borderColor = 'border-red-500';
            textColor = 'text-red-700';
            }
          }
          return (
            <Animatable.View
            key={index}
            animation={ANIMATION}
            duration={ANIMATION_DURATION}
            useNativeDriver
            >
            <TouchableOpacity
              className={`${bgColor} ${borderColor} p-4 rounded-xl border-2 shadow-sm my-2 items-center`}
              onPress={() => handleAnswerPress(option)}
              disabled={selectedOption !== null}
              activeOpacity={0.8}
            >
              <Text className={`text-base font-medium ${textColor}`}>{option}</Text>
            </TouchableOpacity>
            </Animatable.View>
          );
          })}
        </ScrollView>
        <Animatable.View
          className="mt-4 flex-row justify-between"
          animation={ANIMATION}
          duration={ANIMATION_DURATION}
          useNativeDriver
        >
          <Text className="text-sm text-gray-600">Score: {score}</Text>
          <Text className="text-sm text-gray-600">Remaining: {questions.length - currentQuestionIndex}</Text>
            </Animatable.View>




      </Animatable.View>      )}      
      </Animatable.View>
      </View>
    </SafeAreaView>
  );
}