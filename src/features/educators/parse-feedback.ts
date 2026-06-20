/**
 * The grading backend returns a single `feedback` string with three sections:
 *
 *   General Feedback:
 *   <free text>
 *
 *   Model Answer: <model answer text>
 *
 *   Score Breakdown:
 *   Criterion 1 - <criteria> - 0.12/0.20
 *   Criterion 2 - <criteria> - 1.00/1.00
 *   ...
 *
 * This parser splits that string into structured parts so the UI can render
 * the rubric as a table. It is intentionally forgiving: if a section is missing
 * or the shape changes, the caller still gets whatever could be extracted.
 */

export interface RubricCriterion {
  index: number;
  criteria: string;
  score: number;
  maxScore: number;
}

export interface ParsedFeedback {
  generalFeedback: string;
  modelAnswer: string;
  criteria: RubricCriterion[];
}

const GENERAL_LABEL = "General Feedback:";
const MODEL_LABEL = "Model Answer:";
const BREAKDOWN_LABEL = "Score Breakdown:";

// Matches: "Criterion 1 - <text> - 0.12/0.20"
const CRITERION_PATTERN =
  /Criterion\s+(\d+)\s*-\s*(.+?)\s*-\s*([\d.]+)\s*\/\s*([\d.]+)/gi;

function sectionBetween(
  source: string,
  startLabel: string,
  endLabels: string[],
): string {
  const start = source.indexOf(startLabel);
  if (start === -1) return "";

  const from = start + startLabel.length;
  let end = source.length;
  for (const label of endLabels) {
    const idx = source.indexOf(label, from);
    if (idx !== -1 && idx < end) end = idx;
  }

  return source.slice(from, end).trim();
}

export function parseFeedback(feedback: string): ParsedFeedback {
  const generalFeedback = sectionBetween(feedback, GENERAL_LABEL, [
    MODEL_LABEL,
    BREAKDOWN_LABEL,
  ]);
  const modelAnswer = sectionBetween(feedback, MODEL_LABEL, [BREAKDOWN_LABEL]);

  const criteria: RubricCriterion[] = [];
  for (const match of feedback.matchAll(CRITERION_PATTERN)) {
    criteria.push({
      index: Number.parseInt(match[1], 10),
      criteria: match[2].trim(),
      score: Number.parseFloat(match[3]),
      maxScore: Number.parseFloat(match[4]),
    });
  }

  return {
    // Fall back to the whole string if no recognised sections were found.
    generalFeedback:
      generalFeedback ||
      (criteria.length === 0 && !modelAnswer ? feedback.trim() : ""),
    modelAnswer,
    criteria,
  };
}

/** Normalises a raw score onto the playground's 5-point display scale. */
export function normalizeScore(score: number, maxScore: number): number {
  if (!maxScore || maxScore <= 0) return 0;
  return Math.round((score / maxScore) * 5 * 10) / 10;
}
