// @ts-ignore
import { Post } from '../types/types';

export function loadPosts() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then((data: Post[]) => {
            const container = document.getElementById('data-container') as HTMLElement;
            data.slice(0, 5).forEach((post: Post) => {
                const postElement = document.createElement('div');
                postElement.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
                container.appendChild(postElement);
            });
        });
}
