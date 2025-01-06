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
        ctaText: string;
    } | null>(null);

    const projects = [
        {
            title: "Modern Kitchen Remodel",
            summary: "A complete kitchen transformation for a modern family.",
            images: ["/images/kitchen-hero.jpg", "/images/kitchen-hero.jpg", "/images/kitchen-hero.jpg"],
            ctaText: "Get a Quote",
        },
        {
            title: "Bathroom Remodel", 
            summary: "Luxurious bathroom renovation with modern amenities.",
            images: ["/images/kitchen-hero.jpg", "/images/kitchen-hero.jpg"],
            ctaText: "Get a Quote",
        },
        {
            title: "LED Lighting Installation",
            summary: "Upgrade to energy-efficient LED lighting throughout the home.",
            images: ["/images/kitchen-hero.jpg", "/images/kitchen-hero.jpg"],
            ctaText: "Get a Quote",
        },
        {
            title: "Whole House Transformation",
            summary: "A comprehensive remodeling project that touched every part of the home.",
            images: ["/images/kitchen-hero.jpg", "/images/kitchen-hero.jpg", "/images/kitchen-hero.jpg"],
            ctaText: "Get a Quote",
        },
        {
            title: "3D Kitchen Design",
            summary: "Visualize your kitchen remodel with a detailed 3D design.",
            images: ["/images/kitchen-hero.jpg", "/images/kitchen-hero.jpg"],
            ctaText: "Get a Quote",
        },
        {
            title: "Elegant Drywall Texturing",
            summary: "Custom drywall textures that enhance interior design.",
            images: ["/images/kitchen-hero.jpg", "/images/kitchen-hero.jpg"],
            ctaText: "Get a Quote",
        },
        {
            title: "Hardwood Flooring Installation",
            summary: "Premium hardwood flooring installation for a high-end look.",
            images: ["/images/kitchen-hero.jpg", "/images/kitchen-hero.jpg"],
            ctaText: "Get a Quote",
        },
        {
            title: "Open-Concept Living Room",
            summary: "Creating an open, inviting space by removing walls.",
            images: ["/images/kitchen-hero.jpg", "/images/kitchen-hero.jpg"],
            ctaText: "Get a Quote",
        },
        {
            title: "Interior Painting and Finishing",
            summary: "Complete interior painting for a refreshed look.",
            images: ["/images/kitchen-hero.jpg", "/images/kitchen-hero.jpg"],
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
