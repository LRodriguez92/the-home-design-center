import Head from "next/head";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero";
import Services from "@/components/Services";

export default function HomePage() {
  return (
    <div className={styles.container}>
        <Head>
        <title>The Home Design Center Kitchen and Bath</title>
        <meta name="description" content="Explore our expert home remodeling services at Home Design Center Kitchen and Bath. View our past projects, read customer testimonials, and stay updated with our latest Instagram posts." />
        <meta name="keywords" content="home remodeling, kitchen remodeling, bathroom remodeling, home design, renovation, Home Design Center, past projects, customer testimonials" />
        <meta name="author" content="Home Design Center Kitchen and Bath" />
        <meta property="og:title" content="Home Design Center Kitchen and Bath" />
        <meta property="og:description" content="Explore our expert home remodeling services at Home Design Center Kitchen and Bath. View our past projects, read customer testimonials, and stay updated with our latest Instagram posts." />
        <meta property="og:image" content="/path/to/your/image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home Design Center Kitchen and Bath" />
        <meta name="twitter:description" content="Explore our expert home remodeling services at Home Design Center Kitchen and Bath. View our past projects, read customer testimonials, and stay updated with our latest Instagram posts." />
        <meta name="twitter:image" content="/path/to/your/image.jpg" />
        </Head>
        <Hero
            header="Transforming Spaces, Enriching Lives"
            description="Revitalize your kitchen and bath with our expert remodeling services. See why our customers love their new spaces."
            primaryCtaText="Get a Quote"
            primaryCtaHref="/contact"
            secondaryCtaText="Explort Projects"
            secondaryCtaHref="/projects"
            image="/images/kitchen-hero.jpg"
        />
        <Services />
    </div>
  );
}
