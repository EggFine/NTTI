import type { PersonalityType } from '../types';

export const PERSONALITY_TYPES: PersonalityType[] = [
  // ═══════════ Original 26 Types ═══════════
  {
    code: 'CTRL', cn: 'The Puppeteer', pattern: 'HHH-HMH-MHH-HHH-MHM', weights: '332222223332222',
    intro: 'Got you right where I want you, didn\'t I?',
    desc: 'Congratulations — you are nature\'s sworn enemy of entropy! 99.99% of so-called "successful people" are just cheap knockoffs of you. CTRL is a walking, talking human task-manager. What ordinary folks call "rules" are just factory defaults to you; what mortals call "plans" are your doodles. CTRL hits Ctrl+S on your life one second before derailment, then drags you back on track with irrefutable logic. They are the last backup drive for your chaotic existence — the one reboot button still glowing when the universe crashes.',
  },
  {
    code: 'ATM-er', cn: 'The Cash Cow', pattern: 'HHH-HHM-HHH-HMH-MHL',
    intro: 'You think I\'m made of money?',
    desc: 'Congratulations, you\'ve unlocked the world\'s rarest personality type. ATM-er doesn\'t necessarily hand out cash, but is forever "paying" — paying time, paying energy, paying patience, paying away a perfectly peaceful evening. Like a battered but indestructible ATM machine: people insert their anxiety and drama, and out comes a reassuring "Don\'t worry, I got this." Your life is one grand, unappreciated solo tab-picking show. Only in the dead of night do you sigh at your spiritual invoice: ah, this damn, bottomless sense of responsibility.',
  },
  {
    code: 'Dior-s', cn: 'The Underdog', pattern: 'MHM-MMH-MHM-HMH-LHL',
    intro: 'Just wait for my glow-up arc.',
    desc: 'You\'re not a loser — you\'re the long-lost spiritual heir of Diogenes the Cynic. Dior-s stands for Diogenes\' Original Realist-sage. This personality is the ultimate middle finger to consumerism and hustle-culture gaslighting — not unmotivated, just aware that every "ladder to success" leads to a fancier cage. While others get slapped around by the tidal waves of the era, Dior-s is already sunbathing in their philosophical barrel, achieving barrel-soul unity. Two laws of physics apply: 1) Lying down beats standing up. 2) When it\'s mealtime, you eat.',
  },
  {
    code: 'BOSS', cn: 'The Driver', pattern: 'HHH-HMH-MMH-HHH-LHL', weights: '332212223332212',
    intro: 'Hand me the wheel. I\'m driving.',
    desc: 'BOSS is the person whose hands are permanently welded to a steering wheel. Even when the gas light is on and the GPS is hallucinating, you say with a stone face: "I\'ll drive." And then you actually get there. This personality obeys its own physics — the Law of Perpetual Upward Motion. Efficiency is religion; order is breathing. You\'re not "someone with natural leadership aura" — you ARE a human aura generator; air within a five-meter radius automatically becomes serious and productive. Today: learn a new language. Tomorrow: get certified. Day after: colonize Mars. You say that\'s too intense? They look at you like you\'re a baby chick: "I\'m not too much — you\'re just too soft."',
  },
  {
    code: 'THAN-K', cn: 'The Grateful', pattern: 'MHM-HMM-HHM-MMH-MHL',
    intro: 'Thank the heavens! Thank the earth! Thank this quiz!',
    desc: 'Congratulations — you should be thanking ME! Stuck in traffic on the way to work? "I\'m grateful for this traffic jam — it gives me more time to admire every anxiety-contorted face outside my window." THAN-K has a personality as warm as jade and a heart as vast as the ocean. In their eyes there are no bad people, only "friends not yet illuminated by the radiant light of gratitude." Having a THAN-K friend is like having an inexhaustible positivity broadcast tower beside you. They could find a Van Gogh Starry Night in the mold stain on your wall.',
  },
  {
    code: 'OH-NO', cn: 'The Oh-No', pattern: 'HHL-LMH-LHH-HHM-LHL',
    intro: 'Oh no! How did I get THIS personality?!',
    desc: '"Oh no!" is not a scream of fear — it\'s peak intelligence. Where a normal person sees a cup near the edge of a table, OH-NO sees a disaster epic: water spill → short circuit → fire → building evacuation → economic collapse → butterfly effect → apocalypse. So, with a soul-deep "Oh, no!", they move the cup to dead center at light speed and slip a coaster underneath. OH-NO has an almost obsessive respect for boundaries — yours is yours, mine is mine. Every accident and risk is strangled in its cradle by a well-timed "Oh, no!"',
  },
  {
    code: 'GOGO', cn: 'The Doer', pattern: 'HHM-HMH-MMH-HHH-MHM', weights: '222222223332222',
    intro: 'gogogo~ let\'s roll!',
    desc: 'GOGO lives in an ultra-literal "what you see is what you get" universe: close your eyes and the sky IS dark; spend all your money and you ARE broke; stand on a crosswalk and you ARE a pedestrian. Flawless logic — argue with the wall. While everyone else debates whether the chicken or egg came first, GOGO already turned both into the Ultimate Meaning Rice Bowl. They don\'t "solve problems" — they "clear the to-do list." The world has two states: Done, and About To Be Done By Me.',
  },
  {
    code: 'SEXY', cn: 'The Stunner', pattern: 'HMH-HHL-HMM-HMM-HLH',
    intro: 'You were born to be a showstopper!',
    desc: 'When you walk into a room, the lighting system auto-detects "stunner" and dims itself to save energy. When you smile, the ambient humidity drops — water vapor condenses into little hearts in people\'s eyes. Legend has it that if enough SEXY personalities gather at one party, the combined charm energy could temporarily warp the fabric of spacetime. They don\'t need to try hard — most of the time, simply existing is already an extravagantly gorgeous prose poem.',
  },
  {
    code: 'LOVE-R', cn: 'The Romantic', pattern: 'MLH-LHL-HLH-MLM-MLH', weights: '222332322222222',
    intro: 'So full of love, reality feels a bit barren.',
    desc: 'LOVE-R is the last wandering bard in the age of concrete jungles. Their emotional processor isn\'t binary — it\'s rainbow-coded. A falling leaf is "autumn" to normal people; to LOVE-R it\'s a thirteen-act tragicomedy about reincarnation, sacrifice, and unspoken love. Their inner world is a theme park that never closes. They spend a lifetime searching for the one soul who can read the park map and ride the carousel with them until the end of the universe.',
  },
  {
    code: 'MUM', cn: 'The Mama Bear', pattern: 'MMH-MHL-HMM-LMM-HLL',
    intro: 'Can I... call you Mom?',
    desc: 'Before chaos took shape, before time had a name, before the first star burped into existence — there was already Mom. The MUM personality is fundamentally gentle, acutely attuned to emotions, equipped with superhuman empathy, and knows exactly when to stop and when to say "let it go." MUM is a healer who cures everyone else\'s sadness. The only catch: when MUM cries, the dose of medicine they give themselves is always one size smaller than what they give others. MUM\'s tenderness toward themselves is always at a discount.',
  },
  {
    code: 'FAKE', cn: 'The Imposter', pattern: 'HLM-MML-MLM-MLM-HLH', weights: '222222222222333',
    intro: 'There are no more real humans left.',
    desc: 'SCP Foundation EMERGENCY REPORT: Item SCP-CN-████ "The Imposter." In social settings, FAKE swaps personality masks faster than switching phone keyboards — one second in bro-mode, the next second the boss walks in and they\'re instantly a poised, model employee, facial sheen micro-adjusted and all. You thought you made a real friend? Wake up — you just met a high-performance android with excellent camouflage. Late at night, FAKE peels off the masks one by one, only to find it\'s empty underneath — it\'s the masks themselves that make up who they are.',
  },
  {
    code: 'OJBK', cn: 'The Whatever', pattern: 'MMH-MMM-HML-LMM-MML',
    intro: 'When I say "whatever," I mean it.',
    desc: 'OJBK is no longer a personality — it\'s a governing philosophy. When mortals face the century\'s great dilemma of "rice or noodles for lunch," their brains burn calories; OJBK issues a sovereign decree with imperial calm: "Either\'s fine." This isn\'t indecisiveness — this is telling you: your petty choices are beneath my throne. Why no arguments? Because debating the future of the cosmos with an amoeba is pointless. Why no nitpicking? Because an emperor doesn\'t care which direction the dust drifts beneath their feet.',
  },
  {
    code: 'MALO', cn: 'The Monkey', pattern: 'MLH-MHM-MLH-MLH-LMH',
    intro: 'Life is a dungeon run, and I\'m just a monkey.',
    desc: 'Friend, you\'re not "young at heart" — you simply never evolved. Your soul is still in the tree-swinging, banana-euphoria era. When humanity\'s ancestors climbed down from the trees and put on suits, MALO\'s ancestor scratched its butt on the next branch over and let out a disdainful screech. Rules are occasionally breakable, ceilings are for hanging upside-down from, and conference rooms are for doing backflips in. MALO is basically a wild idea that fell out of an enormous brain-hole and forgot to close the door.',
  },
  {
    code: 'JOKE-R', cn: 'The Clown', pattern: 'LLH-LHL-LML-LLL-MLM',
    intro: 'Turns out we were all clowns.',
    desc: 'JOKE-R isn\'t a "person" — more like an entity wearing jokes as clothing. Peel one layer: a joke. Another layer: a bit. Keep peeling to the very end... it\'s empty, just a faint echo whispering: "Ha, didn\'t see that coming." JOKE-R is the social-vibe committee\'s chairperson and sole DPS output. When they\'re around, the party never dies. Everyone\'s doubled over laughing, and the one laughing hardest is usually JOKE-R themselves — using the biggest laugh to drown out the sound of heartbreak.',
  },
  {
    code: 'WOC!', cn: 'The WTF', pattern: 'HHL-HMH-MMH-HHM-LHH',
    intro: 'WTF, how\'d I get this personality?',
    desc: 'A wondrous creature — the WOC! human. Runs two completely independent operating systems: one called "Surface OS" responsible for emitting "WTF," "holy crap," and "huh?" sounds; another called "Background OS" calmly analyzing: yep, just as I expected. WOC! people only say "WTF" — they don\'t meddle. Explaining logic to a fool is like pushing mud up a wall: wastes your energy and gets your hands dirty. So they grip a blade of wisdom-grass and offer the mad world their highest salute with one heartfelt "WOC!"',
  },
  {
    code: 'THIN-K', cn: 'The Thinker', pattern: 'HHL-HMH-MLH-MHM-LHH',
    intro: 'Deep thinking complete (100s)...',
    desc: 'THIN-K\'s brain is permanently in think-mode. A supreme information judge: arguments, evidence, logical reasoning, potential biases, even a "three-generation ideological background check on the author" — full dossier. In the age of information overload, THIN-K never blindly follows the herd, weighs pros and cons in relationships, and fiercely guards personal space. People see you staring into space? Fools — that\'s not spacing out, that\'s the brain sorting, filing, and shredding every piece of information received today.',
  },
  {
    code: 'SHIT', cn: 'The Cynic', pattern: 'HHL-HLH-LMM-HHM-LHH',
    intro: 'This world is one giant pile.',
    desc: 'SHIT\'s behavioral pattern is a breathtaking paradox. Mouth: "This project is total crap." Hands: quietly opens Excel and builds a function model. Mouth: "These coworkers are all garbage." Hands: stays up all night cleaning up after a colleague\'s mess. Mouth: "Just destroy it all." Hands: wakes up at 7 AM sharp and squeezes onto the crappy subway to do that crappy job. Don\'t worry — that\'s not the doomsday alarm; that\'s the charge horn right before they save the world.',
  },
  {
    code: 'ZZZZ', cn: 'The Deadliner', pattern: 'MHL-MLH-LML-MML-LHM',
    intro: 'I\'m not dead, I\'m just sleeping.',
    desc: '99+ unread messages in the group chat? Invisible. But the moment someone drops "@everyone — 30 minutes left" as a final ultimatum, you rise from your thousand-year tomb and slowly type "Noted," then deliver a passing-grade submission in 29 minutes. Only when "deadline" — the one supreme-authority command — appears do you truly erupt: silent until the moment of thunder. You have proven a universal truth: sometimes doing nothing means doing nothing wrong.',
  },
  {
    code: 'POOR', cn: 'The Laser', pattern: 'HHL-MLH-LMH-HHH-LHL',
    intro: 'I\'m broke, but I\'m focused.',
    desc: 'This "poor" isn\'t a verdict from your bank balance — it\'s resource redistribution after a desire detox. While others spray their energy like confetti, you compress yours into a single laser beam — whatever it hits starts smoking. POOR\'s world is simple: everything unimportant gets muted; everything important gets hammered to the ground. You don\'t have few resources — you\'ve poured all of them into one single shaft. So you look broke on the surface, but underneath you\'re a gold mine.',
  },
  {
    code: 'MONK', cn: 'The Hermit', pattern: 'HHL-LLH-LLM-MML-LHM', weights: '223233222222332',
    intro: 'Free from worldly desires.',
    desc: 'While everyone else finds enlightenment at karaoke night, MONK meditates on the Great Way at home. Already seen through the illusions of the material world, MONK does not welcome idle visitors disturbing their spiritual practice. MONK\'s personal space is a sacred barrier — Mount Sumeru, an absolute territory, divinely inviolable. Trespassers will experience soul-level suffocation. MONKs don\'t cling or chase, because in their worldview everything has its own orbit — planets maintain billions of miles between each other to form a harmonious cosmos. Why can\'t people do the same?',
  },
  {
    code: 'IMSB', cn: 'The Self-Roaster', pattern: 'LLM-LMM-LLL-LLL-MLM',
    intro: 'Seriously? Am I really that dumb?',
    desc: 'Inside IMSB\'s brain live two immortal gladiators locked in eternal combat: one called "LET\'S F***ING GO!" and the other called "I\'M SUCH AN IDIOT!" See someone attractive — warrior #1 says: Go! Get their number! Warrior #2 says: Why would they ever look at you? End result: stare at their retreating figure until they vanish, then pull out your phone and search "how to overcome social anxiety." IMSB isn\'t actually dumb — their internal drama is just longer than every Marvel movie combined.',
  },
  {
    code: 'SOLO', cn: 'The Lone Wolf', pattern: 'LML-LLH-LHL-LML-LHM',
    intro: 'I can\'t believe I\'m the lone wolf...',
    desc: 'Don\'t cry just yet — a king\'s coronation is usually a solo affair. The Lone Wolf\'s self-worth runs a little low; sometimes they push others away first, building a Great Wall called "Don\'t Touch Me" around their soul. Every brick is a scar from the past. SOLO is a hedgehog who hides every soft spot and points all spines at the world. Those spines aren\'t an attack — they\'re unspoken whispers of "don\'t come closer, I\'m afraid you\'ll get hurt too" and "please... don\'t leave."',
  },
  {
    code: 'FUCK', cn: 'The Wildcard', pattern: 'MLL-LHL-LLM-MLL-HLH',
    intro: 'F***! What kind of personality is this?',
    desc: 'A humanoid weed has appeared in the city of civilization — one no herbicide can kill: FUCK. In FUCK\'s worldview, social norms are meaningless. The emotional switch is a physical toggle with two settings: FUCK YEAH and FUCK OFF. FUCK doesn\'t just chase instant thrills — they chase a raw, rampaging life force ricocheting inside them. When everyone else has been domesticated into obedient poultry, FUCK is the last wolf howl echoing across the wilderness.',
  },
  {
    code: 'DEAD', cn: 'The Flatline', pattern: 'LLL-LLM-LML-LLL-LHM', weights: '322223322332222',
    intro: 'Am I... even alive?',
    desc: 'Don\'t Expect Any Drives. DEAD looks at the world the way a top-tier gamer looks at a game after clearing every main quest, side quest, and hidden achievement, then deleting and restarting 999 times only to realize: this game was never fun. DEAD is the ultimate sage who has transcended desire and ambition. Their very existence is the most silent yet absolute protest against this noisy world.',
  },
  {
    code: 'IMFW', cn: 'The Fragile', pattern: 'LLH-LHL-LML-LLL-MLL',
    intro: 'Am I really... useless?',
    desc: 'The Fragile have delicate self-esteem, a shaky sense of security, and sometimes lack opinions of their own — which means they can precisely detect the strongest WiFi signal nearby, a.k.a. the most reliable person in their heart. Walking into their life is like entering a high-end orchid greenhouse: you need to precisely control temperature and humidity, plus daily scheduled "I love you" verbal photosynthesis. Give IMFW a single piece of candy and they\'ll give you back a pair of sparkling eyes full of absolute trust. You\'re not useless — you\'re just too unguarded, too quick to care.',
  },

  // ═══════════ Second Batch: 5 Types ═══════════
  {
    code: 'NPC', cn: 'The Extra', pattern: 'MMM-MMM-MMM-MMM-MMM',
    intro: 'You\'re not the main character, but the whole world runs on you.',
    desc: 'Without you, the protagonist can\'t even buy a basic iron sword. NPC scores medium across every dimension — that\'s not mediocrity, that\'s versatility. You\'re like a phone with great factory settings — no jailbreak needed to run every app smoothly. Your personality spectrum is a perfect sine wave, always broadcasting on a frequency that keeps everyone around you comfortable. NPC doesn\'t need protagonist armor, because every storyline eventually passes through your shop door.',
  },
  {
    code: 'BUFF', cn: 'The Aura', pattern: 'HHH-HHH-HHH-MHM-MML',
    intro: 'Stand next to me and you auto-buff.',
    desc: 'You are the walking BUFF everyone dreams of in a game! Self-awareness, emotional investment, and worldview are all maxed out — you know yourself, you\'re kind to the world, and you go all-in. This makes you a natural stat-booster: people near you just... get better. Chat with you and suddenly problems seem manageable; work with you and productivity spikes for no reason. You\'re the "does nothing yet makes everyone feel safe" type — a living, breathing placebo effect.',
  },
  {
    code: 'GLITCH', cn: 'The Glitch', pattern: 'HLH-HLH-HLH-HLH-HLH',
    intro: 'System error — but make it artistic.',
    desc: 'You\'ve successfully triggered a bug in the personality system. GLITCH is defined by extreme polarization — every model simultaneously holds the highest and lowest dimension scores. Like a computer running Windows and Linux at the same time, quantum-leaping between operating systems daily. Others see you: one moment confident enough to conquer the universe, next moment withdrawn like a smart-home device that lost WiFi. But this very contrast makes you the most unpredictable being in a standardized world. You\'re not having an identity crisis — you\'re running identity EVERYTHING.',
  },
  {
    code: 'SIMP', cn: 'The Simp', pattern: 'LMH-HHL-HLH-LLM-HLM', weights: '222332322222222',
    intro: 'I\'d do anything for you... seriously.',
    desc: 'The most sincere personality in the entire universe. Once SIMP locks onto someone, the "Unconditional Devotion Protocol" activates: you say go east, they never go west; you say the moon is square, they\'re already googling evidence. SIMP\'s love has no firewall and no antivirus — any emotional signal reaches the heart directly. Is that dumb? Maybe. But in an era where everyone wears masks and keeps a backup plan, SIMP\'s sincerity has become the scarcest resource of all.',
  },
  {
    code: 'PING', cn: 'The Read-Receipt', pattern: 'MHH-MLM-HMH-MMM-MHM',
    intro: 'I saw it — let me think before I reply.',
    desc: 'The most mysterious entity of the digital age — the artist of "seen, no reply." Core trait: receives everything, processes slowly, responds with precision. Their social system is a high-performance server: massive concurrency (takes in everything), but response time is variable (one second to three days). People think you\'re ignoring them? No — you\'re running a complex decision tree in the background. PING isn\'t cold; it\'s tenderness refined to the extreme — every reply has been reviewed and cleared by seven internal firewalls.',
  },

  // ═══════════ Third Batch: 10 New Types ═══════════
  {
    code: 'AFK', cn: 'The Away', pattern: 'MMM-LMH-MLL-LMM-LMM',
    intro: 'Body\'s here. Soul left the chat.',
    desc: 'Your soul is currently out of service range. AFK\'s physical shell clocks in every day, attends meetings, nods, and smiles on cue — but the spiritual core checked out and vacationed to Alpha Centauri ages ago. Colleague asks "What do you think of this proposal?" — you flash a professional smile: "Looks great." Meanwhile your soul\'s OS pops up: "This program has stopped responding. Wait?" AFK isn\'t slacking — AFK is an advanced astral-projection technique. Body stays in the mortal realm paying taxes; soul surfs parallel universes.',
  },
  {
    code: 'CPU', cn: 'The Overheater', pattern: 'HHM-HHH-HMH-HHL-MHM', weights: '222332223332222',
    intro: 'Don\'t touch me — thermal throttling in progress.',
    desc: 'Your brain is a top-tier 7nm processor running at 5.8GHz year-round — minus the cooler. CPU personality\'s defining trait: wants to manage everything, perfect everything, win everything, AND go all-in emotionally. Result: thermal wall hit before Friday. Friend says "relax a little" — you think: Relax? What command is that? My task manager has no such process. CPU doesn\'t crash. CPU just blue-screens for three seconds, auto-reboots, and resumes overclocking.',
  },
  {
    code: 'BAND', cn: 'The Band-Aid', pattern: 'MMH-HMH-HHM-MLM-HLM',
    intro: 'Don\'t worry — I\'m here.',
    desc: 'You are a human band-aid. Not some fancy hydrogel dressing — just a plain, flesh-colored adhesive strip. Cheap, always on call, and instantly reassuring once applied. BAND\'s social mode: you cry, I sit with you; you laugh, I laugh along; you\'re spiraling, I listen. You won\'t cure any major illness, but you precisely cover every small wound. The only problem: when the band-aid itself gets scraped raw, who does it turn to? Answer: it sticks itself on itself and tells everyone "I\'m fine."',
  },
  {
    code: 'RNG', cn: 'The Random', pattern: 'MLM-HMM-LMH-MHL-HMM',
    intro: 'My life is powered by a random number generator.',
    desc: 'RNG\'s personality stats re-roll every morning. Monday: social anxiety. Tuesday: life of the party. Wednesday: philosopher. Thursday: monkey. Friday: BOSS. Weekend: straight-up DEAD. Ask RNG what tomorrow\'s plan is? RNG doesn\'t know either — tomorrow\'s RNG and today\'s RNG might be completely different people. The one constant: no matter what stats they roll today, RNG plays the hand with a casual "well, guess this is happening" attitude. Chaos is justice.',
  },
  {
    code: 'LOOT', cn: 'The Lucky Drop', pattern: 'MML-MMH-MLM-LMH-MLH',
    intro: 'I never try hard, but my luck never quits.',
    desc: 'LOOT is the personality that makes every "grindset" player rage-quit. Others pull all-nighters on proposals; LOOT plays a round of games, then gets a sudden flash of inspiration and writes something better. Others prep for interviews meticulously; LOOT shows up late but gets hired for being "authentic." It\'s not laziness — it\'s that the timing and method of effort always land on some mysterious lucky spot. LOOT believes one truth: if things will get better, why stress now? If they won\'t, what good is stressing?',
  },
  {
    code: 'RICK', cn: 'The Slacker King', pattern: 'LHM-LMH-LLH-LLM-MLH',
    intro: 'Never gonna give a f***.',
    desc: 'RICK has achieved the final form of human evolution: selective slacking. Note: not total slacking — RICK can unleash terrifying power on the things they actually care about. It\'s just that what they care about accounts for roughly 3% of life. The other 97% gets an elegant wave-through of "whatever," "don\'t care," and "if it makes you happy." RICK isn\'t incapable — RICK invested all capability into that 3%, which is why they look like a bum but are actually the ultimate strategist.',
  },
  {
    code: 'WIKI', cn: 'The Encyclopedia', pattern: 'HHH-MLM-MHH-HMH-LHH',
    intro: 'Oh, I know this one — let me explain.',
    desc: 'WIKI\'s brain is an eternally updating knowledge base — article count has already surpassed Wikipedia. Any topic gets at least three sentences; any obscure trivia rolls off the tongue. "Did you know octopuses have three hearts?" "Did you know the total weight of all ants on Earth roughly equals all humans?" To WIKI, the world is one massive database waiting to be indexed, and they\'re the only crawler. The one bug: WIKI knows everything but can\'t necessarily use any of it to solve an actual real-world problem.',
  },
  {
    code: 'MEME', cn: 'The Shitposter', pattern: 'MLM-MHH-LMM-MMM-HMH',
    intro: 'I\'m literally deceased, fam.',
    desc: 'Your language system has been completely overwritten by the internet. Normal person says "I\'m sad" — MEME says "I\'m literally unaliving rn." Normal person says "that person is impressive" — MEME says "no cap they ate and left no crumbs." MEME speaks in memes, socializes via cursed reaction images, and builds an entire worldview from internet slang. This isn\'t being unserious — it\'s high-level encrypted communication only decodable by people on the same frequency. Outsiders think you\'re losing it; insiders reply with an even more unhinged meme.',
  },
  {
    code: 'SUS', cn: 'The Sus One', pattern: 'HMM-MML-LMH-MHM-MHH',
    intro: 'It wasn\'t me. I\'m not. Stop making stuff up.',
    desc: 'The little red crewmate from Among Us has entered reality. SUS looks like a normal person on the surface, and... is actually a normal person — just one radiating an inexplicable aura of "untrustworthy." Not actually evil, but equipped with a unique observational lens: where others see the surface, SUS sees the bugs behind it. "That smile is way too fake." "Clause three of this contract is sketchy." "This boba shop is definitely using creamer powder." SUS isn\'t paranoid — SUS is a human bug-detection scanner.',
  },
  {
    code: 'GGEZ', cn: 'The Steamroller', pattern: 'HHM-HMM-MHH-HHH-HMM', weights: '332222223332322',
    intro: 'GG — too easy.',
    desc: 'Life for GGEZ is a tutorial level with cheat codes on. Things others find impossible, GGEZ wraps up in no time and types an elegant "gg ez." Not bluffing — genuinely thinks it\'s easy. High confidence, strong execution, crystal-clear goals, plus a natural belief that "the world should revolve around me" — GGEZ finds the optimal solution on any track. The only side effect: sometimes the people around you want to unplug your keyboard.',
  },
];

export const DRUNK_TYPE: PersonalityType = {
  code: 'DRUNK', cn: 'The Drunkard', pattern: '',
  intro: 'Liquor burns the throat — no choice but to get wasted.',
  desc: 'What flows through your veins isn\'t blood — it\'s top-shelf bourbon! It\'s single-malt scotch! It\'s bottom-shelf tequila! Booze makes you the life of the dinner table and the philosopher hugging a toilet bowl at 2 AM. It makes you feel like you\'re a nocturnal poet, the undying flame at the center of the universe — until 10 AM the next morning, when your head splits like a cracked walnut, mystery residue clings to your lips, and your soul cowers in the corner. You finally understand: that eloquent, table-pounding loudmouth from last night has officially become... a drunkard.',
};

export const FALLBACK_TYPE: PersonalityType = {
  code: 'HHHH', cn: 'The Giggler', pattern: '',
  intro: 'HAHAHAHAHAHAHAHA.',
  desc: 'Congratulations! Your thought circuits are so spectacularly off-the-rails that the standard personality database has suffered a total meltdown. This personality — HHHH — only gets force-assigned when match rate drops below 60%. What are HHHH\'s traits? HAHAHAHAHAHAHAHAHAHA! Sorry, that\'s literally all there is. The creator didn\'t account for a brain like yours when designing personalities. HAHAHA... and somewhere in all that laughter, I started to cry.',
};
