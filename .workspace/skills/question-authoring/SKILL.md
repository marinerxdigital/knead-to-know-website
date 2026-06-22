---
name: question-authoring
description: Use when creating or editing exam questions, answer choices, or explanations for the question bank — enforces item structure, the quality bar, competency mapping, and source citation. Not for UI work, review/scheduling logic, or scoring algorithms.
---

# Question Authoring

Author USCG Third Mate items that are exam-realistic, defensible, and correctly mapped. These are licensing questions — accuracy is non-negotiable.

## Source & accuracy (read first)

- Author only from verified source material the user provides (e.g., COLREGS / Inland Rules, 46 CFR, Bowditch, official USCG question text).
- **Do not invent rule numbers, regulatory citations, or facts.** If a source isn't given or you're unsure, say so and ask — never guess on a safety-critical answer.
- Every explanation cites its source reference.

## Item structure

- One clear concept per item. A focused stem; avoid negative phrasing and trick wording.
- Exactly four options, exactly one correct. Distractors must be plausible and reflect real mariner misconceptions — not filler.
- Avoid "all/none of the above" unless it tests a genuine point.
- Set `difficulty` honestly (easy / medium / hard).

## Mapping & storage

- Map every item to the hierarchy: Module → Topic → Subtopic, and to one or more Competencies.
- Write to the schema: `questions` (stem, type, difficulty, `subtopic_id`), `answers` (one row per option with `is_correct`), `explanations` (rationale + `source_ref`).

## Explanation quality

- Explain why the correct answer is right **and** why each distractor is wrong.
- Plain, mariner-appropriate language; correct terminology; no fluff.

## Avoid

- Fabricated citations, rule numbers, or regulatory facts.
- Ambiguous stems, multiple defensible answers, or grammatical tells that reveal the key.
- Distractors that are obviously wrong or joke options.
- Authoring beyond the source material provided.
