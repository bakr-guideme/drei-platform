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
  { id: 201, title: "Sequencing, Power & Rhythm", expert: "Drew Ginn", credential: "3x Olympic Gold Medallist", level: "L2 General", desc: "Drew's four-layer framework: sequence → length → power → rhythm.",
    videos: [
      { vimeo: "1129752172", title: "D1: Sequencing in Sweep", desc: "Drew introduces his four-layer framework — sequence as the foundation of everything." },
      { vimeo: "1129753466", title: "D2: Power Sequencing & Relaxation", desc: "Adding power while maintaining relaxation — why the big muscles do the work and the small muscles just connect." },
      { vimeo: "1129755085", title: "D3: Sequencing & Rhythm", desc: "How rhythm extends from sequence, and why hand speed off the finish determines recovery speed." },
    ],
    text: "Drew Ginn distils his approach to rowing into four progressive layers: sequence, length, power, and rhythm. Each layer builds upon and depends on the one before it. Don't progress to the next layer until the current one is solid.\n\nSequence comes first. Arms away, body over, up the slide — but not robotic. Drew emphasises that every movement must blend into the next. He describes 'Tai Chi rowing' — flowing through movements without tension — as the way to find the correct sequence. If you separate the movements to teach them, always let them flow again afterwards.\n\nLength is the second layer. Drew references the 1996 Olympic four where everything was about how long you could row in the boat, 'almost as if we were turning ourselves inside out.' Full extension at the catch, shins just over vertical, shoulders down and loose.\n\nPower comes third, and critically, it must arrive with relaxation. As Drew puts it: 'As we bring the power on, we bring the relaxation at the same time.' Nick Green's test from the Awesome Foursome: if your legs are burning, you're doing it right. If your forearms and upper body are fatiguing, you're producing power in the wrong place. The big muscles — legs, glutes, hips, core — do the work. The small muscles just connect.\n\nRhythm is the final layer, and it depends on having boat speed first. 'If you don't have boat speed, you can't play around with rhythm.' The speed of the hands away determines the speed you can flow forward. James Tompkins never rushed off the back — the hands would move with the speed of the boat, and the recovery became about letting the boat travel under you rather than going to the catch." },
  { id: 202, title: "The Outside Hand — Elasticity", expert: "Drew Ginn", credential: "3x Olympic Gold Medallist", level: "L2 Sweep", desc: "How the outside hand leads the recovery and stores elastic energy.",
    videos: [
      { vimeo: "1129759084", title: "D7: Outside Hand Leads to the Catch", desc: "Why the outside hand must lead the entire recovery — feeling the blend rather than painting by numbers." },
      { vimeo: "1129760965", title: "D8: Lead the Body with the Outside Hand", desc: "The elastic band from outside hand to inside hip — storing energy for power production through rotation." },
    ],
    text: "In sweep rowing, the outside hand doesn't just lead the recovery — it creates the elastic energy that powers the drive. Drew describes a continuous stretching movement where the outside hand leads the body from the inside hip all the way to the catch, creating 'a long line of elastic band.'\n\nThe intent: as the hands go away, the outside hand draws the shoulder forward. The shoulder starts to bring the hips through. Then naturally, the legs find their movement. This isn't mechanical — it's feeling the blend and flow.\n\nDrew draws parallels with golf and tennis: 'Imagine a golf swing where the golfer says I'll just do this with my arms — we know that doesn't hit the ball very far. Rowing is the same.' Sweep rowing is a rotation exercise. The power comes from unwinding the stored rotation, not from muscular contraction.\n\nThe drill: place one hand on the inside hip while extending the other. Feel the stretch from hip to hand. That elastic connection is what you're trying to create on every stroke. The further the outside hand stretches from the inside hip, the more energy is stored.\n\nCritically, the inside hand must not dominate. Its job on the recovery is to stay loose and follow the outside hand. Only at the catch should it contribute — adding force, not tension. Drew uses the chin-up bar analogy: one arm can hold weight but fatigues quickly; two arms can hang much longer. But the relationship must be managed — outside leads, inside follows.\n\nWhen both rowers in a pair commit to their riggers — really stretching out to the catch — they counterbalance each other. Redgrave and Pinsent, Bond and Murray — they separated apart to balance the boat. The power production when committed to the rigger is dramatically greater than staying safe on the centreline." },
  { id: 203, title: "Rotation & Working the Rigger", expert: "Drew Ginn", credential: "3x Olympic Gold Medallist", level: "L2 Sweep", desc: "Why sweep is a rotational exercise." },
  { id: 204, title: "Breathing & Core", expert: "Drew Ginn", credential: "3x Olympic Gold Medallist", level: "L2 General", desc: "The cylinder of power — belly breathing and core stability.",
    videos: [
      { vimeo: "1129770873", title: "D13: Breathing and Setting your Core", desc: "Belly breathing technique, the weightlifter analogy, and how Mahe Drysdale breathed in Olympic finals." },
      { vimeo: "1129773027", title: "D14: Breathing for Performance", desc: "The cylinder of power — diaphragm, pelvic floor, multifidus, and transverse oblique working together." },
    ],
    text: "Most coaches address breathing as an afterthought. Drew presents it as a foundational technique that directly determines core stability, power production, and injury prevention.\n\nThe key concept: belly breathing versus chest breathing. When an athlete breathes into their chest, the rib cage expands slightly but the core remains unsupported. When they breathe into their belly — drawing the diaphragm down and the pelvic floor up — the abdomen expands 360 degrees, creating a pressurised cylinder that locks the spine in a stable position.\n\nDrew calls this the 'cylinder of power' — formed by the diaphragm, pelvic floor, multifidus (around the spine), and transverse oblique muscles. When working together, they create extraordinary stability. Drawing on his own back surgery experience, he explains the activation sequence: multifidus fires first, then transverse oblique, then the diaphragm and pelvic floor do their 'concertina effect' — and suddenly everything locks into place.\n\nThe crucial insight: 'You can have a curved spine and have that support structure and your curved spine's not weak at all. It's the strongest thing ever.' This challenges the common coaching fixation on flat backs. The priority should be correct breathing and core activation rather than obsessing over spinal position.\n\nDrew references Mahe Drysdale's Olympic single sculling — his visibly distended stomach was evidence of deep diaphragmatic breathing, not poor fitness. In racing, Drew regularly called breathing cues every 250 metres during Olympic finals to prevent athletes defaulting to shallow chest breathing under fatigue.\n\nPractice on a stool first: expand the belly on each breath, feeling it extend at the front and the back. Then transfer to the ergo. Look for the lower abdomen expanding at the catch — 'it's like they've clamped on' — and watch for breathing that goes 'high in the chest' under fatigue, which is the signal to make a breathing call." },
  { id: 205, title: "Blade Depth", expert: "Drew Ginn", credential: "3x Olympic Gold Medallist", level: "L3 General", desc: "More depth, more speed — challenging convention." },
  { id: 206, title: "Teaching the Catch", expert: "Anthony Edwards", credential: "5x Olympian", level: "L1 General", desc: "Practical coaching of the catch for beginners.",
    videos: [
      { vimeo: "1129782622", title: "Catch for Beginners — Sweep", desc: "The three common catch errors, the 'let go of the handle' depth test, and why the catch is the hardest thing to coach." },
    ],
    text: "The catch is simultaneously the most important and the most difficult part of the rowing stroke to teach. Anthony Edwards identifies the three most common errors coaches will encounter and provides a simple but brilliant diagnostic.\n\nError one: blade buried too deep. There's no connection in the depths of the water. The shoulders end up doing all the work. Error two: seat moving before blade enters — the athlete feels strong but they've wasted half their leg drive. Error three: slumped body position at the catch — weak, injury-prone, and unable to generate power.\n\nEddy's diagnostic: have the rower come to the catch and let go of the handles. The blade drops to its natural depth — and now everyone knows where it should be. It's not deep underwater; it's just sitting there at the surface. That's where you want it.\n\nThe paradox of the catch: the placement must be subtle and relaxed (just letting the blade drop in), but the body must be set, core engaged, ready to spring off the footplate with full power. Soft hands, hard core — simultaneously.\n\nThe concept of 'carrying the boat past the puddle' helps beginners understand what the catch achieves. The blade anchors in the water while the boat moves past it — rather than the blade moving through the water. This mental model transforms understanding.\n\nEddy's advice to coaches: 'Break it down and explain it to them — this is what makes the boat move, this is being more efficient, why we're applying the force. Talk them through all that so that they understand it.' And be patient — 'the catch is the hardest thing to coach from beginners right up to even elite rowers. Not all rowers can feel it, which makes it even more challenging.'" },
  { id: 207, title: "Posture, Rock-Over & Balance", expert: "Anthony Edwards", credential: "5x Olympian", level: "L1 General", desc: "Hips vs shoulders, sitting even, parallel to the shaft.",
    videos: [
      { vimeo: "1129801760", title: "Rockover with Pelvis — Sweep & Sculling", desc: "Why most beginners roll their shoulders instead of rocking from the pelvis, and how to teach the correct movement." },
    ],
    text: "Three of the most fundamental coaching challenges — correct rock-over, balanced sitting position, and shoulder management — addressed with practical clarity.\n\nThe rock-over problem: most beginners think they're rocking over, but they're actually just rolling their shoulders forward. The back curves, the core disengages, and they arrive at the catch in a weak, injury-prone position. Eddy's correction: sit strong on the hips, relax the shoulders, and focus on rocking the pelvis back and forward. He uses 'strong' deliberately rather than 'upright' because a rigidly straight back is also dangerous.\n\nThe balance diagnostic: junior rowers always complain about balance. Eddy starts at the seat — are both buttocks sitting evenly? Most balance problems originate from the rower favouring one side, which shifts their core off-centre and creates a cascade of compensation. Check this during pauses and observe from behind the stern for central body alignment.\n\nThe shoulder cue for sweep: shoulders should stay parallel to the oar shaft throughout the entire stroke. This single visual cue eliminates shoulder lifting, reduces tension, and naturally creates the rotation that sweep requires. As the oar swings through its arc, the shoulders must rotate to stay parallel — and that rotation is relaxed, not forced.\n\nEddy acknowledges flexibility differences: 'If someone's more flexible than another, that's okay. If they can only get to upright with their flexibility, especially tall boys, that's okay. We're teaching the right movement and not creating issues in backs.' Start the process and get it right — flexibility will improve over time." },
  { id: 208, title: "Rhythm — The 40/60 Rule", expert: "Anthony Edwards", credential: "5x Olympian", level: "L2 General", desc: "40% blade in water, 60% out. Uniformity creates rhythm.",
    videos: [
      { vimeo: "1129798382", title: "Rhythm in a Sweep Boat", desc: "The 40/60 framework — how international crews all look different but do it the same, and why uniformity is rhythm." },
    ],
    text: "What IS rhythm in rowing? Edwards cuts through the abstraction: you spend 40% of the stroke with the blade in the water and 60% with the blade out. Rhythm is what happens when your crew manages both phases uniformly.\n\nA key observation: international crews all row differently — Americans, Canadians, Dutch, Romanians — 'they all row a little bit different to each other, but they actually do it the same.' Rhythm isn't about a specific style; it's about uniformity. If your crew is doing the same thing together, you'll have rhythm.\n\nCoaching rhythm breaks into two tasks. For the 40% (blade in water): is everyone applying force the same way? Legs together, body swing together, arm draw together. If someone pushes with their shoulders while others use their legs, the power phase is broken. For the 60% (blade out): is everyone moving together? Same rock-over, same knee break, same slide speed. If one person rushes that last quarter to the catch, rhythm breaks.\n\nThe progression: legs-only rowing establishes uniform power application, then add body swing (legs and body together), then full stroke. Build the power phase uniformity first, then add recovery uniformity.\n\nEddy addresses the practical reality of different flexibility levels: 'Find that happy spot that works for you as a crew.' The less flexible rower works at their maximum comfortable range while continuing to stretch. The priority is that whatever range they use, they use it at the same TIME as their crewmates.\n\nBuild rate gradually. Achieve good rhythm at 20, then 22, then 24. If one person rushes the last quarter at a higher rate, go back down. Rhythm at 20 that produces boat speed is better than chaos at 34." },
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
  201: [
    { q: "A crew has been working hard on power. Erg scores are up, but on the water they seem slower and more fatigued. Using Drew's framework, what's the most likely problem?", opts: ["Need more fitness training", "Rigging needs adjustment", "They're producing power with tension rather than relaxation — go back to ensuring correct sequence and length before layering power back on", "Water conditions changed", "Should rate higher"], ans: 2, exp: "Drew's framework is progressive: sequence → length → power → rhythm. Power must arrive WITH relaxation. If power gains create tension, step back — verify sequence and length, then reintroduce power with explicit instruction to maintain relaxation." },
    { q: "A rower tells you: 'My forearms are really pumped and my shoulders are aching.' Based on Drew's teaching, what does this indicate?", opts: ["Excellent workout targeting right muscles", "Gripping too hard and producing power through upper body rather than legs — power is in the wrong place", "Normal fatigue", "Need stronger forearms", "Oar handles too thick"], ans: 1, exp: "Nick Green's test from the Awesome Foursome: legs burning = doing it right. Upper body fatiguing, forearms pumped = doing it wrong. Power should come from legs, hips, and core — not from gripping and pulling." },
    { q: "Drew uses 'Tai Chi rowing' to describe a quality of movement. A parent asks why the crew is rowing so slowly. Best explanation?", opts: ["Warm-up to prevent injury", "Athletes are tired", "It removes tension so athletes can feel the correct sequence and flow — you can't find the right movement pattern if you're forcing it", "Cool-down exercise", "Slow rowing builds fitness"], ans: 2, exp: "Drew describes flowing through movements 'without any tension' — the purpose is to feel the correct sequence and movement patterns without the interference of effort. Every movement must blend into the next." },
    { q: "Your crew has poor run at rate 28 and asks to go to 32 for more speed. Based on Drew's rhythm concepts, what should you do?", opts: ["Let them try 32", "Drop to 22-24 to establish rhythm and boat run, build rate back up only when rhythm is maintained", "Keep 28 but pull harder", "Focus on catch timing", "Switch boats"], ans: 1, exp: "Drew states: 'If you don't have boat speed, you can't play around with rhythm.' Achieve good rhythm at a lower rate before increasing. Higher rate without rhythm makes the boat slower, not faster." },
    { q: "Drew says hands off the finish should 'move with the speed of the boat.' An athlete's hands fly away much faster than the boat. What consequences would you expect?", opts: ["Faster boat speed", "Athlete arrives at catch too early, has to wait creating tension, soft knee break is lost, boat decelerates as body weight rushes forward faster than the hull", "No consequences", "Better catch preparation", "Only feathering affected"], ans: 1, exp: "James Tompkins 'never rushed off the back — the hands would move with the speed of the boat.' When hands outrun the hull, the athlete's mass moves forward faster than the boat, actively decelerating it." },
  ],
  202: [
    { q: "A sweep rower has excellent sequence but looks mechanical and can't generate power at the catch without tension. What's most likely missing?", opts: ["Need to pull harder", "Rate higher", "Sequence is right but robotic — need to feel blend and flow, letting outside hand lead continuously from inside hip to catch, storing elasticity", "Erg fitness insufficient", "Rigging wrong"], ans: 2, exp: "Drew warns against 'paint by numbers' — the movements must blend and flow. The outside hand leading continuously from inside hip creates the elastic stretch that provides power without muscular tension." },
    { q: "Drew compares sweep power production to which other sports, and why?", opts: ["Swimming and cycling — same muscles", "Golf and tennis — rotational activities where power comes from body rotation, not arm strength", "Running and jumping — leg drive", "Weightlifting — maximum force", "Boxing — quick hands"], ans: 1, exp: "Drew makes this comparison explicitly: 'Imagine a golf swing where the golfer says I'll just do this with my arms — that doesn't hit the ball very far. Rowing is the same.' Sweep rowing is rotation around the pin." },
    { q: "A rower doing outside-arm-only rowing says 'I feel weak — I can't get any power.' How should you respond?", opts: ["That's expected — just a balance drill", "You need to get stronger", "Focus on the connection from outside hand to inside hip — if you store that elasticity by really stretching forward, you can hang massive weight without arm strength", "Add inside arm back", "Pull harder"], ans: 2, exp: "Drew states: 'Once you've got the blade in the water, you can actually hold a massive amount of weight in that position.' The power comes from the elastic connection between outside hand and inside hip, not arm muscle." },
    { q: "A young sweep rower stays on the centreline at the catch, afraid of upsetting balance. What would you explain?", opts: ["Staying centred is correct", "Only commit once experienced", "Committing to the rigger puts you behind the handle for greatest power, and if your pair partner commits equally on the opposite side, the boat stabilises through counterbalance", "Only matters at racing pace", "Lean further to compensate"], ans: 2, exp: "Drew references Bond/Murray and Redgrave/Pinsent: 'they're counterbalancing each other in the pairs.' Both committing produces more power AND more stability than both staying safe." },
    { q: "Drew warns against 'paint by numbers' coaching. A coach teaches recovery as 'arms — STOP — body — STOP — legs — STOP.' Based on Drew's philosophy, what would you discuss?", opts: ["Pauses are correct always", "Pauses have a place for teaching basic sequence, but the goal should be to let movements blend and flow — the outside hand leads continuously, each phase flowing into the next", "More pauses the better", "Only elite need flowing movement", "No correct answer"], ans: 1, exp: "Drew says: 'If you separate it out then try to let it flow again.' Pauses are a teaching tool, not a permanent technique. The goal is continuous flow led by the outside hand." },
  ],
  204: [
    { q: "An athlete on the ergo has their chest rising dramatically but stomach stays flat. During hard pieces they lose core stability and lower back rounds. Primary issue?", opts: ["Weak back — needs strength training", "Chest breathing instead of belly breathing — diaphragm isn't descending, cylinder isn't pressurising, core muscles aren't being activated", "Need to sit straighter", "Ergo setting wrong", "Simply unfit"], ans: 1, exp: "Drew explains: chest breathing doesn't activate the diaphragm-pelvic floor cylinder, leaving the spine unsupported. Look for the lower gut expanding — that's the sign of correct belly breathing." },
    { q: "A coach insists athletes must maintain a 'completely flat back' at all times. How would you nuance this?", opts: ["Coach is correct — flat back always", "Back position doesn't matter", "A curved spine can be extremely strong IF core cylinder is properly activated through belly breathing — priority should be correct breathing and core activation rather than obsessing over spinal flatness", "Only elite can row with curved spine", "Flat back only needed in racing"], ans: 2, exp: "Drew states directly: 'You can have a curved spine and have that support structure and your curved spine's not weak at all. It's the strongest thing ever.' Core activation through breathing is more protective than spinal position." },
    { q: "At the 1000m mark in a 2000m race, several rowers' breathing has become shallow and high in the chest. What call would you make?", opts: ["Rate up to distract from fatigue", "Pull harder", "A breathing call — 'breathe deep, breathe low' — shallow chest breathing reduces oxygen AND core stability simultaneously", "Relax your arms", "No call — breathing sorts itself out"], ans: 2, exp: "Drew called breathing cues every 250m during Olympic finals. When breathing goes shallow and high under fatigue, both oxygen intake and core stability deteriorate simultaneously. One call addresses both." },
    { q: "How would you teach belly breathing to juniors who've never thought about their breathing?", opts: ["Have them run laps", "Explain anatomy in detail", "Sit on a stool and practise expanding stomach outward with each breath — belly extends at front AND back. Look for belly expansion not chest rise. Then transfer to ergo", "Hold breath during drive", "Only teach when they have back problems"], ans: 2, exp: "Drew describes: 'practice it when you're just sitting on a stool — stomach is distending, diaphragm is going down, pelvic floor is coming up, expanding to draw lungs down.' Start simple, then transfer to the ergo." },
    { q: "Drew says Olympic finals included breathing calls every 250 metres. Why is this so important under racing pressure?", opts: ["Reminds athletes to breathe at all", "Purely psychological", "Under fatigue, breathing defaults to shallow chest breathing which reduces both oxygen intake AND core stability — a breathing call addresses both simultaneously", "Only important for lightweights", "Tradition"], ans: 2, exp: "When fatigued, 'it goes high in the chest.' The coaching intervention gets breathing 'down low' — restoring both oxygen delivery and the core cylinder that protects the spine under load." },
  ],
  206: [
    { q: "A beginner buries the blade deep underwater and says 'I feel a good connection.' What's actually happening?", opts: ["Good instincts — deep is better", "No connection in the depths — have them let go of handles at the catch, blade drops to natural depth which is where it should be. Deep burial means shoulders doing the work", "Tell them to raise blade higher", "Adjust gate height", "Only a problem in sculling"], ans: 1, exp: "Eddy's diagnostic: 'let go of the handle — the blade will just go to its own depth. It's not down there deep in the water.' When buried deep, the shoulders are doing the work instead of the legs." },
    { q: "Beginner's seat moves significantly before blade enters the water. What have they lost?", opts: ["Flexibility", "Balance", "Half their leg drive — seat moving but no blade connection, all that power wasted. They feel strong but only rowing half a stroke", "Normal for beginners", "Foot stretcher wrong"], ans: 2, exp: "Eddy identifies: 'the blade hasn't gone in yet and the seat starts to move — they've wasted all that movement and all their leg power and missed half the stroke.'" },
    { q: "Eddy describes the catch as requiring two contradictory qualities simultaneously. What are they?", opts: ["Speed and power", "Relaxation and tension", "Subtle, relaxed blade placement AND a set, engaged core ready to explode off footplate — soft hands with a hard core", "Fast hands and slow slide", "Deep blade and light pressure"], ans: 2, exp: "Eddy states: 'That's why the catch is so hard — the effort physically that gets put in off the catch, but the subtleness of the placement.' The core must be locked and engaged while the blade placement is relaxed." },
    { q: "How would you describe what the blade does in the water to beginners?", opts: ["Blade moves backward through water", "Blade pushes water behind boat", "Blade goes in like an anchor — stays roughly in place while boat moves past it. The rower carries the boat past the blade", "Blade spins in water", "Blade floats on surface"], ans: 2, exp: "Eddy explains: 'what we're trying to do is put a blade in the water and carry a boat past that puddle. It goes into a block in the water and the boat actually moves past it.'" },
    { q: "A parent-coach is frustrated that catches 'still aren't right' after three weeks. Your advice?", opts: ["Three weeks is enough — crew not talented", "More erg training", "The catch is the hardest thing to coach at every level — even elite rowers constantly work on it. Be patient, break it down, and understand that not all rowers can feel it immediately", "Focus on something else", "Change coaching method"], ans: 2, exp: "Eddy: 'One of the hardest parts to coach is the catch and this goes from beginners right up to elite rowers. You're constantly trying to perfect it. Not all rowers can feel it.'" },
  ],
  207: [
    { q: "A beginner demonstrates rock-over by leaning forward with their back curving significantly. What are they doing wrong?", opts: ["Doing it correctly", "Rolling shoulders forward, not rocking from pelvis — sit strong on hips, relax shoulders, focus on rocking pelvis back and forward with core engaged", "Need more flexibility first", "Seat too low", "Should lean back more"], ans: 1, exp: "Eddy demonstrates: 'they think they're rocking over but they're actually just rolling their shoulders.' The correction: sit strong on the hips, relax shoulders, rock the pelvis." },
    { q: "A junior crew constantly complains about poor balance. What's the FIRST thing to check?", opts: ["Rigging", "Blade heights", "Whether each rower is sitting evenly on the seat with both buttocks level — not favouring one side, which shifts core off-centre", "Stroke rate", "Water conditions"], ans: 2, exp: "Eddy starts at the seat: 'actually sitting level with both buttocks on the seat, nice and even.' Favouring one side shifts the core off-centre, creating balance problems for the whole crew." },
    { q: "A sweep rower's outside shoulder drops and inside shoulder rises coming to the catch. What's happening?", opts: ["Normal sweep movement", "Good rotation", "Shoulders have stopped tracking with the oar — instead of staying parallel to shaft and rotating naturally, rower is creating tension by fighting rotation", "Oar too long", "Need to sit higher"], ans: 2, exp: "Eddy teaches: 'shoulders staying parallel with the shaft of the oar — rotating around so the shoulders continue to stay relaxed.' When shoulders stop tracking, tension replaces natural rotation." },
    { q: "A tall 14-year-old boy can barely rock over due to tight hamstrings. He's frustrated. Your advice?", opts: ["Can't row until more flexible", "Force him to stretch further", "That's okay — we're teaching the right movement. If you can only get to upright, that's fine. Over time flexibility improves. Don't create back issues", "Switch to different sport", "Only sculling boats"], ans: 2, exp: "Eddy: 'If they can only get to upright with their flexibility, especially tall boys, that's okay. We're teaching the right movement and not creating issues in backs.'" },
    { q: "Eddy uses 'strong' rather than 'upright' for sitting position. Why?", opts: ["Sounds more motivating", "'Upright' implies rigidly straight back which is also dangerous. 'Strong' means core engaged, hips supporting spine, natural curve — not slumped, not ramrod straight", "No real difference", "Easier for kids", "Personal preference"], ans: 1, exp: "Eddy deliberately chooses 'strong': 'not to sit like bulk upright that their back is curved, because that's a dangerous position.' Strong = engaged core, functional position, not a postural extreme." },
  ],
  208: [
    { q: "Your crew has good individual technique but can't find rhythm. First diagnostic question?", opts: ["Fit enough?", "Is the problem in the 40% power phase (applying force same way?) or the 60% recovery (moving together?) — identify which phase is breaking down", "Stroke rate correct?", "Need more video?", "Change crew order?"], ans: 1, exp: "Eddy's framework separates rhythm into two coaching problems: the 40% power phase (force uniformity) and the 60% recovery (movement uniformity). Identifying which is breaking down focuses the correction." },
    { q: "International crews from different countries look different but all go fast. What principle does this illustrate?", opts: ["No correct way to row", "Each country has right technique", "Rhythm comes from everyone doing the SAME thing, not any particular style — uniformity creates rhythm", "Only one country correct", "Style doesn't affect speed"], ans: 2, exp: "Eddy: 'They all row a little bit different to each other, but they actually do it the same. That's the key. If you've got a crew and everyone's doing the same thing, you're going to have a rhythm.'" },
    { q: "In a four, three rowers glide smoothly but one rushes the last quarter before catch. Effect?", opts: ["Minimal — one person can't affect the whole boat", "Only affects the person rushing", "You break the rhythm — one person rushing in recovery phase disrupts uniform movement and destabilises the catch for entire crew", "Helps accelerate", "Only matters at high rates"], ans: 2, exp: "Eddy describes: 'if one person suddenly just goes whoop like that, you break the rhythm.' The rush disrupts the 60% recovery phase and compromises the catch." },
    { q: "You want to build rhythm in a beginner crew. What exercise sequence?", opts: ["Full rowing at race rate", "Pause drills only", "Start with legs-only for uniform power application, then add body swing, then full stroke — build power phase uniformity first, then add recovery", "Only work on recovery", "Watch video of elite crews"], ans: 2, exp: "Eddy demonstrates: 'legs only rowing — pushing the legs... then we can push and swing the body... everyone understanding how that process works.' Build the power phase first, then add recovery." },
    { q: "Two rowers have very different flexibility — one rocks over deeply, other barely at all. What to do?", opts: ["Only select similar flexibility", "Force less flexible to match", "Find the happy spot for the crew — less flexible rower works at their max while continuing to stretch. Priority is they use whatever range at the same TIME as crewmates", "Ignore difference", "Only row at low rates"], ans: 2, exp: "Eddy: 'Find that happy spot that works for you as a crew.' Timing uniformity matters more than positional matching — they must move at the same time." },
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
  const isExpert = lesson.id >= 200;

  const goBack = () => {
    if (isExpert) { setPage("experts"); }
    else { setCourse(isErgo ? "ergo" : "beginner"); setPage("course"); }
  };

  const submit = () => {
    setSubmitted(true);
    if (quiz) {
      const score = quiz.filter((q, i) => answers[i] === q.ans).length;
      if (score >= Math.ceil(quiz.length * 0.6)) setCompleted(p => ({ ...p, [lesson.id]: { score, total: quiz.length, date: new Date().toISOString() } }));
    } else setCompleted(p => ({ ...p, [lesson.id]: { score: 0, total: 0, date: new Date().toISOString() } }));
  };

  return (
    <div style={{ maxWidth: 760, margin: "40px auto", padding: "0 24px" }}>
      <button onClick={goBack} style={{ background: "none", border: "none", color: COLORS.primary, cursor: "pointer", fontSize: 14, marginBottom: 12, padding: 0 }}>← Back</button>
      <h2 style={{ color: COLORS.navy, fontSize: 22, marginBottom: 4 }}>{lesson.title}</h2>
      <p style={{ color: COLORS.muted, fontSize: 13, marginBottom: 20 }}>{lesson.summary}</p>
      <div style={{ display: "flex", gap: 0, marginBottom: 20, borderBottom: `2px solid ${COLORS.accent}` }}>
        {["lesson", ...((lesson.vimeo || lesson.videos) ? ["video"] : []), ...(quiz ? ["quiz"] : [])].map(t => (
          <button key={t} onClick={() => setTab(t)} style={{ background: "none", border: "none", borderBottom: tab === t ? `3px solid ${COLORS.primary}` : "3px solid transparent", padding: "10px 18px", color: tab === t ? COLORS.primary : COLORS.muted, fontWeight: tab === t ? 700 : 400, cursor: "pointer", fontSize: 13, textTransform: "capitalize" }}>{t}</button>
        ))}
      </div>
      {tab === "lesson" && (
        <div style={{ background: COLORS.white, borderRadius: 12, padding: 28, border: `1px solid ${COLORS.accent}`, lineHeight: 1.8, color: COLORS.text, fontSize: 14 }}>
          {lesson.text.split("\n\n").map((p, i) => <p key={i} style={{ margin: i === 0 ? 0 : "14px 0 0" }}>{p}</p>)}
          {!quiz && !completed[lesson.id] && <button onClick={submit} style={{ background: COLORS.primary, color: COLORS.white, border: "none", borderRadius: 8, padding: "10px 20px", fontSize: 13, fontWeight: 600, cursor: "pointer", marginTop: 20 }}>Mark Complete</button>}
        </div>
      )}
      {tab === "video" && lesson.vimeo && !lesson.videos && (
        <div style={{ position: "relative", paddingBottom: "56.25%", borderRadius: 12, overflow: "hidden", background: COLORS.dark }}>
          <iframe src={`https://player.vimeo.com/video/${lesson.vimeo}?h=0&title=0&byline=0&portrait=0`} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} allow="autoplay; fullscreen" allowFullScreen />
        </div>
      )}
      {tab === "video" && lesson.videos && (
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {lesson.videos.map((v, vi) => (
            <div key={vi}>
              <div style={{ marginBottom: 8 }}>
                <span style={{ fontWeight: 700, color: COLORS.navy, fontSize: 14 }}>{v.title}</span>
                <p style={{ color: COLORS.muted, fontSize: 13, margin: "4px 0 0" }}>{v.desc}</p>
              </div>
              <div style={{ position: "relative", paddingBottom: "56.25%", borderRadius: 12, overflow: "hidden", background: COLORS.dark }}>
                <iframe src={`https://player.vimeo.com/video/${v.vimeo}?h=0&title=0&byline=0&portrait=0`} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} allow="autoplay; fullscreen" allowFullScreen />
              </div>
            </div>
          ))}
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
              {submitted && q.exp && (
                <div style={{ marginTop: 10, padding: "10px 12px", borderRadius: 6, background: answers[qi] === q.ans ? COLORS.success + "10" : COLORS.error + "08", borderLeft: `3px solid ${answers[qi] === q.ans ? COLORS.success : COLORS.error}` }}>
                  <p style={{ margin: 0, fontSize: 12, color: COLORS.text, lineHeight: 1.6 }}><span style={{ fontWeight: 600 }}>Correct answer: {String.fromCharCode(65 + q.ans)}.</span> {q.exp}</p>
                </div>
              )}
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

function ExpertModules({ setPage, setLesson }) {
  return (
    <div style={{ maxWidth: 760, margin: "40px auto", padding: "0 24px" }}>
      <button onClick={() => setPage("courses")} style={{ background: "none", border: "none", color: COLORS.primary, cursor: "pointer", fontSize: 14, marginBottom: 12, padding: 0 }}>← Courses</button>
      <h2 style={{ color: COLORS.navy, fontSize: 24, marginBottom: 24 }}>Expert Modules</h2>
      {EXPERT_MODULES.map(m => (
        <div key={m.id} onClick={() => { if (m.text) { setLesson({ ...m, summary: m.desc + " — " + m.expert }); setPage("lesson"); }}} style={{ background: COLORS.white, borderRadius: 10, padding: 16, marginBottom: 8, border: `1px solid ${COLORS.accent}`, display: "flex", alignItems: "flex-start", gap: 14, cursor: m.text ? "pointer" : "default", opacity: m.text ? 1 : 0.6 }}>
          <div style={{ width: 40, height: 40, borderRadius: "50%", background: COLORS.navy, display: "flex", alignItems: "center", justifyContent: "center", color: COLORS.gold, fontWeight: 700, fontSize: 14, flexShrink: 0 }}>{m.expert.split(" ").map(w => w[0]).join("")}</div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
              <span style={{ fontWeight: 700, color: COLORS.navy, fontSize: 14 }}>{m.title}</span>
              <span style={{ background: COLORS.accent, color: COLORS.primary, fontSize: 10, fontWeight: 600, padding: "2px 6px", borderRadius: 4 }}>{m.level}</span>
              {m.text && <span style={{ background: COLORS.success + "20", color: COLORS.success, fontSize: 10, fontWeight: 600, padding: "2px 6px", borderRadius: 4 }}>Ready</span>}
              {!m.text && <span style={{ background: "#f0f0f0", color: COLORS.muted, fontSize: 10, fontWeight: 600, padding: "2px 6px", borderRadius: 4 }}>Coming soon</span>}
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
      {page === "experts" && <ExpertModules setPage={setPage} setLesson={setLesson} />}
      {page === "progress" && <Progress user={user} completed={completed} />}
    </div>
  );
}
