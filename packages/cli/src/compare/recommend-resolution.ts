import type { Contradiction, Fact } from '../types.js';

function countVotes(facts: Fact[], value: string): number {
  return facts.filter((fact) => fact.value === value).length;
}

function hasAgentsMd(facts: Fact[], value: string): boolean {
  return facts.some(
    (fact) => fact.value === value && fact.filePath.replace(/\\/g, '/').endsWith('AGENTS.md'),
  );
}

export function recommendResolution(
  contradiction: Contradiction,
  facts: Fact[],
): string {
  const categoryFacts = facts.filter((fact) => fact.category === contradiction.category);
  const candidates = contradiction.values.map((entry) => entry.value);

  const agentsMdCandidate = candidates.find((value) => hasAgentsMd(categoryFacts, value));
  if (agentsMdCandidate) {
    return agentsMdCandidate;
  }

  const scored = candidates.map((value) => ({
    value,
    votes: countVotes(categoryFacts, value),
  }));

  scored.sort((a, b) => {
    if (b.votes !== a.votes) return b.votes - a.votes;
    return a.value.localeCompare(b.value);
  });

  return scored[0]?.value ?? candidates[0];
}

export function applyRecommendations(
  contradictions: Contradiction[],
  facts: Fact[],
): Contradiction[] {
  return contradictions.map((contradiction) => ({
    ...contradiction,
    recommendation: recommendResolution(contradiction, facts),
  }));
}
