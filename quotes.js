(function(){
  const quotes=[
    {q:"Quality is not an act, it is a habit.", a:"Aristotle"},
    {q:"Programs must be written for people to read.", a:"Harold Abelson"},
    {q:"First, solve the problem. Then, write the code.", a:"John Johnson"},
    {q:"Simplicity is the soul of efficiency.", a:"Austin Freeman"},
    {q:"Any fool can write code that a computer can understand.", a:"Martin Fowler"},
    {q:"Controlling complexity is the essence of computer programming.", a:"Brian Kernighan"},
    {q:"Before software can be reusable it first has to be usable.", a:"Ralph Johnson"},
    {q:"Talk is cheap. Show me the code.", a:"Linus Torvalds"},
    {q:"Make it work, make it right, make it fast.", a:"Kent Beck"},
    {q:"Testing shows the presence, not the absence of bugs.", a:"Edsger Dijkstra"}
  ];
  const quoteEl=document.getElementById('quote');
  const authorEl=document.getElementById('author');
  const btn=document.getElementById('btn');
  function showRandom(){
    const {q,a}=quotes[Math.floor(Math.random()*quotes.length)];
    quoteEl.textContent = "“"+q+"”";
    authorEl.textContent = "— "+a;
  }
  btn.addEventListener('click', showRandom);
  showRandom();
})();