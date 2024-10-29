export function setupModal() {
    const modal = document.getElementById('modal') as HTMLElement;
    const openModalBtn = document.getElementById('openModal') as HTMLElement;
    const closeModalBtn = document.getElementById('closeModal') as HTMLElement;

    openModalBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}
