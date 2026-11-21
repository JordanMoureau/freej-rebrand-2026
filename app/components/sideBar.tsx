"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./contentSidebar.module.css";

type Review = {
  id: string;
  quote: string;
  name: string;
  business: string;
};

type CaseStudy = {
  id: string;
  title: string;
  result: string;
  description: string;
  href: string;
};

type JournalArticle = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
};

type SidebarContent = {
  review: Review | undefined;
  caseStudy: CaseStudy | undefined;
  journal: JournalArticle | undefined;
};

const reviews: Review[] = [
  {
    id: "review-1",
    quote: "Add your first client review here.",
    name: "Client name",
    business: "Business name",
  },
  {
    id: "review-2",
    quote: "Add your second client review here.",
    name: "Client name",
    business: "Business name",
  },
];

const caseStudies: CaseStudy[] = [
  {
    id: "case-study-1",
    title: "First case study title",
    result: "Add the key result here.",
    description: "Add a short description of the project.",
    href: "/seo",
  },
  {
    id: "case-study-2",
    title: "Second case study title",
    result: "Add the key result here.",
    description: "Add a short description of the project.",
    href: "/seo",
  },
];

const journalArticles: JournalArticle[] = [
  {
    id: "journal-1",
    title: "First journal article title",
    description: "Add a short introduction to this article.",
    image: "/deskprofile.png",
    imageAlt: "Desk with laptop, coffee, notebook and phone",
    href: "/project-journal",
  },
  {
    id: "journal-2",
    title: "Second journal article title",
    description: "Add a short introduction to this article.",
    image: "/winterprincess.png",
    imageAlt: "Jordan standing outside in the snow",
    href: "/project-journal",
  },
];

function pickRandom<T>(items: readonly T[]): T | undefined {
  return items[Math.floor(Math.random() * items.length)];
}

export default function ContentSidebar() {
  const [content, setContent] = useState<SidebarContent | null>(null);

  useEffect(() => {
    setContent({
      review: pickRandom(reviews),
      caseStudy: pickRandom(caseStudies),
      journal: pickRandom(journalArticles),
    });
  }, []);

  const review = content?.review;
  const caseStudy = content?.caseStudy;
  const journal = content?.journal;

  return (
    <aside className={styles.sidebar} aria-label="Reviews and related reading">
      {review && (
        <section className={styles.card}>
          <p className={styles.label}>Kind Words</p>

          <blockquote className={styles.review}>
            <p>“{review.quote}”</p>

            <footer className={styles.attribution}>
              <span>{review.name}</span>
              <span>{review.business}</span>
            </footer>
          </blockquote>
        </section>
      )}

      {caseStudy && (
        <section className={styles.card}>
          <p className={styles.label}>Proof In the Projects</p>

          <h3 className={styles.title}>{caseStudy.title}</h3>

          <p className={styles.result}>{caseStudy.result}</p>

          <p className={styles.description}>{caseStudy.description}</p>

          <Link href={caseStudy.href} className={styles.link}>
            See the Case Study <span aria-hidden="true">›</span>
          </Link>
        </section>
      )}

      {journal && (
        <section className={`${styles.card} ${styles.journalCard}`}>
          <Link
            href={journal.href}
            className={styles.imageLink}
            aria-label={`Read ${journal.title}`}
          >
            <Image
              src={journal.image}
              alt={journal.imageAlt}
              width={600}
              height={400}
              sizes="(max-width: 800px) 100vw, 340px"
              className={styles.journalImage}
            />
          </Link>

          <div className={styles.journalContent}>
            <p className={styles.label}>From the Journal</p>

            <h3 className={styles.title}>
              <Link href={journal.href}>{journal.title}</Link>
            </h3>

            <p className={styles.description}>{journal.description}</p>

            <Link href={journal.href} className={styles.link}>
              Keep Reading <span aria-hidden="true">›</span>
            </Link>
          </div>
        </section>
      )}
    </aside>
  );
}
