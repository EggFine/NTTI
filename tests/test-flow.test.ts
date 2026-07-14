import assert from 'node:assert/strict';
import test from 'node:test';
import { applySessionAnswer } from '../lib/test-flow';
import type { Question, SpecialQuestion } from '../lib/types';

const regularQuestion: Question = {
  id: 'S1_q1',
  dim: 'S1',
  text: 'regular',
  options: [{ label: 'one', value: 1 }],
};

const gate: SpecialQuestion = {
  id: 'drink_gate_q1',
  kind: 'drink_gate',
  text: 'gate',
  options: [{ label: 'drink', value: 3 }, { label: 'other', value: 1 }],
};

const trigger: SpecialQuestion = {
  id: 'drink_gate_q2',
  kind: 'drink_trigger',
  text: 'trigger',
  options: [{ label: 'yes', value: 2 }],
};

test('moves to an inserted drink follow-up when the gate was the final question', () => {
  const transition = applySessionAnswer(
    gate,
    1,
    [regularQuestion, gate],
    {},
    [gate, trigger],
    3,
  );

  assert.equal(transition.nextIndex, 2);
  assert.deepEqual(transition.questions.map(item => item.id), [
    'S1_q1',
    'drink_gate_q1',
    'drink_gate_q2',
  ]);
  assert.equal(transition.answers.drink_gate_q1, 3);
});

test('completes when a final drink gate answer does not require a follow-up', () => {
  const transition = applySessionAnswer(
    gate,
    1,
    [regularQuestion, gate],
    {},
    [gate, trigger],
    1,
  );

  assert.equal(transition.nextIndex, null);
  assert.deepEqual(transition.questions.map(item => item.id), ['S1_q1', 'drink_gate_q1']);
});

test('removes a prior follow-up and its answer when the gate answer changes', () => {
  const transition = applySessionAnswer(
    gate,
    0,
    [gate, trigger, regularQuestion],
    { drink_gate_q1: 3, drink_gate_q2: 2 },
    [gate, trigger],
    1,
  );

  assert.equal(transition.nextIndex, 1);
  assert.deepEqual(transition.questions.map(item => item.id), ['drink_gate_q1', 'S1_q1']);
  assert.equal('drink_gate_q2' in transition.answers, false);
});
