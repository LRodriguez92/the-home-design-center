import React, { useState } from "react";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import styles from "../styles/ProjectsPage.module.css";

export default function ProjectsPage() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<{
        title: string;
        summary: string;
        images: string[];
        description: string;
        ctaText: string;
    } | null>(null);

    const projects = [
        {
            title: "Modern Kitchen Remodel",
            summary: "A complete kitchen transformation for a modern family.",
            images: ["/images/kitchen1.jpg", "/images/kitchen2.jpg", "/images/kitchen3.jpg"],
            description: "This project focused on updating the layout, cabinetry, and appliances for a contemporary kitchen.",
            ctaText: "Get a Quote",
        },
        {
            title: "Bathroom Remodel",
            summary: "Luxurious bathroom renovation with modern amenities.",
            images: ["/images/bathroom1.jpg", "/images/bathroom2.jpg"],
            description: "We transformed an outdated bathroom into a sleek, modern space with elegant fixtures.",
            ctaText: "Get a Quote",
        },
        {
            title: "LED Lighting Installation",
            summary: "Upgrade to energy-efficient LED lighting throughout the home.",
            images: ["/images/lighting1.jpg", "/images/lighting2.jpg"],
            description: "We installed energy-saving LED lighting, improving the ambiance and efficiency of the home.",
            ctaText: "Get a Quote",
        },
        {
            title: "Whole House Transformation",
            summary: "A comprehensive remodeling project that touched every part of the home.",
            images: ["/images/house1.jpg", "/images/house2.jpg", "/images/house3.jpg"],
            description: "This project involved a complete home renovation including new flooring, custom cabinetry, and lighting fixtures.",
            ctaText: "Get a Quote",
        },
        {
            title: "3D Kitchen Design",
            summary: "Visualize your kitchen remodel with a detailed 3D design.",
            images: ["/images/3d-design1.jpg", "/images/3d-design2.jpg"],
            description: "We created an immersive 3D kitchen design to help clients see and customize their future kitchen before construction.",
            ctaText: "Get a Quote",
        },
        {
            title: "Elegant Drywall Texturing",
            summary: "Custom drywall textures that enhance interior design.",
            images: ["/images/drywall1.jpg", "/images/drywall2.jpg"],
            description: "We applied elegant drywall textures that added depth and style to the home's interior walls.",
            ctaText: "Get a Quote",
        },
        {
            title: "Hardwood Flooring Installation",
            summary: "Premium hardwood flooring installation for a high-end look.",
            images: ["/images/flooring1.jpg", "/images/flooring2.jpg"],
            description: "We installed premium hardwood floors throughout the home, adding value and durability to the space.",
            ctaText: "Get a Quote",
        },
        {
            title: "Open-Concept Living Room",
            summary: "Creating an open, inviting space by removing walls.",
            images: ["/images/living-room1.jpg", "/images/living-room2.jpg"],
            description: "We removed walls to create an open-concept living room, making the home feel larger and more connected.",
            ctaText: "Get a Quote",
        },
        {
            title: "Interior Painting and Finishing",
            summary: "Complete interior painting for a refreshed look.",
            images: ["/images/painting1.jpg", "/images/painting2.jpg"],
            description: "Our team applied fresh paint throughout the home, using high-quality finishes to enhance the aesthetics of each room.",
            ctaText: "Get a Quote",
        }
    ];
    

    const handleOpenModal = (project: { title: string; summary: string; images: string[]; description: string; ctaText: string; }) => {
        setSelectedProject(project);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedProject(null);
    };

    return (
        <div>
            <Hero 
                header="Our Projects"
                description="We take pride in delivering exceptional remodeling and design services that transform homes into beautiful, functional spaces. Explore our portfolio below to see examples of our work and discover the quality and craftsmanship that sets us apart."
                primaryCtaText="Get a Quote"
                primaryCtaHref="/contact"
                secondaryCtaText="Learn More"
                secondaryCtaHref="/about"
                image="/images/kitchen-hero.jpg"
            />

            <div className={`project-list ${styles.projectList}`}>
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        summary={project.summary}
                        images={project.images}
                        onSeeMore={() => handleOpenModal(project)}
                    />
                ))}
            </div>

            {modalOpen && selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
}
