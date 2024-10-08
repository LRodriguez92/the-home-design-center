import Hero from "../components/Hero";
import ServiceItem from "../components/ServiceItem";
import styles from "../styles/ServicesPage.module.css";

export default function ServicesPage() {
    const services = [
        {
            title: "Kitchen Remodel",
            summary: [
                "Transform your kitchen into a functional and stylish space.",
                "Our kitchen remodeling services include:"
            ],
            description: [
                "Wall and Base Cabinets: Custom-designed to maximize storage and aesthetic appeal.",
                "Kitchen Islands: Create a central hub for cooking and socializing.",
                "Countertops: Choose from a variety of durable and beautiful materials.",
                "Lighting: Modern lighting designs to brighten your kitchen.",
                "Doors and Drawers: Quality doors and drawers that enhance your kitchen’s look and functionality.",
                "Hardware & Fixtures: Premium hardware and fixtures to complete your kitchen’s transformation."
            ],
            image: "/images/kitchen-hero.jpg",
            ctaText: "Get a Quote",
            ctaHref: "/contact"
        },
        {
            title: "Bath Remodel",
            summary: [
                "Elevate your bathroom’s functionality and style with our remodeling services. Whether adding a new shower or updating fixtures, we focus on creating a luxurious and practical space.",
                "Here’s how we differentiate between remodels and renovations:"
            ],
            description: [
                "High-quality materials and fixtures.",
                "Functional and beautiful designs tailored to your needs.",
                "Water-saving solutions for eco-friendly living.",
                "Restoring and repairing existing elements to bring them back to life."
            ],
            image: "/images/kitchen-hero.jpg",
            ctaText: "Get a Quote",
            ctaHref: "/contact"
        },
        {
            title: "3D Design",
            summary: [
                "Visualize your new kitchen before any materials are ordered with our 3D design services.",
                "Our expert designers will:"
            ],
            description: [
                "Take precise measurements of your kitchen space.",
                "Create accurate 3D renderings of your proposed kitchen.",
                "Consult with you on desired changes and finalize the design details.",
                "Allow you to see your new kitchen in a realistic 3-dimensional format, including options to change flooring, wall colors, counter-tops, and cabinet finishes."
            ],
            image: "/images/kitchen-hero.jpg",
            ctaText: "Get a Quote",
            ctaHref: "/contact"
        },
        {
            title: "Drywall Texture",
            summary: [
                "Enhance your home's interior with professional drywall texturing. Whether you want to add subtle texture or bold designs, our skilled team can create a variety of finishes that add depth and character to your walls and ceilings.",
                "We provide:"
            ],
            description: [
                "Professional Application: Expertly applied wall textures that conceal imperfections and provide a high-end finish, perfect for any room.",
                "Seamless Blending: Skilled techniques to blend new textures with existing surfaces, ensuring a uniform and polished look throughout your space.",
                "Enhancing Atmosphere: Textures designed to play with light and shadow, adding depth and character to your walls and ceilings."
            ],
            image: "/images/kitchen-hero.jpg",
            ctaText: "Get a Quote",
            ctaHref: "/contact"
        },
        {
            title: "Flooring",
            summary: [
                "Choose from a wide range of flooring solutions to suit every room in your home.",
                "Our offerings include:"
            ],
            description: [
                "Ceramic Tile: Durable and stylish for high-traffic areas.",
                "Solid Wood: Timeless elegance and longevity.",
                "Laminate and Engineered Wood: Versatile and cost-effective alternatives to solid wood.",
                "Luxury Vinyl: High-quality, durable, and available in various designs.",
                "Carpeting: Comfortable and warm for bedrooms and living areas.",
                "Pavers: Ideal for outdoor spaces, providing durability and aesthetic appeal."
            ],
            image: "/images/kitchen-hero.jpg",
            ctaText: "Get a Quote",
            ctaHref: "/contact"
        },
        {
            title: "Wall Removal",
            summary: [
                "Transform your living spaces by removing unnecessary walls to create an open-concept design that suits modern lifestyles. Our expert team ensures that every wall removal project is done with precision and care.",
                "Our services include:"
            ],
            description: [
                "Load-Bearing Wall Expertise: Safe and efficient removal of load-bearing walls with appropriate structural reinforcements to maintain the integrity of your home.",
                "Design Consultation: Collaborative planning with our design experts to maximize the potential of your newly opened space, ensuring it meets both your aesthetic and functional needs.",
                "Debris Management: Careful demolition and removal of debris to minimize disruption to your living space during the wall removal process."
            ],
            image: "/images/kitchen-hero.jpg",
            ctaText: "Get a Quote",
            ctaHref: "/contact"
        },
        {
            title: "Painting",
            summary: [
                "Enhance the beauty and ambiance of your home with our comprehensive interior painting services. Whether you're looking to refresh a single room or transform your entire home, our experienced painters provide meticulous craftsmanship and attention to detail, ensuring a stunning and lasting finish."
            ],
            description: [
                "Surface Preparation: Detailed cleaning, sanding, patching, and priming to create a flawless base for your paint job, ensuring longevity and a pristine appearance.",
                "Painting: Application of high-quality, eco-friendly paint in your selected color and finish, delivering rich, vibrant results that last.",
                "Hardware Installation: Reinstalling or updating hardware such as door handles, hinges, and light switch covers to complete the transformation.",
                "Trim and Molding: Precision painting of baseboards, crown molding, and other trim to enhance architectural details with crisp, clean lines."
            ],
            image: "/images/kitchen-hero.jpg",
            ctaText: "Get a Quote",
            ctaHref: "/contact"
        },
        {
            title: "Expertise",
            summary: [
                "Our team is committed to delivering high-quality results and exceptional customer satisfaction throughout every phase of your project. From initial planning to final inspection, we ensure superior craftsmanship and attention to detail."
            ],
            description: [
                "Design-Build: Collaborative planning with detailed proposals and custom solutions tailored to your needs.",
                "Scheduling: Flexible timelines with clear milestones to track progress and ensure timely completion.",
                "Estimating & Budgeting: Accurate and transparent cost estimates with effective cost management.",
                "Quality Control: Adhering to strict quality standards with regular inspections to maintain consistency.",
                "Safety Management: Implementing rigorous safety protocols and employing certified professionals.",
                "Subcontractor Management: Collaborating with trusted subcontractors and ensuring seamless coordination.",
                "Final Inspection: Thorough review and client walkthrough to ensure satisfaction.",
                "Touch-Ups and Adjustments: Addressing necessary touch-ups for a perfect finish.",
                "Warranty and Support: Offering warranties and providing ongoing support and maintenance."
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
            <div className={`services-list ${styles.servicesList}`}>
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