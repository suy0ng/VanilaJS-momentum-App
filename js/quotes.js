const quotes = [
  {
    quote: "매분 매초 인생을 바꿀 수 있는 기회가 있어",
    author: "덤보",
  },
  {
    quote: "준비된 사람을 이길 사람은 없다",
    author: "하성운",
  },
  {
    quote: "핑계는 만 개 결과는 한 개",
    author: "한요한",
  },
  {
    quote: "백만 가지 사실을 머릿속에 집어넣고도 여전히 완전히 무지할 수 있다",
    author: "알렉 본",
  },
  {
    quote: "필 땐 장미꽃처럼 흩날릴 땐 벚꽃처럼",
    author: "BTS Magic shop",
  },
  {
    quote: "신발 끈은 원래 다 풀어지는 거야 얼마나 자주 묶는지가 중요한 거지",
    author: "",
  },
  {
    quote: "행동의 가치는 그 행동을 끝까지 이루는 데 있다",
    author: "칭기즈 칸",
  },
  {
    quote: "원하는 걸 바로 얻을 수 있으면 살아가는 이유가 뭐야?",
    author: "핀과 제이크의 어드벤처 타임",
  },
  {
    quote: "아직도 많은 것이 가능하다",
    author: "언어의 온도",
  },
  {
    quote: "오늘을 후회하며 보내기에는 너의 내일이 너무 값지단다",
    author: "윤글",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
