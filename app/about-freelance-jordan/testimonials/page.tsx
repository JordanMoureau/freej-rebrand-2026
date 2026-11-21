import type { Metadata } from "next";
import Image from "next/image";

import Navigation from "../../components/navigation";
import CloserBar from "../../components/closerBar";
import ContactForm from "../../components/contactForm";
import Swiggle from "../../components/svgSwiggle";
import TrustBar from "../../components/trustBar";
import JsonLd from "../../components/JsonLd";

import home from "../../page.module.css";
import styles from "./testimonials.module.css";

const siteUrl = "https://freelancejordan.com/";
const pageUrl = new URL("/about-freelance-jordan/testimonials", siteUrl).href;
const title = "Client Reviews & Testimonials | Freelance Jordan";
const description =
  "Read Google and Facebook reviews from Freelance Jordan clients about custom websites, logo design, SEO, and working directly with Jordan Moureau.";

const shareImage = {
  url: new URL("/freelance-jordan.png", siteUrl).href,
  alt: "Freelance Jordan logo",
};

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: pageUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: "Freelance Jordan",
    locale: "en_US",
    url: pageUrl,
    title,
    description,
    images: [shareImage],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: [shareImage],
  },
};

const testimonialsSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${pageUrl}#webpage`,
  url: pageUrl,
  name: title,
  description,
  inLanguage: "en-US",
  isPartOf: {
    "@type": "WebSite",
    "@id": `${siteUrl}#website`,
    name: "Freelance Jordan",
    url: siteUrl,
  },
  about: {
    "@type": "Organization",
    "@id": `${siteUrl}#organization`,
    name: "Freelance Jordan",
    url: siteUrl,
  },
  publisher: { "@id": `${siteUrl}#organization` },
};

const reviewSources = {
  Google: {
    url: "https://www.google.com/search?q=Freelance+Jordan+Coeur+d%27Alene+reviews",
    linkLabel: "Search Google for Freelance Jordan reviews",
  },
  Facebook: {
    url: "https://www.facebook.com/profile.php?id=61560853709737&sk=reviews",
    linkLabel: "View Freelance Jordan reviews on Facebook",
  },
};

type Testimonial = {
  name: string;
  source: keyof typeof reviewSources;
  rating?: number;
  date?: string;
  quote: string;
};

const reviews: Testimonial[] = [
  {
    name: "Jena Ponti",
    source: "Google",
    rating: 5,
    quote:
      "If you're looking to (re)build a website, optimize SEO, or do business branding, Jordan makes this part of your life easier. She's super creative, a whiz with content, and knows how to get things done (with high-quality standards). Highly, highly recommend!",
  },
  {
    name: "Fred Anderson",
    source: "Google",
    rating: 5,
    quote:
      "Jordan was great to help us grow our ranking and SEO. She has outperformed our prior national SEO firm and gives great personalized care.",
  },
  {
    name: "Jason Griffin",
    source: "Google",
    rating: 5,
    quote:
      "I am computer iliterate! And Jordan made everything very simple and ND straightforward. I really appreciated her no nonsense approach to getting work done!",
  },
  {
    name: "Jamie Goudy",
    source: "Google",
    rating: 5,
    quote:
      "Jordan is a force to be reckoned with when it comes to getting eyes on your business. She knows the game and she plays it well, helping her clients to see results in no time. I smile every time I see the custom logo she designed me, and it's something I'm very proud to see attached to my products.\nBook her services while you still can! I only see this girl moving up. I imagine she'll have a long wait list in no time.",
  },
  {
    name: "Angelo Brunson",
    source: "Google",
    rating: 5,
    quote:
      "Jordan is Awesome\nGreat new website, help with Facebook and reservation implementation.",
  },
  {
    name: "Whitney Yearout",
    source: "Google",
    rating: 5,
    quote:
      "Jordan is amazing to work with! She's absolutely transformed and simplified what I'd previously had going. She's definitely a connection you'll be glad you made!",
  },
  {
    name: "Sandra Sitzmann",
    source: "Google",
    rating: 5,
    quote:
      "One of a kind designers 100%! Thank you so much. And price was very reasonable!!!",
  },
  {
    name: "HotSpring Church",
    source: "Google",
    rating: 5,
    quote: "Great service! Best designs! Fast service. Thank you so much!!!!",
  },
  {
    name: "Kon Shiva",
    source: "Google",
    rating: 5,
    quote:
      "Great work with all my design needs also very informative about details. Thank you Jordan, my stuff looks super amazing!!!",
  },
  {
    name: "Bailey Cummings",
    source: "Google",
    rating: 5,
    quote:
      "Jordan is the first website creator I’ve worked with, and she exceeded every expectation. She took all of my ideas and turned them into a beautiful, seamless website. Throughout the process, she kept me updated on her progress and even worked a miracle to make my site go live by the date I needed. She responds promptly to any questions I have, and her professionalism and skill made the entire experience wonderful.",
  },
  {
    name: "Lorena Tunca",
    source: "Google",
    rating: 5,
    date: "November 4, 2025",
    quote:
      "I have worked with a lot of web contrators and freelancers in my 30 years in business. Jordan has been by far the best. If she says she’ll do it it’ll happen. I’ve been very impressed with her dedication. She’s been able to fix problems that others gave up on and I thought would never get fixed. She truly listens to my business goals and is there to help.",
  },
  {
    name: "brandon derosier-zahnow",
    source: "Google",
    rating: 5,
    date: "October 5, 2025",
    quote:
      "I have worked with several web developers but Jordan is the best by far. Most over promise and under deliver. Jordan make it clear what to expect and holds herself accountable. I like working with Freelance Jordan and I think you would too.",
  },
  {
    name: "Martha Domitrovich",
    source: "Google",
    rating: 5,
    date: "June 6, 2025",
    quote:
      "Working with Jordan has been an absolute game-changer for our business. After a difficult and disappointing experience with a previous developer, Jordan stepped in and immediately brought professionalism, clarity, and genuine care to the process of transitioning our website.\n\nNot only did she handle the technical side of things with expertise and efficiency, she also took the time to listen, understand our needs, and deliver exactly what we were hoping for—without the runaround or excuses.\n\nWe’re so grateful to have her in our corner and can’t recommend her highly enough. If you need someone who knows what they’re doing and does it with heart, Jordan’s your person.",
  },
  {
    name: "Cheree Sauer",
    source: "Facebook",
    date: "March 6, 2025",
    quote:
      "Jordan helped me fine tune my messaging on a landing page to increase my conversion rate. If you are looking for help designing a website that converts to sales, I highly recommend Jordan.",
  },
  {
    name: "Precision Driving Academy",
    source: "Facebook",
    date: "November 20, 2024",
    quote:
      "We absolutely love Jordan! Her work speaks for itself. Although executing her recommendations was sometimes challenging and mentally exhausting, it was undoubtedly worth it. Once we had established a strong digital presence, Jordan worked her magic and launched our campaign. Within a day, we were overwhelmed with an influx of phone calls that we struggled to keep up with. Thank you, Jordan, for helping us elevate our game!",
  },
  {
    name: "Matthew Guzman",
    source: "Facebook",
    date: "October 10, 2024",
    quote:
      "Very punctual, great communication and consistent feedback on how the process was going. I can’t recommend Jordan enough.",
  },
];

const features = [
  { name: "Fred Anderson", label: "The SEO experience" },
  { name: "Lorena Tunca", label: "A lasting partnership" },
  { name: "Bailey Cummings", label: "A new website" },
  { name: "Precision Driving Academy", label: "Digital marketing results" },
];

const featuredNames = new Set(features.map((feature) => feature.name));
const remainingReviews = reviews.filter(
  (review) => !featuredNames.has(review.name),
);

export default function TestimonialsPage() {
  return (
    <div className={styles.page}>
      <JsonLd data={testimonialsSchema} />

      <div className={styles.navigation}>
        <Navigation logoSrc="/logo-secondary-red.png" contactColor="#d9c8a0" />
      </div>

      <main id="main-content">
        <header className={styles.hero}>
          <div className={styles.inner}>
            <p className={styles.script}>Client testimonials</p>
            <h1 className={styles.headline}>
              What it’s like to work with Jordan.
            </h1>
            <p className={styles.intro}>
              A driving school launching a campaign. A business owner finding
              the right words for a landing page. Here’s how clients describe
              the work in their own words.
            </p>
            <a className={styles.jump} href="#reviews">
              Read Client Reviews
              <Swiggle />
            </a>
          </div>

          <div className={styles.foot}>
            <div className={styles.trust}>
              <TrustBar />
            </div>
          </div>
        </header>

        <section
          id="reviews"
          className={styles.reviews}
          aria-labelledby="reviews-title"
        >
          <div className={styles.inner}>
            <div className={styles.sectionHeading}>
              <h2 id="reviews-title">Kind words, real businesses.</h2>
              <p>
                From first websites to complicated technical fixes, these are
                the experiences of the people I&apos;ve worked with. Every
                review is shared in the client&apos;s own words.
              </p>
            </div>

            <div className={styles.featuredGrid}>
              {features.map((feature, index) => {
                const review = reviews.find(
                  (item) => item.name === feature.name,
                );
                if (!review) return null;

                const source = reviewSources[review.source];

                return (
                  <a
                    key={review.name}
                    className={`${styles.featuredCard} ${
                      index === 0 || index === 3 ? styles.featuredWide : ""
                    }`}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${review.name} testimonial. ${source.linkLabel}.`}
                  >
                    <div className={styles.cardTop}>
                      <span className={styles.cardLabel}>{feature.label}</span>
                    </div>
                    <blockquote>
                      <p>{review.quote}</p>
                    </blockquote>
                    <div className={styles.cardFooter}>
                      <span className={styles.author}>{review.name}</span>
                      <span className={styles.source}>
                        {review.source}
                        {review.rating ? ` · ${review.rating}/5 stars` : ""}
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className={styles.reviewColumns}>
              {remainingReviews.map((review, index) => {
                const source = reviewSources[review.source];

                return (
                  <a
                    key={review.name}
                    className={`${styles.reviewCard} ${
                      index % 5 === 2 ? styles.reviewAccent : ""
                    }`}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${review.name} testimonial. ${source.linkLabel}.`}
                  >
                    <div className={styles.reviewTop}>
                      <span className={styles.reviewPlatform}>
                        {review.source}
                        {review.rating ? ` · ${review.rating}/5 stars` : ""}
                      </span>
                    </div>
                    <blockquote>
                      <p>{review.quote}</p>
                    </blockquote>
                    <div className={styles.reviewFooter}>
                      <span className={styles.author}>{review.name}</span>
                      {review.date && (
                        <span className={styles.source}>{review.date}</span>
                      )}
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <div className={styles.banner} aria-hidden="true">
          <Image
            src="/bannerright.png"
            alt=""
            width={1200}
            height={400}
            sizes="100vw"
          />
        </div>

        <CloserBar
          heading="What brought you here?"
          subheading="Tell me what you’d like to change for your business."
          blurb="Maybe you need the phone to ring for a particular service. Maybe people reach your landing page and leave without getting in touch. Send me your website and tell me where you’re getting stuck. That’s where we’ll start."
          bannerHref="#contact-jordan"
        />

        <div
          id="contact-jordan"
          className={`${home.contactFormHome} ${styles.contactArea}`}
        >
          <ContactForm />
        </div>
      </main>
    </div>
  );
}
