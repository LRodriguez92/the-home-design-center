import Hero from "../components/Hero";
import ServiceItem from "../components/ServiceItem";

export default function ServicesPage() {
    const services = [
        {
            title: "Kitchen Remodel",
            summary: "Transform your kitchen into a modern and stylish space.",
            description: [
                "Custom cabinets, countertops, and lighting solutions.",
                "Energy-efficient appliances and fixtures.",
                "Optimized storage solutions to maximize space.",
                "High-quality materials and finishes to ensure durability.",
                "Designed to fit your lifestyle and cooking habits."
            ],
            image: "/images/kitchen-hero.jpg",
            ctaText: "Get a Quote",
            ctaHref: "/contact"
        },
        {
            title: "Bath Remodel",
            summary: "Indulge in luxury with our custom bath remodeling services.",
            description: [
                "Spa-like features including soaking tubs and rain showers.",
                "High-quality materials and fixtures.",
                "Functional and beautiful designs tailored to your needs.",
                "Water-saving solutions for eco-friendly living."
            ],
            image: "/images/kitchen-hero.jpg",
            ctaText: "Get a Quote",
            ctaHref: "/contact"
        },
        {
            title: "3D Design",
            summary: "Visualize your new space before any remodel with our 3D design services.",
            description: [
                "Create accurate measurements of your kitchen space.",
                "Produce detailed 3D renderings of your planned design.",
                "Adjust and refine your design with our experts to ensure every detail is perfect.",
                "Ensure your final design meets both your functional needs and aesthetic preferences."
            ],
            image: "/images/kitchen-hero.jpg",
            ctaText: "Get a Quote",
            ctaHref: "/contact"
        },
        {
            title: "Drywall Texture",
            summary: "Enhance walls and ceilings with texturing surfaces such as drywall texturing and skim coating.",
            description: [
                "Professional drywall tools to help produce a more finished appearance.",
                "Finishes to suit your personal style, enhancing your home’s atmosphere."
            ],
            image: "/images/kitchen-hero.jpg",
            ctaText: "Get a Quote",
            ctaHref: "/contact"
        },
        {
            title: "Flooring",
            summary: "Choose from a wide range of flooring solutions to elevate any room in your home.",
            description: [
                "Hardwood, laminate, and tile flooring options.",
                "Custom installation services tailored to your space.",
                "High-quality flooring materials that ensure durability and aesthetics.",
                "Eco-friendly and sustainable flooring solutions."
            ],
            image: "/images/kitchen-hero.jpg",
            ctaText: "Get a Quote",
            ctaHref: "/contact"
        },
        {
            title: "Wall Removal",
            summary: "Open up your living spaces by removing unnecessary walls.",
            description: [
                "Professional assessment to ensure structural integrity.",
                "Create an open concept layout for a modern living space.",
                "Ensure proper framing to maintain your home’s safety and stability."
            ],
            image: "/images/kitchen-hero.jpg",
            ctaText: "Get a Quote",
            ctaHref: "/contact"
        },
        {
            title: "Painting",
            summary: "Transform the look and feel of your home with our comprehensive painting services.",
            description: [
                "Interior and exterior painting for residential and commercial properties.",
                "High-quality paints that provide long-lasting protection and aesthetics.",
                "Custom color matching and design consultations.",
                "Professional painters ensure clean, crisp lines and smooth finishes."
            ],
            image: "/images/kitchen-hero.jpg",
            ctaText: "Get a Quote",
            ctaHref: "/contact"
        },
        {
            title: "Expertise",
            summary: "Our team specializes in high-quality, detail-oriented work, offering comprehensive expertise in all areas of home design and renovation.",
            description: [
                "Custom Woodworking: Cabinets and shelves tailored to your space.",
                "Trim and Molding: Add character to your interiors with custom trim and molding solutions.",
                "Efficient Project Management: Timely project completion and minimal disruption to your daily life."
            ],
            image: "/images/kitchen-hero.jpg",
            ctaText: "Get a Quote",
            ctaHref: "/contact"
        }
    ];

    return (
        <div>
            <Hero 
                header="Our Services"
                description="We offer a wide range of remodeling and design services to transform your home into a beautiful, functional space. Explore our services below to learn more about what we can do for you."
                primaryCtaText="Get a Quote"
                primaryCtaHref="/contact"
                secondaryCtaText="Explore Projects"
                secondaryCtaHref="/projects"
                image="/images/kitchen-hero.jpg"
            />
            <div className="services-list">
                {services.map((service, index) => (
                    <ServiceItem 
                        key={index}
                        index={index}
                        title={service.title}
                        summary={service.summary}
                        description={service.description}
                        image={service.image}
                        ctaText={service.ctaText}
                        ctaHref={service.ctaHref}
                    />
                ))}
            </div>
        </div>
    );
}