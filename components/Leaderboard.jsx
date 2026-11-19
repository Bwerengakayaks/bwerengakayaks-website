"use client";
import { useState } from "react";
import { BOARDS, SAMPLE, RANKS, rankOf } from "@/data/challenge";

export default function Leaderboard() {
  const [k, setK] = useState(0);
  return (
    <>
      <div className="pk" role="tablist">
        {BOARDS.map((b, i) => <button key={b} role="tab" aria-selected={i === k} className={i === k ? "on" : ""} onClick={() => setK(i)}>{b}</button>)}
      </div>
      {k === 4 ? (
        <div className="dash"><b>Coming soon.</b> Catch of the Month, Most Accurate Angler, Most Fish Species Caught, Best Catch Photo and Rookie Angler.</div>
      ) : (
        <>
          <div className="sc"><table>
            <thead><tr><th>Name / nickname</th><th>Position</th><th>Rank</th><th>Score</th><th>Species</th><th>Date</th></tr></thead>
            <tbody>{SAMPLE.map((r) => <tr key={r[0]}><td>{r[0]}</td><td>{r[1]}</td><td>{rankOf(r[2])}</td><td>{r[2]}</td><td>{r[3]}</td><td>{r[4]}</td></tr>)}</tbody>
          </table></div>
          <p className="loc">Sample entries shown for layout. Tiebreaker: (1) most rare/legendary species, (2) most species overall.</p>
        </>
      )}
      <h3 className="mt">Rank ladder</h3>
      <div className="sc"><table>
        <thead><tr><th>Rank</th><th>Points</th></tr></thead>
        <tbody>{RANKS.map((r, i) => <tr key={r[0]}><td>{r[0]}</td><td>{RANKS[i + 1] ? `${r[1]} – ${RANKS[i + 1][1] - 1}` : `${r[1]}+`}</td></tr>)}</tbody>
      </table></div>
    </>
  );
}
