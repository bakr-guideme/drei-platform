'use client';
import { useState } from "react";

const COLORS = {
  primary: "#29ABE2",
  navy: "#1a2e44",
  dark: "#0f1923",
  light: "#f4f7fa",
  accent: "#e8f4fd",
  gold: "#d4a843",
  text: "#2c3e50",
  muted: "#7f8c9a",
  success: "#27ae60",
  error: "#e74c3c",
  white: "#ffffff",
};

// ─── DATA ────────────────────────────────────────────────────────
const BEGINNER_LESSONS = [
  {
    id: 1, title: "Boat Setup", vimeo: "539886700",
    summary: "How to set up a boat on the water — seat pads, rigger clips, gate height, foot stretcher placement, and handle height at the finish.",
    text: "Before going out on the water, every boat must be set up to fit the athletes rowing in it. If the boat isn't comfortable, performance will suffer and technique will be harder to learn.\n\nStart by having the athletes sit at the finish with blades square and buried. The handle height should be at about heart rate strap or sternum height. If it's too high, add a seat pad underneath the athlete — foam floor tiles cut to size work well if commercial seat pads aren't available.\n\nNext, check the foot stretcher position. Have the athlete sit with their body vertical and check that the oar handles are approximately perpendicular to the boat. This gives a quick indication that the catch and finish angles will be reasonable.\n\nThen come forward to the catch and check that the shins are vertical — or slightly over vertical, which is preferable because once power is applied, the shins return to vertical. Adjust the foot stretcher height if needed.\n\nFinally, ensure there's enough room at the finish for the handles to clear the body without hitting it. Beginners in particular need this clearance as they learn the finish position.\n\nRigger clips are essential tools — half-size and full-size clips that slip onto the rigger bolt make gate height adjustments quick and easy on the water. Every coach should carry these.",
  },
  {
    id: 2, title: "The First Thing — Grip & Feathering", vimeo: "518860937",
    summary: "Why grip and feathering should be taught before anything else — relaxation, finger roll technique, lazy feather, and practice methods.",
    text: "The first thing every rower should learn is how to hold the oar correctly and how to feather it. This comes before posture, before the catch, before anything else — because if the grip is wrong, it's almost impossible to fix later.\n\nRelaxation is fundamental in a rowing boat. If you have a tight fist and a tight grip, you'll have tight shoulders, and the entire stroke suffers. Ask the athlete to clench their fist tightly, then try to relax their shoulder — they'll find it's impossible. This is why relaxed hands come first.\n\nThe correct grip: hold the oar in the fingertips when it's flat on the water, and roll it back into the fist when squaring for the stroke. The thumb stays on the end of the handle at all times. When you want to feather, just roll it out with your fingers. When it's in your fingertips, the blade is flat. When it's in your fist, the blade is square.\n\nFor beginners, use the 'lazy feather' technique — keep the blades flat on the water and just roll the oar a quarter turn into the fist at the catch. The gate will help square it up as they push. This gives a balanced platform so athletes can focus on learning without worrying about balance.\n\nI'd suggest having athletes take practice grips home — pieces of pipe or proper grip trainers — and practice the rolling motion in front of the television. It's the one technique element that must be correct from day one.",
  },
  {
    id: 3, title: "The Second Thing — Posture & Slide Control", vimeo: "518388632",
    summary: "Teaching beginners to sit tall, control their slide speed, and not over-reach at catch or finish.",
    text: "Once the athlete has grip and feathering under control, focus on posture. Most beginners lean back too far and lean forward too far — slumped at the front, slouching at the back — because they believe they need more length.\n\nThe best way for beginners to learn is to row with their bodies very upright. Sit tall at the catch, sit tall at the finish. If there's almost no body movement, that's fine when they're learning. You can teach them to use more layback and body swing later — posture changes are much easier to engineer in experienced rowers than grip changes.\n\nAt the same time, slow down the slide. Control the recovery so they're coming down the slide in no hurry. A controlled recovery combined with tall posture creates a stable platform for learning everything else.\n\nThe key sequence to practice: arms out, soft knees, pelvis rocks over (not shoulders dragging the pelvis — the pelvis pushes the shoulders), come forward to the catch, place the blades, legs push, body opens, arms draw. Make the movement as smooth as possible, reducing pause time until it becomes one fluid motion.\n\nKeep the lower back flat. It doesn't matter if the upper back has some curve — focus on the lower back being flat and supported.",
  },
  {
    id: 4, title: "Posture & Pauses", vimeo: "539886676",
    summary: "Using pause drills to establish correct posture positions and sequencing throughout the stroke.",
    text: "It's critical to get the fundamental skill of correct body positions and sequencing before trying to row seriously. If posture and sequencing aren't right, every other exercise becomes less effective.\n\nUse pause drills to break the stroke into checkpoints. At each pause, the coach can verify body position, and the athlete can feel whether they're in the right place.\n\nPause at the finish: check pelvis is vertical, elbows are out, shoulders are relaxed, handle is at the right height. Many rowers sink down at the finish — if you sit them upright, the gap between handle and body tightens naturally.\n\nPause at hands away: check the arms are fully extended, body is strong, they've flowed away cleanly. This reinforces the correct sequence off the back.\n\nPause at quarter slide: check the hips have rocked over (not just the shoulders), knees have broken softly, athlete feels comfortable and relaxed. Young boys in particular may lack hamstring flexibility — encourage them to rock over as far as they can through the pelvis.\n\nPause at three-quarter slide: the athlete glides forward feeling the boat run underneath, then from here it's simply come forward, place the blade, push.\n\nWatch the knees — particularly in sculling. If knees are tense and rocking around, it upsets the balance. They should be relaxed coming forward. If they're not, it usually means the athlete hasn't rocked over enough from the hips.",
  },
  {
    id: 5, title: "Catch & Finish", vimeo: "539886657",
    summary: "Teaching the basic catch and finish positions with blades flat on the water, core activation, and correct drive sequence.",
    text: "At this stage, keep the athletes rowing with oars flat on the water using the lazy feather technique. This gives a balanced platform so they can concentrate on what matters: the catch and the finish.\n\nFor the catch: have athletes push out against the gates with their arms and maintain weight on the foot plate as they come into the front. This creates a controlled, strong position. The critical action is to place the blade quickly and get connected — a quick movement of the legs, not the arms or shoulders.\n\nPractice the catch drill: come into the front with body rocked over, arms extended, then just push back to half slide holding everything in the same position. No shoulder lift, no arm movement — just legs. The core must be turned on solidly at the catch so that seat and handle move at the same speed. If the seat moves faster than the handle, the core isn't strong enough or isn't activated.\n\nFor the finish: pelvis vertical, sitting tall, elbows out (think 'forward' rather than 'up' to avoid lifting the shoulders). Flat wrists — not cocked up or down. Handle comes to the edge of the body, not past it. The amount of layback depends on athlete size and coach preference.\n\nThe most common beginner errors: lifting shoulders to put the blade in (should be arms only), seat shooting out at the catch (core not engaged), and slumping at the finish (pelvis not vertical).",
  },
  {
    id: 6, title: "Sculling Balance Exercises", vimeo: "534262362",
    summary: "A progressive series of balance drills — touch points, body swing, blade slaps, circles, rigger dips, standing, and the impacker count test.",
    text: "If you can improve balance, you improve confidence — and confident athletes race hard and fast instead of worrying about tipping over. These drills are basic but when combined, they make a significant difference to boat speed.\n\nThe progression: Touch points (reach to toes, V-section, bow side gate, stroke side gate). Body swing (rock the boat side to side with blades flat). Single blade slap (swing body, lift one blade, slap down). Double blade slap (both blades off the water, slap down). Circles (left over right, 20 reps each way). Rigger raises (raise and lower hands). Rigger under (pin goes under the water on each side).\n\nThen progress to standing in the boat — feet on the runners, one hand on the safety grip, stand up straight. From standing, do rigger-under exercises with thumbs over the grip ends.\n\nThe speed test: do each exercise at maximum speed for 30 seconds to test skill level.\n\nThe ultimate test is the 'impacker' balance drill: lift both blades off the water from the flat position and count 'one impacker, two impacker, three impacker' — each phrase takes about one second. See how long you can balance. Athletes progress from 6 to 20+ impackers as their confidence builds. The record to beat is 62.",
  },
  { id: 7, title: "Roll-ups & Sequence", vimeo: "539886625", summary: "Roll-up technique, two-finger roll-ups, correct feathering, and the sound of a good catch.", text: "A roll-up is a stationary exercise where the athlete practices the full recovery sequence — tap out, feather, arms away, body over, square up, come to the catch, place the blade, push. The boat doesn't move; the focus is entirely on getting the sequence and posture positions correct.\n\nHave one person balance the boat while others practice. The sequence: sit at the finish tall with elbows out, tap down with hands, feather with fingers, arms away, rock over, come to half slide (pause), square up with fingers, continue to full slide, place the blade, push.\n\nProgress to the two-finger roll-up: index finger only on each handle, creating a straight line from fingertip to elbow. This teaches three things simultaneously — you must sit tall to achieve it, it reveals how little pressure is required to control the blade off the water, and it demonstrates that relaxation produces better outcomes than gripping.\n\nListen for the sound. As the athlete approaches the catch, you should hear the blade enter the water before the slide stops moving. If there's a delay between the slide stopping and the blade going in, the athlete is pausing and then looking for load — which creates tension in the upper body. Place before push. The sound tells you everything." },
  { id: 8, title: "Balance — Oars Off the Water", vimeo: "534262358", summary: "Progressive method for getting a crew rowing with oars off the water without stress — the 'secret' bow person technique.", text: "A great way to transition from blades flat on the water to blades off the water is to use the bow person as a secret stabiliser. Have the stroke person (and middle crew members) row with oars off the water — proper feathering, tap out, square up, all above the surface. The bow person rows with oars flat on the water for stability.\n\nThen, without telling anyone, the bow person judges when the boat feels stable and does one stroke with blades off the water — then immediately back to flat. The rest of the crew doesn't know it happened. Gradually, the bow person does more strokes off the water until eventually the whole crew is rowing with blades off without the stress of 'now we're all doing it.'\n\nThe key to rowing with blades off the water: keep bodies straight up and down the centre of the boat. Don't lean in and out. Watch the head of the person in front — it should stay the same distance from you throughout the stroke. If they get closer on the recovery, you're rushing. If they get further away, you're too slow." },
  { id: 9, title: "Catch & Connection", vimeo: "539886597", summary: "Detailed analysis of catch quality — tape measurement system, place-then-push drills, and understanding seat movement at the catch.", text: "The catch is where performance comes from. A good catch makes a fast boat. A bad catch slows it down dramatically.\n\nWe use a measurement system with white tape on the gunnel (every 10cm) and tape on the seat to measure exactly how much the seat moves as the blade enters the water. A good catch shows 3-4cm of seat movement as the blade gets buried. A missed catch might show 10cm or more — that's wasted leg drive.\n\nSome seat movement is inevitable because the boat is moving forward and the blade takes a fraction of a second to get buried. The goal is to minimise additional movement beyond what's necessary.\n\nThe key drill: sit at the catch, put the blade in, and instead of pushing, just let it push you down the slide. Feel how far the seat moves — that's the minimum necessary movement. Only after the blade is fully connected should you start your leg drive.\n\nMost beginners start pushing with their legs as the blade is going in, wasting a significant portion of their leg drive. Practice 'place then push' — short drills where they place the blade quickly and push just 10cm on the slide. Separate the two movements until they understand the concept." },
  { id: 10, title: "Rhythm — Vital for Speed", vimeo: "537042328", summary: "Understanding rhythm through foot pressure, puddle speed, the relaxation-length-speed equation, and how to build rate gradually.", text: "Rhythm is how you make a boat go fast without working harder. It's the difference between power being converted to speed and power being wasted.\n\nPower on when blades are in the water, everything relaxed on the recovery. The handle should leave the body at the same speed it came in. Coming down the slide, be really controlled — particularly the last half.\n\nYou feel the boat through your feet, not your hands or seat. On the recovery, aim for the lightest pressure possible on the foot stretcher. Don't pull yourself forward with your feet. Keep the weight off the feet for as long as possible until the blade is in the water — this ensures you don't push before you're connected.\n\nA great tip from coach John Driessen: when you tap out, watch your puddle disappearing behind the boat. Try to make your handles move at the same speed as the puddle. When the puddle gets too far away to keep up with, you're at the catch — place the blade and push.\n\nThe equation: Relaxation = Length = Speed. Relaxation is the ability to feel the boat run. Length is the time created between finish and catch. Speed is the average between maximum and minimum velocity per stroke. If you can reduce the minimum velocity (by not slowing the boat down on the recovery), your average speed increases.\n\nBuild rate gradually. Get good rhythm at 18, then try 20, then 22. If rhythm disappears at a higher rate, go back down. A boat will often go faster at a lower rate with good rhythm than at a higher rate without it." },
  { id: 11, title: "Racing & Race Day", vimeo: "537042742", summary: "Race preparation, warm-up structure, race plan, mental preparation, and managing the racing experience.", text: "Race day requires preparation beyond technique. The physical skills should already be in place — race day is about executing them under pressure.\n\nWarm up thoroughly. Get the body temperature up, practice some starts, do some short pieces at race pace. Arrive at the start line feeling ready, not surprised by the effort level.\n\nHave a race plan. Know your target rate, know when you'll make moves, know how you'll respond if you're behind. A plan reduces anxiety because you know what to do at each point in the race.\n\nThe start sets the tone. Practice your racing start sequence separately so it becomes automatic. A poor start creates anxiety that affects the entire race.\n\nDuring the race, focus on your own boat. What the opposition is doing is irrelevant to your technique. Maintain your rhythm, maintain your sequence, trust the preparation.\n\nThe finish of the race is where character shows. When you're fatigued and everything hurts, the technique fundamentals you've practiced become your anchor. If you've trained with good posture, good catch, good rhythm — those patterns hold up under pressure better than technique that was never properly established." },
  { id: 12, title: "Racing Starts", vimeo: "537076641", summary: "Racing start sequence — three-quarter, half, three-quarter, then full strokes with deep blades and progressive power.", text: "A good racing start gets the boat up to speed efficiently in about eight strokes.\n\nThe sequence: first stroke at three-quarter slide, second stroke at half slide, third stroke at three-quarter, then full strokes from there. The first stroke should be powerful but controlled — don't tear at the water or lift yourself off the seat.\n\nCritically, the second stroke (half slide) should have the blade buried deeply and well connected. Because it's short, it can be fast, and deep blades give maximum purchase in the water. The third stroke returns to three-quarter with deep blades, really getting the boat moving.\n\nFor the first five strokes, keep the blade deeper than normal rowing. After that, the boat is approaching race speed and you can return to normal depth.\n\nThe transition from start rate (low to mid 40s) down to race pace (around 30) is where many crews lose speed. Gradually settle, trying to maintain boat speed as the rate comes down.\n\nPractice starts at a low rating first so athletes learn where half slide and three-quarter slide actually are — it all happens very fast at race pace. Build the rate up only once the sequence is automatic.\n\nIn a single scull, deep blades are essential for stability during the start. Shallow blades create white water, waste energy, and make the boat unstable — exactly what you don't need at the most important moment of the race." },
];

const ERGO_LESSONS = [
  { id: 101, title: "Posture on the Ergo", vimeo: null, summary: "Fundamental body positions for ergo rowing — pelvis vertical, sequencing from finish to catch, smoothing into one fluid movement.", text: "When teaching beginners to row on an ergo, focus on one thing at a time. In this lesson, it's posture — the body positions through the stroke and how they connect.\n\nSitting at the finish: pelvis vertical, not slumped. This is the foundation. From here, the sequence is: hands move away from the body (arms straighten), soften the knees (relax the legs to help the hamstrings), then the pelvis — not the shoulders — rocks the body over. The pelvis pushes the shoulders forward, not the other way around.\n\nArms should be fully extended so you're hanging off your skeletal frame, not using shoulder muscles to hold the arms in position. You should feel a small stretch across the top of the neck.\n\nHold this position all the way into the catch, coming slowly into the front. Then reverse: push back with the legs, holding the body position exactly the same until about half slide. After half slide, the body starts opening up. When the body reaches about vertical with some leg drive remaining, legs, body, and arms all finish together.\n\nTeach it as separate steps first, then ask the athlete to smooth it into one continuous movement. The goal is one fluid motion, not a series of jerky positions." },
  { id: 102, title: "The Catch on the Ergo", vimeo: null, summary: "Relaxed shoulders, legs-first drive, the wobble test, and why pulling at the catch causes injury.", text: "The catch is where most beginners go wrong on the ergo, and bad catch habits here transfer directly to the water.\n\nFirst principle: relaxation. Have the athlete extend their arm and clench their fist tightly, then try to relax their shoulder. It's impossible. A tight grip means tight shoulders, which means the catch will be driven by the upper body rather than the legs.\n\nThe drill that changes everything: have the athlete sit at the catch with correct posture (body over, arms fully extended, hanging off the frame). Hold the handle and wobble it side to side — everything should be loose. Now ask them to push against you with their legs. Push harder. You should STILL be able to wobble the handle. That's what we want: lower core locked on, everything above loose.\n\nThen let go of the handle without warning (tell them first so they're ready) and let them complete the stroke. The result is usually a beautiful catch because the upper body stayed loose while the legs did the work.\n\nThe critical error to prevent: bending the arms at the catch and using the upper body to 'grab' at the flywheel. This produces less power AND creates injury risk — particularly rib stress fractures. Watch the shoulders: if they tense up or pull back into their sockets as the athlete takes the catch, that's the problem.\n\nPractice coming in and out of the front without using arms or shoulders — just legs pushing to half slide, then returning. Repeat until the pattern is automatic." },
  { id: 103, title: "The Finish on the Ergo", vimeo: null, summary: "Correct finish position — elbows out and forward, flat wrists, vertical pelvis, shoulders down.", text: "The finish position on the ergo establishes the foundation for everything that follows in the recovery.\n\nElbows: above the handle height, held out and forward — not up. The distinction matters because asking athletes to lift their elbows often causes their shoulders to rise with them. Instead, ask them to bring their elbows forward and out. This keeps shoulders down while achieving the correct elbow position.\n\nWrists: flat. Not cocked down, not cocked up. A flat wrist through the handle creates a strong position. Demonstrate the weak position (wrist down) and the uncomfortable position (wrist up) so they understand why flat is correct.\n\nPelvis: vertical. No slumping. The pelvis stays in an upright position at the finish and maintains that position as it rocks over into the recovery. If an athlete can't keep their pelvis vertical while rocking over, they need flexibility work — particularly hamstrings. This is usually where the quickest gains can be made.\n\nShoulders: down, not up around the ears. If you see shoulder tension at the finish, the grip is probably too tight. Go back to the relaxation principles from the catch lesson.\n\nPull the elbows in close to the body — that's uncomfortable. Push them too far back — also uncomfortable. The sweet spot is elbows out and slightly forward, with the handle touching the lower ribs." },
  { id: 104, title: "Catch Connection on the Ergo", vimeo: null, summary: "Catch speed, core activation timing, quick heels, and diagnosing the seat-shooting problem.", text: "This lesson builds on the catch fundamentals to teach actual connection with the flywheel — the moment the effort transfers to movement.\n\nComing into the catch: the last half of the slide should be really controlled. Arms fully extended, posture correct, and then just before the catch — turn the core on. By core, we mean the lower core: glutes, lower abdominals, pelvic girdle. Everything switches on to create a solid connection between legs and handle.\n\nThe catch itself requires quick legs. An easy way to teach this: ask the athlete to put their heels down quickly. When they come into the catch with heels raised, the action of dropping the heels activates the leg drive immediately.\n\nThe diagnostic test: have the athlete take a slow catch — barely any connection with the flywheel. Then a quick catch — immediate connection, you can hear the chain engage. The difference is obvious and the athlete feels it instantly.\n\nThe most important thing to watch: does the seat speed match the handle speed at the catch? If the seat shoots out faster than the handle moves, the core isn't holding. Either it's not activated, or it's not strong enough. If the core can't hold the catch position, prescribe core exercises — because without a strong core, both performance and injury risk suffer.\n\nTiming: activate the core at about three-quarter slide, just before the catch, so it's fully engaged when the legs fire." },
  { id: 105, title: "Rhythm on the Ergo", vimeo: null, summary: "Smooth stroke cycle, power-on/relax ratio, building rate gradually, and the value of sliders.", text: "Rhythm transforms the ergo from a punishment machine into an efficient training tool. It's the smooth, continuous flow of the stroke — power on the drive, everything relaxed on the recovery.\n\nThe handle leaves the body at the same speed it came in. Shoulders relax, legs relax, grip relaxes. Come slowly and controlled into the front. Just before the catch, core activates, and then it's a quick catch and powerful drive.\n\nThe ratio matters: more time on the recovery than on the drive. At lower ratings this is very obvious — long, slow recovery, quick powerful drive. As the rate increases, the recovery shortens, but the principle remains the same.\n\nIf you have sliders, use them once the athlete understands the basic stroke. Sliders force smooth rowing because jerky movements cause the ergo to move unpredictably. Two or three athletes on connected sliders is even better — it demands uniformity and rhythm between athletes, simulating crew boat demands.\n\nBuild rate gradually. Get excellent rhythm at 18, then try 20, then 22. If the technique suffers at a higher rate, go back down. There's no point rowing at a higher rate if the rhythm disappears — you'll use more energy and potentially go slower.\n\nThe goal: one continuous, fluid movement. Quick catch, powerful drive, relaxed recovery. When an athlete achieves this, the ergo feels easier and the scores improve — because energy isn't being wasted on tension and jerky movements." },
];

const EXPERT_MODULES = [
  { id: 201, title: "Sequencing, Power & Rhythm", expert: "Drew Ginn", credential: "3x Olympic Gold Medallist", level: "L2 General", desc: "Drew's four-layer framework: sequence → length → power → rhythm." },
  { id: 202, title: "The Outside Hand — Elasticity", expert: "Drew Ginn", credential: "3x Olympic Gold Medallist", level: "L2 Sweep", desc: "How the outside hand leads the recovery and stores elastic energy." },
  { id: 203, title: "Rotation & Working the Rigger", expert: "Drew Ginn", credential: "3x Olympic Gold Medallist", level: "L2 Sweep", desc: "Why sweep is a rotational exercise." },
  { id: 204, title: "Breathing & Core", expert: "Drew Ginn", credential: "3x Olympic Gold Medallist", level: "L2 General", desc: "The cylinder of power — belly breathing and core stability." },
  { id: 205, title: "Blade Depth", expert: "Drew Ginn", credential: "3x Olympic Gold Medallist", level: "L3 General", desc: "More depth, more speed — challenging convention." },
  { id: 206, title: "Teaching the Catch", expert: "Anthony Edwards", credential: "5x Olympian", level: "L1 General", desc: "Practical coaching of the catch for beginners." },
  { id: 207, title: "Posture, Rock-Over & Balance", expert: "Anthony Edwards", credential: "5x Olympian", level: "L1 General", desc: "Hips vs shoulders, sitting even, parallel to the shaft." },
  { id: 208, title: "Rhythm — The 40/60 Rule", expert: "Anthony Edwards", credential: "5x Olympian", level: "L2 General", desc: "40% blade in water, 60% out. Uniformity creates rhythm." },
  { id: 209, title: "Progressive Coaching", expert: "Anthony Edwards", credential: "5x Olympian", level: "L2 General", desc: "Don't teach it all at once. Plan your season." },
  { id: 210, title: "Rigging Fundamentals", expert: "John Driessen", credential: "2x Olympic Medal Coach", level: "L2 General", desc: "Numbers, traps, and practical rigging from an Olympic coach." },
  { id: 211, title: "Coaching Boat Speed", expert: "Rhett Ayliffe", credential: "Olympic Gold Coach", level: "L3 General", desc: "Watch the boat, not just the individuals." },
  { id: 212, title: "Catch Clinic", expert: "Brett Crow & Anthony Edwards", credential: "World Champion Coach + 5x Olympian", level: "L2 General", desc: "Two expert perspectives on catch technique." },
];

const QUIZZES = {
  101: [
    { q: "An athlete rows with shoulders visibly tensing at every catch. They say 'I'm trying to get a strong catch.' What's the most likely cause?", opts: ["Insufficient leg strength", "Ergo damper too high", "Gripping the handle too tightly, causing tension through arms to shoulders — relaxed grip is the prerequisite for a relaxed catch", "Need more back strength", "Foot stretcher wrong position"], ans: 2 },
    { q: "A beginner rocks over by dropping shoulders forward while their pelvis stays still. What correction?", opts: ["Rock over further for more length", "Lead with the pelvis, not shoulders — pelvis pushes shoulders over, not shoulders dragging pelvis", "Use more arm bend", "Doesn't matter which leads", "Bend knees more"], ans: 1 },
    { q: "At what point should the body begin to open up during the drive?", opts: ["Immediately at the catch", "At quarter slide", "At about half slide — legs continue while body opens, then all finish together", "Only after legs fully straight", "Body shouldn't open at all"], ans: 2 },
    { q: "Why should knees be 'softened' before the pelvis rocks over?", opts: ["Generate more power", "Protect knees from injury", "Relaxing legs makes it easier for hamstrings to accommodate pelvic movement", "Helps with balance", "Just tradition"], ans: 2 },
    { q: "A beginner feels a stretch across the top of their neck at the catch. Problem?", opts: ["Yes — too tense", "Yes — see physiotherapist", "No — arms are fully extended, hanging off skeletal frame correctly, exactly what we want", "Depends on flexibility", "Only if it hurts"], ans: 2 },
  ],
  102: [
    { q: "You hold the handle while an athlete pushes. You can wobble it freely even though they're pushing hard. What does this tell you?", opts: ["Not pushing hard enough", "Technique is wrong", "Lower core locked on, upper body relaxed — exactly correct catch position", "Need to engage arms more", "Ergo chain loose"], ans: 2 },
    { q: "Athlete's seat consistently shoots forward faster than handle moves at the catch. Two possible causes?", opts: ["Weak legs or poor flexibility", "Damper too high or poor foot position", "Core not activated, or core not strong enough to hold catch position — body loses connection between legs and handle", "Arms too short or legs too long", "Monitor settings"], ans: 2 },
    { q: "Why does bending arms at the catch create injury risk?", opts: ["Strains wrists", "Stresses elbows", "Upper body drives the catch instead of legs, loading ribs and back in dangerous positions — particularly risking rib stress fractures", "Only reduces power not injury risk", "Affects flywheel speed"], ans: 2 },
    { q: "Beginner passes the wobble test stationary but loses relaxation when rowing. Suggestion?", opts: ["More arm strength", "Row at maximum effort", "Practice coming in and out of the front — just legs to half slide — without upper body movement until legs-first pattern is automatic", "Higher damper", "Focus on finish instead"], ans: 2 },
    { q: "When should the athlete activate their lower core?", opts: ["Throughout entire stroke", "Only at finish", "At about three-quarter slide, just before catch, so fully engaged when legs fire", "After catch is taken", "Core not necessary on ergo"], ans: 2 },
  ],
};

// ─── COMPONENTS ──────────────────────────────────────────────────

function Header({ page, setPage, user }) {
  return (
    <header style={{ background: COLORS.navy, padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64, position: "sticky", top: 0, zIndex: 100 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }} onClick={() => setPage("home")}>
        <div style={{ width: 36, height: 36, borderRadius: "50%", background: COLORS.primary, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, color: COLORS.white, fontSize: 16 }}>D</div>
        <span style={{ color: COLORS.white, fontWeight: 700, fontSize: 18, letterSpacing: 2 }}>DREI</span>
      </div>
      <nav style={{ display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap" }}>
        {[["Courses", "courses"], ["Expert Modules", "experts"], ["Progress", "progress"]].map(([label, p]) => (
          <button key={p} onClick={() => setPage(p)} style={{ background: "none", border: "none", color: page === p ? COLORS.primary : "rgba(255,255,255,0.7)", cursor: "pointer", fontSize: 14, fontWeight: page === p ? 700 : 400, padding: "4px 0", borderBottom: page === p ? `2px solid ${COLORS.primary}` : "2px solid transparent" }}>{label}</button>
        ))}
        {user ? (
          <span style={{ color: COLORS.gold, fontSize: 13, fontWeight: 600, whiteSpace: "nowrap" }}>DREI-{user.id}</span>
        ) : (
          <button onClick={() => setPage("register")} style={{ background: COLORS.primary, color: COLORS.white, border: "none", borderRadius: 6, padding: "8px 16px", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Get Your DREI</button>
        )}
      </nav>
    </header>
  );
}

function Home({ setPage }) {
  return (
    <div>
      <section style={{ background: `linear-gradient(135deg, ${COLORS.dark} 0%, ${COLORS.navy} 100%)`, padding: "80px 24px", textAlign: "center" }}>
        <h1 style={{ color: COLORS.white, fontSize: 48, fontWeight: 800, margin: 0, letterSpacing: 3 }}>DREI</h1>
        <p style={{ color: COLORS.primary, fontSize: 18, margin: "8px 0 0", fontWeight: 500 }}>Decent Rowing Education ID</p>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 15, maxWidth: 540, margin: "24px auto 0", lineHeight: 1.7 }}>Structured coaching education from Olympic champions and world-class coaches. Video lessons, written guides, and assessed quizzes — in your own time.</p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", marginTop: 40, flexWrap: "wrap" }}>
          <button onClick={() => setPage("courses")} style={{ background: COLORS.primary, color: COLORS.white, border: "none", borderRadius: 8, padding: "14px 32px", fontSize: 15, fontWeight: 600, cursor: "pointer" }}>Browse Courses</button>
          <button onClick={() => setPage("register")} style={{ background: "transparent", color: COLORS.white, border: `2px solid rgba(255,255,255,0.3)`, borderRadius: 8, padding: "14px 32px", fontSize: 15, fontWeight: 600, cursor: "pointer" }}>Get Your DREI</button>
        </div>
      </section>
      <section style={{ padding: "60px 24px", maxWidth: 880, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", color: COLORS.navy, fontSize: 26, marginBottom: 8 }}>Your Faculty</h2>
        <p style={{ textAlign: "center", color: COLORS.muted, marginBottom: 36, fontSize: 14 }}>Learn from people who've done it at the highest level</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 12 }}>
          {[["Drew Ginn", "3x Olympic Gold"], ["Anthony Edwards", "5x Olympian"], ["John Driessen", "2x Olympic Medal Coach"], ["Rhett Ayliffe", "Olympic Gold Coach"], ["Brett Crow", "World Champs Coach"], ["Lyall McCarthy", "Olympic Gold Coach"], ["Annabel Gibson", "Physio + 3x Aus Rep"], ["Joel Naukkarinen", "4x World Champion"]].map(([n, c]) => (
            <div key={n} style={{ background: COLORS.white, borderRadius: 10, padding: 16, border: `1px solid ${COLORS.accent}`, textAlign: "center" }}>
              <div style={{ width: 40, height: 40, borderRadius: "50%", background: COLORS.accent, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 8px", color: COLORS.primary, fontWeight: 700, fontSize: 16 }}>{n[0]}</div>
              <div style={{ fontWeight: 700, color: COLORS.navy, fontSize: 13 }}>{n}</div>
              <div style={{ color: COLORS.muted, fontSize: 11, marginTop: 2 }}>{c}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function Registration({ setPage, setUser }) {
  const [name, setName] = useState(""); const [email, setEmail] = useState(""); const [role, setRole] = useState("coach");
  const register = () => { if (!name || !email) return; setUser({ name, email, role, id: String(Math.floor(10000 + Math.random() * 90000)) }); setPage("progress"); };
  const s = { width: "100%", padding: "12px 16px", borderRadius: 8, border: `1px solid #dde1e6`, fontSize: 15, boxSizing: "border-box", outline: "none" };
  return (
    <div style={{ maxWidth: 420, margin: "60px auto", padding: "0 24px" }}>
      <h2 style={{ color: COLORS.navy, textAlign: "center" }}>Get Your DREI</h2>
      <p style={{ color: COLORS.muted, textAlign: "center", marginBottom: 32, fontSize: 14 }}>Your portable coaching education credential</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <input placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} style={s} />
        <input placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} style={s} />
        <select value={role} onChange={e => setRole(e.target.value)} style={{ ...s, background: COLORS.white }}><option value="coach">Coach</option><option value="rower">Rower</option><option value="both">Both</option></select>
        <button onClick={register} style={{ background: COLORS.primary, color: COLORS.white, border: "none", borderRadius: 8, padding: "14px", fontSize: 15, fontWeight: 600, cursor: "pointer", marginTop: 8 }}>Register</button>
      </div>
    </div>
  );
}

function Courses({ setPage, setCourse }) {
  return (
    <div style={{ maxWidth: 760, margin: "40px auto", padding: "0 24px" }}>
      <h2 style={{ color: COLORS.navy, fontSize: 26, marginBottom: 28 }}>Courses</h2>
      {[{ key: "beginner", title: "Beginner On-Water Course", n: 12, lv: "Level 1", d: "Complete introduction to rowing — boat setup through racing starts.", c: COLORS.primary },
        { key: "ergo", title: "Ergo Fundamentals", n: 5, lv: "Level 1", d: "Indoor rowing technique — posture, catch, finish, connection, rhythm.", c: "#2ecc71" },
        { key: "experts", title: "Expert Modules", n: EXPERT_MODULES.length, lv: "L2–L3", d: "Advanced education from Olympic champions and world-class coaches.", c: COLORS.gold }
      ].map(c => (
        <div key={c.key} onClick={() => { setCourse(c.key); setPage(c.key === "experts" ? "experts" : "course"); }} style={{ background: COLORS.white, borderRadius: 12, padding: 20, marginBottom: 12, border: `1px solid ${COLORS.accent}`, cursor: "pointer", display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 52, height: 52, borderRadius: 12, background: c.c, display: "flex", alignItems: "center", justifyContent: "center", color: COLORS.white, fontWeight: 800, fontSize: 18, flexShrink: 0 }}>{c.n}</div>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
              <span style={{ fontWeight: 700, color: COLORS.navy, fontSize: 16 }}>{c.title}</span>
              <span style={{ background: COLORS.accent, color: COLORS.primary, fontSize: 11, fontWeight: 600, padding: "2px 8px", borderRadius: 4 }}>{c.lv}</span>
            </div>
            <p style={{ margin: "4px 0 0", color: COLORS.muted, fontSize: 13 }}>{c.d}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function CourseView({ course, setPage, setLesson, completed }) {
  const lessons = course === "ergo" ? ERGO_LESSONS : BEGINNER_LESSONS;
  const title = course === "ergo" ? "Ergo Fundamentals" : "Beginner On-Water Course";
  return (
    <div style={{ maxWidth: 760, margin: "40px auto", padding: "0 24px" }}>
      <button onClick={() => setPage("courses")} style={{ background: "none", border: "none", color: COLORS.primary, cursor: "pointer", fontSize: 14, marginBottom: 12, padding: 0 }}>← Courses</button>
      <h2 style={{ color: COLORS.navy, fontSize: 24, marginBottom: 4 }}>{title}</h2>
      <p style={{ color: COLORS.muted, marginBottom: 24, fontSize: 13 }}>{lessons.length} lessons</p>
      {lessons.map((l, i) => {
        const done = completed[l.id];
        return (
          <div key={l.id} onClick={() => { setLesson(l); setPage("lesson"); }} style={{ background: COLORS.white, borderRadius: 10, padding: "14px 16px", marginBottom: 6, border: `1px solid ${done ? COLORS.success + "40" : COLORS.accent}`, cursor: "pointer", display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: done ? COLORS.success : COLORS.accent, display: "flex", alignItems: "center", justifyContent: "center", color: done ? COLORS.white : COLORS.primary, fontWeight: 700, fontSize: 13, flexShrink: 0 }}>{done ? "✓" : i + 1}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, color: COLORS.navy, fontSize: 14 }}>{l.title}</div>
              <div style={{ color: COLORS.muted, fontSize: 12, marginTop: 2 }}>{l.summary}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function LessonView({ lesson, setPage, setCourse, completed, setCompleted }) {
  const [tab, setTab] = useState("lesson");
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const quiz = QUIZZES[lesson.id];
  const isErgo = lesson.id >= 100 && lesson.id < 200;

  const submit = () => {
    setSubmitted(true);
    if (quiz) {
      const score = quiz.filter((q, i) => answers[i] === q.ans).length;
      if (score >= Math.ceil(quiz.length * 0.6)) setCompleted(p => ({ ...p, [lesson.id]: { score, total: quiz.length, date: new Date().toISOString() } }));
    } else setCompleted(p => ({ ...p, [lesson.id]: { score: 0, total: 0, date: new Date().toISOString() } }));
  };

  return (
    <div style={{ maxWidth: 760, margin: "40px auto", padding: "0 24px" }}>
      <button onClick={() => { setCourse(isErgo ? "ergo" : "beginner"); setPage("course"); }} style={{ background: "none", border: "none", color: COLORS.primary, cursor: "pointer", fontSize: 14, marginBottom: 12, padding: 0 }}>← Back</button>
      <h2 style={{ color: COLORS.navy, fontSize: 22, marginBottom: 4 }}>{lesson.title}</h2>
      <p style={{ color: COLORS.muted, fontSize: 13, marginBottom: 20 }}>{lesson.summary}</p>
      <div style={{ display: "flex", gap: 0, marginBottom: 20, borderBottom: `2px solid ${COLORS.accent}` }}>
        {["lesson", ...(lesson.vimeo ? ["video"] : []), ...(quiz ? ["quiz"] : [])].map(t => (
          <button key={t} onClick={() => setTab(t)} style={{ background: "none", border: "none", borderBottom: tab === t ? `3px solid ${COLORS.primary}` : "3px solid transparent", padding: "10px 18px", color: tab === t ? COLORS.primary : COLORS.muted, fontWeight: tab === t ? 700 : 400, cursor: "pointer", fontSize: 13, textTransform: "capitalize" }}>{t}</button>
        ))}
      </div>
      {tab === "lesson" && (
        <div style={{ background: COLORS.white, borderRadius: 12, padding: 28, border: `1px solid ${COLORS.accent}`, lineHeight: 1.8, color: COLORS.text, fontSize: 14 }}>
          {lesson.text.split("\n\n").map((p, i) => <p key={i} style={{ margin: i === 0 ? 0 : "14px 0 0" }}>{p}</p>)}
          {!quiz && !completed[lesson.id] && <button onClick={submit} style={{ background: COLORS.primary, color: COLORS.white, border: "none", borderRadius: 8, padding: "10px 20px", fontSize: 13, fontWeight: 600, cursor: "pointer", marginTop: 20 }}>Mark Complete</button>}
        </div>
      )}
      {tab === "video" && lesson.vimeo && (
        <div style={{ position: "relative", paddingBottom: "56.25%", borderRadius: 12, overflow: "hidden", background: COLORS.dark }}>
          <iframe src={`https://player.vimeo.com/video/${lesson.vimeo}?h=0&title=0&byline=0&portrait=0`} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} allow="autoplay; fullscreen" allowFullScreen />
        </div>
      )}
      {tab === "quiz" && quiz && (
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {quiz.map((q, qi) => (
            <div key={qi} style={{ background: COLORS.white, borderRadius: 10, padding: 20, border: `1px solid ${submitted ? (answers[qi] === q.ans ? COLORS.success + "60" : COLORS.error + "40") : COLORS.accent}` }}>
              <p style={{ fontWeight: 600, color: COLORS.navy, margin: 0, fontSize: 13, lineHeight: 1.6 }}>{qi + 1}. {q.q}</p>
              <div style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 4 }}>
                {q.opts.map((opt, oi) => (
                  <label key={oi} style={{ display: "flex", alignItems: "flex-start", gap: 8, padding: "6px 10px", borderRadius: 6, background: submitted ? (oi === q.ans ? COLORS.success + "15" : answers[qi] === oi ? COLORS.error + "15" : "transparent") : answers[qi] === oi ? COLORS.accent : "transparent", cursor: submitted ? "default" : "pointer", fontSize: 12, color: COLORS.text, lineHeight: 1.5 }}>
                    <input type="radio" name={`q${qi}`} checked={answers[qi] === oi} onChange={() => !submitted && setAnswers(p => ({ ...p, [qi]: oi }))} disabled={submitted} style={{ marginTop: 2 }} />
                    <span>{String.fromCharCode(65 + oi)}) {opt}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
          {!submitted ? (
            <button onClick={submit} disabled={Object.keys(answers).length < quiz.length} style={{ background: Object.keys(answers).length < quiz.length ? COLORS.muted : COLORS.primary, color: COLORS.white, border: "none", borderRadius: 8, padding: "12px", fontSize: 14, fontWeight: 600, cursor: Object.keys(answers).length < quiz.length ? "not-allowed" : "pointer" }}>Submit</button>
          ) : (
            <div style={{ background: COLORS.white, borderRadius: 10, padding: 20, textAlign: "center", border: `1px solid ${COLORS.accent}` }}>
              <div style={{ fontSize: 28, fontWeight: 800, color: quiz.filter((q, i) => answers[i] === q.ans).length >= Math.ceil(quiz.length * 0.6) ? COLORS.success : COLORS.error }}>{quiz.filter((q, i) => answers[i] === q.ans).length}/{quiz.length}</div>
              <p style={{ color: COLORS.muted, marginTop: 4, fontSize: 13 }}>{quiz.filter((q, i) => answers[i] === q.ans).length >= Math.ceil(quiz.length * 0.6) ? "Passed! Module completed." : "Review the lesson and try again."}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function ExpertModules({ setPage }) {
  return (
    <div style={{ maxWidth: 760, margin: "40px auto", padding: "0 24px" }}>
      <button onClick={() => setPage("courses")} style={{ background: "none", border: "none", color: COLORS.primary, cursor: "pointer", fontSize: 14, marginBottom: 12, padding: 0 }}>← Courses</button>
      <h2 style={{ color: COLORS.navy, fontSize: 24, marginBottom: 24 }}>Expert Modules</h2>
      {EXPERT_MODULES.map(m => (
        <div key={m.id} style={{ background: COLORS.white, borderRadius: 10, padding: 16, marginBottom: 8, border: `1px solid ${COLORS.accent}`, display: "flex", alignItems: "flex-start", gap: 14 }}>
          <div style={{ width: 40, height: 40, borderRadius: "50%", background: COLORS.navy, display: "flex", alignItems: "center", justifyContent: "center", color: COLORS.gold, fontWeight: 700, fontSize: 14, flexShrink: 0 }}>{m.expert.split(" ").map(w => w[0]).join("")}</div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
              <span style={{ fontWeight: 700, color: COLORS.navy, fontSize: 14 }}>{m.title}</span>
              <span style={{ background: COLORS.accent, color: COLORS.primary, fontSize: 10, fontWeight: 600, padding: "2px 6px", borderRadius: 4 }}>{m.level}</span>
            </div>
            <div style={{ color: COLORS.gold, fontSize: 11, fontWeight: 600, marginTop: 2 }}>{m.expert} — {m.credential}</div>
            <p style={{ color: COLORS.muted, fontSize: 12, margin: "4px 0 0" }}>{m.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function Progress({ user, completed }) {
  const bd = BEGINNER_LESSONS.filter(l => completed[l.id]).length;
  const ed = ERGO_LESSONS.filter(l => completed[l.id]).length;
  const Bar = ({ done, total, color }) => (<div style={{ height: 6, borderRadius: 3, background: "#e8ecf1", overflow: "hidden" }}><div style={{ height: "100%", borderRadius: 3, background: color, width: `${total > 0 ? (done / total) * 100 : 0}%` }} /></div>);
  return (
    <div style={{ maxWidth: 560, margin: "40px auto", padding: "0 24px" }}>
      {user && (
        <div style={{ background: `linear-gradient(135deg, ${COLORS.navy}, ${COLORS.dark})`, borderRadius: 16, padding: 28, textAlign: "center", marginBottom: 28 }}>
          <div style={{ width: 56, height: 56, borderRadius: "50%", background: COLORS.primary, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px", fontSize: 22, fontWeight: 800, color: COLORS.white }}>{user.name[0]}</div>
          <h2 style={{ color: COLORS.white, margin: 0, fontSize: 20 }}>{user.name}</h2>
          <p style={{ color: COLORS.gold, fontWeight: 700, fontSize: 16, margin: "6px 0 0", letterSpacing: 2 }}>DREI-{user.id}</p>
        </div>
      )}
      {[["Beginner On-Water", bd, BEGINNER_LESSONS.length, COLORS.primary], ["Ergo Fundamentals", ed, ERGO_LESSONS.length, "#2ecc71"], ["Expert Modules", 0, EXPERT_MODULES.length, COLORS.gold]].map(([t, d, n, c]) => (
        <div key={t} style={{ background: COLORS.white, borderRadius: 10, padding: 18, border: `1px solid ${COLORS.accent}`, marginBottom: 10 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}><span style={{ fontWeight: 600, color: COLORS.navy, fontSize: 14 }}>{t}</span><span style={{ color: COLORS.muted, fontSize: 12 }}>{d}/{n}</span></div>
          <Bar done={d} total={n} color={c} />
        </div>
      ))}
    </div>
  );
}

export default function DreiApp() {
  const [page, setPage] = useState("home");
  const [user, setUser] = useState(null);
  const [course, setCourse] = useState("beginner");
  const [lesson, setLesson] = useState(null);
  const [completed, setCompleted] = useState({});

  return (
    <div style={{ minHeight: "100vh", background: COLORS.light, fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      <Header page={page} setPage={setPage} user={user} />
      {page === "home" && <Home setPage={setPage} />}
      {page === "register" && <Registration setPage={setPage} setUser={setUser} />}
      {page === "courses" && <Courses setPage={setPage} setCourse={setCourse} />}
      {page === "course" && <CourseView course={course} setPage={setPage} setLesson={setLesson} completed={completed} />}
      {page === "lesson" && lesson && <LessonView lesson={lesson} setPage={setPage} setCourse={setCourse} completed={completed} setCompleted={setCompleted} />}
      {page === "experts" && <ExpertModules setPage={setPage} />}
      {page === "progress" && <Progress user={user} completed={completed} />}
    </div>
  );
}
