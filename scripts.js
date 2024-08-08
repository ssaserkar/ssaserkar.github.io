function navigateToCategory(category) {
    const categoryId = `${category}-projects`;
    const categoryElement = document.getElementById(categoryId);

    if (categoryElement) {
        categoryElement.scrollIntoView({ behavior: 'smooth' });
    }
}
