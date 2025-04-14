const $ = id => document.getElementById(id);

const simpleHash = str => {
  return Math.abs([...str].reduce((hash, char) => (hash << 5) - hash + char.charCodeAt(0), 0)) % 101;
};

const getMessage = score => {
  const messages = [
    { threshold: 100, message: "A legendary love — written in the stars!" },
    { threshold: 98, message: "Fated and flawless. You’re a love story in motion." },
    { threshold: 95, message: "True soulmates — you complete each other." },
    { threshold: 90, message: "Mad chemistry. The kind they write poems about." },
    { threshold: 85, message: "Romance level: movie montage with soft lighting." },
    { threshold: 80, message: "This is real spark energy. Don't mess it up!" },
    { threshold: 75, message: "Lovebirds! You've got potential for forever." },
    { threshold: 70, message: "Hearts are syncing. Keep the vibe alive." },
    { threshold: 65, message: "There’s love here — just add effort and Netflix." },
    { threshold: 60, message: "You click… maybe not *boom*, but definitely click." },
    { threshold: 55, message: "It’s sweet… a little awkward, but sweet." },
    { threshold: 50, message: "Halfway to heart eyes. Time to flirt it forward." },
    { threshold: 45, message: "You might fight over pizza toppings… and everything else." },
    { threshold: 40, message: "It’s giving mixed signals. Could be spicy or messy." },
    { threshold: 35, message: "Love? Maybe. Drama? Definitely." },
    { threshold: 30, message: "It might work, if Mercury isn’t in retrograde." },
    { threshold: 25, message: "Attraction? Some. Patience? You’ll need a lot." },
    { threshold: 20, message: "This one's cute, but maybe just for the short-term." },
    { threshold: 15, message: "Chemistry is... interesting. Weird, but kinda fun?" },
    { threshold: 10, message: "Eh… more platonic than passionate." },
    { threshold: 5, message: "Romantic tension: 1/10. Would not recommend." },
    { threshold: 0, message: "You sure this isn't a sibling? Just sayin'." }
  ];
  
  return messages.find(({ threshold }) => score >= threshold)?.message || "Love not found. Please try again with someone else.";
};

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

const triggerHearts = () => {
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.textContent = '❤️';
    heart.style.position = 'fixed';
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.top = '100vh';
    heart.style.fontSize = `${Math.random() * 24 + 16}px`;
    heart.style.opacity = Math.random();
    heart.style.animation = `floatUp ${2 + Math.random() * 3}s ease-out forwards`;
    document.body.appendChild(heart);
    
    setTimeout(() => heart.remove(), 5000);
  }
};

$('checkBtn').onclick = () => {
  const name1 = $('name1').value.trim();
  const name2 = $('name2').value.trim();
  
  if (!name1 || !name2) {
    $('result').textContent = "Enter both names!";
    $('message').textContent = "";
    return;
  }
  
  const combined = [name1.toLowerCase(), name2.toLowerCase()].sort().join('');
  const score = simpleHash(combined);
  
  $('result').textContent = `${capitalize(name1)} & ${capitalize(name2)} = ${score}%`;
  $('message').textContent = getMessage(score);
  
  if (score >= 90) {
    triggerHearts();
  }
};