/* ============ EDIT YOUR STORY HERE ============ */
// Long texts use `backticks` so quotes inside them never break the code.
const couple = { name: "Charles", partnerName: "Amanda (Obi m)", relationshipStartDate: "2025-10-30" };
const hero = {
  title: "Us, Always and Forever ❤️",
  description: `Every love story is beautiful, but ours is my favourite. A collection of our favourite moments, unforgettable memories, and the little things that make us, us.`,
  moreInfo: `I wanted to do something thoughtful this anniversary, something you could look at and smile, something that would remind you of how much you mean to me and how grateful I am that we found each other. So, instead of just writing you a letter, I decided to put my little brain to work and create something that holds pieces of our story, our memories, my feelings, and all the little things that make loving you so special. 🥹💋

Now, my love, I have one VERY IMPORTANT assignment for you. 😌☝🏽❤️ PLEASE SCROLL ALL THE WAY TO THE BOTTOM AND CLICK ON EVERY SINGLE BUTTON AND IMAGE YOU SEE!!! 😭😂❤️ Yes, baby, EVERY. SINGLE. ONE. Don't be lazy ooo. 😭😂 Don't just look at the first page and say, "Awww, this is cute," then disappear. NO, MY LOVE! I WILL KNOW😭😂💕 I put love, time, thought, and effort into this, and there are little surprises waiting for you, so explore everythingggg! 🥹💗 Open the memories, read the letters, press the buttons, and don't leave any corner unexplored. 👀💌

Some things might make you smile, some might make you laugh, and some might make you want to come and hug me immediately. 🥹🫂❤️ And if you happen to tear up a little, just know that I will gladly accept all the cuddles and kisses that come with it. 🤭💋 I may not be the best website developer in the world 😂😭, but I hope you can see the love behind every little detail. I made this because YOU are worth the effort, OUR love is worth celebrating, and our memories deserve something special. ❤️

So take your sweet time, it's not long but it took weeks baby. Read everything, click everything. Imagine me sitting beside you, smiling like an idiot while you scroll. 😭❤️😂 Happy anniversary to us, my baby! 🥹💕 Thank you for being part of my life, for giving me beautiful memories, and for being someone I can love this much😭😂💋❤️ I LOVE YOU SOOOOO MUCH, MY OBI M. 🥹❤️♾️`
};
const anniversaryMessage = `Another year, and I would still choose you every time.`;
const surpriseMessage = `To My Precious Love, ❤️

My love, I want you to know something, and I hope you never forget it: you will always have a special place in my heart, and I will always make you a priority in my life.

You are not someone I want to love only when it's convenient. You are someone I want to make time for, someone whose feelings I want to understand, and someone whose heart I never want to take for granted.

I want to show you my love through consistency, honesty, loyalty, respect, and effort. I want you to feel loved not only when I say "I love you," but also through the way I treat you.

You will always come first in my heart when it comes to the love we share. I want my actions to show you that you matter to me, that your happiness matters to me, and that our relationship is something I will always cherish.

I want to keep choosing you through the exciting days and the difficult ones. I want to celebrate your victories, encourage your dreams, comfort you through disappointments, and grow alongside you.

You are my priority, my favorite person, and the love I want to keep nurturing.

You don't have to wonder whether you matter to me. I want to spend every day giving you reasons to know that you do. ❤️

Forever yours,
The One Who Will Keep Choosing You. 💋❤️`;
const storyVideo = { title: "Our Story", video: "assets/videos/our-story.mp4", img: "assets/images/hero-poster.jpg",
  text: `Press play and watch our story.`, final: `And the best part? We are still writing it.` };
// Fields: title, date, text, img (photo), video (optional)
const rows = [
  { id: "memories", title: "Because It's You ❤️", items: [
    { title: "First Picture Together", date: "2025-08-20", img: "assets/images/memory-01.jpg", text: `You just couldn't stay stilll. Awkward but cute` },
    { title: "My Favourite Smile", date: "2025-11-15", img: "assets/images/memory-02.jpg", text: `My Induction shoot. Glad you were there with me` },
    { title: "Our First Date", date: "2026-01-09", img: "assets/images/memory-03.jpg", text: `Finally we went out!!!` },
    { title: "Just You and Me", date: "2026-01-09", img: "assets/images/memory-04.jpg", text: `Was really wishing the movie doesn't end` },
    { title: "My Safe Place", date: "2026-02-14", img: "assets/images/memory-05.PNG", text: `Not the clearest picture but a vital memory. I'm glad we were at each other's shoot` } ] },
  { id: "letters", title: "Messages I Never Want You to Forget", items: [
    { title: "Read This When You Miss Me", text: `Dear love,

If you're reading this, I wish I could be right there beside you, holding you close, kissing your forehead and reminding you that you never have to face this world alone. I know there will be moments when you miss me so much that a simple text or phone call doesn't feel like enough. I wish I could reach through my screen and wrap my arms around you. I wish I could make time pause for a little while just so I could stay in your embrace a little longer.

But until we can be together physically, I want you to remember that distance can separate our bodies, but it can never erase what you mean to me. You are in my thoughts when I wake up, in my smile when something reminds me of you and in my heart even during the busiest parts of my day in clinic. Most times i sit and imagine what it would feel like to have you beside me doing absolutely nothing together because even the simplest moments feel special when they're shared with you.

I miss your presence, your voice, your smile, and all those little things (esp dances) you probably don't even realize I love about you. I miss the feeling of knowing you're close enough to touch. So my love, whenever you miss me, close your eyes for a moment and imagine me holding you. Imagine me whispering that I love you, that I'm grateful for you and that no matter how far apart we may be, you have a home in my heart.

Until I can hold you again, please take care of the heart that I love so much. I miss you obi m and I love you more than these words could ever explain.

Forever yours,
Your Love ❤️` },
    { title: "On the Days You Feel Unloved", text: `If today is one of those days when you feel like you're not enough, when you question your worth or wonder whether you're truly loved. I need you to stop for a moment and read these words slowly. You are loved. You are wanted. You are appreciated. And you mean more to me than you may sometimes realize.

I know I won't always find the perfect words to express my feelings. There may be days when I'm distracted, when life gets overwhelming, or when I fail to show you the affection you deserve. But I never want my imperfect moments to make you question the place you hold in my heart.

You don't have to be perfect for me to love you. You don't have to be happy every day, have everything figured out yet or pretend to be strong when you're tired. You can have bad days. You can cry. You can feel overwhelmed. You can tell me when something hurts you. You can be yourself with me.

I love the beautiful parts of you but I also want to understand the parts you struggle to show the world. I want to know what makes you anxious, what makes you feel safe, what breaks your heart, and what brings that genuine smile to your face. You are not difficult to love simply because you have feelings. You are not a burden because you need reassurance. And you never have to earn my affection by being useful, cheerful, or flawless.

I want to keep learning how to love you better because you deserve a love that makes you feel seen, respected and secure. So on the days when your mind tells you that you're not enough, let me remind you that you are a person worth loving deeply. And on the days when my actions don't make you feel that love clearly enough, I hope you'll tell me so we can find our way back to each other.

You are not just someone I love when everything is easy. You are someone I want to keep choosing, understanding and growing with. Please never forget how precious you are to me obi m.

With all my heart,
The One Who Loves You ❤️` },
    { title: "A Letter for Our Anniversary", text: `My Sweetest Love,

Happy anniversary to us, my BBB. ❤️ Today isn't just a celebration of the time we've spent together. It's a celebration of every little moment that brought us here, every memory we've created, every challenge we've faced, every laugh we've shared and every reason I've found to love you more.

When I think about us, I smile at the little things. The conversations that made me lose track of time, the moments when you made an ordinary day feel special, the times your words comforted me, and the memories that I wish I could relive a thousand times. You have become such a beautiful part of my life. You are the person I want to share my good news with, the one I want beside me when life feels difficult, and the one whose happiness matters deeply to me.

Loving you has taught me that romance isn't only about grand gestures or beautiful words. Sometimes, it's about checking on each other after a long day. It's about listening when one of us needs to talk, apologizing when we're wrong, making room for each other's feelings, and choosing kindness even when things aren't perfect.

I know our story won't always be made of effortless days. We may disagree sometimes, misunderstand each other, or face challenges we never expected. But my hope is that we never stop trying to understand each other, never stop making each other feel valued, and never forget why we began this journey together.

If I could give you one thing for our anniversary, it would be the ability to see yourself through my eyes. You would understand why your smile means so much to me, why your happiness makes me happy, and why having you in my life is something I will never take for granted.

Thank you for being part of my story. Thank you for the memories we've made and the love we've shared. And thank you for giving me someone wonderful to look forward to tomorrow with. I don't know every detail of what the future holds, but I know what I hope for: more memories, more laughter, more honest conversations, more adventures, more hugs, more kisses, and more anniversaries with you.

If our love story were a book, I wouldn't want it to end here. I would want a thousand more chapters, with you beside me in every single one. Happy anniversary, my love. Today, tomorrow, and through all the seasons of life, I hope we keep finding our way to each other.

All my love,
Your Forever Person ❤️💍` },
    { title: "If I Could Choose Again", text: `My Love,

If life gave me the chance to go back to the beginning, knowing everything I know today, I would still choose you. I would choose you knowing that love isn't always easy. I would choose you knowing that there may be misunderstandings, difficult conversations, moments of doubt, and days when we have to work a little harder to understand each other. I would choose you not because I believe we would be perfect, but because what we share is worth nurturing, protecting, and growing.

If I could start again, I would still want to hear your voice for the first time. I would still want to discover the little things that make you who you are. I would still want to experience those moments when my heart feels lighter simply because you're around. I would choose your laughter, your warmth, your unique way of seeing the world, and all the little things that make you different from everyone else. I would choose the memories we've made, even the ones that taught us difficult lessons, because they have helped shape the story we share today.

And if I could change anything, it would be the moments when I made you doubt how much you mean to me. I would hold you a little longer, listen a little more carefully, speak a little more gently, and remind you more often that you are loved. I wouldn't promise you a life without problems, because I can't control everything life may bring our way. But I would promise to keep showing up, to be honest with you, to respect your heart, and to keep learning how to love you in ways that make you feel safe and appreciated.

You are not just a choice I made once. You are someone I want to keep choosing as we grow, change, and discover new versions of ourselves. And if there were a thousand different lives, a thousand different beginnings, and a thousand different chances to fall in love, my heart would still hope to find its way to you. Because out of all the people I could meet, all the stories I could live, and all the paths I could follow, I am grateful that my path crossed yours.

So, if you ever wonder whether I would choose you again, let this letter be your answer. Yes, my love. Today, tomorrow, and whenever life gives me the choice, I would choose you again. Not because you're the only person in the world, but because you're the person with whom I want to keep building something beautiful. You were a beautiful choice then, you are a precious choice now, and I hope you will be my choice for many years to come.

Forever choosing you,
Your Love, Always ❤️` } ] }
];
/* ============ APP CODE (no need to edit below) ============ */
const $ = id => document.getElementById(id);
$("hTitle").textContent = hero.title; $("hDesc").textContent = hero.description;
$("aMsg").textContent = anniversaryMessage;
const fmt = d => d ? new Date(d + "T00:00").toLocaleDateString(undefined, { dateStyle: "long" }) : "";
let list = [], idx = 0;

rows.forEach(r => {
  const s = document.createElement("section"); s.id = r.id; s.className = "row";
  s.innerHTML = `<h2>${r.title}</h2><div class="wrap"><button class="ar l" aria-label="Scroll left">‹</button><div class="sc"></div><button class="ar r" aria-label="Scroll right">›</button></div>`;
  const sc = s.querySelector(".sc");
  r.items.forEach((it, i) => {
    const b = document.createElement("button"); b.className = "card" + (it.img ? "" : " txt");
    b.innerHTML = (it.img ? `<img loading="lazy" src="${it.img}" alt="">` : "") + (it.video ? '<i class="pl">▶</i>' : "") + `<span>${it.title}</span>`;
    const im = b.querySelector("img"); if (im) im.onerror = () => im.remove();
    b.onclick = () => openModal(r.items, i); sc.append(b);
  });
  s.querySelector(".l").onclick = () => sc.scrollBy({ left: -sc.clientWidth * .8, behavior: "smooth" });
  s.querySelector(".r").onclick = () => sc.scrollBy({ left: sc.clientWidth * .8, behavior: "smooth" });
  $("rows").append(s);
});

function show() {
  const it = list[idx], m = $("media"); m.innerHTML = "";
  let el = null;
  if (it.video) { el = document.createElement("video"); el.controls = true; el.playsInline = true; el.preload = "none"; if (it.img) el.poster = it.img; el.src = it.video;
    el.onended = () => { if (it.final) $("mText").textContent = it.final; }; }
  else if (it.img) { el = document.createElement("img"); el.src = it.img; el.alt = it.title; }
  if (el) { el.onerror = () => { const p = document.createElement("div"); p.className = "fb"; p.textContent = "This media isn't available yet."; el.replaceWith(p); }; m.append(el); }
  $("mTitle").textContent = it.title; $("mDate").textContent = fmt(it.date); $("mText").textContent = it.text || "";
  $("prev").hidden = $("nextBtn").hidden = list.length < 2;
}
function openModal(l, i) { list = l; idx = i; show(); $("modal").hidden = false; document.body.style.overflow = "hidden"; $("close").focus(); }
function closeModal() { $("media").innerHTML = ""; $("modal").hidden = true; document.body.style.overflow = ""; }
function step(n) { idx = (idx + n + list.length) % list.length; show(); }
$("close").onclick = closeModal; $("prev").onclick = () => step(-1); $("nextBtn").onclick = () => step(1);
$("modal").onclick = e => { if (e.target === $("modal")) closeModal(); };
document.addEventListener("keydown", e => {
  if ($("modal").hidden) return;
  if (e.key === "Escape") closeModal();
  if (list.length > 1) { if (e.key === "ArrowLeft") step(-1); if (e.key === "ArrowRight") step(1); }
});
$("play").onclick = () => openModal([storyVideo], 0);
$("info").onclick = () => openModal([{ title: hero.title, text: hero.moreInfo }], 0);

// Anniversary counter, countdown and surprise
const u = (n, w) => `${n} ${w}${n === 1 ? "" : "s"}`;
function tick() {
  const s = new Date(couple.relationshipStartDate + "T00:00"), n = new Date();
  let y = n.getFullYear() - s.getFullYear(), m = n.getMonth() - s.getMonth(), d = n.getDate() - s.getDate();
  if (d < 0) { m--; d += new Date(n.getFullYear(), n.getMonth(), 0).getDate(); } if (m < 0) { y--; m += 12; }
  $("since").textContent = "Together since " + fmt(couple.relationshipStartDate);
  $("count").textContent = `${u(y, "year")}, ${u(m, "month")}, ${u(d, "day")}`;
  const t = new Date(n.getFullYear(), n.getMonth(), n.getDate()); let nx = new Date(n.getFullYear(), s.getMonth(), s.getDate());
  if (nx < t) nx.setFullYear(nx.getFullYear() + 1);
  const left = Math.round((nx - t) / 864e5);
  $("next").textContent = left === 0 ? "Happy Anniversary! Today is our day ❤️" : `${u(left, "day")} until our next anniversary`;
}
tick(); setInterval(tick, 36e5);
$("surprise").onclick = () => {
  openModal([{ title: "Your Surprise ❤️", text: surpriseMessage }], 0);
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  for (let i = 0; i < 25; i++) {
    const h = document.createElement("span"); h.className = "fall"; h.textContent = "♥";
    h.style.cssText = `left:${Math.random() * 100}vw;font-size:${14 + Math.random() * 22}px;animation-delay:${Math.random() * 1.5}s`;
    document.body.append(h); setTimeout(() => h.remove(), 5000);
  }
};

// Nav
const nav = $("nav"); const onScroll = () => nav.classList.toggle("solid", scrollY > 40); onScroll(); addEventListener("scroll", onScroll, { passive: true });
$("menuBtn").onclick = () => { const o = $("links").classList.toggle("open"); $("menuBtn").setAttribute("aria-expanded", o); };
$("links").onclick = () => $("links").classList.remove("open");
$("heroVid").play?.().catch(() => {});
