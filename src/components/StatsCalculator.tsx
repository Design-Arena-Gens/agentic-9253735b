/* eslint-disable prefer-template */
"use client";

import { useMemo, useState } from "react";

type StatsResult = {
  cleanedValues: number[];
  mean: number | null;
  median: number | null;
  range: number | null;
  explanation: string[];
  invalidEntries: string[];
};

const formatNumber = (value: number) =>
  Number.isInteger(value) ? value.toString() : value.toFixed(2);

const computeStats = (rawInput: string): StatsResult => {
  const tokens = rawInput
    .split(/[;,\\s]+/)
    .map((token) => token.trim())
    .filter(Boolean);

  const numbers: number[] = [];
  const invalidEntries: string[] = [];

  tokens.forEach((token) => {
    const value = Number(token.replace(",", "."));
    if (Number.isFinite(value)) {
      numbers.push(value);
    } else {
      invalidEntries.push(token);
    }
  });

  if (!numbers.length) {
    return {
      cleanedValues: [],
      mean: null,
      median: null,
      range: null,
      explanation: ["Saisie des données pour voir les calculs."],
      invalidEntries
    };
  }

  const sorted = [...numbers].sort((a, b) => a - b);
  const mean =
    numbers.reduce((total, current) => total + current, 0) / numbers.length;

  const mid = Math.floor(sorted.length / 2);
  const median =
    sorted.length % 2 === 0
      ? (sorted[mid - 1] + sorted[mid]) / 2
      : sorted[mid];

  const range = sorted[sorted.length - 1] - sorted[0];

  const explanation = [
    `Valeurs triées : ${sorted.map(formatNumber).join(", ")}`,
    `Moyenne = somme des valeurs ÷ nombre de valeurs = ${formatNumber(
      mean
    )}`,
    sorted.length % 2 === 0
      ? `Médiane : moyenne des deux valeurs du milieu (${formatNumber(
          sorted[mid - 1]
        )} et ${formatNumber(sorted[mid])}) = ${formatNumber(median)}`
      : `Médiane : valeur du milieu = ${formatNumber(median)}`,
    `Étendue = plus grande valeur - plus petite valeur = ${formatNumber(
      sorted[sorted.length - 1]
    )} - ${formatNumber(sorted[0])} = ${formatNumber(range)}`
  ];

  return {
    cleanedValues: sorted,
    mean,
    median,
    range,
    explanation,
    invalidEntries
  };
};

export function StatsCalculator() {
  const [input, setInput] = useState("12 14 9 16 9 11");

  const result = useMemo(() => computeStats(input), [input]);

  return (
    <section className="card calculator-card">
      <h2>Calculatrice interactive</h2>
      <p>
        Écris une série de nombres séparés par des espaces, des virgules ou des
        points-virgules. Nous calculons pour toi la moyenne, la médiane et
        l&apos;étendue.
      </p>
      <label htmlFor="numbers-input" className="sr-only">
        Liste de nombres
      </label>
      <textarea
        id="numbers-input"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        rows={3}
        className="input-area"
        placeholder="Exemple : 10, 12, 13, 18, 19"
      />

      {result.invalidEntries.length > 0 && (
        <p className="warning">
          Valeurs ignorées : {result.invalidEntries.join(", ")} (non
          reconnues).
        </p>
      )}

      <div className="results-grid">
        <div className="result-card">
          <span className="result-title">Moyenne</span>
          <strong className="result-value">
            {result.mean !== null ? formatNumber(result.mean) : "—"}
          </strong>
        </div>
        <div className="result-card">
          <span className="result-title">Médiane</span>
          <strong className="result-value">
            {result.median !== null ? formatNumber(result.median) : "—"}
          </strong>
        </div>
        <div className="result-card">
          <span className="result-title">Étendue</span>
          <strong className="result-value">
            {result.range !== null ? formatNumber(result.range) : "—"}
          </strong>
        </div>
      </div>

      <div className="explanation">
        <h3>Étapes détaillées</h3>
        <ul>
          {result.explanation.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
