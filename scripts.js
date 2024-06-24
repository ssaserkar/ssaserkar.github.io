// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dynamically load content for each project
    const projects = [
        {
            id: 'chatterarm',
            title: 'ChatterArm: Large Language Model Augmented Vision-based Grasping',
            description: 'Integrated LangSAM with Generative Grasp CNN (GGCNN) to create a vision-language-action model in ROS2 and Gazebo. Processed RGB-D images to process Region of Interest mapping given a prompt, process depth maps and push to GGCNN.',
            image: 'chatterarm.jpg',
            link: 'https://github.com/ssaserkar/chatterarm'
        },
        {
            id: 'lidar_segmentation',
            title: 'Panoptic Segmentation on 3D LiDAR Point Cloud Data',
            description: 'Converted 3D Point Cloud Image to 2D Spherical Projection to reduce dimensionality. Remodeled RangeNet++ for Semantic Segmentation, using Mask-RCNN for Instance Segmentation.',
            image: 'lidar_segmentation.jpg',
            link: 'https://github.com/ssaserkar/panoptic-segmentation'
        }
    ];

    const projectContainer = document.querySelector('#projects .container');

    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        projectDiv.id = project.id;
        projectDiv.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <img src="${project.image}" alt="${project.title} image">
            <p><a href="${project.link}" target="_blank">View on GitHub</a></p>
        `;
        projectContainer.appendChild(projectDiv);
    });

    // Highlight navigation links on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Collapsible navigation for smaller screens
    const navToggle = document.createElement('div');
    navToggle.classList.add('nav-toggle');
    navToggle.innerHTML = '&#9776;';
    document.querySelector('nav').prepend(navToggle);

    navToggle.addEventListener('click', () => {
        document.querySelector('nav ul').classList.toggle('showing');
    });

    // Ensure navigation menu hides after selection on smaller screens
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.querySelector('nav ul').classList.remove('showing');
        });
    });
});
