export function setupScrollAnimation() {
    window.addEventListener('scroll', () => {
        const elements = document.querySelectorAll('.animate') as NodeListOf<HTMLElement>;
        elements.forEach(element => {
            if (element.getBoundingClientRect().top < window.innerHeight) {
                element.classList.add('show');
            }
        });
    });
}
