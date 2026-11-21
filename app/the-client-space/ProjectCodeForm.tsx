"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import styles from "./clientSpace.module.css";

export default function ProjectCodeForm() {
  const [code, setCode] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Connect project lookup here when the dashboard is ready.
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="project-code">Project code</label>
      <div className={styles.inputRow}>
        <input
          id="project-code"
          name="project-code"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{6}"
          maxLength={6}
          required
          autoComplete="off"
          spellCheck={false}
          placeholder="000000"
          value={code}
          onChange={(event) =>
            setCode(event.target.value.replace(/\D/g, "").slice(0, 6))
          }
        />
        <button type="submit" disabled={code.length !== 6}>
          Open project <span aria-hidden="true">↗</span>
        </button>
      </div>
    </form>
  );
}
