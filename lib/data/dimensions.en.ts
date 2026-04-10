import type { DimensionId, DimensionInfo } from '../types';

// DIMENSION_IDS is locale-agnostic — import from the canonical source
export { DIMENSION_IDS } from './dimensions';

export const MODELS = [
  { id: 'self', name: 'Self Model', dimensions: ['S1', 'S2', 'S3'] as DimensionId[] },
  { id: 'emotion', name: 'Emotion Model', dimensions: ['E1', 'E2', 'E3'] as DimensionId[] },
  { id: 'attitude', name: 'Attitude Model', dimensions: ['A1', 'A2', 'A3'] as DimensionId[] },
  { id: 'action', name: 'Action Drive Model', dimensions: ['Ac1', 'Ac2', 'Ac3'] as DimensionId[] },
  { id: 'social', name: 'Social Model', dimensions: ['So1', 'So2', 'So3'] as DimensionId[] },
];

export const DIMENSIONS: DimensionInfo[] = [
  {
    id: 'S1', name: 'S1 Self-Esteem', model: 'Self Model',
    levels: {
      L: 'You roast yourself harder than anyone else could. Someone compliments you and your first instinct is to fact-check it.',
      M: 'Your confidence fluctuates with the weather — soaring when things go well, shrinking at the first headwind.',
      H: 'You have a pretty solid read on yourself and won\'t get rattled by some random stranger\'s hot take.',
    },
  },
  {
    id: 'S2', name: 'S2 Self-Clarity', model: 'Self Model',
    levels: {
      L: 'Your inner signal is mostly static — stuck buffering in a "who even am I" loop.',
      M: 'You can usually recognize yourself, though emotions occasionally hijack the controls.',
      H: 'You know your temper, your cravings, and your hard lines pretty darn well.',
    },
  },
  {
    id: 'S3', name: 'S3 Core Values', model: 'Self Model',
    levels: {
      L: 'Comfort and safety come first — no need to keep life in permanent sprint mode.',
      M: 'Part of you wants to hustle, part of you wants to lie down. Your values hold board meetings about this daily.',
      H: 'Goals, growth, or some deep-seated belief keep pushing you forward almost on autopilot.',
    },
  },
  {
    id: 'E1', name: 'E1 Attachment Security', model: 'Emotion Model',
    levels: {
      L: 'Your relationship alarm system is hair-trigger — a "seen" with no reply and you\'ve already scripted the breakup.',
      M: 'Half trust, half testing the waters — emotionally you\'re always playing tug-of-war with yourself.',
      H: 'You\'d rather trust the relationship itself and not freak out over every little breeze.',
    },
  },
  {
    id: 'E2', name: 'E2 Emotional Investment', model: 'Emotion Model',
    levels: {
      L: 'You keep emotional investment on a leash — the door isn\'t sealed shut, it\'s just got very strict access control.',
      M: 'You invest, but always keep a backup plan — no going all-in at the poker table.',
      H: 'Once you\'re committed, you go hard — your energy and emotions are all on the table.',
    },
  },
  {
    id: 'E3', name: 'E3 Boundaries & Dependence', model: 'Emotion Model',
    levels: {
      L: 'You cling easily and get clung to easily — warmth and closeness in a relationship really matter to you.',
      M: 'You need a bit of both intimacy and independence — adjustable-level dependence.',
      H: 'Personal space is sacred — no matter how deep the love, you keep a patch of ground that\'s yours alone.',
    },
  },
  {
    id: 'A1', name: 'A1 Worldview', model: 'Attitude Model',
    levels: {
      L: 'You see the world through a built-in defense filter — suspicion first, approach later.',
      M: 'Neither naive nor full conspiracy-brain — watchful waiting is your default setting.',
      H: 'You lean toward trusting people and good intentions, not rushing to condemn the whole world.',
    },
  },
  {
    id: 'A2', name: 'A2 Rules & Flexibility', model: 'Attitude Model',
    levels: {
      L: 'If a rule can be sidestepped, you sidestep it — comfort and freedom tend to outrank the handbook.',
      M: 'You follow the rules when it counts and bend them when it makes sense — no stubborn standoffs.',
      H: 'You\'ve got a strong sense of order — if there\'s a process, you\'d rather not freestyle it.',
    },
  },
  {
    id: 'A3', name: 'A3 Sense of Purpose', model: 'Attitude Model',
    levels: {
      L: 'Sense of meaning runs low — a lot of things feel like you\'re just going through the motions.',
      M: 'Sometimes you have a goal, sometimes you want to give up entirely — your life philosophy is in standby mode.',
      H: 'You move with direction and generally know which way you\'re headed.',
    },
  },
  {
    id: 'Ac1', name: 'Ac1 Motivation Style', model: 'Action Drive Model',
    levels: {
      L: 'Your first thought is "don\'t crash" — the risk-avoidance system kicks in way before any ambition does.',
      M: 'Sometimes you want to win, sometimes you just want to avoid hassle — your motivation is a cocktail.',
      H: 'Results, growth, and forward momentum are what light your fire.',
    },
  },
  {
    id: 'Ac2', name: 'Ac2 Decision Style', model: 'Action Drive Model',
    levels: {
      L: 'Before any decision you take a few extra laps — the committee meeting in your head always runs overtime.',
      M: 'You think it through, but not until your brain crashes — standard-issue hesitation.',
      H: 'You make the call fast and don\'t love looking back to second-guess it.',
    },
  },
  {
    id: 'Ac3', name: 'Ac3 Execution Mode', model: 'Action Drive Model',
    levels: {
      L: 'Your execution power has a deep relationship with deadlines — the later it gets, the closer you are to awakening.',
      M: 'You can get things done, but your state depends on timing — sometimes steady, sometimes slacking.',
      H: 'Your drive to ship is strong — unfinished tasks feel like a splinter stuck in your brain.',
    },
  },
  {
    id: 'So1', name: 'So1 Social Initiative', model: 'Social Model',
    levels: {
      L: 'You\'re a slow starter socially — making the first move usually takes half a day of psyching yourself up.',
      M: 'If someone comes to you, great; if not, you\'re not forcing it — social elasticity is moderate.',
      H: 'You\'re happy to break the ice and step up in a crowd — standing out doesn\'t faze you.',
    },
  },
  {
    id: 'So2', name: 'So2 Interpersonal Boundaries', model: 'Social Model',
    levels: {
      L: 'In relationships you lean toward closeness and merging — once you\'re comfortable, people get pulled into the inner circle fast.',
      M: 'You want closeness but also a gap — your boundary settings depend on who you\'re dealing with.',
      H: 'Boundaries run strong — when someone gets too close, you instinctively take half a step back.',
    },
  },
  {
    id: 'So3', name: 'So3 Expression & Authenticity', model: 'Social Model',
    levels: {
      L: 'You say it like it is — what\'s on your mind comes out pretty much unfiltered.',
      M: 'You read the room before you speak — keeping it real and keeping it polite each get a fair share.',
      H: 'You\'re skilled at switching personas for different scenes — authenticity gets dispensed in layers.',
    },
  },
];

export const DIMENSION_MAP: Record<DimensionId, DimensionInfo> = Object.fromEntries(
  DIMENSIONS.map(d => [d.id, d])
) as Record<DimensionId, DimensionInfo>;
