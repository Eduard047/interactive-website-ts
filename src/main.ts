
import { setupModal } from './functions/modal';
import { setupScrollAnimation } from './functions/scrollAnimation';
import { loadPosts } from './data/api';

document.addEventListener('DOMContentLoaded', () => {
    setupModal();
    setupScrollAnimation();
    loadPosts();
});
