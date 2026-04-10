import type { Question, SpecialQuestion } from '../types';

// 6-8 questions per dimension, 3 randomly selected at runtime
// options.value: 1=low, 2=middle, 3=high
// Option order is automatically shuffled in the frontend

export const QUESTION_BANK: Record<string, Question[]> = {
  // ═══════════ S1 Self-Esteem & Confidence ═══════════
  S1: [
    {
      id: 'S1_q1', dim: 'S1',
      text: "I'm not just a loser, I'm a clown, I'm a dead fish. Never had a single relationship in my life. Timid and insecure, my youth is just one fantasy after another. Every time I see couples being lovey-dovey, it's a critical hit to my soul. Please, give us clowns a way out.",
      options: [
        { label: "I'm crying, this is literally me", value: 1 },
        { label: "I feel attacked, but it's not entirely me", value: 2 },
        { label: "This ain't me, I'm not that pathetic", value: 3 },
      ],
    },
    {
      id: 'S1_q2', dim: 'S1',
      text: 'Everyone around me is more capable than I am',
      options: [
        { label: "True, I'm the denominator in the crowd", value: 1 },
        { label: 'I feel that way sometimes', value: 2 },
        { label: "Nah, everyone's got their own path", value: 3 },
      ],
    },
    {
      id: 'S1_q3', dim: 'S1',
      text: 'A coworker casually said "your proposal kinda sucks," what do you do when you get home that night?',
      options: [
        { label: 'Toss and turn all night, dissecting every word they said', value: 1 },
        { label: "Think about it for a bit, but forget it after scrolling my phone before bed", value: 2 },
        { label: "Why should I care? They're not even my client", value: 3 },
      ],
    },
    {
      id: 'S1_q4', dim: 'S1',
      text: "A friend posts their job offer / vacation pics / new car on social media. What's your inner monologue?",
      options: [
        { label: "Must be nice being them. I'm just a waste of space.jpg", value: 1 },
        { label: "A little salty but whatever, drop a like and keep scrolling", value: 2 },
        { label: "Good for them, I've got my own pace", value: 3 },
      ],
    },
    {
      id: 'S1_q5', dim: 'S1',
      text: 'The interviewer asks "What\'s your greatest strength?" What flashes through your mind?',
      options: [
        { label: 'I have strengths? Let me make one up real quick', value: 1 },
        { label: "I've got a few but I can't bring myself to say them", value: 2 },
        { label: 'Easy question, I can name three with evidence to back them up', value: 3 },
      ],
    },
    {
      id: 'S1_q6', dim: 'S1',
      text: "You take a photo and realize you look ugly. What's your reaction?",
      options: [
        { label: 'Delete delete delete, that is NOT me', value: 1 },
        { label: "It's the angle, a filter could still save it", value: 2 },
        { label: "Ugly is ugly, it's not like I make a living off my face", value: 3 },
      ],
    },
    {
      id: 'S1_q7', dim: 'S1',
      text: "You sent a message in the group chat and nobody replied for five minutes. What do you do?",
      options: [
        { label: 'Unsend unsend unsend! Did I say something wrong?', value: 1 },
        { label: "Everyone's probably just busy", value: 2 },
        { label: "Reply or don't, it's not like I sent a red envelope", value: 3 },
      ],
    },
    {
      id: 'S1_q8', dim: 'S1',
      text: 'Someone compliments you with "You look so good today!" What\'s your first reaction?',
      options: [
        { label: "Are they being sarcastic? Or trying to borrow money?", value: 1 },
        { label: "Say thanks, but only half believe it inside", value: 2 },
        { label: "Obviously, my vibe is absolutely on point today", value: 3 },
      ],
    },
    {
      id: 'S1_q9', dim: 'S1',
      text: "You made a dumb mistake at work and the whole team knows about it. You?",
      options: [
        { label: "Social death achieved. Wanna vanish on the spot. Earth please explode.", value: 1 },
        { label: "Cringe for a few minutes, then quickly figure out how to fix it", value: 2 },
        { label: "Nobody's perfect, fix it and move on, what's the big deal", value: 3 },
      ],
    },
    {
      id: 'S1_q10', dim: 'S1',
      text: "You have an idea during a meeting but you're not sure if it's right. Do you?",
      options: [
        { label: "Keep it to myself, what if I say it and everyone laughs", value: 1 },
        { label: "Wait for someone to say something similar first, then add to it", value: 2 },
        { label: "Just say it, being wrong doesn't come out of my paycheck", value: 3 },
      ],
    },
    {
      id: 'S1_q11', dim: 'S1',
      text: "You don't know something and need to ask someone. You usually?",
      options: [
        { label: "Would rather Google for 3 hours than actually ask", value: 1 },
        { label: "Hesitate for a while, then ask with a bunch of 'sorry to bother you's", value: 2 },
        { label: "Just ask. Asking when you don't know is a virtue", value: 3 },
      ],
    },
    {
      id: 'S1_q12', dim: 'S1',
      text: "Where do you feel your self-worth mainly comes from?",
      options: [
        { label: "Other people's approval. Without it, I'm invisible", value: 1 },
        { label: "A mix of both, but external validation does make me happier", value: 2 },
        { label: "My own self-approval is enough. Other people's is just a bonus", value: 3 },
      ],
    },
    {
      id: 'S1_q13', dim: 'S1',
      text: "You did something and the result wasn't perfect. What do you tell yourself?",
      options: [
        { label: "I knew it, I can't do anything right. I'm useless", value: 1 },
        { label: "It has flaws but it's not bad overall", value: 2 },
        { label: "I did my best, I'll optimize next time", value: 3 },
      ],
    },
    {
      id: 'S1_q14', dim: 'S1',
      text: "Your boss/teacher wants to talk to you privately. Your first reaction?",
      options: [
        { label: "It's over it's over it's over, did I mess up?", value: 1 },
        { label: "A bit nervous but let me hear what it's about first", value: 2 },
        { label: "Just a normal chat, what's there to panic about", value: 3 },
      ],
    },
    {
      id: 'S1_q15', dim: 'S1',
      text: "Eating alone at a restaurant, how do you feel?",
      options: [
        { label: "Social death warning. Everyone can see I have no friends", value: 1 },
        { label: "A bit awkward but manageable", value: 2 },
        { label: "Eating alone isn't great? I get to order whatever I want", value: 3 },
      ],
    },
    {
      id: 'S1_q16', dim: 'S1',
      text: "Your friends are all trying a new thing (skateboarding/rock climbing/stand-up comedy). You?",
      options: [
        { label: "No way, I'd definitely be the worst one there", value: 1 },
        { label: "Kinda tempted but also scared of embarrassing myself", value: 2 },
        { label: "Let's go! So what if I suck, it'll be fun", value: 3 },
      ],
    },
    {
      id: 'S1_q17', dim: 'S1',
      text: "You're about to go on stage for a presentation. Your current state?",
      options: [
        { label: "Hands shaking, legs weak, heart at 180bpm, feels like a public execution", value: 1 },
        { label: "A bit nervous but I can keep it together", value: 2 },
        { label: "The stage is my home court. Just turn on the mic", value: 3 },
      ],
    },
    {
      id: 'S1_q18', dim: 'S1',
      text: "Someone gives you a gift or treats you to dinner. How do you feel?",
      options: [
        { label: "Do I deserve this? Am I being too much of a bother?", value: 1 },
        { label: "Thanks! I'll treat them back when I get the chance", value: 2 },
        { label: "Happily accept it. I deserve to be treated well", value: 3 },
      ],
    },
    {
      id: 'S1_q19', dim: 'S1',
      text: "You want to say no to an unreasonable request, but it's from someone you care about. You?",
      options: [
        { label: "Just suck it up, they'll hate me if I refuse", value: 1 },
        { label: "Express it gently and hope they understand", value: 2 },
        { label: "Kindly but firmly say no. A no is a no", value: 3 },
      ],
    },
    {
      id: 'S1_q20', dim: 'S1',
      text: "Summer's here and it's time for shorts and t-shirts, but you feel your body isn't good enough. You?",
      options: [
        { label: "Long sleeves welded on. I'd rather die of heat than be seen", value: 1 },
        { label: "A bit self-conscious but I'll wear what I need to wear", value: 2 },
        { label: "My body, my rules. I'll wear whatever I want", value: 3 },
      ],
    },
    {
      id: 'S1_q21', dim: 'S1',
      text: "You realize you got a basic fact wrong during a discussion and everyone heard it. You?",
      options: [
        { label: "Cringe so hard my toes could dig a swimming pool. Replaying this for the next week", value: 1 },
        { label: "Awkward for a moment but it passes quickly", value: 2 },
        { label: "Haha I was wrong, thanks for the correction, anyway moving on", value: 3 },
      ],
    },
    {
      id: 'S1_q22', dim: 'S1',
      text: "You posted something on social media and nobody liked it after 30 minutes. You?",
      options: [
        { label: "Deleted. Nobody cares about me, confirmed", value: 1 },
        { label: "A little bummed but whatever", value: 2 },
        { label: "I post for myself, likes are just a bonus", value: 3 },
      ],
    },
    {
      id: 'S1_q23', dim: 'S1',
      text: "You completed a really great project by yourself. What do you do?",
      options: [
        { label: "Keep it quiet, don't wanna seem like I'm showing off", value: 1 },
        { label: "Share it with close friends", value: 2 },
        { label: "Share it proudly, this is my well-earned glory", value: 3 },
      ],
    },
    {
      id: 'S1_q24', dim: 'S1',
      text: "That little voice in your head that evaluates you... what does it usually say?",
      options: [
        { label: "'You can't do it' 'Everyone's better than you' -- it gaslights me daily", value: 1 },
        { label: "Sometimes it praises, sometimes it roasts, depends on the mood", value: 2 },
        { label: "'You're doing great' 'Keep it up' -- it's my personal cheerleading squad", value: 3 },
      ],
    },
    {
      id: 'S1_q25', dim: 'S1',
      text: "Having to show the real, unfiltered you in front of others -- how does that feel?",
      options: [
        { label: "The real me is a disaster, please let me keep the mask on", value: 1 },
        { label: "I can do it around people I trust", value: 2 },
        { label: "The real me is pretty great, what's there to hide?", value: 3 },
      ],
    },
    {
      id: 'S1_q26', dim: 'S1',
      text: "Someone gives you 'well-meaning advice' but in a condescending tone. You?",
      options: [
        { label: "Listen quietly, then go home and feel bad about it for hours", value: 1 },
        { label: "Take what's useful, ignore the attitude", value: 2 },
        { label: "Thanks for the advice, but maybe work on your delivery?", value: 3 },
      ],
    },
    {
      id: 'S1_q27', dim: 'S1',
      text: "You argued your point but others disagreed. Afterwards, you?",
      options: [
        { label: "Am I too stupid for thinking that way?", value: 1 },
        { label: "Guess we just see things differently", value: 2 },
        { label: "I stand by my view. Agree to disagree", value: 3 },
      ],
    },
    {
      id: 'S1_q28', dim: 'S1',
      text: "You've been waiting in line forever and someone cuts in front of you. You?",
      options: [
        { label: "Whatever, don't wanna cause a scene", value: 1 },
        { label: "Annoyed inside but deciding whether to say something based on the situation", value: 2 },
        { label: "Excuse me, the line starts back there. Thanks.", value: 3 },
      ],
    },
    {
      id: 'S1_q29', dim: 'S1',
      text: "Something great happens in your life (promotion / winning a prize / getting asked out). Your first reaction?",
      options: [
        { label: "Must be a mistake, right? I don't deserve this", value: 1 },
        { label: "Happy but kinda can't believe it", value: 2 },
        { label: "Well-deserved. I'm worthy of good things", value: 3 },
      ],
    },
    {
      id: 'S1_q30', dim: 'S1',
      text: "You're genuinely experienced in a certain field and someone asks for your advice. You?",
      options: [
        { label: "Frantically humble: 'Oh I don't really know much' 'Just my random thoughts'", value: 1 },
        { label: "Share but with a ton of disclaimers", value: 2 },
        { label: "Share openly, I genuinely know my stuff in this area", value: 3 },
      ],
    },
    {
      id: 'S1_q31', dim: 'S1',
      text: "You're clearly doing great but keep feeling like you just got lucky and faked your way through?",
      options: [
        { label: "Every day I expect to be exposed. Late-stage impostor syndrome", value: 1 },
        { label: "I think that sometimes", value: 2 },
        { label: "Nope, I know my skills are real", value: 3 },
      ],
    },
    {
      id: 'S1_q32', dim: 'S1',
      text: "You trip and fall in public. Everyone saw it. You?",
      options: [
        { label: "Soul has left the body. Wish I could rewind time. Peak social death moment", value: 1 },
        { label: "Laugh awkwardly and quickly get up", value: 2 },
        { label: "Laugh at myself first, then tell everyone it was modern dance", value: 3 },
      ],
    },
    {
      id: 'S1_q33', dim: 'S1',
      text: "Does your self-image swing wildly based on what someone says?",
      options: [
        { label: "Absolutely. One compliment and I'm flying, one criticism and I'm underground", value: 1 },
        { label: "It fluctuates but not dramatically", value: 2 },
        { label: "Not really, my self-assessment is pretty stable", value: 3 },
      ],
    },
    {
      id: 'S1_q34', dim: 'S1',
      text: "Someone compliments you then adds 'but you'd be even better if you just...' You?",
      options: [
        { label: "Only remember the second half. The compliment has been overwritten", value: 1 },
        { label: "Take both parts on board", value: 2 },
        { label: "Thanks for the compliment, I'll consider the suggestion", value: 3 },
      ],
    },
    {
      id: 'S1_q35', dim: 'S1',
      text: "At a reunion, someone is clearly way more successful than you. You?",
      options: [
        { label: "So insecure I never wanna go to another reunion. Comparison is the thief of joy", value: 1 },
        { label: "A bit of mixed feelings but I adjust quickly", value: 2 },
        { label: "Happy for them, we each have our own highlights", value: 3 },
      ],
    },
    {
      id: 'S1_q36', dim: 'S1',
      text: "The night before a job interview, your mental state is?",
      options: [
        { label: "Why would they ever hire me? Already pre-writing my rejection journal", value: 1 },
        { label: "A bit nervous, better prepare some more", value: 2 },
        { label: "They should be glad to interview ME (okay fine, it's mutual)", value: 3 },
      ],
    },
    {
      id: 'S1_q37', dim: 'S1',
      text: "You accidentally mispronounced a word in public and someone corrected you. You?",
      options: [
        { label: "I wanna die. I'll be replaying this for the next week", value: 1 },
        { label: "Thanks, a bit embarrassed", value: 2 },
        { label: "Oh right, my bad, thanks! -- and carry on", value: 3 },
      ],
    },
    {
      id: 'S1_q38', dim: 'S1',
      text: "In a gym/pool changing room, how do you feel about your body?",
      options: [
        { label: "Change as fast as possible and bolt. Don't look at me", value: 1 },
        { label: "A bit uncomfortable but I can deal", value: 2 },
        { label: "Just changing clothes normally. Body positivity all the way", value: 3 },
      ],
    },
    {
      id: 'S1_q39', dim: 'S1',
      text: "Do you think your opinions and ideas matter?",
      options: [
        { label: "Not really, nobody wants to hear them anyway", value: 1 },
        { label: "Sometimes I think they do, sometimes I'm not sure", value: 2 },
        { label: "Of course they do. Everyone's voice deserves to be heard", value: 3 },
      ],
    },
    {
      id: 'S1_q40', dim: 'S1',
      text: "Someone is flexing their achievements right in your face (lowkey putting you down). You?",
      options: [
        { label: "Smile and nod while I shatter into pieces inside", value: 1 },
        { label: "Not comfortable but I can keep my poker face", value: 2 },
        { label: "Oh, congrats! -- then go about my day unbothered", value: 3 },
      ],
    },
  ],

  // ═══════════ S2 Self-Clarity ═══════════
  S2: [
    {
      id: 'S2_q1', dim: 'S2',
      text: "I know exactly what the real me is like",
      options: [
        { label: "Not really, I'm a mystery even to myself", value: 1 },
        { label: 'Roughly, in a vague sort of way', value: 2 },
        { label: 'Crystal clear', value: 3 },
      ],
    },
    {
      id: 'S2_q2', dim: 'S2',
      text: 'Do you have something you truly aspire to?',
      options: [
        { label: "Nope, I'm a fish with no dreams", value: 1 },
        { label: 'Maybe? Maybe not?', value: 2 },
        { label: "Yes, and it's very clear", value: 3 },
      ],
    },
    {
      id: 'S2_q3', dim: 'S2',
      text: 'If someone asks you "What do you actually want?" your first reaction is?',
      options: [
        { label: "I wanna know too! You tell me!", value: 1 },
        { label: "I kinda know, but can't quite articulate it", value: 2 },
        { label: 'Give me a sheet of paper and I\'ll fill it front and back', value: 3 },
      ],
    },
    {
      id: 'S2_q4', dim: 'S2',
      text: 'Do you often feel like "what I\'m doing right now isn\'t what the real me would do"?',
      options: [
        { label: "All the time, I'm cosplaying a functional human every day", value: 1 },
        { label: 'I get that disconnect sometimes', value: 2 },
        { label: "Rarely, I'm mostly doing what I want", value: 3 },
      ],
    },
    {
      id: 'S2_q5', dim: 'S2',
      text: "When you're in your feelings late at night, what are you usually thinking about?",
      options: [
        { label: "Who am I? Where did I come from? What's the WiFi password?", value: 1 },
        { label: 'Specific things bothering me', value: 2 },
        { label: "I rarely get emo at night, when it's bedtime I just sleep", value: 3 },
      ],
    },
    {
      id: 'S2_q6', dim: 'S2',
      text: "Have you ever had this experience: got super into a new hobby, then lost interest three days later?",
      options: [
        { label: 'Way too many times, my interests have a shorter shelf life than yogurt', value: 1 },
        { label: 'That happens occasionally', value: 2 },
        { label: "Not really, I stick with things I like for a long time", value: 3 },
      ],
    },
    {
      id: 'S2_q7', dim: 'S2',
      text: "When taking a personality test (like right now), how do you feel?",
      options: [
        { label: "I'm not sure what to pick for half these questions, I'm too complex", value: 1 },
        { label: 'I can answer most of them, just a bit of hesitation here and there', value: 2 },
        { label: "I pick instantly on every question because I know myself that well", value: 3 },
      ],
    },
    {
      id: 'S2_q8', dim: 'S2',
      text: "Your values say go with A, but self-interest pushes you toward B. You usually?",
      options: [
        { label: "I don't even know what I want, I just bounce back and forth", value: 1 },
        { label: "I'll agonize but eventually make a choice", value: 2 },
        { label: "I know exactly where my line is. Choose it and don't look back", value: 3 },
      ],
    },
    {
      id: 'S2_q9', dim: 'S2',
      text: 'Someone asks "What kind of person are you?" Can you sum yourself up in three sentences?',
      options: [
        { label: "Three hundred sentences wouldn't be enough. I'm Schrodinger's personality", value: 1 },
        { label: "I can roughly describe it but I'm not sure it's complete", value: 2 },
        { label: "Three sentences? One is enough", value: 3 },
      ],
    },
    {
      id: 'S2_q10', dim: 'S2',
      text: "When you do something, is it because you genuinely want to, or because you're being pushed by the world?",
      options: [
        { label: "Hard to tell, feels like everything is pre-arranged for me", value: 1 },
        { label: "Sometimes I can tell, sometimes I can't", value: 2 },
        { label: "I know exactly which ones come from the heart and which are external pressure", value: 3 },
      ],
    },
    {
      id: 'S2_q11', dim: 'S2',
      text: "You suddenly feel down. Can you quickly figure out why?",
      options: [
        { label: "No clue, I just randomly went emo. The cause is a mystery", value: 1 },
        { label: "If I think about it I can probably guess", value: 2 },
        { label: "Yes, I know exactly what triggered it", value: 3 },
      ],
    },
    {
      id: 'S2_q12', dim: 'S2',
      text: "Imagine yourself in 10 years. What picture pops up in your head?",
      options: [
        { label: "Total blank, like a 404 page", value: 1 },
        { label: "A blurry outline, can't make out the details", value: 2 },
        { label: "A fairly clear picture, though it might change", value: 3 },
      ],
    },
    {
      id: 'S2_q13', dim: 'S2',
      text: "You're one person at work, another with friends, and yet another at home. Which is the real you?",
      options: [
        { label: "All of them and none of them. How many personalities do I even have?", value: 1 },
        { label: "Maybe they're all parts of me", value: 2 },
        { label: "The core is the same, just different modes of expression", value: 3 },
      ],
    },
    {
      id: 'S2_q14', dim: 'S2',
      text: "In dating/friendships, how long is your 'absolutely can't tolerate' list?",
      options: [
        { label: "A list? I'm not even sure what my dealbreakers are", value: 1 },
        { label: "I've got a few items but they're not set in stone", value: 2 },
        { label: "Crystal clear. Cross my line and it's goodbye", value: 3 },
      ],
    },
    {
      id: 'S2_q15', dim: 'S2',
      text: "Faced with two decent options (like two job offers / two cities), you?",
      options: [
        { label: "No idea which one I want more. Flip a coin", value: 1 },
        { label: "I'll agonize but can slowly figure it out", value: 2 },
        { label: "I know what I DON'T want. Process of elimination, done in seconds", value: 3 },
      ],
    },
    {
      id: 'S2_q16', dim: 'S2',
      text: "Have you ever had a 'wait, my opinion today is the complete opposite of yesterday' moment?",
      options: [
        { label: "All the time. My stance changes more than the weather", value: 1 },
        { label: "Occasionally, but my general direction hasn't changed", value: 2 },
        { label: "Rarely, my core views have been pretty consistent", value: 3 },
      ],
    },
    {
      id: 'S2_q17', dim: 'S2',
      text: "You find old childhood diaries/photos. Do you feel like that kid and present-day you are...?",
      options: [
        { label: "Two completely different species. I don't even recognize them", value: 1 },
        { label: "Changed a lot but there are still traces", value: 2 },
        { label: "The core hasn't changed. Still the same vibe", value: 3 },
      ],
    },
    {
      id: 'S2_q18', dim: 'S2',
      text: "Do you know what will instantly break your composure?",
      options: [
        { label: "Every meltdown is random. I never see it coming", value: 1 },
        { label: "I roughly know a few triggers", value: 2 },
        { label: "100%. I've got my emotional map memorized", value: 3 },
      ],
    },
    {
      id: 'S2_q19', dim: 'S2',
      text: "Regarding what path to take in the future (career/lifestyle), you?",
      options: [
        { label: "Lost AF, like driving in thick fog with no GPS", value: 1 },
        { label: "Got a general direction but the specific route is unclear", value: 2 },
        { label: "Roadmap is drawn. Following the GPS now", value: 3 },
      ],
    },
    {
      id: 'S2_q20', dim: 'S2',
      text: "Your fashion style and aesthetic preferences -- have they changed much over the past few years?",
      options: [
        { label: "New style every year. My closet is a costume change reel", value: 1 },
        { label: "Some changes but the general vibe is similar", value: 2 },
        { label: "Very stable. I know what suits me", value: 3 },
      ],
    },
    {
      id: 'S2_q21', dim: 'S2',
      text: "Everyone around you is doing the same thing (grad school/civil service exams/investing). You?",
      options: [
        { label: "Jump on the bandwagon. If everyone's doing it, it can't be wrong, right?", value: 1 },
        { label: "I'll look into it but also consider if it fits me", value: 2 },
        { label: "I've got my own pace. Other people's path might not suit me", value: 3 },
      ],
    },
    {
      id: 'S2_q22', dim: 'S2',
      text: "If asked to write down the three most important beliefs in your life, you?",
      options: [
        { label: "I have beliefs? Let me first figure out what I even believe in", value: 1 },
        { label: "I can write them down but I need to think for a bit", value: 2 },
        { label: "Instant. These things have always been in my heart", value: 3 },
      ],
    },
    {
      id: 'S2_q23', dim: 'S2',
      text: "You notice you always react the same way in certain situations (avoid/people-please/fight). You?",
      options: [
        { label: "Wait, I have a pattern? Never noticed", value: 1 },
        { label: "I think there's something there but can't quite articulate it", value: 2 },
        { label: "I know my patterns and I know which ones need adjusting", value: 3 },
      ],
    },
    {
      id: 'S2_q24', dim: 'S2',
      text: "When you're alone, what do you feel more?",
      options: [
        { label: "Uneasy, like I need to fill the time with something", value: 1 },
        { label: "It's okay, sometimes enjoyable, sometimes boring", value: 2 },
        { label: "Very comfortable. It's my time to have a conversation with myself", value: 3 },
      ],
    },
    {
      id: 'S2_q25', dim: 'S2',
      text: "If asked to name someone you admire, can you explain what you admire about them?",
      options: [
        { label: "Can't really say. I just feel like they're amazing", value: 1 },
        { label: "I can name a few things", value: 2 },
        { label: "Yes, and I know exactly which of their traits I also want for myself", value: 3 },
      ],
    },
    {
      id: 'S2_q26', dim: 'S2',
      text: "Do you ever say one thing but think another, without even realizing it?",
      options: [
        { label: "Happens a lot. I only realize I was lying to myself when someone points it out", value: 1 },
        { label: "Occasionally", value: 2 },
        { label: "Not really, I'm pretty honest with myself", value: 3 },
      ],
    },
    {
      id: 'S2_q27', dim: 'S2',
      text: "Tell me 'your story' -- how you got to where you are today. How do you feel about that?",
      options: [
        { label: "A tangled mess. I can't even sort out the cause and effect myself", value: 1 },
        { label: "I can give the broad strokes but the details are fuzzy", value: 2 },
        { label: "I can tell a coherent story with a beginning, middle, and end", value: 3 },
      ],
    },
    {
      id: 'S2_q28', dim: 'S2',
      text: "What matters most to you? (money/freedom/relationships/achievement) Can you answer instantly?",
      options: [
        { label: "They all seem important but none are certain. I need a calculator", value: 1 },
        { label: "I've got a rough ranking but it's not fixed", value: 2 },
        { label: "Instant answer. My priorities are crystal clear", value: 3 },
      ],
    },
    {
      id: 'S2_q29', dim: 'S2',
      text: "Do the things you like (music/movies/food) change a lot based on who you're hanging out with?",
      options: [
        { label: "I like whatever my current crowd likes, like a chameleon", value: 1 },
        { label: "I'll take suggestions but won't completely follow", value: 2 },
        { label: "My taste is pretty stable, not easily swayed by others", value: 3 },
      ],
    },
    {
      id: 'S2_q30', dim: 'S2',
      text: "What do you think is the unchangeable core that makes 'you' you?",
      options: [
        { label: "Can't think of anything. I feel like water -- I take whatever shape", value: 1 },
        { label: "I've got a few things but I'm not certain", value: 2 },
        { label: "I know where my anchor is. No storm can drift me away", value: 3 },
      ],
    },
    {
      id: 'S2_q31', dim: 'S2',
      text: "Is there a big gap between how others see you and how you see yourself?",
      options: [
        { label: "The me in other people's eyes and the me in my own eyes seem like different people", value: 1 },
        { label: "Some gap but roughly aligned", value: 2 },
        { label: "Pretty close. What you see is what you get", value: 3 },
      ],
    },
    {
      id: 'S2_q32', dim: 'S2',
      text: "Can you tell the difference between 'anxious,' 'irritated,' and 'sad' when describing your emotions?",
      options: [
        { label: "It's all just 'not vibing.' I only have two emotion settings: good and not good", value: 1 },
        { label: "I can sort the big categories but the fine distinctions are hard", value: 2 },
        { label: "Yes, my emotional vocabulary is extensive", value: 3 },
      ],
    },
    {
      id: 'S2_q33', dim: 'S2',
      text: "When making choices, is your gut feeling reliable?",
      options: [
        { label: "My gut is about as accurate as a coin flip", value: 1 },
        { label: "Sometimes spot on, sometimes way off", value: 2 },
        { label: "Pretty reliable, because intuition is really my deep self-understanding", value: 3 },
      ],
    },
    {
      id: 'S2_q34', dim: 'S2',
      text: "The person you are in a romantic relationship -- does that match who you think you are?",
      options: [
        { label: "The me in love is a completely different person. Even I don't recognize myself", value: 1 },
        { label: "Some differences but the core is similar", value: 2 },
        { label: "Very consistent. I'm myself no matter what relationship I'm in", value: 3 },
      ],
    },
    {
      id: 'S2_q35', dim: 'S2',
      text: "What's your life philosophy / personal motto? Can you say it off the top of your head?",
      options: [
        { label: "I have a life philosophy? I don't even know what I'm having for lunch", value: 1 },
        { label: "I think I have one but it's not fully formed", value: 2 },
        { label: "Yes, and it's been guiding my actions all along", value: 3 },
      ],
    },
    {
      id: 'S2_q36', dim: 'S2',
      text: "Looking back at the past year, do you feel like you've grown? In what way?",
      options: [
        { label: "Not sure if it counts as growth. I think I just got one year older", value: 1 },
        { label: "I feel some changes but can't be specific", value: 2 },
        { label: "I can name specific dimensions where I've improved", value: 3 },
      ],
    },
    {
      id: 'S2_q37', dim: 'S2',
      text: "When someone questions your identity/abilities/values, do you waver?",
      options: [
        { label: "Yes, then I start doubting everything and enter an existential crisis", value: 1 },
        { label: "I'll think about it but won't completely overturn my beliefs", value: 2 },
        { label: "Not really. My self-understanding is rock solid", value: 3 },
      ],
    },
    {
      id: 'S2_q38', dim: 'S2',
      text: "The direction you want to grow in -- can you describe it clearly?",
      options: [
        { label: "No. I only know I want to 'get better' but don't know what 'better' means", value: 1 },
        { label: "I have a vague sense of direction", value: 2 },
        { label: "Yes. I know which weaknesses to fix and which strengths to develop", value: 3 },
      ],
    },
    {
      id: 'S2_q39', dim: 'S2',
      text: "How do you feel about the parts of yourself you're uncertain about?",
      options: [
        { label: "Very anxious. Uncertainty makes me feel insecure", value: 1 },
        { label: "A bit uncomfortable but I can accept it", value: 2 },
        { label: "It's fine, I'll explore at my own pace. No rush", value: 3 },
      ],
    },
    {
      id: 'S2_q40', dim: 'S2',
      text: "Do you have that thing where you pick A but keep thinking about B?",
      options: [
        { label: "That IS me. I regret every choice the moment I make it", value: 1 },
        { label: "Happens sometimes but usually I'm fine", value: 2 },
        { label: "Once I've chosen, I look forward, not back", value: 3 },
      ],
    },
  ],

  // ═══════════ S3 Core Values ═══════════
  S3: [
    {
      id: 'S3_q1', dim: 'S3',
      text: 'I absolutely must keep climbing higher and getting better',
      options: [
        { label: "Nah, me and my bed have a lifetime contract", value: 1 },
        { label: 'Sometimes I wanna grind, sometimes I wanna lie flat', value: 2 },
        { label: "Absolutely, if you're not improving you're falling behind", value: 3 },
      ],
    },
    {
      id: 'S3_q2', dim: 'S3',
      text: "Do you care what others think of you?",
      options: [
        { label: 'Yes, I replay their words over and over', value: 1 },
        { label: "Depends who's saying it, I care about people close to me", value: 2 },
        { label: "Don't care, I live for myself", value: 3 },
      ],
    },
    {
      id: 'S3_q3', dim: 'S3',
      text: "You spent the entire weekend doing absolutely nothing. How do you feel?",
      options: [
        { label: "Lying flat is bliss, this is the peak of life", value: 1 },
        { label: "A little guilty but I forgave myself pretty fast", value: 2 },
        { label: "Anxious as hell, every wasted second is screaming at me", value: 3 },
      ],
    },
    {
      id: 'S3_q4', dim: 'S3',
      text: 'You see someone your age starting a successful business / getting promoted / getting a raise. Your real reaction?',
      options: [
        { label: "What's that got to do with me? That's their fate", value: 1 },
        { label: "A bit moved but that's about it", value: 2 },
        { label: "Alright, I'm motivated now, time to step it up", value: 3 },
      ],
    },
    {
      id: 'S3_q5', dim: 'S3',
      text: "If life were a video game, what would your playstyle be?",
      options: [
        { label: "AFK farming, just don't get kicked", value: 1 },
        { label: "Casual main story, no grinding no paying", value: 2 },
        { label: "100% completion, all achievements, top 3 on the leaderboard", value: 3 },
      ],
    },
    {
      id: 'S3_q6', dim: 'S3',
      text: "Your alarm goes off and you have nothing you HAVE to do today. What do you do?",
      options: [
        { label: "Turn off the alarm and go back to sleep, no shame", value: 1 },
        { label: "Wrestle with it for a bit, end up staying in bed another half hour", value: 2 },
        { label: "Get up, free time is self-improvement time", value: 3 },
      ],
    },
    {
      id: 'S3_q7', dim: 'S3',
      text: "Two job offers: A pays great but is boring as hell, B pays average but you're super into it. You pick?",
      options: [
        { label: "A, obviously. Money IS meaning", value: 1 },
        { label: "So torn, both have a point", value: 2 },
        { label: "B, doing what you love is the GOAT", value: 3 },
      ],
    },
    {
      id: 'S3_q8', dim: 'S3',
      text: "How much entertainment time would you sacrifice for a goal you truly believe in?",
      options: [
        { label: "Zero. My joy cannot be held hostage by any goal", value: 1 },
        { label: "Some, but I can't give it all up", value: 2 },
        { label: "Full monk mode when needed. Entertainment can wait", value: 3 },
      ],
    },
    {
      id: 'S3_q9', dim: 'S3',
      text: "Is there someone you deeply admire? What about them moves you?",
      options: [
        { label: "Nah, idolizing people is exhausting", value: 1 },
        { label: "A few people I think are cool but I wouldn't say I worship them", value: 2 },
        { label: "Yes, their beliefs have deeply influenced me", value: 3 },
      ],
    },
    {
      id: 'S3_q10', dim: 'S3',
      text: "$10K now or $30K in three months. You pick?",
      options: [
        { label: "Gimme the cash now! Living in the moment is what matters", value: 1 },
        { label: "I'd struggle but probably go for the 30K", value: 2 },
        { label: "30K, delayed gratification is a basic life skill", value: 3 },
      ],
    },
    {
      id: 'S3_q11', dim: 'S3',
      text: "You're dieting/studying and then hot pot/video games enter the chat. You?",
      options: [
        { label: "Temptation? Please, I ran toward it willingly", value: 1 },
        { label: "I wrestle with it. 50/50 odds", value: 2 },
        { label: "I can resist. When I've got a goal, temptation is a paper tiger", value: 3 },
      ],
    },
    {
      id: 'S3_q12', dim: 'S3',
      text: "Can you rank the five most important things in your life?",
      options: [
        { label: "Can't rank them. Nothing really seems to matter that much", value: 1 },
        { label: "I can roughly sort them but it's not definitive", value: 2 },
        { label: "Very clear. My value ranking has always been set", value: 3 },
      ],
    },
    {
      id: 'S3_q13', dim: 'S3',
      text: "Have you ever thought about what you want to be remembered for after you die?",
      options: [
        { label: "Never. I can barely figure out life, let alone death", value: 1 },
        { label: "Thought about it occasionally but not too seriously", value: 2 },
        { label: "Yes. I want to leave something meaningful behind", value: 3 },
      ],
    },
    {
      id: 'S3_q14', dim: 'S3',
      text: "If you could only prioritize work OR life, you'd pick?",
      options: [
        { label: "Life, obviously. I only have one life, I can always skip work", value: 1 },
        { label: "Try to balance both, I need them equally", value: 2 },
        { label: "Work comes first for now. Build the foundation, then enjoy the life", value: 3 },
      ],
    },
    {
      id: 'S3_q15', dim: 'S3',
      text: "Do you enjoy 'what you experienced' or 'what you achieved' more?",
      options: [
        { label: "The experience. Life is just one big adventure game", value: 1 },
        { label: "Both, but I lean slightly one way", value: 2 },
        { label: "Achievement. An experience without results is wasted time", value: 3 },
      ],
    },
    {
      id: 'S3_q16', dim: 'S3',
      text: "What mainly drives you to learn new things?",
      options: [
        { label: "Being forced. Learn or get replaced", value: 1 },
        { label: "Half interest, half necessity", value: 2 },
        { label: "Self-motivated. Knowledge and skills are power", value: 3 },
      ],
    },
    {
      id: 'S3_q17', dim: 'S3',
      text: "How do you feel about competition?",
      options: [
        { label: "If I can avoid competing, I will. Peace and love", value: 1 },
        { label: "Moderate competition is fine, just don't get too sweaty", value: 2 },
        { label: "Competition excites me. It brings out my final form", value: 3 },
      ],
    },
    {
      id: 'S3_q18', dim: 'S3',
      text: "A friend flaunts a designer bag / new car in front of you. Your inner monologue?",
      options: [
        { label: "Looks nice but I have zero ambition for that stuff", value: 1 },
        { label: "A bit tempted but it's just a thought", value: 2 },
        { label: "I need to get one too. This is literally my motivation to grind", value: 3 },
      ],
    },
    {
      id: 'S3_q19', dim: 'S3',
      text: "There's an opportunity to help a lot of people but you get nothing out of it. You?",
      options: [
        { label: "No benefit? Pass. I'm not a saint", value: 1 },
        { label: "Depends. If it's not too much trouble, sure", value: 2 },
        { label: "I'm in. Helping others IS the value", value: 3 },
      ],
    },
    {
      id: 'S3_q20', dim: 'S3',
      text: "Growth requires leaving your comfort zone. Are you down?",
      options: [
        { label: "My comfort zone is my last fortress. Nobody's dragging me out", value: 1 },
        { label: "I can poke my head out occasionally", value: 2 },
        { label: "Yes. Discomfort is where progress lives", value: 3 },
      ],
    },
    {
      id: 'S3_q21', dim: 'S3',
      text: "When shopping, what's your tendency?",
      options: [
        { label: "Whatever's cheapest. If it works, it works", value: 1 },
        { label: "Best value for money, with the occasional splurge", value: 2 },
        { label: "Buy quality or don't buy at all. Quality reflects attitude", value: 3 },
      ],
    },
    {
      id: 'S3_q22', dim: 'S3',
      text: "What does 'success' look like to you?",
      options: [
        { label: "Stable income + ability to chill = success", value: 1 },
        { label: "Living a life I'm satisfied with", value: 2 },
        { label: "Being top-tier in some field and getting recognized for it", value: 3 },
      ],
    },
    {
      id: 'S3_q23', dim: 'S3',
      text: "What does 'time' feel like to you?",
      options: [
        { label: "We all die eventually, wasting a little time is whatever", value: 1 },
        { label: "Time should be valued but no need to stress about every second", value: 2 },
        { label: "Time is the most expensive currency. I don't want to waste a single second", value: 3 },
      ],
    },
    {
      id: 'S3_q24', dim: 'S3',
      text: "Do you believe more in 'talent determines your ceiling' or 'effort determines your ceiling'?",
      options: [
        { label: "Talent. No talent means grinding is pointless", value: 1 },
        { label: "Both matter", value: 2 },
        { label: "Effort. Talent is just the starting line; hard work is what wins", value: 3 },
      ],
    },
    {
      id: 'S3_q25', dim: 'S3',
      text: "There's a mountain ahead that looks really hard to climb. You?",
      options: [
        { label: "Go around. Why make life harder than it needs to be", value: 1 },
        { label: "Check if there's a cable car", value: 2 },
        { label: "Send it! The harder the climb, the better the view", value: 3 },
      ],
    },
    {
      id: 'S3_q26', dim: 'S3',
      text: "Do you value 'freedom' or 'security' more?",
      options: [
        { label: "Freedom. I'd rather be broke and free than trapped in a golden cage", value: 1 },
        { label: "A balance of both would be ideal", value: 2 },
        { label: "Security first. You need a solid base before chasing freedom", value: 3 },
      ],
    },
    {
      id: 'S3_q27', dim: 'S3',
      text: "Your take on innovation vs. tradition?",
      options: [
        { label: "Tradition works fine, why reinvent the wheel", value: 1 },
        { label: "Innovate on top of tradition", value: 2 },
        { label: "Must innovate. Stagnation is regression", value: 3 },
      ],
    },
    {
      id: 'S3_q28', dim: 'S3',
      text: "Which resonates more: 'good enough' or 'pursue excellence'?",
      options: [
        { label: "Good enough is good enough. Close enough counts", value: 1 },
        { label: "Good enough for most things, excellence for a select few", value: 2 },
        { label: "Pursue excellence. If I'm doing it, I'm doing it right", value: 3 },
      ],
    },
    {
      id: 'S3_q29', dim: 'S3',
      text: "Have you thought about what kind of impact you could have on the world?",
      options: [
        { label: "I can barely feed myself, let alone change the world", value: 1 },
        { label: "Thought about it sometimes but individual power feels limited", value: 2 },
        { label: "Yes, and I'm working to make it happen", value: 3 },
      ],
    },
    {
      id: 'S3_q30', dim: 'S3',
      text: "Your attitude toward self-discipline?",
      options: [
        { label: "Self-discipline? I only know self-destruction", value: 1 },
        { label: "Intermittent discipline, consistently quiet quitting", value: 2 },
        { label: "Discipline sets me free. It's a habit now", value: 3 },
      ],
    },
    {
      id: 'S3_q31', dim: 'S3',
      text: "How much would you spend on 'leveling yourself up' (courses/books/gym)?",
      options: [
        { label: "Zero. Aren't free resources enough?", value: 1 },
        { label: "A reasonable amount", value: 2 },
        { label: "It's the best investment. I'm willing to spend generously", value: 3 },
      ],
    },
    {
      id: 'S3_q32', dim: 'S3',
      text: "You failed at something. Your view on failure?",
      options: [
        { label: "Knew it. I'm just not cut out for this", value: 1 },
        { label: "Failure is normal, I'll be more careful next time", value: 2 },
        { label: "Failure is the best teacher. I learned a ton from this", value: 3 },
      ],
    },
    {
      id: 'S3_q33', dim: 'S3',
      text: "If you had to choose between 'real but mediocre' and 'fake but glamorous,' you'd pick?",
      options: [
        { label: "Glamorous. Appearances matter more than substance", value: 1 },
        { label: "Torn, but probably real", value: 2 },
        { label: "Real. Living authentically beats looking good any day", value: 3 },
      ],
    },
    {
      id: 'S3_q34', dim: 'S3',
      text: "Do you value 'relationships' or 'career growth' more?",
      options: [
        { label: "Relationships. Love is all you need", value: 1 },
        { label: "Both equally. Can't live without either", value: 2 },
        { label: "Career first. Economic foundation determines everything else", value: 3 },
      ],
    },
    {
      id: 'S3_q35', dim: 'S3',
      text: "Your attitude toward 'lifelong learning'?",
      options: [
        { label: "No thanks, I returned my learning ability on graduation day", value: 1 },
        { label: "I get it in theory but my execution is limited", value: 2 },
        { label: "Believe in it and practice it. Learning is a lifetime thing", value: 3 },
      ],
    },
    {
      id: 'S3_q36', dim: 'S3',
      text: "Would you rather your life be 'stable but predictable' or 'turbulent but exciting'?",
      options: [
        { label: "Stable. I'm terrified of change", value: 1 },
        { label: "A little bit of turbulence is fine", value: 2 },
        { label: "Exciting! Life should be full of surprises and challenges", value: 3 },
      ],
    },
    {
      id: 'S3_q37', dim: 'S3',
      text: "When health and pleasure conflict (like staying up late / binge eating), you usually pick?",
      options: [
        { label: "Pleasure now. Tomorrow's problems are for tomorrow's me", value: 1 },
        { label: "Try to resist but occasionally give in", value: 2 },
        { label: "Health first. Long-term thinking always", value: 3 },
      ],
    },
    {
      id: 'S3_q38', dim: 'S3',
      text: "Your take on 'independence' as a quality?",
      options: [
        { label: "Why rely on myself when I can rely on someone else", value: 1 },
        { label: "Important but I don't need to be independent about everything", value: 2 },
        { label: "Extremely important. Not depending on anyone is my superpower", value: 3 },
      ],
    },
    {
      id: 'S3_q39', dim: 'S3',
      text: "Do you prefer doing creative-but-risky things or safe-but-routine things?",
      options: [
        { label: "Safe and routine. Don't mess with my peace", value: 1 },
        { label: "Depends on the situation", value: 2 },
        { label: "Creative! Risk and reward are best friends", value: 3 },
      ],
    },
    {
      id: 'S3_q40', dim: 'S3',
      text: "Do you enjoy more 'executing a plan' or 'going with the flow'?",
      options: [
        { label: "Go with the flow. Plans are meant to be broken", value: 1 },
        { label: "Have a rough framework, the details can be flexible", value: 2 },
        { label: "Execute the plan. Everything under control is how I feel at ease", value: 3 },
      ],
    },
  ],

  // ═══════════ E1 Attachment Security ═══════════
  E1: [
    {
      id: 'E1_q1', dim: 'E1',
      text: "Your partner hasn't replied for over 5 hours and says they had a stomachache. Your reaction?",
      options: [
        { label: "A stomachache for 5 hours? They're definitely lying", value: 1 },
        { label: "Skeptical but I'll let it slide for now", value: 2 },
        { label: "That sucks, hope they get some rest", value: 3 },
      ],
    },
    {
      id: 'E1_q2', dim: 'E1',
      text: 'I often worry about being abandoned in relationships',
      options: [
        { label: "Yes, every day feels like a drama about being left behind", value: 1 },
        { label: 'That thought crosses my mind sometimes', value: 2 },
        { label: "No, what comes will come, what goes can't be held back", value: 3 },
      ],
    },
    {
      id: 'E1_q3', dim: 'E1',
      text: "Your partner had dinner alone with a friend of the opposite sex, but told you beforehand. Your reaction?",
      options: [
        { label: "My mind already directed a full cheating drama in my head", value: 1 },
        { label: "A bit bothered but I can keep it together", value: 2 },
        { label: "It's just a meal, I'm not a control freak", value: 3 },
      ],
    },
    {
      id: 'E1_q4', dim: 'E1',
      text: 'Your partner suddenly says "I need some time alone." What\'s your CPU usage?',
      options: [
        { label: "100%, going into full analysis mode — is this a breakup?", value: 1 },
        { label: "70%, a bit nervous but I can handle it", value: 2 },
        { label: "10%, nice, I can game for a while", value: 3 },
      ],
    },
    {
      id: 'E1_q5', dim: 'E1',
      text: "You find old photos of your partner with their ex on their phone (they forgot to delete them). What do you do?",
      options: [
        { label: "Instant meltdown, interrogation mode activated", value: 1 },
        { label: "Uncomfortable but I can be rational about it", value: 2 },
        { label: "That's in the past, why would I care?", value: 3 },
      ],
    },
    {
      id: 'E1_q6', dim: 'E1',
      text: 'Your crush sent everyone a "Happy New Year" message. Your reaction?',
      options: [
        { label: "Mass sent... I'm not special after all", value: 1 },
        { label: "At least they remembered to send it to me", value: 2 },
        { label: "Happy New Year! Then carry on with my day", value: 3 },
      ],
    },
    {
      id: 'E1_q7', dim: 'E1',
      text: "Your partner compliments someone else's looks while you're together. You?",
      options: [
        { label: "Then go be with them!! (inner screaming)", value: 1 },
        { label: "Slightly annoyed but I keep it to myself", value: 2 },
        { label: "They ARE good-looking, my partner has good taste", value: 3 },
      ],
    },
    {
      id: 'E1_q8', dim: 'E1',
      text: "Your best friend suddenly starts getting really close with someone else. You?",
      options: [
        { label: "I've been replaced. The friendship boat has capsized", value: 1 },
        { label: "A little jealous but I know that's normal", value: 2 },
        { label: "Great for them! My friend being happy makes me happy", value: 3 },
      ],
    },
    {
      id: 'E1_q9', dim: 'E1',
      text: "Your partner says 'I wanna be alone this weekend / hang out with friends.' You?",
      options: [
        { label: "Do they not love me anymore? Inner soap opera commences", value: 1 },
        { label: "A bit bummed but I get it", value: 2 },
        { label: "Nice, I've got my own plans too", value: 3 },
      ],
    },
    {
      id: 'E1_q10', dim: 'E1',
      text: "You had a fight with your partner and now you're giving each other the silent treatment. What worries you most?",
      options: [
        { label: "It's over. This is the one that ends it for real", value: 1 },
        { label: "Uncomfortable but I know fights are normal", value: 2 },
        { label: "Mad is mad, but we're still together when the dust settles", value: 3 },
      ],
    },
    {
      id: 'E1_q11', dim: 'E1',
      text: "Your partner has been crazy busy with work all week and barely had time for you. You?",
      options: [
        { label: "Dropping hints and testing them. Are they REALLY busy or just ignoring me?", value: 1 },
        { label: "I understand but I still feel a little lonely", value: 2 },
        { label: "Busy is busy. We both keep grinding", value: 3 },
      ],
    },
    {
      id: 'E1_q12', dim: 'E1',
      text: "When you're feeling down, do you reach out to someone?",
      options: [
        { label: "I want to but I'm afraid of being a burden or getting rejected. End up handling it alone", value: 1 },
        { label: "Depends on the situation. Close friends, maybe", value: 2 },
        { label: "I'll talk to someone I trust. That's perfectly normal", value: 3 },
      ],
    },
    {
      id: 'E1_q13', dim: 'E1',
      text: "You've been hurt by someone important before. Now facing a new relationship, you?",
      options: [
        { label: "Full armor on. My heart is wrapped in eighteen layers of plastic wrap", value: 1 },
        { label: "Cautious but not completely closed off", value: 2 },
        { label: "The past is the past. New relationships deserve trust", value: 3 },
      ],
    },
    {
      id: 'E1_q14', dim: 'E1',
      text: "Long-distance relationship / not seeing each other for a long time. Your sense of security?",
      options: [
        { label: "Nosedives. Out of sight means out of existence", value: 1 },
        { label: "Drops a bit but I can maintain it through communication", value: 2 },
        { label: "Not really affected. Trust doesn't need physical proximity to prove itself", value: 3 },
      ],
    },
    {
      id: 'E1_q15', dim: 'E1',
      text: "You discover your partner has a little secret you didn't know about (harmless stuff, like being a secret K-pop stan). You?",
      options: [
        { label: "Having secrets means they don't trust me! Why hide it?!", value: 1 },
        { label: "A bit curious but not upset", value: 2 },
        { label: "Everyone's entitled to their own little world", value: 3 },
      ],
    },
    {
      id: 'E1_q16', dim: 'E1',
      text: "Can you still feel secure in a relationship without constant texting?",
      options: [
        { label: "No. No texts = the relationship is dying", value: 1 },
        { label: "It's tough but I can work on it", value: 2 },
        { label: "Yes. Real relationships aren't measured by message count", value: 3 },
      ],
    },
    {
      id: 'E1_q17', dim: 'E1',
      text: "You accidentally notice your partner still follows their ex on social media. You?",
      options: [
        { label: "Blood pressure spiking. I'm going through their comments looking for clues", value: 1 },
        { label: "Not thrilled but I won't blow up just yet", value: 2 },
        { label: "Following someone is just following someone. It's not getting back together", value: 3 },
      ],
    },
    {
      id: 'E1_q18', dim: 'E1',
      text: "Your partner suddenly changes (starts working out / learning new things / switches up their style). Your first thought?",
      options: [
        { label: "Are they changing for someone else? Red alert!", value: 1 },
        { label: "A bit curious about why but not overthinking it", value: 2 },
        { label: "People grow. I support them", value: 3 },
      ],
    },
    {
      id: 'E1_q19', dim: 'E1',
      text: "Your partner has a close friend of the opposite sex they hang out with a lot. You?",
      options: [
        { label: "Every time they meet up, I'm at home being a human surveillance camera", value: 1 },
        { label: "A bit bothered but I choose to trust my partner", value: 2 },
        { label: "Having friends is normal. Gender isn't the issue", value: 3 },
      ],
    },
    {
      id: 'E1_q20', dim: 'E1',
      text: "Your partner is very popular in social settings and lots of people like them. You?",
      options: [
        { label: "Panicking. They could get snatched away any second", value: 1 },
        { label: "A bit of competitive anxiety but also a bit proud", value: 2 },
        { label: "Having an amazing partner is a good thing. And they chose me", value: 3 },
      ],
    },
    {
      id: 'E1_q21', dim: 'E1',
      text: "Do you ever have that 'what if they find someone better than me' anxiety?",
      options: [
        { label: "Every single day. Anxiety level: going bald", value: 1 },
        { label: "The thought crosses my mind occasionally", value: 2 },
        { label: "Nope. They chose me for a reason", value: 3 },
      ],
    },
    {
      id: 'E1_q22', dim: 'E1',
      text: "There are ambiguous signals in a relationship (like the other person running hot and cold). You?",
      options: [
        { label: "Overanalyzing every detail. FBI mode manually activated", value: 1 },
        { label: "A bit confused but I'll observe for now", value: 2 },
        { label: "Just ask directly. I don't play guessing games", value: 3 },
      ],
    },
    {
      id: 'E1_q23', dim: 'E1',
      text: "Do you need your partner to say 'I love you' frequently to feel secure?",
      options: [
        { label: "Yes. If they don't say it, I start thinking they don't mean it", value: 1 },
        { label: "Once in a while is fine. Actions speak louder than words", value: 2 },
        { label: "Not really. Their everyday behavior already tells me everything", value: 3 },
      ],
    },
    {
      id: 'E1_q24', dim: 'E1',
      text: "You just met someone new. How quickly do you extend trust?",
      options: [
        { label: "At least a year minimum. Trust is a luxury item", value: 1 },
        { label: "Normal pace, slow and steady", value: 2 },
        { label: "If the vibe is right, pretty quickly", value: 3 },
      ],
    },
    {
      id: 'E1_q25', dim: 'E1',
      text: "In a group, do you feel like an 'outsider' or an 'insider'?",
      options: [
        { label: "I often feel like I'm the extra one", value: 1 },
        { label: "Depends on the specific group", value: 2 },
        { label: "Most of the time I feel accepted", value: 3 },
      ],
    },
    {
      id: 'E1_q26', dim: 'E1',
      text: "After making up from a fight, can you truly let it go?",
      options: [
        { label: "I say I've let it go but the crack in my heart is still there", value: 1 },
        { label: "I need a bit of time but I can recover", value: 2 },
        { label: "Yes. Making up means making up. No digging up the past", value: 3 },
      ],
    },
    {
      id: 'E1_q27', dim: 'E1',
      text: "Your partner posts on social media but there's nothing about you in it. You?",
      options: [
        { label: "I have no place in their heart. Spiraling begins", value: 1 },
        { label: "Noticed it but didn't think much of it", value: 2 },
        { label: "My partner isn't a fan account dedicated solely to me", value: 3 },
      ],
    },
    {
      id: 'E1_q28', dim: 'E1',
      text: "Your partner made a big decision without asking for your input first. You?",
      options: [
        { label: "Am I not important? Am I being excluded?", value: 1 },
        { label: "Slightly uncomfortable but understandable", value: 2 },
        { label: "They have every right to make their own decisions", value: 3 },
      ],
    },
    {
      id: 'E1_q29', dim: 'E1',
      text: "Do you trust your partner to treat your relationship well even when you're not around?",
      options: [
        { label: "Not sure. If I can't see it, I'm anxious", value: 1 },
        { label: "Mostly yes, but worries flash through occasionally", value: 2 },
        { label: "Completely trust them. That's the foundation of a relationship", value: 3 },
      ],
    },
    {
      id: 'E1_q30', dim: 'E1',
      text: "Showing your vulnerable side to your partner -- how do you feel about that?",
      options: [
        { label: "No way. Showing weakness will make them look down on me / leave me", value: 1 },
        { label: "Depends on what stage the relationship is at", value: 2 },
        { label: "A safe relationship should allow showing vulnerability", value: 3 },
      ],
    },
    {
      id: 'E1_q31', dim: 'E1',
      text: "You and your partner have little rituals (goodnight texts / weekly dates). One time it doesn't happen. You?",
      options: [
        { label: "The sky is falling. This is a sign the relationship is in trouble", value: 1 },
        { label: "I notice but I don't freak out", value: 2 },
        { label: "Missing it once is no big deal", value: 3 },
      ],
    },
    {
      id: 'E1_q32', dim: 'E1',
      text: "Your partner is in a bad mood but won't say why. You?",
      options: [
        { label: "Is it about me?! Frantically blaming myself", value: 1 },
        { label: "A bit anxious but I respect their pace", value: 2 },
        { label: "They'll talk when they're ready. I'm here for them", value: 3 },
      ],
    },
    {
      id: 'E1_q33', dim: 'E1',
      text: "Are you confident about the future of your relationship?",
      options: [
        { label: "Ready for a breakup at any moment. I don't dare be too optimistic", value: 1 },
        { label: "Mostly confident, with occasional wavering", value: 2 },
        { label: "Confident. A good relationship is built together", value: 3 },
      ],
    },
    {
      id: 'E1_q34', dim: 'E1',
      text: "Your partner has to go on a business trip for a week. Your reaction?",
      options: [
        { label: "A week?! I might not survive", value: 1 },
        { label: "I'll miss them but life goes on", value: 2 },
        { label: "No problem. A little time apart is healthy", value: 3 },
      ],
    },
    {
      id: 'E1_q35', dim: 'E1',
      text: "Do you need to be physically together with your partner often to feel secure?",
      options: [
        { label: "Yes. When we're not together, I'm always restless", value: 1 },
        { label: "Sometimes, but not constantly", value: 2 },
        { label: "Don't need to be together all the time. Having them in my heart is enough", value: 3 },
      ],
    },
    {
      id: 'E1_q36', dim: 'E1',
      text: "In a relationship, do you lean more toward 'trust them' or 'verify just to be safe'?",
      options: [
        { label: "Trust but verify. Checking up is how you show love (not really)", value: 1 },
        { label: "Mostly trust but occasionally want to confirm", value: 2 },
        { label: "Choose trust. Being controlling isn't love", value: 3 },
      ],
    },
    {
      id: 'E1_q37', dim: 'E1',
      text: "Your partner hits a rough patch (job loss / emotional low). Does your confidence in the relationship change?",
      options: [
        { label: "Worried they'll drag me down or push me away", value: 1 },
        { label: "A bit worried but I believe we can get through it together", value: 2 },
        { label: "Doesn't change. That's when real love shows up", value: 3 },
      ],
    },
    {
      id: 'E1_q38', dim: 'E1',
      text: "Your partner didn't proactively share what happened today. You?",
      options: [
        { label: "Start imagining they're hiding something from me", value: 1 },
        { label: "A bit curious, might ask", value: 2 },
        { label: "Nothing special to report, no biggie", value: 3 },
      ],
    },
    {
      id: 'E1_q39', dim: 'E1',
      text: "What do you think a good relationship should feel like?",
      options: [
        { label: "Security is never enough. I always need more reassurance", value: 1 },
        { label: "Mostly peaceful", value: 2 },
        { label: "Like a warm harbor. No need to constantly prove anything", value: 3 },
      ],
    },
    {
      id: 'E1_q40', dim: 'E1',
      text: "When there's minor friction in a relationship (like forgetting an anniversary / being late to a date). You?",
      options: [
        { label: "Immediately jump to the big conclusion: 'they don't care about me'", value: 1 },
        { label: "A bit unhappy but I can address it specifically", value: 2 },
        { label: "Small stuff. Doesn't shake my confidence in the relationship", value: 3 },
      ],
    },
  ],

  // ═══════════ E2 Emotional Investment ═══════════
  E2: [
    {
      id: 'E2_q1', dim: 'E2',
      text: "I swear on everything, I take every relationship seriously!",
      options: [
        { label: "Not really, my heart is a non-stick pan", value: 1 },
        { label: "Maybe? Depends on who it is", value: 2 },
        { label: "Yes! Hand on heart! (thumps chest)", value: 3 },
      ],
    },
    {
      id: 'E2_q2', dim: 'E2',
      text: "Your partner is basically perfect in every way: kind, brilliant, gorgeous. What do you do?",
      options: [
        { label: "Even if they're perfect, I still won't catch feelings", value: 1 },
        { label: "I'd be into them but still keep my head on straight", value: 2 },
        { label: "Instant lovebrain, CPU fully occupied by romance", value: 3 },
      ],
    },
    {
      id: 'E2_q3', dim: 'E2',
      text: "You've been together for three days and they get hospitalized. What do you do?",
      options: [
        { label: "Send a get-well text, I mean it's only been three days", value: 1 },
        { label: "I'd be concerned, but not enough to take time off work to visit", value: 2 },
        { label: "Already bought a bag of fruit and I'm on my way", value: 3 },
      ],
    },
    {
      id: 'E2_q4', dim: 'E2',
      text: "After a breakup, what's your typical recovery time?",
      options: [
        { label: "Three days, like a system reboot", value: 1 },
        { label: "A month or two, normal grieving process", value: 2 },
        { label: "Three years minimum, there are songs I still can't listen to", value: 3 },
      ],
    },
    {
      id: 'E2_q5', dim: 'E2',
      text: 'Your partner says "I have to work late tonight, can\'t hang out." Your inner thoughts?',
      options: [
        { label: "Oh, I'll just make my own plans then, no biggie", value: 1 },
        { label: "A bit bummed but I understand", value: 2 },
        { label: "So disappointed I could ascend, but I still say 'okay take care'", value: 3 },
      ],
    },
    {
      id: 'E2_q6', dim: 'E2',
      text: "If love were an investment, what's your strategy?",
      options: [
        { label: "Diversify, don't put all your eggs in one basket", value: 1 },
        { label: "Go heavy but keep a stop-loss", value: 2 },
        { label: "All in, YOLO", value: 3 },
      ],
    },
    {
      id: 'E2_q7', dim: 'E2',
      text: "Crying in front of your partner / showing your most vulnerable side. Can you?",
      options: [
        { label: "No way. My vulnerability is classified top-secret", value: 1 },
        { label: "Depends on how deep the relationship is. When it's right, I can", value: 2 },
        { label: "Absolutely. No need to put on a front for the person you love", value: 3 },
      ],
    },
    {
      id: 'E2_q8', dim: 'E2',
      text: "Your partner's birthday / anniversary is coming up. Your prep level?",
      options: [
        { label: "Send a red envelope on the day. Ceremony is overrated", value: 1 },
        { label: "I'll prepare something but nothing too over-the-top", value: 2 },
        { label: "Planning starts a month in advance. The surprise WILL be delivered", value: 3 },
      ],
    },
    {
      id: 'E2_q9', dim: 'E2',
      text: "Your partner wants something that's over your budget, but they really want it. You?",
      options: [
        { label: "Buy within my means. Over budget is a no", value: 1 },
        { label: "See if there's a good alternative", value: 2 },
        { label: "Borrow money if I have to! Seeing them happy makes it worth it", value: 3 },
      ],
    },
    {
      id: 'E2_q10', dim: 'E2',
      text: "How emotionally open are you in a relationship?",
      options: [
        { label: "My heart is a black box. Nobody gets read access", value: 1 },
        { label: "I selectively share some things", value: 2 },
        { label: "I share almost everything. Full transparency", value: 3 },
      ],
    },
    {
      id: 'E2_q11', dim: 'E2',
      text: "How much thought do you put into choosing a gift for your partner?",
      options: [
        { label: "Just ask them what they want, or send cash", value: 1 },
        { label: "I'll put in some effort but nothing too extreme", value: 2 },
        { label: "I pick based on what they've casually mentioned. I remember everything they've ever hinted at", value: 3 },
      ],
    },
    {
      id: 'E2_q12', dim: 'E2',
      text: "Do you secretly plan surprises for your partner?",
      options: [
        { label: "Nah, surprises are exhausting. This isn't a romcom", value: 1 },
        { label: "For special occasions, sure", value: 2 },
        { label: "All the time! Their surprised face gives me a dopamine hit", value: 3 },
      ],
    },
    {
      id: 'E2_q13', dim: 'E2',
      text: "Is your approach to dating more 'deep-sea diving' or 'wading in the shallows'?",
      options: [
        { label: "Shallows. Go too deep and I can't breathe", value: 1 },
        { label: "A moderate depth is fine", value: 2 },
        { label: "Deep-sea diving. Love should be a fully immersive experience", value: 3 },
      ],
    },
    {
      id: 'E2_q14', dim: 'E2',
      text: "How long does it usually take for you to get attached to someone?",
      options: [
        { label: "Very hard. I keep a safe distance from everyone", value: 1 },
        { label: "Takes a while to slowly build up", value: 2 },
        { label: "Super fast. Once I'm into it, there's no getting out", value: 3 },
      ],
    },
    {
      id: 'E2_q15', dim: 'E2',
      text: "After a breakup, do you delete their contact info and chat history?",
      options: [
        { label: "Instantly. The past needs to be cleaned out", value: 1 },
        { label: "Keep it but unfollow/mute them", value: 2 },
        { label: "Keep everything. Every message is a memory I can't let go of", value: 3 },
      ],
    },
    {
      id: 'E2_q16', dim: 'E2',
      text: "Can you clearly sense where your 'boundaries' are in a relationship?",
      options: [
        { label: "Very clear. I won't lose all my boundaries just because I'm in love", value: 1 },
        { label: "I have them but sometimes love makes them blurry", value: 2 },
        { label: "What boundaries? Love means no limits", value: 3 },
      ],
    },
    {
      id: 'E2_q17', dim: 'E2',
      text: "Your partner runs into a big problem (like getting laid off / family emergency). You?",
      options: [
        { label: "Offer some comforting words but I won't get overly involved", value: 1 },
        { label: "Help as much as I can within my ability", value: 2 },
        { label: "Drop everything and go all in for them. Their problem is my problem", value: 3 },
      ],
    },
    {
      id: 'E2_q18', dim: 'E2',
      text: "Doing the mundane stuff in a relationship (cooking / cleaning / driving them around). How do you feel?",
      options: [
        { label: "Whoever wants to do it can do it. I'm not free labor", value: 1 },
        { label: "Occasionally is fine but it shouldn't become an obligation", value: 2 },
        { label: "Love it. Doing these things for someone I love makes me happy", value: 3 },
      ],
    },
    {
      id: 'E2_q19', dim: 'E2',
      text: "How do you express your love?",
      options: [
        { label: "Low-key. Keep it in my heart silently", value: 1 },
        { label: "Bubble up and express it once in a while", value: 2 },
        { label: "Burning like lava. I want the whole world to know", value: 3 },
      ],
    },
    {
      id: 'E2_q20', dim: 'E2',
      text: "Do you make long-term plans with your partner (where to live in a few years / cats or dogs)?",
      options: [
        { label: "Not really, just live in the moment", value: 1 },
        { label: "We chat about it sometimes but not too seriously", value: 2 },
        { label: "Yes! Our future-planning spreadsheet is already built", value: 3 },
      ],
    },
    {
      id: 'E2_q21', dim: 'E2',
      text: "Would you take a risk for a relationship (like long-distance / cross-country / family disapproval)?",
      options: [
        { label: "Too much hassle. Next", value: 1 },
        { label: "I'd seriously consider it but won't be reckless", value: 2 },
        { label: "If I'm in love, I'm all in. Obstacles are just paper tigers", value: 3 },
      ],
    },
    {
      id: 'E2_q22', dim: 'E2',
      text: "You like someone who doesn't like you back. How long would you keep at it?",
      options: [
        { label: "Once I know it's not happening, I bounce. Not dying on this hill", value: 1 },
        { label: "Try a few more times. If it still doesn't work out, move on", value: 2 },
        { label: "Might keep going for a long time, even knowing there's no hope", value: 3 },
      ],
    },
    {
      id: 'E2_q23', dim: 'E2',
      text: "When you miss someone, how intense is it?",
      options: [
        { label: "Think about them briefly, then it passes. Doesn't affect my day", value: 1 },
        { label: "Think of them from time to time with a tinge of sadness", value: 2 },
        { label: "They're all I can think about. Everything tastes like nothing", value: 3 },
      ],
    },
    {
      id: 'E2_q24', dim: 'E2',
      text: "When you're in a relationship, can you keep your eyes only on one person?",
      options: [
        { label: "Honestly not sure, but I'll try my best", value: 1 },
        { label: "Most of the time, yes", value: 2 },
        { label: "Obviously. Once I'm committed, they're the only one I see", value: 3 },
      ],
    },
    {
      id: 'E2_q25', dim: 'E2',
      text: "Your partner is going out with friends but you'd rather spend time with them. How do you handle it?",
      options: [
        { label: "No worries, we each have our own social lives", value: 1 },
        { label: "A little bummed but I support them going", value: 2 },
        { label: "Can I tag along...? Fine, I'll wait for you at home then", value: 3 },
      ],
    },
    {
      id: 'E2_q26', dim: 'E2',
      text: "Your partner did something that really hurt you, but they apologized. You?",
      options: [
        { label: "Apology is apology, but cross my line and I show no mercy", value: 1 },
        { label: "Depends on what it was. Small stuff I can forgive, big stuff takes time", value: 2 },
        { label: "A sincere apology earns my forgiveness. I don't hold grudges", value: 3 },
      ],
    },
    {
      id: 'E2_q27', dim: 'E2',
      text: "Do you remember the little details your partner mentions in passing (like 'I really want that cake')?",
      options: [
        { label: "Not really. My memory is goldfish-tier", value: 1 },
        { label: "Sometimes I catch them", value: 2 },
        { label: "Of course. And I'll find a way to make it happen", value: 3 },
      ],
    },
    {
      id: 'E2_q28', dim: 'E2',
      text: "After dating for a while, does your level of investment usually...?",
      options: [
        { label: "Decrease. Once the novelty wears off, so does the effort", value: 1 },
        { label: "Stay mostly stable", value: 2 },
        { label: "Get deeper. Love really does grow over time", value: 3 },
      ],
    },
    {
      id: 'E2_q29', dim: 'E2',
      text: "How long can you tolerate your partner's little quirks (snoring / leaving socks everywhere)?",
      options: [
        { label: "Very low tolerance. If it bugs me, I'm saying something", value: 1 },
        { label: "I can put up with it at first but might bring it up later", value: 2 },
        { label: "Love them, love all of them, quirks and all", value: 3 },
      ],
    },
    {
      id: 'E2_q30', dim: 'E2',
      text: "Watching a really moving love story / reading a romantic novel. You?",
      options: [
        { label: "Meh, I don't really get into it", value: 1 },
        { label: "A bit touching", value: 2 },
        { label: "Crying like a baby. Heavy projecting. Thinking about my own love life", value: 3 },
      ],
    },
    {
      id: 'E2_q31', dim: 'E2',
      text: "When should 'I like you' be said out loud?",
      options: [
        { label: "If I can avoid saying it, I will. Actions prove it", value: 1 },
        { label: "Once the feelings are confirmed, then say it", value: 2 },
        { label: "The moment my heart moves! Hesitate and you lose", value: 3 },
      ],
    },
    {
      id: 'E2_q32', dim: 'E2',
      text: "How strong is your urge to protect your partner from harm?",
      options: [
        { label: "They're an adult. They can handle themselves", value: 1 },
        { label: "I'll protect them within my ability", value: 2 },
        { label: "Full human-shield mode activated. Mess with them and you mess with me", value: 3 },
      ],
    },
    {
      id: 'E2_q33', dim: 'E2',
      text: "Would you proactively share your secrets and past with your partner?",
      options: [
        { label: "No. Some things should just rot inside me", value: 1 },
        { label: "Depends on the situation. Slowly over time", value: 2 },
        { label: "Yes. I want them to know the complete me", value: 3 },
      ],
    },
    {
      id: 'E2_q34', dim: 'E2',
      text: "When there's trouble in the relationship (like a fight or cold war), how do you handle it?",
      options: [
        { label: "Cold treatment. If it really doesn't work out, just call it", value: 1 },
        { label: "Wait until we've both cooled down, then talk it through", value: 2 },
        { label: "Proactively reach out. We can't let problems fester overnight", value: 3 },
      ],
    },
    {
      id: 'E2_q35', dim: 'E2',
      text: "After a breakup, how soon are you ready for a new relationship?",
      options: [
        { label: "Could be the same day. Can't hang on one tree forever", value: 1 },
        { label: "Need a few weeks to months to adjust", value: 2 },
        { label: "A very long time. I can't start something new until the last one is fully let go", value: 3 },
      ],
    },
    {
      id: 'E2_q36', dim: 'E2',
      text: "Your belief about love is closest to?",
      options: [
        { label: "Love is just hormones doing their thing", value: 1 },
        { label: "I believe in love but stay rational about it", value: 2 },
        { label: "I believe in true love, soulmates, and am a hopeless romantic warrior", value: 3 },
      ],
    },
    {
      id: 'E2_q37', dim: 'E2',
      text: "Your attitude toward making it official? How long before you're ready to commit?",
      options: [
        { label: "No rush, let's just hang out and see how it goes", value: 1 },
        { label: "Once it feels right, I'll lock it in", value: 2 },
        { label: "Once I'm sure about my feelings, I want to make it official ASAP. I hate the situationship phase", value: 3 },
      ],
    },
    {
      id: 'E2_q38', dim: 'E2',
      text: "Would you change your habits for your partner (like going to bed earlier / quitting smoking)?",
      options: [
        { label: "I am who I am. Why would I change for someone else", value: 1 },
        { label: "Reasonable changes are acceptable", value: 2 },
        { label: "I'd do anything for them. Whatever it takes, I'll change", value: 3 },
      ],
    },
    {
      id: 'E2_q39', dim: 'E2',
      text: "In a relationship, are you more of a 'head' person or a 'heart' person?",
      options: [
        { label: "Head. Rational analysis of pros and cons is the way", value: 1 },
        { label: "Half and half", value: 2 },
        { label: "Heart. How can you use logic for matters of love?", value: 3 },
      ],
    },
    {
      id: 'E2_q40', dim: 'E2',
      text: "Looking back at past relationships, how do you feel about yourself?",
      options: [
        { label: "Didn't invest much, so no real regrets either", value: 1 },
        { label: "Invested but held back", value: 2 },
        { label: "Gave everything every time. Even if it ended badly, I don't regret it", value: 3 },
      ],
    },
  ],

  // ═══════════ E3 Boundaries & Dependence ═══════════
  E3: [
    {
      id: 'E3_q1', dim: 'E3',
      text: "After getting into a relationship, your partner is extremely clingy. How do you really feel?",
      options: [
        { label: "Love it, wish we could be glued together 24/7", value: 1 },
        { label: "A moderate amount of clingy is fine, just don't overdo it", value: 2 },
        { label: "Suffocating, I need my own space", value: 3 },
      ],
    },
    {
      id: 'E3_q2', dim: 'E3',
      text: "I highly value personal space in any relationship",
      options: [
        { label: "I prefer being attached at the hip", value: 1 },
        { label: "Depends on the situation and the person", value: 2 },
        { label: "Yes, my territory is sacred and non-negotiable", value: 3 },
      ],
    },
    {
      id: 'E3_q3', dim: 'E3',
      text: "Your partner wants your phone password, live location sharing, and linked payment accounts. You?",
      options: [
        { label: "Sure sure sure, that's what true love looks like", value: 1 },
        { label: "Password is negotiable, location sharing is a no", value: 2 },
        { label: "All three of those cross my boundaries", value: 3 },
      ],
    },
    {
      id: 'E3_q4', dim: 'E3',
      text: "What's your ideal relationship dynamic?",
      options: [
        { label: "Conjoined twins mode: 24/7 together", value: 1 },
        { label: "Do our own thing on weekdays, date on weekends", value: 2 },
        { label: "Live our own lives, meet up when we feel like it", value: 3 },
      ],
    },
    {
      id: 'E3_q5', dim: 'E3',
      text: "Your partner wants to go shopping this weekend but you just wanna stay home and game. What do you do?",
      options: [
        { label: "Of course I'll go, their happiness matters most", value: 1 },
        { label: "Negotiate -- shopping in the morning, gaming in the afternoon", value: 2 },
        { label: "I need some alone time today, go without me", value: 3 },
      ],
    },
    {
      id: 'E3_q6', dim: 'E3',
      text: "In a relationship, two people should be like?",
      options: [
        { label: "A pair of chopsticks, always side by side", value: 1 },
        { label: "Two planets, intersecting orbits but each with their own path", value: 2 },
        { label: "Two independent WiFi networks, occasionally connecting", value: 3 },
      ],
    },

    {
      id: 'E3_q7', dim: 'E3',
      text: "Your partner suggests merging all your bank accounts into one. You?",
      options: [
        { label: "Yay! Merging finances = real family vibes", value: 1 },
        { label: "A joint account is fine but I'm keeping some secret stash money", value: 2 },
        { label: "We can go Dutch and that's already too close. Hands off my money", value: 3 },
      ],
    },
    {
      id: 'E3_q8', dim: 'E3',
      text: "You haven't seen your partner all day. What's your battery level?",
      options: [
        { label: "5%, about to shut down, need to recharge immediately (cuddles)", value: 1 },
        { label: "50%, miss them but I can hold on", value: 2 },
        { label: "95%, alone time IS my fast charger", value: 3 },
      ],
    },
    {
      id: 'E3_q9', dim: 'E3',
      text: "Your partner goes to karaoke with friends and didn't invite you. You?",
      options: [
        { label: "Why didn't you bring me?! My abandonment issues just activated!", value: 1 },
        { label: "A little salty but I can deal", value: 2 },
        { label: "Nice, I finally get to binge-watch my show in peace", value: 3 },
      ],
    },
    {
      id: 'E3_q10', dim: 'E3',
      text: "You and your partner fight over 'you need too much / too little space.' Your inner monologue?",
      options: [
        { label: "I just need you to be there for me, is that so wrong?!", value: 1 },
        { label: "Okay let's sit down and talk about boundaries", value: 2 },
        { label: "Good point. I'm gonna head home and cool off first", value: 3 },
      ],
    },
    {
      id: 'E3_q11', dim: 'E3',
      text: "Three months in, your partner suggests moving in together. You?",
      options: [
        { label: "Let's gooo! Cohabiting is the true relationship unlock", value: 1 },
        { label: "Isn't it a bit soon? Let's wait and see", value: 2 },
        { label: "Three months? I might not be ready in three YEARS", value: 3 },
      ],
    },
    {
      id: 'E3_q12', dim: 'E3',
      text: "Your partner asks for your social media passwords to 'prove you trust them.' You?",
      options: [
        { label: "Here you go, love means total transparency", value: 1 },
        { label: "You can peek sometimes but don't go snooping", value: 2 },
        { label: "My passwords are a hard boundary, not up for discussion", value: 3 },
      ],
    },
    {
      id: 'E3_q13', dim: 'E3',
      text: "Vacation time! What do you want to do?",
      options: [
        { label: "Travel with bae! Every scenic moment must be shared", value: 1 },
        { label: "Go together but with some free time for ourselves", value: 2 },
        { label: "Solo backpacking trip -- traveling alone is the real romance", value: 3 },
      ],
    },
    {
      id: 'E3_q14', dim: 'E3',
      text: "You discover your partner secretly read your journal / notes. You?",
      options: [
        { label: "It's fine, my life is their soap opera anyway", value: 1 },
        { label: "Not great, but we can talk about it", value: 2 },
        { label: "Absolutely livid! That's my mental sanctuary!", value: 3 },
      ],
    },
    {
      id: 'E3_q15', dim: 'E3',
      text: "Do you ask your partner's opinion before buying clothes or changing your hairstyle?",
      options: [
        { label: "Always, I even ask what to eat for lunch", value: 1 },
        { label: "Big decisions yes, small stuff I handle myself", value: 2 },
        { label: "My body my choice, why would I ask?", value: 3 },
      ],
    },
    {
      id: 'E3_q16', dim: 'E3',
      text: "You and your partner have completely different hobbies. Your take?",
      options: [
        { label: "I'll learn theirs -- merging interests is the way", value: 1 },
        { label: "Do our own things, occasionally try each other's hobbies", value: 2 },
        { label: "Perfect, having separate worlds is healthy", value: 3 },
      ],
    },
    {
      id: 'E3_q17', dim: 'E3',
      text: "Closing the bathroom door when you go -- what's your stance?",
      options: [
        { label: "We're practically married, what's a door?", value: 1 },
        { label: "Depends on the stage of the relationship, early on yes", value: 2 },
        { label: "Closed till the end of time. Non-negotiable boundary", value: 3 },
      ],
    },
    {
      id: 'E3_q18', dim: 'E3',
      text: "Your partner grabs the last chip from YOUR bag. You?",
      options: [
        { label: "What's mine is theirs, as long as they're happy", value: 1 },
        { label: "A little heartbroken but I'll buy an extra bag next time", value: 2 },
        { label: "Touch my chips? That's an act of war", value: 3 },
      ],
    },
    {
      id: 'E3_q19', dim: 'E3',
      text: "A friend hangout doesn't include your partner, and they don't want to go anyway. You?",
      options: [
        { label: "If they're not going, I'm not going. We're a package deal", value: 1 },
        { label: "I'll go but come home early to be with them", value: 2 },
        { label: "I'll just go, my social life doesn't need partner approval", value: 3 },
      ],
    },
    {
      id: 'E3_q20', dim: 'E3',
      text: "What's your ideal sleeping arrangement?",
      options: [
        { label: "Cuddled up like a koala on a tree", value: 1 },
        { label: "Same bed but each with our own zones", value: 2 },
        { label: "Separate blankets, maybe even separate rooms. Sleep quality is king", value: 3 },
      ],
    },
    {
      id: 'E3_q21', dim: 'E3',
      text: "In the morning, do you prefer?",
      options: [
        { label: "Getting up together, brushing teeth together, breakfast together -- full combo", value: 1 },
        { label: "Get up at our own pace, maybe eat together", value: 2 },
        { label: "Don't talk to me, I'm not human until I'm fully awake", value: 3 },
      ],
    },
    {
      id: 'E3_q22', dim: 'E3',
      text: "Both WFH. What's your ideal setup?",
      options: [
        { label: "Same desk, face to face! Love fuels productivity", value: 1 },
        { label: "Same room, each doing our own thing", value: 2 },
        { label: "Door closed, separate rooms. I need my cubicle of solitude", value: 3 },
      ],
    },
    {
      id: 'E3_q23', dim: 'E3',
      text: "Your partner hasn't replied for an hour. How many follow-up messages did you send?",
      options: [
        { label: "At least 5 texts, 2 voice messages, and 1 video call", value: 1 },
        { label: "One 'whatcha up to?' and then wait", value: 2 },
        { label: "Zero. They've got their own stuff going on", value: 3 },
      ],
    },
    {
      id: 'E3_q24', dim: 'E3',
      text: "Your partner wants you both to share real-time locations. You?",
      options: [
        { label: "Sure! Two-way binding makes me feel safe", value: 1 },
        { label: "For trips, fine. For everyday life, nah", value: 2 },
        { label: "I'm not a delivery driver, I don't need real-time tracking", value: 3 },
      ],
    },
    {
      id: 'E3_q25', dim: 'E3',
      text: "Your partner touches your figurines / makeup collection / prized possessions. You?",
      options: [
        { label: "No biggie, they can use whatever of mine", value: 1 },
        { label: "They can touch but please put it back where it was, thanks", value: 2 },
        { label: "Territorial defense mode activated. Please put it down immediately", value: 3 },
      ],
    },
    {
      id: 'E3_q26', dim: 'E3',
      text: "When you're feeling down, you'd rather?",
      options: [
        { label: "Vent to my partner ASAP, they're my only outlet", value: 1 },
        { label: "Process it myself first, then decide whether to share", value: 2 },
        { label: "Be alone. Do not disturb", value: 3 },
      ],
    },
    {
      id: 'E3_q27', dim: 'E3',
      text: "The eternal holiday dilemma: whose family do we visit? Your take?",
      options: [
        { label: "We go together, either family works", value: 1 },
        { label: "Take turns or negotiate", value: 2 },
        { label: "Each visit our own family. Problem solved, everyone's happy", value: 3 },
      ],
    },
    {
      id: 'E3_q28', dim: 'E3',
      text: "Your partner says 'you should spend more time on self-improvement.' You?",
      options: [
        { label: "Whatever they say goes, I'll start improving right now", value: 1 },
        { label: "Fair point, I'll take it into consideration", value: 2 },
        { label: "My life, my schedule. Thanks for the input though", value: 3 },
      ],
    },
    {
      id: 'E3_q29', dim: 'E3',
      text: "After getting into a relationship, do you still maintain your own friend group?",
      options: [
        { label: "Partner is my whole world, friends can come and go", value: 1 },
        { label: "I keep them but admittedly see them less", value: 2 },
        { label: "Absolutely maintain them. A relationship isn't a social life replacement", value: 3 },
      ],
    },
    {
      id: 'E3_q30', dim: 'E3',
      text: "Would your social media profile pic change after getting into a relationship?",
      options: [
        { label: "Matching couple pics, gotta announce it to the world", value: 1 },
        { label: "Might change it but not necessarily to a couple pic", value: 2 },
        { label: "Still my own pic. My social media is MY territory", value: 3 },
      ],
    },
    {
      id: 'E3_q31', dim: 'E3',
      text: "Your partner says 'I want to travel solo this holiday.' Your first reaction?",
      options: [
        { label: "Why not bring me?! Do you not love me anymore?!", value: 1 },
        { label: "A bit bummed but I get it", value: 2 },
        { label: "Nice, I'll plan my own itinerary then!", value: 3 },
      ],
    },
    {
      id: 'E3_q32', dim: 'E3',
      text: "Would you discuss a career change with your partner first?",
      options: [
        { label: "Obviously! Their opinion matters more than my boss's", value: 1 },
        { label: "I'd mention it but the final call is mine", value: 2 },
        { label: "My career, my decision. I'm the CEO of my own life", value: 3 },
      ],
    },
    {
      id: 'E3_q33', dim: 'E3',
      text: "Your medical test results come back. Do you immediately show your partner?",
      options: [
        { label: "Of course, they need to know all my health stats", value: 1 },
        { label: "If something's off I'll share, otherwise no need", value: 2 },
        { label: "That's my private info. If there's an issue I'll handle it myself", value: 3 },
      ],
    },
    {
      id: 'E3_q34', dim: 'E3',
      text: "How financially independent are you in a relationship?",
      options: [
        { label: "Yours, mine, it's all ours -- sharing economy baby", value: 1 },
        { label: "Split big expenses, don't sweat the small stuff", value: 2 },
        { label: "Completely independent finances. Do not cross the line", value: 3 },
      ],
    },
    {
      id: 'E3_q35', dim: 'E3',
      text: "Do you need your own creative / thinking space?",
      options: [
        { label: "Nope, having my partner nearby actually inspires me", value: 1 },
        { label: "Sometimes, but it's not a must", value: 2 },
        { label: "Hard yes! Without alone space I mentally implode", value: 3 },
      ],
    },
    {
      id: 'E3_q36', dim: 'E3',
      text: "How do you recharge in a relationship?",
      options: [
        { label: "Being with my partner IS my recharger", value: 1 },
        { label: "Need both, depends on today's energy level", value: 2 },
        { label: "Solo time is my power bank. Do not disturb", value: 3 },
      ],
    },
    {
      id: 'E3_q37', dim: 'E3',
      text: "For trips or business travel, you prefer?",
      options: [
        { label: "Bring my partner, glued together wherever we go", value: 1 },
        { label: "Depends -- short trips solo, long trips together", value: 2 },
        { label: "Riding solo. Freedom is my highest calling", value: 3 },
      ],
    },
    {
      id: 'E3_q38', dim: 'E3',
      text: "How often should you and your partner text each day?",
      options: [
        { label: "Non-stop from morning to night. Left on read = silent treatment", value: 1 },
        { label: "Good morning, good night, and a few messages in between", value: 2 },
        { label: "Text when there's something to say, otherwise we're both busy. Efficiency first", value: 3 },
      ],
    },
    {
      id: 'E3_q39', dim: 'E3',
      text: "Would you want to share a calendar with your partner?",
      options: [
        { label: "Yes! Synced schedules give me peace of mind", value: 1 },
        { label: "Just important dates are fine", value: 2 },
        { label: "My schedule is classified information", value: 3 },
      ],
    },
    {
      id: 'E3_q40', dim: 'E3',
      text: "What's the ideal ratio of mutual friends vs. separate friends?",
      options: [
        { label: "Ideally all mutual friends -- that's true love", value: 1 },
        { label: "Some overlap, some separate circles", value: 2 },
        { label: "Mostly independent friend groups, occasional joint hangouts", value: 3 },
      ],
    },
  ],

  // ═══════════ A1 Worldview ═══════════
  A1: [
    {
      id: 'A1_q1', dim: 'A1',
      text: 'Do you believe most people are good?',
      options: [
        { label: 'Bad people are more common than hemorrhoids', value: 1 },
        { label: "It's about 50/50", value: 2 },
        { label: "Yes, I choose to believe there's more goodness out there", value: 3 },
      ],
    },
    {
      id: 'A1_q2', dim: 'A1',
      text: 'An adorable little girl skips over to you and hands you a lollipop. You?',
      options: [
        { label: "New scam? Gotta run", value: 1 },
        { label: 'Confused.jpg', value: 2 },
        { label: "Aww so cute! I'll take it!", value: 3 },
      ],
    },
    {
      id: 'A1_q3', dim: 'A1',
      text: "Someone falls down on the street. What's your first reaction?",
      options: [
        { label: 'Scam alert, maintain a 10-foot safety distance', value: 1 },
        { label: 'Film it for evidence first, then decide whether to help', value: 2 },
        { label: "Go over and check on them first", value: 3 },
      ],
    },
    {
      id: 'A1_q4', dim: 'A1',
      text: '"Everyone is out for themselves" -- what\'s your take?',
      options: [
        { label: 'Gospel truth, should be printed in textbooks', value: 1 },
        { label: "There's some truth to it but it's too absolute", value: 2 },
        { label: "Disagree, plenty of people genuinely help others", value: 3 },
      ],
    },
    {
      id: 'A1_q5', dim: 'A1',
      text: 'A stranger smiles at you on the subway. You?',
      options: [
        { label: "Is there something on my face? Are they about to steal my phone?", value: 1 },
        { label: "Not sure what that was about but I'll smile back", value: 2 },
        { label: 'What a warm moment in my day', value: 3 },
      ],
    },
    {
      id: 'A1_q6', dim: 'A1',
      text: 'What\'s your take on "there are no good people on the internet"?',
      options: [
        { label: "Fact. Everyone behind a screen is a demon", value: 1 },
        { label: "Some good some bad, better to be careful", value: 2 },
        { label: "Disagree, I've met genuinely kind people online", value: 3 },
      ],
    },

    {
      id: 'A1_q7', dim: 'A1',
      text: "Do you think the government / system actually looks out for ordinary people?",
      options: [
        { label: "Please, we're just crops waiting to be harvested", value: 1 },
        { label: "Some things yes, some things no", value: 2 },
        { label: "Overall improving, I'm willing to give it some credit", value: 3 },
      ],
    },
    {
      id: 'A1_q8', dim: 'A1',
      text: "Someone deeply hurt you. Can you forgive them?",
      options: [
        { label: "Nope, my grudge meter is higher than a raid boss", value: 1 },
        { label: "Depends how bad the damage was", value: 2 },
        { label: "I can let it go, holding grudges is exhausting", value: 3 },
      ],
    },
    {
      id: 'A1_q9', dim: 'A1',
      text: "Do you think 'justice' is a real thing in this world?",
      options: [
        { label: "Justice? There's only power and money", value: 1 },
        { label: "It exists but it's always fashionably late", value: 2 },
        { label: "Yes, it's imperfect but it's always there", value: 3 },
      ],
    },
    {
      id: 'A1_q10', dim: 'A1',
      text: "When someone succeeds, what do you think is the main reason?",
      options: [
        { label: "They won the birth lottery, everything else is cope", value: 1 },
        { label: "50% luck, 50% effort", value: 2 },
        { label: "Effort is the main factor, luck is a bonus", value: 3 },
      ],
    },
    {
      id: 'A1_q11', dim: 'A1',
      text: "You see a viral breaking news story online. Your first reaction?",
      options: [
        { label: "More rage bait, just media manipulation", value: 1 },
        { label: "Let me check multiple sources before judging", value: 2 },
        { label: "Should stay rational but I'll believe it for now", value: 3 },
      ],
    },
    {
      id: 'A1_q12', dim: 'A1',
      text: "A friend shares a wild conspiracy theory with you. You?",
      options: [
        { label: "Go on, go on... the world is deeper than we think", value: 1 },
        { label: "Interesting but I'm not buying all of it", value: 2 },
        { label: "That's way too out there. Ever heard of Occam's Razor?", value: 3 },
      ],
    },
    {
      id: 'A1_q13', dim: 'A1',
      text: "Someone who once betrayed you says they want to be friends again. You?",
      options: [
        { label: "You think I have the memory of a goldfish? Bye", value: 1 },
        { label: "Keep my distance and observe for a while", value: 2 },
        { label: "People can change. I'm willing to give them a chance", value: 3 },
      ],
    },
    {
      id: 'A1_q14', dim: 'A1',
      text: "Do you think humanity overall is getting better or worse?",
      options: [
        { label: "Each generation is worse than the last, society's going downhill", value: 1 },
        { label: "Ups and downs, moving forward in waves", value: 2 },
        { label: "Getting better overall, don't let the doomscrolling fool you", value: 3 },
      ],
    },
    {
      id: 'A1_q15', dim: 'A1',
      text: "Someone starts a crowdfunding campaign saying their family member is sick. You?",
      options: [
        { label: "9 out of 10 are scams, swipe away", value: 1 },
        { label: "If a trustworthy platform backs it I might consider", value: 2 },
        { label: "Donate a little first, what if it's real?", value: 3 },
      ],
    },
    {
      id: 'A1_q16', dim: 'A1',
      text: "Do you think big corporations genuinely do charity?",
      options: [
        { label: "Charity? That's called reputation laundering + tax evasion", value: 1 },
        { label: "Motives might be mixed but there's objective benefit", value: 2 },
        { label: "Some are genuine, can't paint them all with one brush", value: 3 },
      ],
    },
    {
      id: 'A1_q17', dim: 'A1',
      text: "How much do you trust what scientists / experts say?",
      options: [
        { label: "Experts? More like paid shills. Whoever funds them owns them", value: 1 },
        { label: "Take it as reference but keep my own judgment", value: 2 },
        { label: "Pros do pro things, I basically trust them", value: 3 },
      ],
    },
    {
      id: 'A1_q18', dim: 'A1',
      text: "What do you think about sayings like 'everything happens for a reason'?",
      options: [
        { label: "BS, fate is just random events", value: 1 },
        { label: "Don't really buy it but sometimes there are too many coincidences", value: 2 },
        { label: "I believe some higher order exists", value: 3 },
      ],
    },
    {
      id: 'A1_q19', dim: 'A1',
      text: "Do you think 'what goes around comes around' is legit?",
      options: [
        { label: "Nope, good people getting screwed happens way too often", value: 1 },
        { label: "Not always but I want to believe it", value: 2 },
        { label: "In the long run, yes. Karma is real", value: 3 },
      ],
    },
    {
      id: 'A1_q20', dim: 'A1',
      text: "Do you think humans will be better or worse off in 100 years?",
      options: [
        { label: "Probably toast -- resources depleted or AI overlords", value: 1 },
        { label: "Hard to say, too many variables", value: 2 },
        { label: "Better. Humans have always figured things out", value: 3 },
      ],
    },
    {
      id: 'A1_q21', dim: 'A1',
      text: "Someone says 'let\'s do something for the environment together.' You?",
      options: [
        { label: "Environmentalism is a game for corporations, none of my business", value: 1 },
        { label: "I support the idea but action depends on my mood", value: 2 },
        { label: "Sure, even small actions count", value: 3 },
      ],
    },
    {
      id: 'A1_q22', dim: 'A1',
      text: "Do you think society is fair for most people?",
      options: [
        { label: "Fair? Only if you're rich", value: 1 },
        { label: "Not perfect but trying", value: 2 },
        { label: "Mostly fair. Individual effort can change your fate", value: 3 },
      ],
    },
    {
      id: 'A1_q23', dim: 'A1',
      text: "Seeing the wealth gap between rich and poor getting bigger. You?",
      options: [
        { label: "This world is just one giant unfairness machine", value: 1 },
        { label: "It's a problem but not totally hopeless", value: 2 },
        { label: "The gap will shrink, society self-corrects", value: 3 },
      ],
    },
    {
      id: 'A1_q24', dim: 'A1',
      text: "Do you think the current education system is legit?",
      options: [
        { label: "Mass-producing cogs for the machine. Not legit", value: 1 },
        { label: "Has issues but also has merits", value: 2 },
        { label: "Pretty decent overall, plus you gotta take initiative too", value: 3 },
      ],
    },
    {
      id: 'A1_q25', dim: 'A1',
      text: "If you got seriously ill, would you trust the hospital or Google it yourself?",
      options: [
        { label: "Hospitals are money machines, I'll research it myself first", value: 1 },
        { label: "See a doctor but also do my own homework", value: 2 },
        { label: "Leave it to the professionals, I trust expertise", value: 3 },
      ],
    },
    {
      id: 'A1_q26', dim: 'A1',
      text: "How much of what you see on social media do you think is true?",
      options: [
        { label: "Less than 30%, it's all made up by clickbait accounts", value: 1 },
        { label: "Half true half fake, gotta filter it yourself", value: 2 },
        { label: "Mostly credible but always think critically", value: 3 },
      ],
    },
    {
      id: 'A1_q27', dim: 'A1',
      text: "Someone says 'history is written by the winners.' Do you agree?",
      options: [
        { label: "Totally. History is just a brainwashing textbook", value: 1 },
        { label: "Fair point but it's not ALL fabricated", value: 2 },
        { label: "Truth surfaces eventually. History can withstand scrutiny", value: 3 },
      ],
    },
    {
      id: 'A1_q28', dim: 'A1',
      text: "How do you feel about the cultural vibe of your country / city?",
      options: [
        { label: "It's a spiritual wasteland, where do I even begin", value: 1 },
        { label: "Some aspects are good, some not so much", value: 2 },
        { label: "Pretty great actually, it has its own unique charm", value: 3 },
      ],
    },
    {
      id: 'A1_q29', dim: 'A1',
      text: "Do you think technology will make human life better or worse?",
      options: [
        { label: "Worse. AI's coming for my job, cyberpunk dystopia incoming", value: 1 },
        { label: "Double-edged sword, depends on how we use it", value: 2 },
        { label: "Better. Tech progress improving lives is the main storyline", value: 3 },
      ],
    },
    {
      id: 'A1_q30', dim: 'A1',
      text: "Do you think human nature can change?",
      options: [
        { label: "A leopard can't change its spots, it's all in the DNA", value: 1 },
        { label: "Can be tweaked a bit but the core stays the same", value: 2 },
        { label: "Of course, humans are capable of growth", value: 3 },
      ],
    },
    {
      id: 'A1_q31', dim: 'A1',
      text: "Walking alone at night and you run into a stranger. Your alert level?",
      options: [
        { label: "Maximum threat level -- already mentally rehearsing escape routes", value: 1 },
        { label: "A bit tense but staying calm", value: 2 },
        { label: "Just walk normally, not every stranger is dangerous", value: 3 },
      ],
    },
    {
      id: 'A1_q32', dim: 'A1',
      text: "Do you agree with 'each generation is worse than the last'?",
      options: [
        { label: "Yes, kids these days are hopeless", value: 1 },
        { label: "Every generation has its own set of problems", value: 2 },
        { label: "Nope, each generation tackles new challenges in new ways", value: 3 },
      ],
    },
    {
      id: 'A1_q33', dim: 'A1',
      text: "Do you believe society rewards hard work?",
      options: [
        { label: "Don't kid yourself, class mobility is dead", value: 1 },
        { label: "Hard work helps but it's not the only factor", value: 2 },
        { label: "Yes, not 100% guaranteed but very likely to pay off", value: 3 },
      ],
    },
    {
      id: 'A1_q34', dim: 'A1',
      text: "Do you think friendships are genuinely sincere?",
      options: [
        { label: "It's all transactional, real friends don't exist", value: 1 },
        { label: "A few are real, most are just social networking", value: 2 },
        { label: "I trust my friends. Sincerity is the foundation", value: 3 },
      ],
    },
    {
      id: 'A1_q35', dim: 'A1',
      text: "Is love real or just a hormone scam?",
      options: [
        { label: "Hormones + dopamine, science has explained it all", value: 1 },
        { label: "There's chemistry involved but it's more than just chemistry", value: 2 },
        { label: "Love is real and transcends chemical reactions", value: 3 },
      ],
    },
    {
      id: 'A1_q36', dim: 'A1',
      text: "What's your take on 'working hard'?",
      options: [
        { label: "It's all hustle culture brainwashing, who actually wants to grind?", value: 1 },
        { label: "Some people genuinely love it, others are just forced to", value: 2 },
        { label: "Hard work is a virtue. Creating value with your own hands is awesome", value: 3 },
      ],
    },
    {
      id: 'A1_q37', dim: 'A1',
      text: "Scientists say 'the planet is warming / vaccines are safe.' Do you believe them?",
      options: [
        { label: "Scientists can be bought too, can't trust them fully", value: 1 },
        { label: "Probably right but I maintain healthy skepticism", value: 2 },
        { label: "Scientific consensus is trustworthy. I respect the evidence", value: 3 },
      ],
    },
    {
      id: 'A1_q38', dim: 'A1',
      text: "Do you trust the people in charge of managing you?",
      options: [
        { label: "People in power? Not a good one among them", value: 1 },
        { label: "Some good, some bad, can't generalize", value: 2 },
        { label: "Most are genuinely trying to do their jobs", value: 3 },
      ],
    },
    {
      id: 'A1_q39', dim: 'A1',
      text: "How would you describe the neighborhood vibes where you live?",
      options: [
        { label: "Complete strangers, I don't even know who lives next door", value: 1 },
        { label: "Nod and say hi but no deep connections", value: 2 },
        { label: "Pretty nice, there's a genuine sense of community", value: 3 },
      ],
    },
    {
      id: 'A1_q40', dim: 'A1',
      text: "Sum it up: your overall trust level in this world?",
      options: [
        { label: "Trust level is negative. This world is not worth it", value: 1 },
        { label: "50 out of 100. Cautiously optimistic", value: 2 },
        { label: "80+. The world has problems but it's still worth loving", value: 3 },
      ],
    },
  ],

  // ═══════════ A2 Rules & Flexibility ═══════════
  A2: [
    {
      id: 'A2_q1', dim: 'A2',
      text: "There's an exam coming up and you have mandatory study hall, but your crush invites you to game. What do you do?",
      options: [
        { label: "Skip it, gaming takes priority (jk... unless?)", value: 1 },
        { label: "Ask for a pass? Meet in the middle somehow", value: 2 },
        { label: "Exam's coming up, who's gaming right now?", value: 3 },
      ],
    },
    {
      id: 'A2_q2', dim: 'A2',
      text: "I like breaking conventions, I don't like being bound by rules",
      options: [
        { label: "Agreed, rules are made to be broken", value: 1 },
        { label: "Depends on which rules", value: 2 },
        { label: "Disagree, without rules there's chaos", value: 3 },
      ],
    },
    {
      id: 'A2_q3', dim: 'A2',
      text: "GPS shows a shortcut through a no-left-turn road that saves 15 minutes. You?",
      options: [
        { label: "No camera means it's basically legal (not)", value: 1 },
        { label: "Check if there's a cop first, then decide", value: 2 },
        { label: "Rules are rules, take the proper route", value: 3 },
      ],
    },
    {
      id: 'A2_q4', dim: 'A2',
      text: "Your boss implements a process you think is stupid. What do you do?",
      options: [
        { label: "Secretly do it my own way, boss won't notice if they're not looking", value: 1 },
        { label: "Try the boss's way first, adjust if it doesn't work", value: 2 },
        { label: "Follow the process, the boss is the one accountable after all", value: 3 },
      ],
    },
    {
      id: 'A2_q5', dim: 'A2',
      text: "Which motto resonates with you more?",
      options: [
        { label: "My road, my rules", value: 1 },
        { label: "Be flexible when needed, follow rules when needed", value: 2 },
        { label: "Without rules, there is no order", value: 3 },
      ],
    },
    {
      id: 'A2_q6', dim: 'A2',
      text: "You're in line for bubble tea and there's a gap you could cut into without anyone noticing. You?",
      options: [
        { label: "Slide in, time is money", value: 1 },
        { label: "Hesitate for three seconds then stay in line", value: 2 },
        { label: "No way, cutting in line is wrong", value: 3 },
      ],
    },

    {
      id: 'A2_q7', dim: 'A2',
      text: "Your friend recently gained weight and asks 'do I look fat?' You?",
      options: [
        { label: "White lies exist for a reason: 'Not at all!'", value: 1 },
        { label: "Hmm... maybe a little more... rounded?", value: 2 },
        { label: "Tell it like it is -- brutal but honest", value: 3 },
      ],
    },
    {
      id: 'A2_q8', dim: 'A2',
      text: "The cashier accidentally gives you an extra $50 in change. You?",
      options: [
        { label: "Pretend I didn't notice. Lucky day!", value: 1 },
        { label: "Wrestle with it internally... fine, I'll give it back", value: 2 },
        { label: "Point it out and return it immediately", value: 3 },
      ],
    },
    {
      id: 'A2_q9', dim: 'A2',
      text: "Filing expenses or taxes and you hit a gray area. You?",
      options: [
        { label: "Claim as much as I can, gotta maximize the bag", value: 1 },
        { label: "Push the envelope a little but nothing crazy", value: 2 },
        { label: "Follow the rules strictly, no risks worth taking", value: 3 },
      ],
    },
    {
      id: 'A2_q10', dim: 'A2',
      text: "Your thoughts on pirating movies / music?",
      options: [
        { label: "Piracy is king, freeloading brings me joy", value: 1 },
        { label: "Pay when I can, otherwise... you know how it is", value: 2 },
        { label: "Always go legit, creators deserve to be paid", value: 3 },
      ],
    },
    {
      id: 'A2_q11', dim: 'A2',
      text: "Your friend got falsely blamed by the boss. You could testify but it means crossing the boss. You?",
      options: [
        { label: "Of course I'll help! Loyalty over office politics", value: 1 },
        { label: "Try to figure out how to not offend either side", value: 2 },
        { label: "Speak truthfully but go through proper channels", value: 3 },
      ],
    },
    {
      id: 'A2_q12', dim: 'A2',
      text: "Your parking meter expired but you only need 5 more minutes. You?",
      options: [
        { label: "5 minutes, I'll gamble on not getting a ticket", value: 1 },
        { label: "Hurry up and finish then bounce", value: 2 },
        { label: "Go refill the meter first. Rules are rules", value: 3 },
      ],
    },
    {
      id: 'A2_q13', dim: 'A2',
      text: "3 AM at an intersection. No cars, no people. Red light. You're on foot. You?",
      options: [
        { label: "Just walk. People who wait are NPCs", value: 1 },
        { label: "Look both ways then cross", value: 2 },
        { label: "Wait for green. Rules don't have business hours", value: 3 },
      ],
    },
    {
      id: 'A2_q14', dim: 'A2',
      text: "Company dress code says formal attire but you find it uncomfortable. You?",
      options: [
        { label: "Wear whatever's comfy, if the boss doesn't say anything it's fine", value: 1 },
        { label: "Split the difference with business casual", value: 2 },
        { label: "Rules are rules, suit up", value: 3 },
      ],
    },
    {
      id: 'A2_q15', dim: 'A2',
      text: "Sneaking outside snacks into a movie theater. How do you feel about that?",
      options: [
        { label: "Standard procedure, theater snacks are highway robbery", value: 1 },
        { label: "Do it occasionally, not a huge deal", value: 2 },
        { label: "Not great, they have their rules for a reason", value: 3 },
      ],
    },
    {
      id: 'A2_q16', dim: 'A2',
      text: "Highway speed limit is 75 but the road is empty. You?",
      options: [
        { label: "Floor it to 95, speed limits are for beginners", value: 1 },
        { label: "Go a little over, maybe 80-ish", value: 2 },
        { label: "75 means 75. Safety first", value: 3 },
      ],
    },
    {
      id: 'A2_q17', dim: 'A2',
      text: "During an exam, the person next to you whispers 'what's the answer to this one?' You?",
      options: [
        { label: "Give them the answer. Bros help bros", value: 1 },
        { label: "Wrestle with it but give a vague hint", value: 2 },
        { label: "No way, cheating is where I draw the line", value: 3 },
      ],
    },
    {
      id: 'A2_q18', dim: 'A2',
      text: "Your whole family shares one streaming subscription. Thoughts?",
      options: [
        { label: "Add a few friends too, the more the merrier", value: 1 },
        { label: "Family sharing is fine, just don't go overboard", value: 2 },
        { label: "One account per person, that's what the terms say", value: 3 },
      ],
    },
    {
      id: 'A2_q19', dim: 'A2',
      text: "You have an expired coupon but the cashier doesn't notice. You?",
      options: [
        { label: "Keep quiet and score the discount", value: 1 },
        { label: "Feel a bit guilty but still use it", value: 2 },
        { label: "Tell the cashier it's expired. Not gonna game the system", value: 3 },
      ],
    },
    {
      id: 'A2_q20', dim: 'A2',
      text: "Using the company computer for personal stuff (paying bills, online shopping). You?",
      options: [
        { label: "My work computer is basically my second personal device", value: 1 },
        { label: "Quick personal tasks that don't affect work are fine", value: 2 },
        { label: "Keep work and personal separate. Use my own phone", value: 3 },
      ],
    },
    {
      id: 'A2_q21', dim: 'A2',
      text: "Your boss is running an incredibly boring meeting. You?",
      options: [
        { label: "Openly scroll my phone, nobody's watching anyway", value: 1 },
        { label: "Pretend to take notes while mentally checked out", value: 2 },
        { label: "Pay attention, it's still work after all", value: 3 },
      ],
    },
    {
      id: 'A2_q22', dim: 'A2',
      text: "You took some sticky notes / pens / tape from the office home. Thoughts?",
      options: [
        { label: "That's not stealing, that's relocating office supplies", value: 1 },
        { label: "Small stuff, nobody cares right?", value: 2 },
        { label: "Won't do it, company property stays at the company", value: 3 },
      ],
    },
    {
      id: 'A2_q23', dim: 'A2',
      text: "Eating breakfast on the subway where food isn't allowed, but you're running late. You?",
      options: [
        { label: "Eat it, it's not like I'm having a barbecue", value: 1 },
        { label: "Eat discreetly and hope nobody notices", value: 2 },
        { label: "Wait till I get off. Rules are rules", value: 3 },
      ],
    },
    {
      id: 'A2_q24', dim: 'A2',
      text: "That software you're using actually needs a paid license. You?",
      options: [
        { label: "Cracked version for the win, paying is never happening", value: 1 },
        { label: "Use it for now, buy legit when I can afford it", value: 2 },
        { label: "Buy the license. Respect intellectual property", value: 3 },
      ],
    },
    {
      id: 'A2_q25', dim: 'A2',
      text: "You bought something online, used it for a month, and the return window is still open. You?",
      options: [
        { label: "Return it. Consumer rights baby", value: 1 },
        { label: "Feel awkward about it but if I'm truly unsatisfied then yeah", value: 2 },
        { label: "Used it so I'll keep it. That's just being decent", value: 3 },
      ],
    },
    {
      id: 'A2_q26', dim: 'A2',
      text: "Restaurant has a minimum spend requirement but you just want a coffee. You?",
      options: [
        { label: "Sit down and order just the coffee. Whatever their rules say", value: 1 },
        { label: "Order enough to meet the minimum or go somewhere else", value: 2 },
        { label: "If there's a rule, respect it. I'll go elsewhere", value: 3 },
      ],
    },
    {
      id: 'A2_q27', dim: 'A2',
      text: "It's 11 PM and you wanna belt out some tunes, but your neighbors might be sleeping. You?",
      options: [
        { label: "Sing away! Life's short, seize the moment", value: 1 },
        { label: "Put on headphones and sing quietly", value: 2 },
        { label: "Nah, no noise after 10 PM is basic decency", value: 3 },
      ],
    },
    {
      id: 'A2_q28', dim: 'A2',
      text: "Your building bans large dogs but you really want a Husky. You?",
      options: [
        { label: "Get it! Deal with the consequences if caught", value: 1 },
        { label: "Check how strictly they actually enforce it first", value: 2 },
        { label: "Rules say no, so I'll get a small dog instead", value: 3 },
      ],
    },
    {
      id: 'A2_q29', dim: 'A2',
      text: "Your library book is three days overdue. You?",
      options: [
        { label: "Keep reading, finish it first. The fine is pennies anyway", value: 1 },
        { label: "Return it ASAP and accept the fine", value: 2 },
        { label: "I never go overdue. Always return before the deadline", value: 3 },
      ],
    },
    {
      id: 'A2_q30', dim: 'A2',
      text: "Do you wipe down gym equipment after using it?",
      options: [
        { label: "Wipe what? Next person can do it themselves", value: 1 },
        { label: "If there's a towel nearby, sure", value: 2 },
        { label: "Always. Basic gym etiquette", value: 3 },
      ],
    },
    {
      id: 'A2_q31', dim: 'A2',
      text: "You need to pick someone up and it'll take just one minute. There's a handicap spot right in front. You?",
      options: [
        { label: "One minute, just park there real quick", value: 1 },
        { label: "Hesitate but find somewhere else", value: 2 },
        { label: "Absolutely not. That's someone else's reserved spot", value: 3 },
      ],
    },
    {
      id: 'A2_q32', dim: 'A2',
      text: "You're in a no-smoking zone, nobody's enforcing it, and you're craving a cigarette. You?",
      options: [
        { label: "Light up. No enforcement = tacit approval", value: 1 },
        { label: "Find a hidden corner to sneak one", value: 2 },
        { label: "Hold it in and go to the designated area", value: 3 },
      ],
    },
    {
      id: 'A2_q33', dim: 'A2',
      text: "Wearing a seatbelt in the back seat. You?",
      options: [
        { label: "Nobody buckles up in the back, and they never check", value: 1 },
        { label: "On the highway yes, in the city depends on my mood", value: 2 },
        { label: "Front or back, always buckle up. Safety is non-negotiable", value: 3 },
      ],
    },
    {
      id: 'A2_q34', dim: 'A2',
      text: "3 AM, completely empty intersection, red light. You're driving. You?",
      options: [
        { label: "Roll right through. Waiting at this hour is NPC behavior", value: 1 },
        { label: "Make sure it's safe then slowly go", value: 2 },
        { label: "Wait for green. There might be cameras watching", value: 3 },
      ],
    },
    {
      id: 'A2_q35', dim: 'A2',
      text: "Certain websites / apps are restricted in your area. Do you use tools to bypass it?",
      options: [
        { label: "Obviously. The internet should be free", value: 1 },
        { label: "Only if I need it for work", value: 2 },
        { label: "If there's a restriction, there's probably a reason for it", value: 3 },
      ],
    },
    {
      id: 'A2_q36', dim: 'A2',
      text: "A website asks 'are you 18 or older?' and you're not sure / you're not. You?",
      options: [
        { label: "Click yes obviously. Like that ever stopped anyone", value: 1 },
        { label: "Hesitate for a sec then click yes anyway", value: 2 },
        { label: "If I'm not, I click no. Honesty is honesty", value: 3 },
      ],
    },
    {
      id: 'A2_q37', dim: 'A2',
      text: "That super long Terms of Service when signing up for an account. You?",
      options: [
        { label: "Scroll straight to the bottom and check the box. Who reads that?", value: 1 },
        { label: "Skim the key clauses", value: 2 },
        { label: "Read the whole thing before agreeing", value: 3 },
      ],
    },
    {
      id: 'A2_q38', dim: 'A2',
      text: "How do you feel about recycling / waste sorting?",
      options: [
        { label: "Everything goes in one bag, can't be bothered", value: 1 },
        { label: "Sort when someone's watching", value: 2 },
        { label: "Always sort properly every time", value: 3 },
      ],
    },
    {
      id: 'A2_q39', dim: 'A2',
      text: "Public health guidelines during a pandemic / flu season. You?",
      options: [
        { label: "Overblown, I'll live my life as usual", value: 1 },
        { label: "Follow the important ones, skip the minor details", value: 2 },
        { label: "Follow them strictly. Public health is serious business", value: 3 },
      ],
    },
    {
      id: 'A2_q40', dim: 'A2',
      text: "Safety protocols at a construction site / lab are super tedious. You?",
      options: [
        { label: "Good enough is good enough, following every rule tanks productivity", value: 1 },
        { label: "Do the important ones, skip the trivial ones", value: 2 },
        { label: "Follow every single one strictly. There are no shortcuts to safety", value: 3 },
      ],
    },
  ],

  // ═══════════ A3 Sense of Meaning ═══════════
  A3: [
    {
      id: 'A3_q1', dim: 'A3',
      text: 'I usually do things with a clear goal in mind',
      options: [
        { label: "Goals? I don't even know what I'm having for lunch", value: 1 },
        { label: 'Sometimes I do, sometimes I just wing it', value: 2 },
        { label: "Yes, I'm a goal-driven machine", value: 3 },
      ],
    },
    {
      id: 'A3_q2', dim: 'A3',
      text: "What's the meaning of life? We're just hormone-driven carbon-based organisms -- eat when hungry, sleep when tired. No different from animals.",
      options: [
        { label: "You're right, I'm convinced", value: 1 },
        { label: "There's some truth to it but it's not the whole picture", value: 2 },
        { label: "BS, humans are different", value: 3 },
      ],
    },
    {
      id: 'A3_q3', dim: 'A3',
      text: "Someone offers you 100 million dollars, but you can never have goals or aspirations again. Deal?",
      options: [
        { label: "Deal! I barely had aspirations anyway", value: 1 },
        { label: "So torn...", value: 2 },
        { label: "No deal, a life without purpose is just existing", value: 3 },
      ],
    },
    {
      id: 'A3_q4', dim: 'A3',
      text: '"Life is just about eating, sleeping, and vibing" -- thoughts?',
      options: [
        { label: "Preach! I'll fight anyone who disagrees", value: 1 },
        { label: "Not entirely, but kinda", value: 2 },
        { label: "Disagree, humans should aspire to something greater", value: 3 },
      ],
    },
    {
      id: 'A3_q5', dim: 'A3',
      text: "If life had a progress bar, where are you right now?",
      options: [
        { label: "Progress bar? I haven't even launched the game", value: 1 },
        { label: "Probably still loading", value: 2 },
        { label: "Already progressing through the main story", value: 3 },
      ],
    },
    {
      id: 'A3_q6', dim: 'A3',
      text: "Where will you be in five years?",
      options: [
        { label: "Doesn't matter where, as long as I'm alive", value: 1 },
        { label: "Haven't thought that far ahead", value: 2 },
        { label: "I've got a rough plan", value: 3 },
      ],
    },

    {
      id: 'A3_q7', dim: 'A3',
      text: "Do you want to be remembered after you die?",
      options: [
        { label: "Remembered? Nobody remembers me while I'm alive", value: 1 },
        { label: "Being remembered by loved ones is enough", value: 2 },
        { label: "I want to leave something behind, even if it's small", value: 3 },
      ],
    },
    {
      id: 'A3_q8', dim: 'A3',
      text: "Do you believe that 'suffering has meaning'?",
      options: [
        { label: "Nope, suffering is just suffering. Don't gaslight me", value: 1 },
        { label: "Sometimes looking back, I did grow from it", value: 2 },
        { label: "Yes, hardship is the greatest teacher", value: 3 },
      ],
    },
    {
      id: 'A3_q9', dim: 'A3',
      text: "Do you ever get that 'I NEED to create something' urge?",
      options: [
        { label: "Create? I can't even be bothered to post on social media", value: 1 },
        { label: "Sometimes when inspiration hits I'll write or draw a bit", value: 2 },
        { label: "Yes! I'm incomplete if I'm not creating", value: 3 },
      ],
    },
    {
      id: 'A3_q10', dim: 'A3',
      text: "When you think about the fact that 'one day I'll die,' your reaction is?",
      options: [
        { label: "All the more reason to YOLO, lie flat and enjoy the moment", value: 1 },
        { label: "A bit panicky but I'd rather not think about it", value: 2 },
        { label: "That's why I gotta make every moment count", value: 3 },
      ],
    },
    {
      id: 'A3_q11', dim: 'A3',
      text: "Do you ever feel like 'I was put here for some kind of mission'?",
      options: [
        { label: "My mission is just to survive without embarrassing myself", value: 1 },
        { label: "Occasionally I get that vibe", value: 2 },
        { label: "Yes, I can't explain it but I can feel it", value: 3 },
      ],
    },
    {
      id: 'A3_q12', dim: 'A3',
      text: "Work is more like ____ to you?",
      options: [
        { label: "Trading my life force for money, that's it", value: 1 },
        { label: "Sometimes I get a sense of achievement from it", value: 2 },
        { label: "A way to create value. Money is just the byproduct", value: 3 },
      ],
    },
    {
      id: 'A3_q13', dim: 'A3',
      text: "Have you ever thought 'if I could change one thing to make the world better'?",
      options: [
        { label: "I can't even change my own life", value: 1 },
        { label: "Thought about it but it feels too distant", value: 2 },
        { label: "Yes! And I'm working on it in my own way", value: 3 },
      ],
    },
    {
      id: 'A3_q14', dim: 'A3',
      text: "Your take on 'never stop learning'?",
      options: [
        { label: "Still learning after graduation? Hard pass", value: 1 },
        { label: "I'll learn things I'm interested in", value: 2 },
        { label: "Fully agree, learning itself is the purpose", value: 3 },
      ],
    },
    {
      id: 'A3_q15', dim: 'A3',
      text: "Have you ever seriously thought about philosophy / faith / life's big questions?",
      options: [
        { label: "Why think about that when I could think about what's for dinner", value: 1 },
        { label: "Sometimes when I'm in my feels late at night", value: 2 },
        { label: "Regularly. It's part of my inner world", value: 3 },
      ],
    },
    {
      id: 'A3_q16', dim: 'A3',
      text: "Are you more of a 'content creator' or 'content consumer'?",
      options: [
        { label: "Pure consumer. I just scroll and scroll", value: 1 },
        { label: "Mostly consume, occasionally create", value: 2 },
        { label: "Creating gives me more sense of value", value: 3 },
      ],
    },
    {
      id: 'A3_q17', dim: 'A3',
      text: "If given the chance to mentor someone / train a newbie, you?",
      options: [
        { label: "I'm still a noob myself, who am I to mentor anyone", value: 1 },
        { label: "If assigned to do it, I would", value: 2 },
        { label: "Love to! Passing on knowledge is super fulfilling", value: 3 },
      ],
    },
    {
      id: 'A3_q18', dim: 'A3',
      text: "How do you feel about 'taking risks / exploring the unknown'?",
      options: [
        { label: "The best exploration is exploring the limits of my couch", value: 1 },
        { label: "I try new things once in a while", value: 2 },
        { label: "Life IS an adventure. Not exploring is a waste", value: 3 },
      ],
    },
    {
      id: 'A3_q19', dim: 'A3',
      text: "How important is romance / intimate relationships in your life?",
      options: [
        { label: "Optional. I can live perfectly fine solo", value: 1 },
        { label: "Important but not everything", value: 2 },
        { label: "Extremely important. It's one of life's core meanings", value: 3 },
      ],
    },
    {
      id: 'A3_q20', dim: 'A3',
      text: "Do you feel driven to 'become a better version of yourself'?",
      options: [
        { label: "Current me is fine, stop trying to hustle-culture me", value: 1 },
        { label: "Sometimes motivated, sometimes full couch potato", value: 2 },
        { label: "Always. Growth is the never-ending quest", value: 3 },
      ],
    },
    {
      id: 'A3_q21', dim: 'A3',
      text: "Do you think environmental protection / sustainability has anything to do with you?",
      options: [
        { label: "I might not even be alive when the planet dies, so nah", value: 1 },
        { label: "Related but there's only so much I can do", value: 2 },
        { label: "Of course. Everyone has a responsibility", value: 3 },
      ],
    },
    {
      id: 'A3_q22', dim: 'A3',
      text: "Do you ever feel the urge to 'express yourself in some way'?",
      options: [
        { label: "Express what? I'm a silent lurker on the internet", value: 1 },
        { label: "Sometimes I want to write something but give up quickly", value: 2 },
        { label: "Yes! Writing / art / music is my outlet", value: 3 },
      ],
    },
    {
      id: 'A3_q23', dim: 'A3',
      text: "Have you ever thought about 'building a community / organization'?",
      options: [
        { label: "I can barely manage myself, let alone others", value: 1 },
        { label: "Thought about it but never acted on it", value: 2 },
        { label: "Yes! Bringing like-minded people together is meaningful", value: 3 },
      ],
    },
    {
      id: 'A3_q24', dim: 'A3',
      text: "Have you ever thought about 'inventing / creating something to change the status quo'?",
      options: [
        { label: "My only innovation is finding new ways to slack off", value: 1 },
        { label: "Had some ideas but never followed through", value: 2 },
        { label: "Yes! And I'm actively working on it", value: 3 },
      ],
    },
    {
      id: 'A3_q25', dim: 'A3',
      text: "Your feelings about philosophy / psychology -- those 'useless' subjects?",
      options: [
        { label: "Total waste of time. Better to learn a trade", value: 1 },
        { label: "Interesting but I don't go deep", value: 2 },
        { label: "Love it! Essential tools for understanding myself and the world", value: 3 },
      ],
    },
    {
      id: 'A3_q26', dim: 'A3',
      text: "Have you ever had an existential crisis (suddenly feeling like nothing matters)?",
      options: [
        { label: "That's not a crisis, that's my daily mood", value: 1 },
        { label: "I have those moments occasionally", value: 2 },
        { label: "Been through it and found my own answers", value: 3 },
      ],
    },
    {
      id: 'A3_q27', dim: 'A3',
      text: "What gets you out of bed every morning?",
      options: [
        { label: "My alarm and the fear of getting fired", value: 1 },
        { label: "Habit, mostly. See what the day brings", value: 2 },
        { label: "There are things I'm looking forward to", value: 3 },
      ],
    },
    {
      id: 'A3_q28', dim: 'A3',
      text: "How do you usually spend your weekends?",
      options: [
        { label: "Horizontal + delivery food + phone + mindless scrolling", value: 1 },
        { label: "Half relaxing, half doing something productive", value: 2 },
        { label: "Packed schedule, every day deserves to be lived well", value: 3 },
      ],
    },
    {
      id: 'A3_q29', dim: 'A3',
      text: "Someone says 'go volunteer!' You?",
      options: [
        { label: "I don't even wanna go to work, let alone volunteer", value: 1 },
        { label: "Depends what kind of activity it is", value: 2 },
        { label: "Sure! Helping others makes me happy", value: 3 },
      ],
    },
    {
      id: 'A3_q30', dim: 'A3',
      text: "What does travel mean to you?",
      options: [
        { label: "Content for social media posts", value: 1 },
        { label: "Relaxation and unwinding", value: 2 },
        { label: "A journey of exploring the world and discovering myself", value: 3 },
      ],
    },
    {
      id: 'A3_q31', dim: 'A3',
      text: "Are your hobbies 'cast a wide net and dabble' or 'go deep in one thing'?",
      options: [
        { label: "My interests have a shorter shelf life than fresh milk", value: 1 },
        { label: "A few stick around for a while", value: 2 },
        { label: "I have at least one hobby I've been deep in for years", value: 3 },
      ],
    },
    {
      id: 'A3_q32', dim: 'A3',
      text: "What drives you to read / study?",
      options: [
        { label: "Exams. No exam, not a single page gets turned", value: 1 },
        { label: "Curiosity sometimes kicks in", value: 2 },
        { label: "A hunger to understand more. Knowledge excites me", value: 3 },
      ],
    },
    {
      id: 'A3_q33', dim: 'A3',
      text: "Do you meditate / journal / self-reflect as a habit?",
      options: [
        { label: "My meditation is just zoning out and going blank", value: 1 },
        { label: "I reflect once in a while", value: 2 },
        { label: "Yes, regular self-reflection keeps me grounded", value: 3 },
      ],
    },
    {
      id: 'A3_q34', dim: 'A3',
      text: "Do you actively practice gratitude?",
      options: [
        { label: "Grateful for what? Life is hard enough already", value: 1 },
        { label: "Sometimes I feel lucky", value: 2 },
        { label: "Often. Gratitude helps me see more beauty in life", value: 3 },
      ],
    },
    {
      id: 'A3_q35', dim: 'A3',
      text: "Your attitude toward life milestones (birthdays / graduation / anniversaries)?",
      options: [
        { label: "Another year older, what's there to celebrate", value: 1 },
        { label: "Depends on my mood, sometimes I'll mark it", value: 2 },
        { label: "Very important. Every milestone deserves to be commemorated", value: 3 },
      ],
    },
    {
      id: 'A3_q36', dim: 'A3',
      text: "Your daily routine feels like?",
      options: [
        { label: "A meaningless mechanical loop", value: 1 },
        { label: "Part habit, part necessity", value: 2 },
        { label: "A carefully crafted rhythm of life", value: 3 },
      ],
    },
    {
      id: 'A3_q37', dim: 'A3',
      text: "Do you have thoughts about 'contributing to society / helping others'?",
      options: [
        { label: "I can barely take care of myself", value: 1 },
        { label: "Yes but I don't know where to start", value: 2 },
        { label: "Yes, and I'm already taking action", value: 3 },
      ],
    },
    {
      id: 'A3_q38', dim: 'A3',
      text: "Do you have your own life philosophy?",
      options: [
        { label: "Philosophy? My philosophy is just: survive", value: 1 },
        { label: "I have some scattered thoughts", value: 2 },
        { label: "Yes, a fairly coherent set of values and beliefs", value: 3 },
      ],
    },
    {
      id: 'A3_q39', dim: 'A3',
      text: "If asked to list the three most important things in life, could you?",
      options: [
        { label: "Eating, sleeping, gaming? Honestly I have no clue", value: 1 },
        { label: "I could list them but I'm not totally sure", value: 2 },
        { label: "Yes, and I'm constantly working toward them", value: 3 },
      ],
    },
    {
      id: 'A3_q40', dim: 'A3',
      text: "What do you think about 'finding meaning in adversity'?",
      options: [
        { label: "Adversity is just pain. Don't force meaning onto it", value: 1 },
        { label: "Looking back, sometimes there was growth", value: 2 },
        { label: "Agree. The darkest moments often hold the deepest growth", value: 3 },
      ],
    },
  ],

  // ═══════════ Ac1 Motivation Style ═══════════
  Ac1: [
    {
      id: 'Ac1_q1', dim: 'Ac1',
      text: "I do things mainly to achieve results and grow, not just to avoid trouble.",
      options: [
        { label: "Nah, I'm just trying not to get yelled at", value: 1 },
        { label: "Half and half", value: 2 },
        { label: "Yes, I play offense", value: 3 },
      ],
    },
    {
      id: 'Ac1_q2', dim: 'Ac1',
      text: "You've been constipated for 30 minutes and it's miserable. What are you more like?",
      options: [
        { label: "Sit for another 30 minutes, zen-mode waiting for a miracle", value: 1 },
        { label: "Pat my stomach and curse a little", value: 2 },
        { label: "Break out the laxatives, efficiency first", value: 3 },
      ],
    },
    {
      id: 'Ac1_q3', dim: 'Ac1',
      text: "There's a high-risk high-reward opportunity in front of you. You?",
      options: [
        { label: "Nope, I'm out, I'm scared of losing", value: 1 },
        { label: "Let me see what others are doing first", value: 2 },
        { label: "Risk it for the biscuit, you miss every shot you don't take", value: 3 },
      ],
    },
    {
      id: 'Ac1_q4', dim: 'Ac1',
      text: "What's the main thing driving your work or studies?",
      options: [
        { label: "Fear of starving / fear of failing", value: 1 },
        { label: "Half pressure, half genuine interest", value: 2 },
        { label: "I want to make something of myself", value: 3 },
      ],
    },
    {
      id: 'Ac1_q5', dim: 'Ac1',
      text: "What's your playstyle in video games?",
      options: [
        { label: "Camp and hide, surviving to the final circle is what counts", value: 1 },
        { label: "Depends on the situation, only engage when I have the advantage", value: 2 },
        { label: "Rush! Full send, no hesitation", value: 3 },
      ],
    },
    {
      id: 'Ac1_q6', dim: 'Ac1',
      text: 'Are you more afraid of "failing" or "never having tried"?',
      options: [
        { label: "Failing, obviously -- my reputation matters", value: 1 },
        { label: "Both scare me", value: 2 },
        { label: '"Never having tried" is scarier, if I fail I can always try again', value: 3 },
      ],
    },

    {
      id: 'Ac1_q7', dim: 'Ac1',
      text: "In a team game, are you the shot-caller or the AFK player?",
      options: [
        { label: "AFK and chill. If we win, lucky me", value: 1 },
        { label: "Follow the squad, go with the flow", value: 2 },
        { label: "I'm the one calling the shots. Tryhard is my middle name", value: 3 },
      ],
    },
    {
      id: 'Ac1_q8', dim: 'Ac1',
      text: "You just got absolutely roasted by your boss / teacher. What's your follow-up?",
      options: [
        { label: "Give up. No matter what I do I get flamed", value: 1 },
        { label: "Feel bad for a bit then carry on", value: 2 },
        { label: "Channel the rage into proving them wrong", value: 3 },
      ],
    },
    {
      id: 'Ac1_q9', dim: 'Ac1',
      text: "Nobody's assigned you anything to do. You usually?",
      options: [
        { label: "No tasks? That's officially sanctioned slacking time", value: 1 },
        { label: "Wait around and see if something comes up", value: 2 },
        { label: "Find work on my own. Being idle is worse than being busy", value: 3 },
      ],
    },
    {
      id: 'Ac1_q10', dim: 'Ac1',
      text: "Do you do things because 'you want to' or because 'the world demands it'?",
      options: [
        { label: "99% external pressure. Without someone pushing me I don't move", value: 1 },
        { label: "About half and half", value: 2 },
        { label: "Mostly self-driven. External pressure is just a bonus", value: 3 },
      ],
    },
    {
      id: 'Ac1_q11', dim: 'Ac1',
      text: "How do you feel after achieving a goal?",
      options: [
        { label: "Oh, that's it? Nothing special", value: 1 },
        { label: "Happy but it fades quickly", value: 2 },
        { label: "Achievement unlocked! Already chasing the next one", value: 3 },
      ],
    },
    {
      id: 'Ac1_q12', dim: 'Ac1',
      text: "Facing a major setback / adversity, your state?",
      options: [
        { label: "Lie flat and wait for the storm to pass", value: 1 },
        { label: "Rough but I can slowly adjust", value: 2 },
        { label: "Adversity activates my battle mode. The harder it gets, the harder I go", value: 3 },
      ],
    },
    {
      id: 'Ac1_q13', dim: 'Ac1',
      text: "Are you the type to set your own KPIs?",
      options: [
        { label: "Work already has enough KPIs, thanks but no thanks", value: 1 },
        { label: "I set small goals occasionally", value: 2 },
        { label: "Annual, quarterly, monthly goals -- all set. I manage myself harder than my boss does", value: 3 },
      ],
    },
    {
      id: 'Ac1_q14', dim: 'Ac1',
      text: "You got rejected (job / confession / submission). What's next?",
      options: [
        { label: "Whatever, it wasn't meant to be", value: 1 },
        { label: "Feel bad for a while then look for other options", value: 2 },
        { label: "Analyze what went wrong, adjust strategy, and go again", value: 3 },
      ],
    },
    {
      id: 'Ac1_q15', dim: 'Ac1',
      text: "Do you have that 'I MUST get stronger' obsession?",
      options: [
        { label: "I'm fine the way I am, stop trying to hustle me", value: 1 },
        { label: "Sometimes yes, sometimes I just wanna vegetate", value: 2 },
        { label: "Always. Stopping makes me anxious", value: 3 },
      ],
    },
    {
      id: 'Ac1_q16', dim: 'Ac1',
      text: "How big is your career ambition?",
      options: [
        { label: "Just don't get fired and I'm golden", value: 1 },
        { label: "Some ideas but nothing super intense", value: 2 },
        { label: "I want to be top of my field / start my own thing", value: 3 },
      ],
    },
    {
      id: 'Ac1_q17', dim: 'Ac1',
      text: "Friends invite you to an extreme physical challenge (marathon / triathlon). You?",
      options: [
        { label: "My limit is walking from the bed to the fridge", value: 1 },
        { label: "Sounds scary but I might consider it", value: 2 },
        { label: "Sign me up! Life is about pushing limits", value: 3 },
      ],
    },
    {
      id: 'Ac1_q18', dim: 'Ac1',
      text: "Learning a brand new skill (coding / instrument / language) -- what drives you?",
      options: [
        { label: "Unless forced, too lazy to learn", value: 1 },
        { label: "If it interests me I'll try but might not stick with it", value: 2 },
        { label: "Learning new skills gets me hyped. Unlocking new achievements!", value: 3 },
      ],
    },
    {
      id: 'Ac1_q19', dim: 'Ac1',
      text: "Do you compare yourself to others?",
      options: [
        { label: "Nope. Comparing just makes me more depressed", value: 1 },
        { label: "Sometimes but I don't dwell on it", value: 2 },
        { label: "Yes. Other people's excellence motivates me to be better", value: 3 },
      ],
    },
    {
      id: 'Ac1_q20', dim: 'Ac1',
      text: "Which gets you moving more: deadlines or self-discipline?",
      options: [
        { label: "Deadlines. Without them I literally won't budge", value: 1 },
        { label: "Need both", value: 2 },
        { label: "Self-discipline. My own deadlines come before external ones", value: 3 },
      ],
    },
    {
      id: 'Ac1_q21', dim: 'Ac1',
      text: "Do you have the urge to 'do everything to the absolute best'?",
      options: [
        { label: "Good enough is good enough. C's get degrees", value: 1 },
        { label: "Depends how important it is", value: 2 },
        { label: "Go hard or go home. If it's not excellent, why bother", value: 3 },
      ],
    },
    {
      id: 'Ac1_q22', dim: 'Ac1',
      text: "Do you value speed or quality more?",
      options: [
        { label: "Just get it done fast, quality can wait", value: 1 },
        { label: "Try to balance both", value: 2 },
        { label: "Quality first. I'd rather be slow than sloppy", value: 3 },
      ],
    },
    {
      id: 'Ac1_q23', dim: 'Ac1',
      text: "There's an opportunity to join an industry-disrupting innovative project. You?",
      options: [
        { label: "Sounds exhausting. I'll stay being my little cog in the machine", value: 1 },
        { label: "Interested but scared of screwing it up", value: 2 },
        { label: "LET'S GO! Opportunities like this are once in a lifetime", value: 3 },
      ],
    },
    {
      id: 'Ac1_q24', dim: 'Ac1',
      text: "Do you have any desire to be a leader / manager?",
      options: [
        { label: "Managing people is exhausting. Being managed is easier", value: 1 },
        { label: "If the opportunity comes I wouldn't say no", value: 2 },
        { label: "Yes! I think I could lead a team well", value: 3 },
      ],
    },
    {
      id: 'Ac1_q25', dim: 'Ac1',
      text: "Does helping others succeed motivate you?",
      options: [
        { label: "I haven't even succeeded myself, how can I help others", value: 1 },
        { label: "For close friends, sure", value: 2 },
        { label: "Absolutely! Seeing others grow because of me feels even better than my own wins", value: 3 },
      ],
    },
    {
      id: 'Ac1_q26', dim: 'Ac1',
      text: "Someone challenges you to a competition. Your reaction?",
      options: [
        { label: "You grind your way, I'll lie my way. Don't drag me in", value: 1 },
        { label: "Depends on my mood and the opponent", value: 2 },
        { label: "Bring it! Competition gets my blood pumping", value: 3 },
      ],
    },
    {
      id: 'Ac1_q27', dim: 'Ac1',
      text: "Before starting something, can you visualize the sense of accomplishment when it's done?",
      options: [
        { label: "Can't picture it. My brain can only simulate slacking scenarios", value: 1 },
        { label: "Sometimes yes, sometimes no", value: 2 },
        { label: "Always visualize the win first, then execute", value: 3 },
      ],
    },
    {
      id: 'Ac1_q28', dim: 'Ac1',
      text: "You encounter a really thorny problem. You?",
      options: [
        { label: "Too hard, I choose to skip", value: 1 },
        { label: "Give it a shot, if I can't solve it I move on", value: 2 },
        { label: "I'm locked in now. Gonna grind until it's cracked", value: 3 },
      ],
    },
    {
      id: 'Ac1_q29', dim: 'Ac1',
      text: "How strong is your curiosity about new things?",
      options: [
        { label: "Curious about what? I can't get interested in anything", value: 1 },
        { label: "If something catches my eye I'll look into it", value: 2 },
        { label: "Super strong! New things make my eyes light up", value: 3 },
      ],
    },
    {
      id: 'Ac1_q30', dim: 'Ac1',
      text: "How much of your work / study motivation comes from 'being recognized by others'?",
      options: [
        { label: "Mainly just trying not to starve. Recognition? Whatever", value: 1 },
        { label: "Recognition is a nice bonus", value: 2 },
        { label: "Recognition is a key motivator but not the only one", value: 3 },
      ],
    },
    {
      id: 'Ac1_q31', dim: 'Ac1',
      text: "Do you prefer 'deciding what to do yourself' or 'being told what to do'?",
      options: [
        { label: "Just tell me what to do and I'll execute", value: 1 },
        { label: "Give me a framework but some freedom within it", value: 2 },
        { label: "I want to decide. Being micromanaged suffocates me", value: 3 },
      ],
    },
    {
      id: 'Ac1_q32', dim: 'Ac1',
      text: "Do you prefer working solo or with a team?",
      options: [
        { label: "Solo and quiet. Best slacking environment", value: 1 },
        { label: "Depends on the task", value: 2 },
        { label: "Team collaboration gives me more drive and inspiration", value: 3 },
      ],
    },
    {
      id: 'Ac1_q33', dim: 'Ac1',
      text: "Do you focus more on 'immediate gains' or 'long-term development'?",
      options: [
        { label: "Survive today first, worry about tomorrow later", value: 1 },
        { label: "Try to balance both", value: 2 },
        { label: "Willing to sacrifice short-term gains for long-term growth", value: 3 },
      ],
    },
    {
      id: 'Ac1_q34', dim: 'Ac1',
      text: "What recharges you the most?",
      options: [
        { label: "Lying down doing absolutely nothing", value: 1 },
        { label: "Exercise / socializing / alone time, depends on the day", value: 2 },
        { label: "Completing a challenging task", value: 3 },
      ],
    },
    {
      id: 'Ac1_q35', dim: 'Ac1',
      text: "Have you ever experienced 'flow state' where you work and lose track of time?",
      options: [
        { label: "Yes, but that was while I was slacking off", value: 1 },
        { label: "Occasionally", value: 2 },
        { label: "Often! Being immersed in something is the best feeling", value: 3 },
      ],
    },
    {
      id: 'Ac1_q36', dim: 'Ac1',
      text: "How close are you to burnout?",
      options: [
        { label: "Already in it. Every day is running on empty", value: 1 },
        { label: "Sometimes it feels close", value: 2 },
        { label: "My motivation system is stable and can sustain output", value: 3 },
      ],
    },
    {
      id: 'Ac1_q37', dim: 'Ac1',
      text: "After a failure, how long until you're back in fighting shape?",
      options: [
        { label: "Rage quit, uninstalling life", value: 1 },
        { label: "Need a few days to recover", value: 2 },
        { label: "Bounce back fast. Failure is the mother of success", value: 3 },
      ],
    },
    {
      id: 'Ac1_q38', dim: 'Ac1',
      text: "Do you 'think it through before acting' or 'act first, think later'?",
      options: [
        { label: "Overthinking kills motivation so I just... don't think", value: 1 },
        { label: "Quick think then jump in", value: 2 },
        { label: "Start moving first! Adjusting on the fly is most efficient", value: 3 },
      ],
    },
    {
      id: 'Ac1_q39', dim: 'Ac1',
      text: "Someone tells you 'you try too hard.' Your reaction?",
      options: [
        { label: "Impossible, you definitely have the wrong person", value: 1 },
        { label: "Sometimes, but mostly I'm chilling", value: 2 },
        { label: "Trying hard is the default. NOT trying is the anomaly", value: 3 },
      ],
    },
    {
      id: 'Ac1_q40', dim: 'Ac1',
      text: "If you had to pick one word for your life attitude, it'd be closest to?",
      options: [
        { label: "Lie flat -- if I don't have to move, I won't", value: 1 },
        { label: "Go with the flow -- try but don't force it", value: 2 },
        { label: "Full send -- life is about going hard", value: 3 },
      ],
    },
  ],

  // ═══════════ Ac2 Decision-Making Style ═══════════
  Ac2: [
    {
      id: 'Ac2_q1', dim: 'Ac2',
      text: "When making decisions, you usually?",
      options: [
        { label: "Agonize until I lose hair, then ask 800 people for advice", value: 1 },
        { label: "Think it over but not for too long", value: 2 },
        { label: "Make the call fast, I hate dragging things out", value: 3 },
      ],
    },
    {
      id: 'Ac2_q2', dim: 'Ac2',
      text: "This question has no prompt. Just pick blindly.",
      options: [
        { label: "Wait, let me first calculate the probabilities", value: 1 },
        { label: "Hmm... B?", value: 2 },
        { label: "Already picked with my eyes closed", value: 3 },
      ],
    },
    {
      id: 'Ac2_q3', dim: 'Ac2',
      text: "A restaurant menu has 200 dishes. How long does it take you to order?",
      options: [
        { label: "30 minutes minimum, and I still need the waiter's recommendation", value: 1 },
        { label: "Five minutes, one scan-through is enough", value: 2 },
        { label: "One minute, I see something I want and I order it", value: 3 },
      ],
    },
    {
      id: 'Ac2_q4', dim: 'Ac2',
      text: "You see a nice piece of clothing online but you're not sure. You?",
      options: [
        { label: "Add to cart, read reviews, ask friends, agonize for three days", value: 1 },
        { label: "Check the reviews, if it looks good I buy it", value: 2 },
        { label: "Just buy it, if it sucks I'll return it", value: 3 },
      ],
    },
    {
      id: 'Ac2_q5', dim: 'Ac2',
      text: 'Your friend asks "What should we eat tonight?" You?',
      options: [
        { label: '"You decide" "Anything" "Whatever" triple combo', value: 1 },
        { label: "Thought about it and suggested something", value: 2 },
        { label: "Already picked a place and sent the location", value: 3 },
      ],
    },
    {
      id: 'Ac2_q6', dim: 'Ac2',
      text: "Major life decision (which school / which city). How do you decide?",
      options: [
        { label: "Made a spreadsheet, did a SWOT analysis, still can't choose", value: 1 },
        { label: "Rational analysis plus a bit of gut feeling", value: 2 },
        { label: "Go with my gut, wherever feels right", value: 3 },
      ],
    },
    {
      id: 'Ac2_q7', dim: 'Ac2',
      text: "Flash sale ends in 3 seconds and you still haven't decided whether to buy. You?",
      options: [
        { label: "Watch the countdown hit zero helplessly, RIP that deal", value: 1 },
        { label: "YOLO click at the last second", value: 2 },
        { label: "Already paid ages ago, 3 seconds is enough for 3 orders", value: 3 },
      ],
    },
    {
      id: 'Ac2_q8', dim: 'Ac2',
      text: "You already ordered delivery but suddenly don't want it anymore. You?",
      options: [
        { label: "Too much hassle to cancel, I'll just eat it", value: 1 },
        { label: "Hmm, let me see if I can change it", value: 2 },
        { label: "Cancel in 0.5 seconds and reorder, my stomach my rules", value: 3 },
      ],
    },
    {
      id: 'Ac2_q9', dim: 'Ac2',
      text: "Friends are arguing in the group chat about where to go. What's your role?",
      options: [
        { label: "Silent follower, you guys decide just don't @ me", value: 1 },
        { label: "Throw out a couple suggestions for everyone to consider", value: 2 },
        { label: "Enough arguing, listen to me, let's GO", value: 3 },
      ],
    },
    {
      id: 'Ac2_q10', dim: 'Ac2',
      text: 'After making a decision, do you keep replaying "what if I\'d picked the other one"?',
      options: [
        { label: "Yes, my brain runs full multiverse simulations", value: 1 },
        { label: "It crosses my mind but I don't dwell", value: 2 },
        { label: "What's done is done, eyes forward no looking back", value: 3 },
      ],
    },
    {
      id: 'Ac2_q11', dim: 'Ac2',
      text: "Two identical boba teas in front of you, both equally delicious. You must pick one. You?",
      options: [
        { label: "System crash, choice paralysis activated", value: 1 },
        { label: "Just point at one randomly", value: 2 },
        { label: "Left one, no reason needed", value: 3 },
      ],
    },
    {
      id: 'Ac2_q12', dim: 'Ac2',
      text: "Someone asks you to help them make a decision (like picking a color). You?",
      options: [
        { label: "Bruh... I can't even pick for myself", value: 1 },
        { label: "Sure, I'll pick one for you", value: 2 },
        { label: "Red. Don't ask why. Vibes.", value: 3 },
      ],
    },
    {
      id: 'Ac2_q13', dim: 'Ac2',
      text: "You only have 60% of the info but need to make a decision now. You?",
      options: [
        { label: "No way, I need more data, at least 95%", value: 1 },
        { label: "Good enough, let's roll with it", value: 2 },
        { label: "I'd pull the trigger at 30%, 60% is luxury edition", value: 3 },
      ],
    },
    {
      id: 'Ac2_q14', dim: 'Ac2',
      text: "Your gut says A, the data says B. Which do you pick?",
      options: [
        { label: "B, data doesn't lie (but I'll agonize forever)", value: 1 },
        { label: "Weigh both sides", value: 2 },
        { label: "A, gut feeling is GOAT, data is for the boss's PowerPoint", value: 3 },
      ],
    },
    {
      id: 'Ac2_q15', dim: 'Ac2',
      text: "After a full day of making choices (what to eat, wear, do), by evening you?",
      options: [
        { label: "CPU overheated, do NOT ask me anything else", value: 1 },
        { label: "A bit tired but I'm fine", value: 2 },
        { label: "Decision-making is my happy place, bring it on", value: 3 },
      ],
    },
    {
      id: 'Ac2_q16', dim: 'Ac2',
      text: "Something you've already decided -- do you ever suddenly flip and start over?",
      options: [
        { label: "Often, my decisions are less stable than the weather forecast", value: 1 },
        { label: "Occasionally tweak the details", value: 2 },
        { label: "Once it's locked in, it's locked in. Case closed.", value: 3 },
      ],
    },
    {
      id: 'Ac2_q17', dim: 'Ac2',
      text: "Picking what to wear today -- what's your process?",
      options: [
        { label: "Try on five outfits, take comparison photos, ask my roommate", value: 1 },
        { label: "Have a rough idea, throw something together, out the door", value: 2 },
        { label: "Grab whatever's on top and go, outfit is RNG today", value: 3 },
      ],
    },
    {
      id: 'Ac2_q18', dim: 'Ac2',
      text: "Your boss asks for your take on something outside your expertise. You?",
      options: [
        { label: "I don't know enough to wing it, time to research first", value: 1 },
        { label: "Give a suggestion based on what I do know", value: 2 },
        { label: "Shoot from the hip, if I'm wrong I'll fix it later", value: 3 },
      ],
    },
    {
      id: 'Ac2_q19', dim: 'Ac2',
      text: "You've been scrolling for 30 minutes and still can't pick a movie/show. You?",
      options: [
        { label: "Keep scrolling, the destined one is out there somewhere", value: 1 },
        { label: "Good enough, just click one already", value: 2 },
        { label: "Pick the first thing I see, time is more expensive than choice", value: 3 },
      ],
    },
    {
      id: 'Ac2_q20', dim: 'Ac2',
      text: "How do you usually plan a trip?",
      options: [
        { label: "Made a 30-page itinerary and still feel underprepared", value: 1 },
        { label: "Rough route planned, figure out details when I get there", value: 2 },
        { label: "Buy a ticket and go, what even is an itinerary", value: 3 },
      ],
    },
    {
      id: 'Ac2_q21', dim: 'Ac2',
      text: "You got two similar job offers. You?",
      options: [
        { label: "Call ten mentors, make a comparison spreadsheet, still can't pick", value: 1 },
        { label: "Analyze the key differences and decide", value: 2 },
        { label: "Whichever's closer to home / pays more, simple as that", value: 3 },
      ],
    },
    {
      id: 'Ac2_q22', dim: 'Ac2',
      text: "Your crush just texted you. Reply instantly? What's your internal monologue?",
      options: [
        { label: "Wait 10 min, analyze the wording, edit my reply 7 times before sending", value: 1 },
        { label: "Think about what to say then send it", value: 2 },
        { label: "Reply the second I see it, miss me with that dating strategy BS", value: 3 },
      ],
    },
    {
      id: 'Ac2_q23', dim: 'Ac2',
      text: "Should you drop 3K on a course or certification? What's your decision timeline?",
      options: [
        { label: "Let me observe for three to six months first", value: 1 },
        { label: "Research for a week or two, set a budget, decide", value: 2 },
        { label: "If I wanna learn I sign up -- the time spent hesitating is enough to finish the course", value: 3 },
      ],
    },
    {
      id: 'Ac2_q24', dim: 'Ac2',
      text: "Checkup shows a borderline high marker. Doctor says we can watch it or intervene now. You?",
      options: [
        { label: "Google everything, consult three doctors, join five patient forums", value: 1 },
        { label: "Follow the doctor's recommendation", value: 2 },
        { label: "Intervene now, health is not something to gamble on", value: 3 },
      ],
    },
    {
      id: 'Ac2_q25', dim: 'Ac2',
      text: "New phone just dropped. Upgrade or nah?",
      options: [
        { label: "Watch twenty review videos, compare prices for three months", value: 1 },
        { label: "Check the key upgrades, if worth it then switch", value: 2 },
        { label: "Pre-order the second the keynote ends, day-one gang", value: 3 },
      ],
    },
    {
      id: 'Ac2_q26', dim: 'Ac2',
      text: "Rent or buy? Move or renew the lease? When facing these decisions you?",
      options: [
        { label: "There's a debate team in my head and they've gone 300 rounds", value: 1 },
        { label: "List the key factors and weigh them", value: 2 },
        { label: "Nail the big picture and execute, adjust details later", value: 3 },
      ],
    },
    {
      id: 'Ac2_q27', dim: 'Ac2',
      text: "A friend hits you up last minute on the weekend, but you already planned to do absolutely nothing. You?",
      options: [
        { label: "Still can't decide an hour before I'd have to leave", value: 1 },
        { label: "Depends what we'd be doing", value: 2 },
        { label: "Go or don't go, answer in three seconds flat", value: 3 },
      ],
    },
    {
      id: 'Ac2_q28', dim: 'Ac2',
      text: "Picking a birthday gift for someone. How efficient are you?",
      options: [
        { label: "Three days of online shopping and still adding to cart", value: 1 },
        { label: "Budget and direction in mind, pick something quick", value: 2 },
        { label: "In and out of the store in five minutes, gift shopping isn't the SATs", value: 3 },
      ],
    },
    {
      id: 'Ac2_q29', dim: 'Ac2',
      text: "GPS gives you three routes. How do you choose?",
      options: [
        { label: "Compare traffic, lights, and construction for each route", value: 1 },
        { label: "Pick the recommended one", value: 2 },
        { label: "Whichever's shortest, don't even look at the rest", value: 3 },
      ],
    },
    {
      id: 'Ac2_q30', dim: 'Ac2',
      text: "Someone gives you advice that's the opposite of what you decided. You?",
      options: [
        { label: "And now I'm back to square one, spiraling again", value: 1 },
        { label: "Hear them out, adjust if it makes sense", value: 2 },
        { label: "Thanks but I've already made up my mind", value: 3 },
      ],
    },
    {
      id: 'Ac2_q31', dim: 'Ac2',
      text: "Earthquake! How fast is your reaction?",
      options: [
        { label: "Brain blue-screens for 3 seconds before remembering to move", value: 1 },
        { label: "First assess the magnitude, then decide what to do", value: 2 },
        { label: "My body is already under the table before my brain catches up", value: 3 },
      ],
    },
    {
      id: 'Ac2_q32', dim: 'Ac2',
      text: "You can only do three things today. How do you prioritize?",
      options: [
        { label: "Spent two hours just prioritizing, got nothing done", value: 1 },
        { label: "Pick the most important one and start there", value: 2 },
        { label: "Ranked instantly, no thinking needed, important stuff glows on its own", value: 3 },
      ],
    },
    {
      id: 'Ac2_q33', dim: 'Ac2',
      text: "Three projects all need to move forward at the same time. Your approach?",
      options: [
        { label: "So anxious I don't wanna touch any of them", value: 1 },
        { label: "Prioritize and tackle them one by one", value: 2 },
        { label: "All three at once, I AM the human multithreading engine", value: 3 },
      ],
    },
    {
      id: 'Ac2_q34', dim: 'Ac2',
      text: "How much time do you spend gathering info before making a decision?",
      options: [
        { label: "I'd read the entire internet before deciding if I could", value: 1 },
        { label: "Check the key info, good enough to move", value: 2 },
        { label: "Good enough is good enough -- wait for perfect info and the moment's gone", value: 3 },
      ],
    },
    {
      id: 'Ac2_q35', dim: 'Ac2',
      text: "When you're unsure about something, do you ask others for input?",
      options: [
        { label: "Yes, and I need consensus before I feel safe", value: 1 },
        { label: "Ask one or two people I trust for reference", value: 2 },
        { label: "My life, my call -- asking others is worse than asking myself", value: 3 },
      ],
    },
    {
      id: 'Ac2_q36', dim: 'Ac2',
      text: "You made a decision that turned out to be wrong. Your attitude?",
      options: [
        { label: "Regret so hard I'm punching the air, now even MORE scared to decide", value: 1 },
        { label: "A bit of regret but hey, it's experience", value: 2 },
        { label: "Wrong is wrong, cut losses and pivot", value: 3 },
      ],
    },
    {
      id: 'Ac2_q37', dim: 'Ac2',
      text: "How often do you change your opinions or stance?",
      options: [
        { label: "Often, my views are more volatile than the stock market", value: 1 },
        { label: "Only change when there's a solid reason", value: 2 },
        { label: "Rarely, I trust my own judgment", value: 3 },
      ],
    },
    {
      id: 'Ac2_q38', dim: 'Ac2',
      text: "Should you delegate this task to someone else? You?",
      options: [
        { label: "Agonize forever -- afraid they'll mess it up but I don't have time either", value: 1 },
        { label: "Evaluate their skills first then decide", value: 2 },
        { label: "Delegate what should be delegated, I'm not Superman", value: 3 },
      ],
    },
    {
      id: 'Ac2_q39', dim: 'Ac2',
      text: "You got two identical items delivered and need to return one. How long to choose?",
      options: [
        { label: "Three days comparing material, color variance, and stitch count", value: 1 },
        { label: "Quick check, keep the better one", value: 2 },
        { label: "Return whichever, they're literally the same thing why stress", value: 3 },
      ],
    },
    {
      id: 'Ac2_q40', dim: 'Ac2',
      text: 'How do you feel about the term "decision paralysis"?',
      options: [
        { label: "That's literally me, DNA match confirmed", value: 1 },
        { label: "Happens occasionally but it's not that deep", value: 2 },
        { label: "Can't relate, what's scary about making choices", value: 3 },
      ],
    },
  ],

  // ═══════════ Ac3 Execution Style ═══════════
  Ac3: [
    {
      id: 'Ac3_q1', dim: 'Ac3',
      text: 'When people say you have "strong execution skills," what\'s closer to your inner truth?',
      options: [
        { label: "That's only because the deadline is hunting me down", value: 1 },
        { label: "Sometimes, depends on my mood", value: 2 },
        { label: "For real, things are meant to be pushed forward", value: 3 },
      ],
    },
    {
      id: 'Ac3_q2', dim: 'Ac3',
      text: "I often make plans. What usually follows?",
      options: [
        { label: "...and then the plan dies", value: 1 },
        { label: "Getting half of it done counts as a win", value: 2 },
        { label: "Not following the plan makes me uncomfortable", value: 3 },
      ],
    },
    {
      id: 'Ac3_q3', dim: 'Ac3',
      text: "You have a task due next week. When do you usually start?",
      options: [
        { label: "The night before, pulling an all-nighter — deadlines are the ultimate productivity tool", value: 1 },
        { label: "Do a little along the way, wrap up in the last few days", value: 2 },
        { label: "Start working on it the day I receive it", value: 3 },
      ],
    },
    {
      id: 'Ac3_q4', dim: 'Ac3',
      text: "What does your to-do list usually look like?",
      options: [
        { label: "What to-do list? I let deadlines manage my life", value: 1 },
        { label: "I have one, completion rate is about 50/50", value: 2 },
        { label: "Everything has to be crossed off before I can sleep", value: 3 },
      ],
    },
    {
      id: 'Ac3_q5', dim: 'Ac3',
      text: "You receive a new task. How fast do you start?",
      options: [
        { label: "Bookmark it first, I'll get to it when I'm ready (never ready)", value: 1 },
        { label: "Check the requirements, slot it into my schedule", value: 2 },
        { label: "Started the second I received it", value: 3 },
      ],
    },
    {
      id: 'Ac3_q6', dim: 'Ac3',
      text: "Which statement do you agree with more?",
      options: [
        { label: "All roads lead to Rome, so lying down for a bit is fine", value: 1 },
        { label: "Slow and steady wins the race", value: 2 },
        { label: "Think it, do it — speed is everything", value: 3 },
      ],
    },
    {
      id: 'Ac3_q7', dim: 'Ac3',
      text: "Multitasking vs. focusing on one thing -- which one are you?",
      options: [
        { label: "Multitasking? I lag even in single-thread mode", value: 1 },
        { label: "Switch modes depending on task difficulty", value: 2 },
        { label: "Multithreaded parallel processing, efficiency maxed out", value: 3 },
      ],
    },
    {
      id: 'Ac3_q8', dim: 'Ac3',
      text: "You're in the zone working and someone interrupts you. Your reaction?",
      options: [
        { label: "Perfect excuse to slack off, thanks buddy", value: 1 },
        { label: "A bit annoyed but I can get back on track", value: 2 },
        { label: "Handle it and snap right back, the progress bar must not stop", value: 3 },
      ],
    },
    {
      id: 'Ac3_q9', dim: 'Ac3',
      text: "You need to start working before fully understanding the requirements. You?",
      options: [
        { label: "Nope, no spec doc no work from me", value: 1 },
        { label: "Start doing it, ask questions along the way", value: 2 },
        { label: "Just charge in, build it then adjust -- iterate baby iterate", value: 3 },
      ],
    },
    {
      id: 'Ac3_q10', dim: 'Ac3',
      text: "Your projects/assignments/tasks -- what's the typical completion rate?",
      options: [
        { label: "60% would be a miracle, I'm the king of abandoned projects", value: 1 },
        { label: "Most get done, occasionally miss a few", value: 2 },
        { label: "100% delivery, I don't clock out until it's done", value: 3 },
      ],
    },
    {
      id: 'Ac3_q11', dim: 'Ac3',
      text: "Building a good habit (like waking up early / working out) -- your success rate?",
      options: [
        { label: "Three days on two days off is my life motto", value: 1 },
        { label: "Can keep it up for a while, occasional breaks", value: 2 },
        { label: "Once I decide, I stick with it long-term -- I'm a habit-forming machine", value: 3 },
      ],
    },
    {
      id: 'Ac3_q12', dim: 'Ac3',
      text: "The closer the deadline, the more you?",
      options: [
        { label: "The more anxious, the more I procrastinate -- death spiral activated", value: 1 },
        { label: "Pressure becomes fuel, start accelerating", value: 2 },
        { label: "Already done ages ago, deadline day is just review day for me", value: 3 },
      ],
    },
    {
      id: 'Ac3_q13', dim: 'Ac3',
      text: "Do you prefer following a fixed process or improvising?",
      options: [
        { label: "What process? Everything I do is freestyle", value: 1 },
        { label: "Big framework yes, flexible on details", value: 2 },
        { label: "SOP written, follow the steps, no improvising allowed", value: 3 },
      ],
    },
    {
      id: 'Ac3_q14', dim: 'Ac3',
      text: "How do you usually distribute your energy throughout the day?",
      options: [
        { label: "Low battery mode all day, surviving on caffeine", value: 1 },
        { label: "Normal peaks and valleys", value: 2 },
        { label: "Precisely managed -- hard tasks at peak hours, easy stuff during lulls", value: 3 },
      ],
    },
    {
      id: 'Ac3_q15', dim: 'Ac3',
      text: "Do you use tools/apps to manage your tasks and time?",
      options: [
        { label: "Downloaded ten productivity apps, opened zero", value: 1 },
        { label: "Use one or two simple ones", value: 2 },
        { label: "Full system set up -- calendar + to-do + reviews, the whole pipeline", value: 3 },
      ],
    },
    {
      id: 'Ac3_q16', dim: 'Ac3',
      text: "Do you have an accountability system for promises you make to yourself?",
      options: [
        { label: "Promises to myself are like New Year's resolutions -- just words", value: 1 },
        { label: "Sometimes set small goals and try to follow through", value: 2 },
        { label: "I take promises to myself even more seriously than promises to others", value: 3 },
      ],
    },
    {
      id: 'Ac3_q17', dim: 'Ac3',
      text: "Halfway through a task, do you stop to check your progress?",
      options: [
        { label: "Don't look don't look, checking makes me more anxious", value: 1 },
        { label: "Occasionally check in", value: 2 },
        { label: "Scheduled progress checks to make sure I'm on track", value: 3 },
      ],
    },
    {
      id: 'Ac3_q18', dim: 'Ac3',
      text: "How often do you take breaks while working/studying?",
      options: [
        { label: "My breaks and work have merged into one (permanent slacking)", value: 1 },
        { label: "Take a break when I'm tired", value: 2 },
        { label: "Scheduled breaks, Pomodoro technique locked in", value: 3 },
      ],
    },
    {
      id: 'Ac3_q19', dim: 'Ac3',
      text: "Do you deliberately optimize your work environment (desk layout, noise, lighting)?",
      options: [
        { label: "My desk is a landfill but I know where everything is (maybe)", value: 1 },
        { label: "Keep it basically tidy", value: 2 },
        { label: "My workspace is my battlefield -- must be optimally configured", value: 3 },
      ],
    },
    {
      id: 'Ac3_q20', dim: 'Ac3',
      text: "Do you plan out your day in advance?",
      options: [
        { label: "Plan? My day is entirely driven by random events", value: 1 },
        { label: "Roughly know what I need to do today", value: 2 },
        { label: "Hour-by-hour schedule already locked and loaded", value: 3 },
      ],
    },
    {
      id: 'Ac3_q21', dim: 'Ac3',
      text: "After finishing something, do you review or do a retrospective?",
      options: [
        { label: "Done and forgotten, let the past be the past", value: 1 },
        { label: "Think over the big stuff", value: 2 },
        { label: "Must do a retro -- not reflecting means it was all for nothing", value: 3 },
      ],
    },
    {
      id: 'Ac3_q22', dim: 'Ac3',
      text: "Facing a boring but necessary task, you?",
      options: [
        { label: "Procrastinate until I literally can't anymore, suffering face on", value: 1 },
        { label: "Grit my teeth and get through it", value: 2 },
        { label: "Do the boring stuff first -- clearing it out feels amazing", value: 3 },
      ],
    },
    {
      id: 'Ac3_q23', dim: 'Ac3',
      text: "What does your physical desk/workspace usually look like?",
      options: [
        { label: "Archaeological dig site, last month's takeout might be buried underneath", value: 1 },
        { label: "Tidy it up occasionally", value: 2 },
        { label: "Clean enough to livestream from", value: 3 },
      ],
    },
    {
      id: 'Ac3_q24', dim: 'Ac3',
      text: "Your phone's files/photos/chat history?",
      options: [
        { label: "Storage full warning is my daily notification", value: 1 },
        { label: "Clean it up now and then", value: 2 },
        { label: "Sorted into folders, regularly cleaned, OCD-approved", value: 3 },
      ],
    },
    {
      id: 'Ac3_q25', dim: 'Ac3',
      text: "Your deadline hit-rate is roughly?",
      options: [
        { label: "Under 50%, me and deadlines have a mutually destructive relationship", value: 1 },
        { label: "Hit most of them, occasionally a bit late", value: 2 },
        { label: "99% on time, finishing early is the norm", value: 3 },
      ],
    },
    {
      id: 'Ac3_q26', dim: 'Ac3',
      text: "Ever said yes to too many things and ended up unable to finish any of them?",
      options: [
        { label: "Often, my mouth is faster than my hands -- that's my core competency", value: 1 },
        { label: "Occasionally overestimate my bandwidth", value: 2 },
        { label: "Rarely, I assess before committing", value: 3 },
      ],
    },
    {
      id: 'Ac3_q27', dim: 'Ac3',
      text: "How do you decide what to do first vs. later?",
      options: [
        { label: "Whatever's fun first (then all the important stuff gets procrastinated)", value: 1 },
        { label: "Urgent stuff first", value: 2 },
        { label: "Eisenhower matrix, sort by important + urgent, execute in order", value: 3 },
      ],
    },
    {
      id: 'Ac3_q28', dim: 'Ac3',
      text: "Hit a snag or a bug mid-execution. Your reaction?",
      options: [
        { label: "Give up, deal with it tomorrow", value: 1 },
        { label: "Grumble for a bit then keep problem-solving", value: 2 },
        { label: "Fired up like I drank five Red Bulls, not sleeping until it's fixed", value: 3 },
      ],
    },
    {
      id: 'Ac3_q29', dim: 'Ac3',
      text: "Do you prefer working solo or in a team?",
      options: [
        { label: "Solo means freedom to slack, don't wanna be nagged", value: 1 },
        { label: "Depends on the project type", value: 2 },
        { label: "Team collab is more efficient, I love pushing everyone forward together", value: 3 },
      ],
    },
    {
      id: 'Ac3_q30', dim: 'Ac3',
      text: "After finishing something, do you self-review it?",
      options: [
        { label: "Submitted is submitted, what is this 'review' you speak of", value: 1 },
        { label: "Give it a quick once-over", value: 2 },
        { label: "Check at least twice, the devil's in the details", value: 3 },
      ],
    },
    {
      id: 'Ac3_q31', dim: 'Ac3',
      text: "Do you write documentation or keep records after completing work?",
      options: [
        { label: "Docs? I don't even write code comments", value: 1 },
        { label: "Document the important stuff", value: 2 },
        { label: "Documentation is standard practice, future me will thank present me", value: 3 },
      ],
    },
    {
      id: 'Ac3_q32', dim: 'Ac3',
      text: "How many times will you make the same mistake?",
      options: [
        { label: "Same pit, I can fall in three or more times", value: 1 },
        { label: "Usually learn my lesson", value: 2 },
        { label: "Once. I build systems to make sure it never happens again", value: 3 },
      ],
    },
    {
      id: 'Ac3_q33', dim: 'Ac3',
      text: "Is your work style 'get it right the first time' or 'ship it rough then iterate'?",
      options: [
        { label: "Ship it rough... and then there is no iteration", value: 1 },
        { label: "Ship an MVP then improve step by step", value: 2 },
        { label: "Get it right the first time, rework is a waste of life", value: 3 },
      ],
    },
    {
      id: 'Ac3_q34', dim: 'Ac3',
      text: "Repetitive work that could be automated with a tool/script -- you?",
      options: [
        { label: "Do it by hand, writing a script is even more effort", value: 1 },
        { label: "If it's not too complicated I'll give it a try", value: 2 },
        { label: "Must automate, repetitive labor is an insult to humanity", value: 3 },
      ],
    },
    {
      id: 'Ac3_q35', dim: 'Ac3',
      text: "When you need to report progress to someone, you?",
      options: [
        { label: "Don't ask don't tell, if they ask I'll make something up on the spot", value: 1 },
        { label: "Report when the time comes", value: 2 },
        { label: "Proactively sync progress, keep everyone in the loop", value: 3 },
      ],
    },
    {
      id: 'Ac3_q36', dim: 'Ac3',
      text: "Three equally important things all fighting for your time. You?",
      options: [
        { label: "Don't wanna do any of them, let me scroll my phone to calm down first", value: 1 },
        { label: "Pick one and start", value: 2 },
        { label: "Allocate time blocks, rotate between all three, zero idle time", value: 3 },
      ],
    },
    {
      id: 'Ac3_q37', dim: 'Ac3',
      text: "What time of day are you most productive? Do you leverage that?",
      options: [
        { label: "I'm low-efficiency all day, patterns don't exist for me", value: 1 },
        { label: "I know my peak hours but can't always act on it", value: 2 },
        { label: "Precisely mapped my rhythm -- golden hours for core tasks only", value: 3 },
      ],
    },
    {
      id: 'Ac3_q38', dim: 'Ac3',
      text: "What's your weekend usually like?",
      options: [
        { label: "Two days of being a corpse, Monday I'm totally refreshed (not)", value: 1 },
        { label: "Mostly rest, handle a few things here and there", value: 2 },
        { label: "Weekends have a plan too -- recharge and execute, both covered", value: 3 },
      ],
    },
    {
      id: 'Ac3_q39', dim: 'Ac3',
      text: "First thing you do after waking up?",
      options: [
        { label: "Scroll my phone, half an hour gone just like that", value: 1 },
        { label: "Wash up, eat breakfast, normal startup sequence", value: 2 },
        { label: "Execute my morning routine step by step, every move is scheduled", value: 3 },
      ],
    },
    {
      id: 'Ac3_q40', dim: 'Ac3',
      text: "What are you usually doing before bed?",
      options: [
        { label: "Doomscrolling until 2 AM, then regretting it, rinse and repeat tomorrow", value: 1 },
        { label: "Browse my phone a bit, sleep when I'm tired", value: 2 },
        { label: "Phone down at a set time, review my day, then lights out", value: 3 },
      ],
    },
  ],

  // ═══════════ So1 Social Initiative ═══════════
  So1: [
    {
      id: 'So1_q1', dim: 'So1',
      text: "An online friend invites you to meet up IRL. Your thoughts?",
      options: [
        { label: "Surfing online is enough, meeting IRL is a hard no", value: 1 },
        { label: "Depends how close we are, if we vibe then sure", value: 2 },
        { label: "Yay! Let me go get dressed up!", value: 3 },
      ],
    },
    {
      id: 'So1_q2', dim: 'So1',
      text: "A friend brings someone you don't know to a hangout. You?",
      options: [
        { label: "Stranger danger, socially anxious the entire time", value: 1 },
        { label: "If they talk to me I'll chat, if not that's fine too", value: 2 },
        { label: "A friend of a friend is a friend of mine! Let's talk!", value: 3 },
      ],
    },
    {
      id: 'So1_q3', dim: 'So1',
      text: "Company team-building event with coworkers you barely know. You?",
      options: [
        { label: "Find a corner and wait for it to end", value: 1 },
        { label: "I'll chat if someone comes over, otherwise I'll just chill", value: 2 },
        { label: "Actively start conversations, team-building is for networking", value: 3 },
      ],
    },
    {
      id: 'So1_q4', dim: 'So1',
      text: "You're in an elevator with just you and a neighbor. You?",
      options: [
        { label: "Pull out my phone and pretend to check messages", value: 1 },
        { label: "Smile and nod", value: 2 },
        { label: '"Hey, nice weather today huh?" Start chatting', value: 3 },
      ],
    },
    {
      id: 'So1_q5', dim: 'So1',
      text: "You arrive at a party full of strangers. What do you do?",
      options: [
        { label: "Park myself by the food table and don't move until it's over", value: 1 },
        { label: "Wait for someone to come talk to me", value: 2 },
        { label: "Go on the offensive, not leaving until I make at least three friends", value: 3 },
      ],
    },
    {
      id: 'So1_q6', dim: 'So1',
      text: "There's someone you really want to meet but you have no excuse to approach them. You?",
      options: [
        { label: "Rehearsed it a hundred times in my head but still didn't go", value: 1 },
        { label: "Wait for the right moment", value: 2 },
        { label: "Just walk up, I can improvise an excuse", value: 3 },
      ],
    },
    {
      id: 'So1_q7', dim: 'So1',
      text: "It's the weekend and you wanna go out but nobody invited you. You?",
      options: [
        { label: "Guess I'll stay home, actively inviting people is too scary", value: 1 },
        { label: "Post something on social media to test the waters", value: 2 },
        { label: "Drop a message in the group chat: 'Who's free? Let's go!'", value: 3 },
      ],
    },
    {
      id: 'So1_q8', dim: 'So1',
      text: "A group of friends is chatting away and you want to join but can't find an opening. You?",
      options: [
        { label: "Stand nearby silently like a human wallpaper", value: 1 },
        { label: "Wait for a gap then jump in", value: 2 },
        { label: "Just butt in, what's there to be shy about", value: 3 },
      ],
    },
    {
      id: 'So1_q9', dim: 'So1',
      text: "How active are you on social media?",
      options: [
        { label: "Ultimate lurker, never post never comment", value: 1 },
        { label: "Drop a like or comment here and there", value: 2 },
        { label: "Daily poster, comment section regular", value: 3 },
      ],
    },
    {
      id: 'So1_q10', dim: 'So1',
      text: "You see someone on the street looking totally lost with a map. You?",
      options: [
        { label: "Pretend I didn't see them, walk faster", value: 1 },
        { label: "If they ask me I'll help", value: 2 },
        { label: "Walk right up: 'Hey, need some help?'", value: 3 },
      ],
    },
    {
      id: 'So1_q11', dim: 'So1',
      text: "Just moved to a new city where you don't know a soul. How do you make friends?",
      options: [
        { label: "I don't, me and WiFi are enough", value: 1 },
        { label: "Gradually meet people through coworkers/classmates", value: 2 },
        { label: "Actively invite neighbors / join local groups / sign up for classes", value: 3 },
      ],
    },
    {
      id: 'So1_q12', dim: 'So1',
      text: "An old friend you haven't talked to in ages -- would you reach out first?",
      options: [
        { label: "No way, what if they've forgotten me? Awkward", value: 1 },
        { label: "Might send a message if I think of them", value: 2 },
        { label: "Just call them up: 'Yo, how ya been!'", value: 3 },
      ],
    },
    {
      id: 'So1_q13', dim: 'So1',
      text: "Industry mixer / trade show. Your networking mode?",
      options: [
        { label: "Find a corner to charge my phone and dip early", value: 1 },
        { label: "Chat if someone approaches me", value: 2 },
        { label: "Hand out business cards proactively, hit every booth", value: 3 },
      ],
    },
    {
      id: 'So1_q14', dim: 'So1',
      text: "Waiting in line at the hospital/bank, would you chat with the person next to you?",
      options: [
        { label: "Absolutely not, headphones on, force field activated", value: 1 },
        { label: "If they speak first I'll respond", value: 2 },
        { label: "Might grumble 'So crowded today huh' and spark a convo", value: 3 },
      ],
    },
    {
      id: 'So1_q15', dim: 'So1',
      text: "Organizing a friend hangout / group trip -- you?",
      options: [
        { label: "Can't even be bothered to attend, let alone organize", value: 1 },
        { label: "If someone else organizes I'll show up", value: 2 },
        { label: "I'm the one always creating group chats and spreadsheets", value: 3 },
      ],
    },
    {
      id: 'So1_q16', dim: 'So1',
      text: "Moved to a new apartment. Would you proactively meet your neighbors?",
      options: [
        { label: "Lived here three years, no idea if next door is a person or a ghost", value: 1 },
        { label: "Say hi if I bump into them", value: 2 },
        { label: "Knock on doors day one to introduce myself", value: 3 },
      ],
    },
    {
      id: 'So1_q17', dim: 'So1',
      text: "You walk past someone wearing a super cool outfit/bag. You?",
      options: [
        { label: "Admire silently and walk away", value: 1 },
        { label: "Compliment them in my head", value: 2 },
        { label: "Walk right up: 'That is SO fire, where'd you get it?!'", value: 3 },
      ],
    },
    {
      id: 'So1_q18', dim: 'So1',
      text: "You met someone cool and want to get closer. You?",
      options: [
        { label: "Wait for them to come to me, being proactive is exhausting", value: 1 },
        { label: "Hang out occasionally", value: 2 },
        { label: "Proactively suggest coffee/meals, lock down that friendship", value: 3 },
      ],
    },
    {
      id: 'So1_q19', dim: 'So1',
      text: "Are you the one who texts/calls first?",
      options: [
        { label: "Never, I wait for others to find me", value: 1 },
        { label: "Sometimes I'll reach out first", value: 2 },
        { label: "Of course, I keep the initiative in my hands", value: 3 },
      ],
    },
    {
      id: 'So1_q20', dim: 'So1',
      text: "Someone suggests hosting a party/dinner at your place. You?",
      options: [
        { label: "My place? No no no no no", value: 1 },
        { label: "Occasionally is fine", value: 2 },
        { label: "Welcome! I'll even cook for everyone", value: 3 },
      ],
    },
    {
      id: 'So1_q21', dim: 'So1',
      text: "A new hobby club just opened up. Would you sign up proactively?",
      options: [
        { label: "Nope, my hobby is not socializing", value: 1 },
        { label: "Check if anyone I know is going too", value: 2 },
        { label: "Sign up immediately! Great chance to meet new people", value: 3 },
      ],
    },
    {
      id: 'So1_q22', dim: 'So1',
      text: "Someone needs to volunteer as the event organizer/host. You?",
      options: [
        { label: "Head down head down head down, please don't pick me", value: 1 },
        { label: "If nobody else does it I can reluctantly step up", value: 2 },
        { label: "I got this! Leave it to me", value: 3 },
      ],
    },
    {
      id: 'So1_q23', dim: 'So1',
      text: "During meetings or group discussions, how often do you speak up?",
      options: [
        { label: "Silent mode all the way, unless someone calls on me", value: 1 },
        { label: "Speak when I have something to say, listen when I don't", value: 2 },
        { label: "Proactively contribute, if I have thoughts I share them", value: 3 },
      ],
    },
    {
      id: 'So1_q24', dim: 'So1',
      text: "A friend says 'let's hang out sometime!' but doesn't set a date. You?",
      options: [
        { label: "Let them set it, 'sometime' basically means 'never' anyway", value: 1 },
        { label: "Follow up in a few days", value: 2 },
        { label: "Immediately reply: 'Sure, how about this Saturday?'", value: 3 },
      ],
    },
    {
      id: 'So1_q25', dim: 'So1',
      text: "Awkward silence. Nobody's talking. You?",
      options: [
        { label: "Join the silence, embrace the awkwardness", value: 1 },
        { label: "Awkward laugh", value: 2 },
        { label: "'So, have you guys seen that thing about XX?' Break the ice", value: 3 },
      ],
    },
    {
      id: 'So1_q26', dim: 'So1',
      text: "You spot a creator/celebrity you love at a tourist spot. You?",
      options: [
        { label: "Sneaky photo from afar then dip", value: 1 },
        { label: "Hesitate forever, maybe work up the courage to go over", value: 2 },
        { label: "Run right over: 'Hi I'm a huge fan!'", value: 3 },
      ],
    },
    {
      id: 'So1_q27', dim: 'So1',
      text: "Traveling solo -- would you actively make friends on the road?",
      options: [
        { label: "Enjoy being alone, no need for travel socializing", value: 1 },
        { label: "If I meet someone I click with, sure", value: 2 },
        { label: "The whole point of travel is meeting new people, let's chat!", value: 3 },
      ],
    },
    {
      id: 'So1_q28', dim: 'So1',
      text: "A friend you lost touch with years ago suddenly adds you online. Your reaction?",
      options: [
        { label: "Hesitate whether to accept, afraid it'll be awkward", value: 1 },
        { label: "Accept and exchange a few pleasantries", value: 2 },
        { label: "Accept instantly and proactively suggest meeting up to catch up", value: 3 },
      ],
    },
    {
      id: 'So1_q29', dim: 'So1',
      text: "You need to have a serious/sensitive conversation with someone. You?",
      options: [
        { label: "Put it off as long as possible, hopefully the problem disappears", value: 1 },
        { label: "Work up the courage but need lots of prep time", value: 2 },
        { label: "Set up a time to talk face-to-face, no dragging it out", value: 3 },
      ],
    },
    {
      id: 'So1_q30', dim: 'So1',
      text: "A newcomer joins the group chat. You?",
      options: [
        { label: "Didn't even notice someone new joined", value: 1 },
        { label: "If others welcome them I'll chime in too", value: 2 },
        { label: "First to say 'Welcome! Hit me up if you need anything!'", value: 3 },
      ],
    },
    {
      id: 'So1_q31', dim: 'So1',
      text: "You see someone struggling to carry heavy stuff. You?",
      options: [
        { label: "Pretend I didn't see, avoid social interaction", value: 1 },
        { label: "Want to help but don't act on it", value: 2 },
        { label: "Walk right over: 'Let me help you with that'", value: 3 },
      ],
    },
    {
      id: 'So1_q32', dim: 'So1',
      text: "Your role in online forums/communities/groups?",
      options: [
        { label: "Pure lurker, never surface", value: 1 },
        { label: "Occasionally reply to others' posts", value: 2 },
        { label: "Active member, posting and replying, that's all me", value: 3 },
      ],
    },
    {
      id: 'So1_q33', dim: 'So1',
      text: "An opportunity to give a speech or presentation comes up. You?",
      options: [
        { label: "Social death warning -- dodge it if I can", value: 1 },
        { label: "If I'm prepared I can do it", value: 2 },
        { label: "Great opportunity! I was looking for a chance to speak up", value: 3 },
      ],
    },
    {
      id: 'So1_q34', dim: 'So1',
      text: "A friend asks you to take charge of organizing an event. You?",
      options: [
        { label: "Don't look at me, I was born to be organized not to organize", value: 1 },
        { label: "Sure, I'll put something simple together", value: 2 },
        { label: "No problem! The itinerary is already forming in my head", value: 3 },
      ],
    },
    {
      id: 'So1_q35', dim: 'So1',
      text: "At a wedding, seated at a table full of strangers. You?",
      options: [
        { label: "Head down, eat food, leave when done", value: 1 },
        { label: "Make small talk with the person next to me", value: 2 },
        { label: "Toast everyone, chat everyone up, get everyone's contact by dessert", value: 3 },
      ],
    },
    {
      id: 'So1_q36', dim: 'So1',
      text: "Chatting with store clerks/waiters while shopping. You?",
      options: [
        { label: "Self-checkout if possible, don't wanna open my mouth", value: 1 },
        { label: "Normal exchange, nothing extra", value: 2 },
        { label: "Chat so much they call me a regular, might even get a discount next time", value: 3 },
      ],
    },
    {
      id: 'So1_q37', dim: 'So1',
      text: "After being rejected/cold-shouldered, would you still proactively socialize next time?",
      options: [
        { label: "Nope nope nope, once bitten ten years shy of socializing", value: 1 },
        { label: "Take a breather first", value: 2 },
        { label: "Whatever, this one didn't work out, on to the next", value: 3 },
      ],
    },
    {
      id: 'So1_q38', dim: 'So1',
      text: "Need to cold-reach a stranger (for a collab/job). You?",
      options: [
        { label: "My hands are shaking typing the message, three days and still haven't sent it", value: 1 },
        { label: "Worked up the nerve to send it, super anxious waiting for a reply", value: 2 },
        { label: "Send it confidently, if they pass I'll find the next one", value: 3 },
      ],
    },
    {
      id: 'So1_q39', dim: 'So1',
      text: "At karaoke / on the dance floor at a club. You?",
      options: [
        { label: "Sitting in the corner on my phone waiting for it to end", value: 1 },
        { label: "Friends drag me up and I reluctantly move a little", value: 2 },
        { label: "First one on the floor, center stage is MINE", value: 3 },
      ],
    },
    {
      id: 'So1_q40', dim: 'So1',
      text: 'Where do you fall between "social anxiety" and "social butterfly"?',
      options: [
        { label: "Severely socially anxious, clinically confirmed, no follow-up needed", value: 1 },
        { label: "Depends on the situation, sometimes anxious sometimes thriving", value: 2 },
        { label: "Social butterfly incarnate, I light up around people", value: 3 },
      ],
    },
  ],

  // ═══════════ So2 Interpersonal Boundaries ═══════════
  So2: [
    {
      id: 'So2_q1', dim: 'So2',
      text: "My approach to socializing is basically an electric fence — get too close and the alarm goes off",
      options: [
        { label: 'Totally me, please maintain a 6-foot distance', value: 3 },
        { label: 'Depends on the person', value: 2 },
        { label: "Not me, I love closeness", value: 1 },
      ],
    },
    {
      id: 'So2_q2', dim: 'So2',
      text: "I crave being super close with people I trust, like conjoined-twins close",
      options: [
        { label: "Yes! That's what real connection feels like", value: 1 },
        { label: "Close is fine but let's not go overboard", value: 2 },
        { label: "Please no, I can't breathe", value: 3 },
      ],
    },
    {
      id: 'So2_q3', dim: 'So2',
      text: "Someone you don't know well suddenly gets really friendly with you. First reaction?",
      options: [
        { label: "Great! Another friend!", value: 1 },
        { label: "A bit weird but let's see where it goes", value: 2 },
        { label: "Back off, what do you want?", value: 3 },
      ],
    },
    {
      id: 'So2_q4', dim: 'So2',
      text: "A good friend goes through your phone without asking. You?",
      options: [
        { label: "Go ahead, we're close enough that nothing's off-limits", value: 1 },
        { label: "Not thrilled but I don't want to make it awkward", value: 2 },
        { label: '"What are you doing?" Immediately take the phone back', value: 3 },
      ],
    },
    {
      id: 'So2_q5', dim: 'So2',
      text: "How do you organize your contacts list?",
      options: [
        { label: "No categories, everyone's a friend", value: 1 },
        { label: "A few simple groups", value: 2 },
        { label: "Organized with military precision", value: 3 },
      ],
    },
    {
      id: 'So2_q6', dim: 'So2',
      text: "Someone does you a favor. You?",
      options: [
        { label: "So touched, they're my ride-or-die now", value: 1 },
        { label: "Thank them and look for a chance to return the favor", value: 2 },
        { label: "Note it down, I MUST pay it back, I don't like owing people", value: 3 },
      ],
    },
    {
      id: 'So2_q7', dim: 'So2',
      text: "Your bestie asks 'Can you tell me that secret of yours?' You?",
      options: [
        { label: "Besties don't keep secrets, spill everything", value: 1 },
        { label: "Depends what kind of secret", value: 2 },
        { label: "A secret is a secret, not even my mom gets to know", value: 3 },
      ],
    },
    {
      id: 'So2_q8', dim: 'So2',
      text: "A close friend asks to borrow a significant amount of money. You?",
      options: [
        { label: "Transfer it without a second thought, that's what friends are for", value: 1 },
        { label: "Ask why first then decide", value: 2 },
        { label: "Money stuff? Don't come to me, friendship and money stay separate", value: 3 },
      ],
    },
    {
      id: 'So2_q9', dim: 'So2',
      text: "Your parents are meddling in your love life / career choices. You?",
      options: [
        { label: "They're right, listen to mom and dad", value: 1 },
        { label: "Hear their input but make my own call", value: 2 },
        { label: "My life my rules, please respect my boundaries", value: 3 },
      ],
    },
    {
      id: 'So2_q10', dim: 'So2',
      text: "A friend asks for a favor but you really don't want to help. You?",
      options: [
        { label: "Help anyway even though I don't want to, can't say no", value: 1 },
        { label: "Gently explain it's difficult", value: 2 },
        { label: "Straight up: 'Sorry, can't this time' -- crystal clear rejection", value: 3 },
      ],
    },
    {
      id: 'So2_q11', dim: 'So2',
      text: "Someone asks how much you make / your year-end bonus. You?",
      options: [
        { label: "Just tell them, it's not some state secret", value: 1 },
        { label: "Give a vague ballpark", value: 2 },
        { label: "That's my private info, smile and change the subject", value: 3 },
      ],
    },
    {
      id: 'So2_q12', dim: 'So2',
      text: "Would you share your recent anxiety / meltdown with friends?",
      options: [
        { label: "Yes, close friends should share the burden", value: 1 },
        { label: "Depends how close we are and my mood", value: 2 },
        { label: "No, my emotions are mine to process", value: 3 },
      ],
    },
    {
      id: 'So2_q13', dim: 'So2',
      text: "Someone you don't know well puts their arm around you / pats your back. You?",
      options: [
        { label: "Whatever, as long as everyone's having fun", value: 1 },
        { label: "A bit uncomfortable but I tolerate it", value: 2 },
        { label: "Instinctively step back -- please maintain physical distance", value: 3 },
      ],
    },
    {
      id: 'So2_q14', dim: 'So2',
      text: "A friend constantly takes up your downtime to vent / chat. You?",
      options: [
        { label: "No problem, I'm here whenever they need me", value: 1 },
        { label: "Once in a while is fine but regularly gets draining", value: 2 },
        { label: "I'll clearly say 'Not a great time, let's chat later'", value: 3 },
      ],
    },
    {
      id: 'So2_q15', dim: 'So2',
      text: "Someone keeps dumping negative energy on you. You?",
      options: [
        { label: "Take it all in, be a good listener", value: 1 },
        { label: "Listen for a while but it gets tiring", value: 2 },
        { label: "Politely cut it off -- I'm not your emotional dumpster", value: 3 },
      ],
    },
    {
      id: 'So2_q16', dim: 'So2',
      text: "Friends are gossiping about someone. You?",
      options: [
        { label: "Join in! Gossip brings me joy", value: 1 },
        { label: "Listen but don't spread it around", value: 2 },
        { label: "Not participating, other people's business is none of mine", value: 3 },
      ],
    },
    {
      id: 'So2_q17', dim: 'So2',
      text: "Do you publicly post your location / daily life / mood on social media?",
      options: [
        { label: "Yes, life is meant to be shared", value: 1 },
        { label: "Occasionally, but not too detailed", value: 2 },
        { label: "Nope, my whereabouts don't need to be world news", value: 3 },
      ],
    },
    {
      id: 'So2_q18', dim: 'So2',
      text: "Would you give a close friend your house key / door code?",
      options: [
        { label: "Of course, best friends can come anytime", value: 1 },
        { label: "Only the one or two people I trust most", value: 2 },
        { label: "No, my space is my castle", value: 3 },
      ],
    },
    {
      id: 'So2_q19', dim: 'So2',
      text: "A friend used your stuff (makeup/charger/snacks) without asking. You?",
      options: [
        { label: "We're friends, what's the big deal", value: 1 },
        { label: "A bit annoyed but let it go", value: 2 },
        { label: "Next time ask first please, that's basic respect", value: 3 },
      ],
    },
    {
      id: 'So2_q20', dim: 'So2',
      text: "Would you vent about your relationship problems to friends?",
      options: [
        { label: "Yes, every last detail", value: 1 },
        { label: "Share the gist, skip the specifics", value: 2 },
        { label: "What happens between two people doesn't need a third party", value: 3 },
      ],
    },
    {
      id: 'So2_q21', dim: 'So2',
      text: "Family interfering with personal decisions (bedtime/diet/friends). You?",
      options: [
        { label: "They mean well, just go along with it", value: 1 },
        { label: "Consider their input but ultimately decide myself", value: 2 },
        { label: "Clearly tell them: 'This is my business, please don't interfere'", value: 3 },
      ],
    },
    {
      id: 'So2_q22', dim: 'So2',
      text: "Do you chat about personal life with coworkers at work?",
      options: [
        { label: "Sure, coworkers are friends too", value: 1 },
        { label: "Share non-sensitive stuff", value: 2 },
        { label: "Work is work, personal life stays at the door", value: 3 },
      ],
    },
    {
      id: 'So2_q23', dim: 'So2',
      text: "Your social media privacy settings are?",
      options: [
        { label: "Wide open, everyone's welcome", value: 1 },
        { label: "Partially visible, managed by groups", value: 2 },
        { label: "Friends only, strangers get blocked on sight", value: 3 },
      ],
    },
    {
      id: 'So2_q24', dim: 'So2',
      text: "Someone asks really personal questions (relationship status / family background). You?",
      options: [
        { label: "Anything's fair game, I'm an open book", value: 1 },
        { label: "Depends how close we are", value: 2 },
        { label: "Smile back: 'Why do you want to know?'", value: 3 },
      ],
    },
    {
      id: 'So2_q25', dim: 'So2',
      text: "Your ex wants to stay friends / keep in touch. You?",
      options: [
        { label: "Sure, exes can still be friends", value: 1 },
        { label: "Keep it polite but minimal", value: 2 },
        { label: "Delete, block, done -- the past stays in the past", value: 3 },
      ],
    },
    {
      id: 'So2_q26', dim: 'So2',
      text: "Someone you barely know gives you an expensive gift. You?",
      options: [
        { label: "Happily accept, they seem so nice", value: 1 },
        { label: "A bit uneasy but accept it anyway", value: 2 },
        { label: "Don't accept, nothing's free -- might come with strings attached", value: 3 },
      ],
    },
    {
      id: 'So2_q27', dim: 'So2',
      text: "Can you handle friends sharing food / taking food from your plate?",
      options: [
        { label: "Of course, food tastes better shared", value: 1 },
        { label: "Close friends can", value: 2 },
        { label: "Please use serving utensils or order your own, thanks", value: 3 },
      ],
    },
    {
      id: 'So2_q28', dim: 'So2',
      text: "Your journal / diary / notes -- would you let someone read them?",
      options: [
        { label: "Sure, I'm an open book with nothing to hide", value: 1 },
        { label: "Only someone I trust deeply", value: 2 },
        { label: "Absolute no-fly zone, nobody gets access", value: 3 },
      ],
    },
    {
      id: 'So2_q29', dim: 'So2',
      text: "Would you share your real-time location with friends?",
      options: [
        { label: "Sure, safety-wise it's nice to share", value: 1 },
        { label: "In special circumstances I'd turn it on", value: 2 },
        { label: "No, my location is my privacy", value: 3 },
      ],
    },
    {
      id: 'So2_q30', dim: 'So2',
      text: "It's super late at a party, you wanna leave but everyone's still going. You?",
      options: [
        { label: "Stay and keep them company, don't wanna kill the vibe", value: 1 },
        { label: "Hang around a bit longer then find an excuse to leave", value: 2 },
        { label: "Just say 'I'm heading out' -- no explanation needed", value: 3 },
      ],
    },
    {
      id: 'So2_q31', dim: 'So2',
      text: "Someone at dinner keeps pushing you to drink. You?",
      options: [
        { label: "Fine fine fine, bottoms up", value: 1 },
        { label: "Take a token sip", value: 2 },
        { label: "'I don't drink.' Three words, non-negotiable", value: 3 },
      ],
    },
    {
      id: 'So2_q32', dim: 'So2',
      text: "Someone gives you unsolicited life advice you never asked for. You?",
      options: [
        { label: "Appreciate their concern, listen carefully", value: 1 },
        { label: "Nod on the surface, filter internally", value: 2 },
        { label: "'Thanks but I didn't ask for your opinion'", value: 3 },
      ],
    },
    {
      id: 'So2_q33', dim: 'So2',
      text: "Your boss messages you about work after hours / on weekends. You?",
      options: [
        { label: "Reply instantly, always on standby", value: 1 },
        { label: "Check the content first then decide whether to respond", value: 2 },
        { label: "Work hours are over, we'll talk tomorrow", value: 3 },
      ],
    },
    {
      id: 'So2_q34', dim: 'So2',
      text: "Can you accept friends showing up at your place unannounced?",
      options: [
        { label: "Welcome! My door is always open for you", value: 1 },
        { label: "Occasionally fine, but a heads-up would be nice", value: 2 },
        { label: "Please book in advance, surprise visits will make me explode", value: 3 },
      ],
    },
    {
      id: 'So2_q35', dim: 'So2',
      text: "Would you share your streaming/music subscription password with a friend?",
      options: [
        { label: "Sure, one person using it is a waste anyway", value: 1 },
        { label: "Only really close friends", value: 2 },
        { label: "Get your own, I don't do shared accounts", value: 3 },
      ],
    },
    {
      id: 'So2_q36', dim: 'So2',
      text: "A friend texts you every day, replies instantly, likes every post. You?",
      options: [
        { label: "Feels great to be valued!", value: 1 },
        { label: "Kinda touched but also kinda pressured", value: 2 },
        { label: "Suffocating, please give me some space", value: 3 },
      ],
    },
    {
      id: 'So2_q37', dim: 'So2',
      text: "Holiday family gathering, relatives fire off soul-searching questions (dating? salary? baby when?). You?",
      options: [
        { label: "Answer honestly, they're just looking out for me", value: 1 },
        { label: "Laugh it off and deflect", value: 2 },
        { label: "Fire back: 'That's kinda personal, auntie'", value: 3 },
      ],
    },
    {
      id: 'So2_q38', dim: 'So2',
      text: "Relatives keep telling you 'you should do this, you should do that.' Your inner reaction?",
      options: [
        { label: "They have a point, I'll think about it", value: 1 },
        { label: "Nod on the outside, in one ear out the other", value: 2 },
        { label: "State my position: 'I have my own plans, thanks for caring'", value: 3 },
      ],
    },
    {
      id: 'So2_q39', dim: 'So2',
      text: "A coworker constantly chats you up about personal stuff during work, killing your productivity. You?",
      options: [
        { label: "Chat along, work's not going anywhere", value: 1 },
        { label: "A bit annoyed but don't want to cut them off", value: 2 },
        { label: "'Sorry gotta focus, let's catch up later'", value: 3 },
      ],
    },
    {
      id: 'So2_q40', dim: 'So2',
      text: "What do you think is the ideal relationship between people?",
      options: [
        { label: "No yours or mine, completely intertwined", value: 1 },
        { label: "Close but with boundaries", value: 2 },
        { label: "Close yet independent, keep a refreshing distance", value: 3 },
      ],
    },
  ],

  // ═══════════ So3 Expression & Authenticity ═══════════
  So3: [
    {
      id: 'So3_q1', dim: 'So3',
      text: "You had a negative opinion about something but didn't say it. Usually because?",
      options: [
        { label: "I usually just say it straight up", value: 1 },
        { label: "Held back to save face or preserve the relationship", value: 2 },
        { label: "Didn't want to reveal my darker side", value: 3 },
      ],
    },
    {
      id: 'So3_q2', dim: 'So3',
      text: "I act differently around different people",
      options: [
        { label: "No, I'm the same NPC everywhere", value: 1 },
        { label: "I make minor adjustments", value: 2 },
        { label: "Yes, I'm a person of many faces", value: 3 },
      ],
    },
    {
      id: 'So3_q3', dim: 'So3',
      text: "Is there a big difference in how you talk to your boss vs. your best friend?",
      options: [
        { label: "About the same, I am what I am", value: 1 },
        { label: "I adjust my style but the core is the same", value: 2 },
        { label: "Completely different person, seamless mode switch", value: 3 },
      ],
    },
    {
      id: 'So3_q4', dim: 'So3',
      text: 'Your friend asks "Does my new haircut look good?" (It looks terrible.) You?',
      options: [
        { label: '"Bro, honestly it\'s kinda rough"', value: 1 },
        { label: '"It\'s... unique! Maybe try a different style next time?"', value: 2 },
        { label: '"Looks great! So you!"', value: 3 },
      ],
    },
    {
      id: 'So3_q5', dim: 'So3',
      text: "Do you carefully curate your captions and photos before posting on social media?",
      options: [
        { label: "Nah, I post whatever, no filter needed", value: 1 },
        { label: "I'll do a quick touch-up", value: 2 },
        { label: "Every post goes through a personal review committee", value: 3 },
      ],
    },
    {
      id: 'So3_q6', dim: 'So3',
      text: 'How do you feel about "being yourself"?',
      options: [
        { label: "I'm always being myself, no act here", value: 1 },
        { label: "Adjusting to the situation is perfectly normal", value: 2 },
        { label: "Be myself? Which self? I have several", value: 3 },
      ],
    },
    {
      id: 'So3_q7', dim: 'So3',
      text: "Someone tells a terrible joke at a gathering. You?",
      options: [
        { label: 'Stone-faced: "That wasn\'t funny"', value: 1 },
        { label: "Polite smile", value: 2 },
        { label: "HAHAHA (30 years of professional fake-laughing)", value: 3 },
      ],
    },
    {
      id: 'So3_q8', dim: 'So3',
      text: "Getting emotional in public (at a movie / concert). You?",
      options: [
        { label: "Cry if I wanna cry, my tears don't need to be hidden", value: 1 },
        { label: "Secretly wipe them so nobody notices", value: 2 },
        { label: "Hold it in, can't lose composure out here", value: 3 },
      ],
    },
    {
      id: 'So3_q9', dim: 'So3',
      text: "People are talking about a topic you know nothing about. You?",
      options: [
        { label: "'I have no clue about this, can someone explain?'", value: 1 },
        { label: "Quietly Google it then join in", value: 2 },
        { label: "Nod along and pretend I kinda get it", value: 3 },
      ],
    },
    {
      id: 'So3_q10', dim: 'So3',
      text: "Everyone says a movie is amazing but you thought it was garbage. You?",
      options: [
        { label: "'Honestly I thought it was pretty mid'", value: 1 },
        { label: "'It's okay, just not my type'", value: 2 },
        { label: "'Yeah it was great!' (internally roasting it to shreds)", value: 3 },
      ],
    },
    {
      id: 'So3_q11', dim: 'So3',
      text: "You do something super embarrassing in public (like tripping). You?",
      options: [
        { label: "Crack a joke: 'The ground just missed me so much' and laugh it off", value: 1 },
        { label: "Awkward laugh, speed-walk away", value: 2 },
        { label: "Act like nothing happened, poker face, keep walking", value: 3 },
      ],
    },
    {
      id: 'So3_q12', dim: 'So3',
      text: "When your real thoughts and polite words are completely different, you usually?",
      options: [
        { label: "Say the truth, don't care what others think", value: 1 },
        { label: "Mostly honest but I'll gift-wrap it a bit", value: 2 },
        { label: "Polite words roll off the tongue, real thoughts die inside", value: 3 },
      ],
    },
    {
      id: 'So3_q13', dim: 'So3',
      text: "How real is your dating app / social media bio?",
      options: [
        { label: "Completely real, flaws and all", value: 1 },
        { label: "Real but showing my best angles", value: 2 },
        { label: "A carefully crafted persona, basically fan fiction of myself", value: 3 },
      ],
    },
    {
      id: 'So3_q14', dim: 'So3',
      text: "When writing your resume, you?",
      options: [
        { label: "Write it as it is, no exaggeration no downplay", value: 1 },
        { label: "Moderate polish, but no lies", value: 2 },
        { label: "Packaged so hard my own mom wouldn't recognize me -- it's called professionalism", value: 3 },
      ],
    },
    {
      id: 'So3_q15', dim: 'So3',
      text: "How do you express emotions?",
      options: [
        { label: "Everything shows on my face, can't hide it", value: 1 },
        { label: "Depends on the setting", value: 2 },
        { label: "Rich inner world but my face is permanently on neutral", value: 3 },
      ],
    },
    {
      id: 'So3_q16', dim: 'So3',
      text: "Your boss/teacher says something you think is wrong. You?",
      options: [
        { label: "Voice my disagreement directly", value: 1 },
        { label: "Find a private moment to mention it tactfully", value: 2 },
        { label: "Say nothing, they're the boss/teacher after all", value: 3 },
      ],
    },
    {
      id: 'So3_q17', dim: 'So3',
      text: "You made a mistake and someone caught it. You?",
      options: [
        { label: "'Yep, my bad, I'll fix it'", value: 1 },
        { label: "Admit it but throw in some context about external factors", value: 2 },
        { label: "Try to spread the blame around, can't put it all on me", value: 3 },
      ],
    },
    {
      id: 'So3_q18', dim: 'So3',
      text: "Opening up about your vulnerable side to a close friend. You?",
      options: [
        { label: "Totally natural, that's what friends are for", value: 1 },
        { label: "Depends how deep the friendship goes", value: 2 },
        { label: "Won't do it, I don't want anyone seeing me weak", value: 3 },
      ],
    },
    {
      id: 'So3_q19', dim: 'So3',
      text: "How big is the gap between your 'social self' and your 'alone self'?",
      options: [
        { label: "No gap, I'm the same person 24/7", value: 1 },
        { label: "A little different", value: 2 },
        { label: "Completely different people, account-switching level smooth", value: 3 },
      ],
    },
    {
      id: 'So3_q20', dim: 'So3',
      text: "Do you consciously switch your style / personality around different people?",
      options: [
        { label: "Nope, I'm the same with everyone", value: 1 },
        { label: "Adjust a little here and there", value: 2 },
        { label: "Obviously, different scenarios call for different strategies", value: 3 },
      ],
    },
    {
      id: 'So3_q21', dim: 'So3',
      text: "Someone compliments you but you feel they're overselling it. You?",
      options: [
        { label: "'No no, I'm really not that great' -- honest deflection", value: 1 },
        { label: "'Thanks' and change the subject", value: 2 },
        { label: "Graciously accept and add a few supporting examples (knowing it's overblown)", value: 3 },
      ],
    },
    {
      id: 'So3_q22', dim: 'So3',
      text: "When you're angry, do you express it directly?",
      options: [
        { label: "Yes, if I'm unhappy I say I'm unhappy", value: 1 },
        { label: "Cool off for a bit then bring it up", value: 2 },
        { label: "Smiling on the outside, already cursed them out 300 times inside", value: 3 },
      ],
    },
    {
      id: 'So3_q23', dim: 'So3',
      text: "Struggling at work/school -- would you show your helplessness to others?",
      options: [
        { label: "Sure, if I don't know I ask -- pretending is more embarrassing", value: 1 },
        { label: "Only ask for help after struggling enough on my own", value: 2 },
        { label: "Rather die than let coworkers/classmates see me fail", value: 3 },
      ],
    },
    {
      id: 'So3_q24', dim: 'So3',
      text: "Are you aware of how many 'masks' you wear in social settings?",
      options: [
        { label: "I don't wear masks, what you see is what you get", value: 1 },
        { label: "Know there's a few but that's normal", value: 2 },
        { label: "Very aware, mask inventory fully stocked, ready to switch anytime", value: 3 },
      ],
    },
    {
      id: 'So3_q25', dim: 'So3',
      text: "Are you genuinely interested in other people's stuff or just faking it?",
      options: [
        { label: "If I'm interested I listen, if not I say so", value: 1 },
        { label: "Genuinely interested most of the time", value: 2 },
        { label: "Professional fake-interest specialist: uh-huh uh-huh then what", value: 3 },
      ],
    },
    {
      id: 'So3_q26', dim: 'So3',
      text: "Would you hold back your real opinion to avoid conflict?",
      options: [
        { label: "Nope, gotta say what I gotta say, conflict be damned", value: 1 },
        { label: "Depends how big the issue is", value: 2 },
        { label: "Often, peace matters more than truth", value: 3 },
      ],
    },
    {
      id: 'So3_q27', dim: 'So3',
      text: "When you need to introduce/sell yourself. You?",
      options: [
        { label: "Simple and real about who I am", value: 1 },
        { label: "Prepare a bit, moderate packaging", value: 2 },
        { label: "Professional marketing copy already drafted, personal branding is a core skill", value: 3 },
      ],
    },
    {
      id: 'So3_q28', dim: 'So3',
      text: "Is it easy to speak from the heart with family?",
      options: [
        { label: "Easy, I'm most real around family", value: 1 },
        { label: "Some things I can say, some I can't", value: 2 },
        { label: "Hardest of all actually -- I wear the most masks around family", value: 3 },
      ],
    },
    {
      id: 'So3_q29', dim: 'So3',
      text: "Saying 'I love you' / 'I miss you' -- how does that feel?",
      options: [
        { label: "Very natural, say it when I feel it", value: 1 },
        { label: "Depends on the context and the person", value: 2 },
        { label: "I hesitate even typing it, saying it out loud? Impossible", value: 3 },
      ],
    },
    {
      id: 'So3_q30', dim: 'So3',
      text: "Disappointed by a friend/coworker's performance. Would you express it?",
      options: [
        { label: "Say it directly, I don't like holding things in", value: 1 },
        { label: "Drop hints and see if they pick up on it", value: 2 },
        { label: "Stay silent, swallow it with a smile", value: 3 },
      ],
    },
    {
      id: 'So3_q31', dim: 'So3',
      text: "Is your sympathy / empathy for others genuine or performative?",
      options: [
        { label: "Genuine, I don't fake it", value: 1 },
        { label: "Mostly real, occasionally play along", value: 2 },
        { label: "A lot of it is performance at this point, muscle memory", value: 3 },
      ],
    },
    {
      id: 'So3_q32', dim: 'So3',
      text: "Would you openly express political opinions online / around friends?",
      options: [
        { label: "Sure, what's there to be afraid of", value: 1 },
        { label: "Depends on the crowd and setting", value: 2 },
        { label: "Absolutely not, don't touch sensitive topics", value: 3 },
      ],
    },
    {
      id: 'So3_q33', dim: 'So3',
      text: "Would you be open about your religion / beliefs / values to others?",
      options: [
        { label: "Yes, it's part of who I am", value: 1 },
        { label: "Close friends know", value: 2 },
        { label: "Won't bring it up, afraid of being judged", value: 3 },
      ],
    },
    {
      id: 'So3_q34', dim: 'So3',
      text: "Someone asks 'Can you afford stuff? How's your financial situation?' You?",
      options: [
        { label: "Tell it like it is -- broke is broke", value: 1 },
        { label: "Vague reply: 'Getting by I guess'", value: 2 },
        { label: "Rich or poor, always say 'Doing fine!' -- never reveal the real situation", value: 3 },
      ],
    },
    {
      id: 'So3_q35', dim: 'So3',
      text: "Would you talk to people about your mental health?",
      options: [
        { label: "Sure -- anxiety, depression, all fair game, no shame", value: 1 },
        { label: "Only with really close people", value: 2 },
        { label: "No, don't want to be labeled or pitied", value: 3 },
      ],
    },
    {
      id: 'So3_q36', dim: 'So3',
      text: "When you apologize, is it sincere?",
      options: [
        { label: "I only apologize when I truly feel I was wrong", value: 1 },
        { label: "Mostly sincere", value: 2 },
        { label: "Apologizing is just a social skill, has nothing to do with how I actually feel", value: 3 },
      ],
    },
    {
      id: 'So3_q37', dim: 'So3',
      text: "When you thank someone, how genuine is it?",
      options: [
        { label: "Every thank-you is heartfelt", value: 1 },
        { label: "Mostly genuine, occasionally just being polite", value: 2 },
        { label: "'Thanks' is basically a verbal tic at this point, said and forgotten", value: 3 },
      ],
    },
    {
      id: 'So3_q38', dim: 'So3',
      text: "Would you proactively share your failures with others?",
      options: [
        { label: "Sure, failed is failed, face it honestly", value: 1 },
        { label: "If there's a lesson worth sharing, maybe", value: 2 },
        { label: "Nope, only show the highlight reel", value: 3 },
      ],
    },
    {
      id: 'So3_q39', dim: 'So3',
      text: "What's your humor style?",
      options: [
        { label: "Lots of self-deprecation -- roasting myself is the realest comedy", value: 1 },
        { label: "Depends on the vibe, I can do any style", value: 2 },
        { label: "Classy humor only, never expose my own weaknesses", value: 3 },
      ],
    },
    {
      id: 'So3_q40', dim: 'So3',
      text: "In a relationship, do you directly state what you need?",
      options: [
        { label: "Yes, if I don't say it how would they know", value: 1 },
        { label: "Sometimes I say it, sometimes I bottle it up", value: 2 },
        { label: "Never say it, they should just know -- spelling it out kills the romance", value: 3 },
      ],
    },
  ],
};

export const SPECIAL_QUESTIONS: SpecialQuestion[] = [
  {
    id: 'drink_gate_q1',
    kind: 'drink_gate',
    text: 'What are your hobbies?',
    options: [
      { label: 'The basics — eating, sleeping, existing', value: 1 },
      { label: 'Artsy stuff', value: 2 },
      { label: 'Drinking', value: 3 },
      { label: 'Working out', value: 4 },
    ],
  },
  {
    id: 'drink_gate_q2',
    kind: 'drink_trigger',
    text: "What's your attitude toward drinking?",
    options: [
      { label: "A casual sip here and there, can't handle too much", value: 1 },
      { label: "Liquor in my thermos like it's water, alcohol is my religion", value: 2 },
    ],
  },
];
