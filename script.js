/* ============ EDIT YOUR STORY HERE ============ */
const couple = { name: "Charles", partnerName: "Amanda (Obi m)", relationshipStartDate: "2025-10-30" };
const hero = {
title: "Us, Always and Forever ❤️",
description: "Every love story is beautiful, but ours is my favourite. A collection of our favourite moments, unforgettable memories, and the little things that make us, us.",
moreInfo: "Write a longer message about your relationship here."
};
const anniversaryMessage = "Another year, and I would still choose you every time.";
const surpriseMessage = "Happy anniversary, my love. Write your hidden message here.";
const storyVideo = { title: "Our Story", video: "assets/videos/our-story.mp4", img: "assets/images/hero-poster.jpg",
text: "Press play and watch our story.", final: "And the best part? We are still writing it." };
// Fields: title, date, text, img (poster/photo), video (optional)
const rows = [
{ id: "memories", title: "Because It's You ❤️", items: [
{ title: "The Day We Met", date: "2023-10-25", img: "assets/images/memory-01.jpg", text: "Our memory message here." },
{ title: "My Favourite Smile", date: "", img: "assets/images/memory-02.jpg", text: "Our memory message here." },
{ title: "Our First Picture", date: "", img: "assets/images/memory-03.jpg", text: "Our memory message here." },
{ title: "Just You and Me", date: "", img: "assets/images/memory-04.jpg", text: "Our memory message here." },
{ title: "My Safe Place", date: "", img: "assets/images/memory-05.jpg", text: "Our memory message here." } ] },
{ id: "episodes", title: "Our Favourite Episodes", items: [
{ title: "Episode 1: How It Started", img: "assets/images/episode-01.jpg", video: "assets/videos/episode-01.mp4", text: "Describe this moment." },
{ title: "Episode 2: Falling for You", img: "assets/images/episode-02.jpg", video: "assets/videos/episode-02.mp4", text: "Describe this moment." },
{ title: "Episode 3: The Little Things", img: "assets/images/episode-03.jpg", video: "assets/videos/episode-03.mp4", text: "Describe this moment." } ] },
{ id: "reasons", title: "A Thousand Little Reasons", items: [
{ title: "Your Smile", text: "Why I love your smile." }, { title: "Your Heart", text: "Why I love your heart." },
{ title: "The Way You Laugh", text: "Why I love your laugh." }, { title: "How You Understand Me", text: "Your message here." },
{ title: "The Peace You Give Me", text: "Your message here." }, { title: "Simply Being You", text: "Your message here." } ] },
{ id: "journey", title: "Our Journey So Far", items: [
{ title: "When We First Met", date: "2023-10-25", img: "assets/images/journey-01.jpg", text: "The full memory." },
{ title: "Our First Date", date: "", img: "assets/images/journey-02.jpg", text: "The full memory." },
{ title: "When We Became Official", date: "", img: "assets/images/journey-03.jpg", text: "The full memory." },
{ title: "Today: Another Year of Us", date: "", img: "assets/images/journey-04.jpg", text: "The full memory." } ] },
{ id: "candid", title: "Just the Two of Us", items: [
{ title: "Silly Selfie", img: "assets/images/candid-01.jpg", text: "A funny memory." },
{ title: "Random Tuesday", img: "assets/images/candid-02.jpg", text: "A funny memory." },
{ title: "Caught on Camera", img: "assets/images/candid-03.jpg", video: "assets/videos/candid-01.mp4", text: "A funny memory." } ] },
{ id: "letters", title: "Messages I Never Want You to Forget", items: [
{ title: "Read This When You Miss Me", text: "Dear love,\n\nYour letter here.\n\nForever yours" },
{ title: "On the Days You Feel Unloved", text: "Your letter here." },
{ title: "A Letter for Our Anniversary", text: "Your letter here." },
{ title: "If I Could Choose Again", text: "Your letter here." } ] }
];
/* ============ APP CODE ============ */
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
if (e.key === "Escape") closeModal(); if (list.length > 1) { if (e.key === "ArrowLeft") step(-1); if (e.key === "ArrowRight") step(1); }
});
$("play").onclick = () => openModal([storyVideo], 0);
$("info").onclick = () => openModal([{ title: hero.title, text: hero.moreInfo }], 0);

// Anniversary counter, countdown and surprise
function tick() {
const s = new Date(couple.relationshipStartDate + "T00:00"), n = new Date();
let y = n.getFullYear() - s.getFullYear(), m = n.getMonth() - s.getMonth(), d = n.getDate() - s.getDate();
if (d < 0) { m--; d += new Date(n.getFullYear(), n.getMonth(), 0).getDate(); } if (m < 0) { y--; m += 12; }
$("since").textContent = "Together since " + fmt(couple.relationshipStartDate);
$("count").textContent = `${y} years, ${m} months, ${d} days`;
const t = new Date(n.getFullYear(), n.getMonth(), n.getDate()); let nx = new Date(n.getFullYear(), s.getMonth(), s.getDate());
if (nx < t) nx.setFullYear(nx.getFullYear() + 1);
const left = Math.round((nx - t) / 864e5);
$("next").textContent = left === 0 ? "Happy Anniversary! Today is our day ❤️" : `${left} days until our next anniversary`;
}
tick(); setInterval(tick, 36e5);
$("surprise").onclick = () => {
openModal([{ title: "Your Surprise ❤️", text: surpriseMessage }], 0);
if (matchMedia("(prefers-reduced-motion:reduce)").matches) return;
for (let i = 0; i < 25; i++) { const h = document.createElement("span"); h.className = "fall"; h.textContent = "♥";
h.style.cssText = `left:${Math.random() * 100}vw;font-size:${14 + Math.random() * 22}px;animation-delay:${Math.random() * 1.5}s`;
document.body.append(h); setTimeout(() => h.remove(), 5000); }
};

// Nav
const nav = $("nav"); const onScroll = () => nav.classList.toggle("solid", scrollY > 40); onScroll(); addEventListener("scroll", onScroll, { passive: true });
$("menuBtn").onclick = () => { const o = $("links").classList.toggle("open"); $("menuBtn").setAttribute("aria-expanded", o); };
$("links").onclick = () => $("links").classList.remove("open");
// Hero video fallback: poster stays visible if autoplay is blocked
$("heroVid").play?.().catch(() => {});
