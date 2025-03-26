import crusaderImg from '../assets/Coffee-Crusader.jpeg'
import enthusiastImg from '../assets/Coffee-Enthusiast.jpeg'
import loverImg from '../assets/coffee-lover.jpeg'
import noobImg from '../assets/coffee-noob.jpeg'

export const quizData = {
  questions: [
    {
      id: 1,
      question: "Where was coffee first discovered?",
      options: [
        { text: "Ethiopia", isCorrect: true },
        { text: "Brazil", isCorrect: false },
        { text: "Italy", isCorrect: false },
        { text: "Florida", isCorrect: false }
      ]
    },
    {
      id: 2,
      question: "What's the best place in the world for a coffee experience?",
      options: [
        { text: "Colombia", isCorrect: false },
        { text: "Vienna", isCorrect: true },
        { text: "Seattle", isCorrect: false },
        { text: "My Couch", isCorrect: false }
      ]
    },
    {
      id: 3,
      question: "What is the primary flavor difference between Arabica and Robusta beans?",
      options: [
        { text: "Arabica is more bitter, Robusta is sweeter.", isCorrect: false },
        { text: "Arabica is sweeter and smoother, Robusta is stronger and more bitter.", isCorrect: true },
        { text: "Arabica is fruitier, Robusta is nuttier.", isCorrect: false },
        { text: "There's no noticeable difference.", isCorrect: false }
      ]
    },
    {
      id: 4,
      question: "What country is the largest producer of coffee?",
      options: [
        { text: "Colombia", isCorrect: false },
        { text: "Brazil", isCorrect: true },
        { text: "Vietnam", isCorrect: false },
        { text: "Indonesia", isCorrect: false }
      ]
    },
    {
      id: 5,
      question: "How many cups of Sleepy Owl keep you buzzing daily?",
      options: [
        { text: "3+ (I'm powered by coffee!)", isCorrect: true },
        { text: "2 (A perfect balance.)", isCorrect: true },
        { text: "1 (Just enough to wake up.)", isCorrect: true },
        { text: "None yet (But I'm curious!)", isCorrect: true }
      ]
    }
  ],
  badges: [
    {
      name: "Coffee Noob",
      points: 5,
      discount: "10%",
      image: noobImg,
      title: "You're a Coffee Noob"
    },
    {
      name: "Coffee Lover",
      points: 10,
      discount: "10%",
      image: loverImg,
      title: "You're a Coffee Lover"
    },
    {
      name: "Coffee Enthusiast",
      points: 15,
      discount: "15%",
      image: enthusiastImg,
      title: "You're a Coffee Enthusiast"
    },
    {
      name: "Coffee Crusader",
      points: 20,
      discount: "20%",
      image: crusaderImg,
      title: "You're a Coffee Crusader"
    }
  ]
}; 