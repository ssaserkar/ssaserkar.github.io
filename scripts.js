function navigateToCategory(category) {
    let sectionId;
    switch(category) {
        case 'robotics':
            sectionId = 'robotics-projects';
            break;
        case 'ai':
            sectionId = 'ai-projects';
            break;
        case 'electronics':
            sectionId = 'electronics-projects';
            break;
        default:
            sectionId = 'introduction';
    }

    // Scroll to the section and highlight the most impactful project
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });

    // Highlight the first project in the category
    const firstProject = document.querySelector(`#${sectionId} .project`);
    if (firstProject) {
        firstProject.style.border = '2px solid #ff6600';
    }
}
