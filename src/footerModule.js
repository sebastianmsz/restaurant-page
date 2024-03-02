export function footer(){
    const footer = document.querySelector('footer');

    const copyrightParagraph = document.createElement('p');
    copyrightParagraph.textContent = 'Copyright ';

    const copyrightSpan = document.createElement('span');
    copyrightSpan.classList.add('copy');
    copyrightSpan.innerHTML = '&copy;';
    copyrightParagraph.appendChild(copyrightSpan);

    const currentYearSpan = document.createElement('span');
    currentYearSpan.id = 'year';
    currentYearSpan.textContent = new Date().getFullYear();
    copyrightParagraph.appendChild(currentYearSpan);

    copyrightParagraph.textContent += ' sebastianmsz ';

    const githubLink = document.createElement('a');
    githubLink.href = 'https://github.com/sebastianmsz';
    githubLink.target = '_blank';

    const githubIcon = document.createElement('i');
    githubIcon.classList.add('fa', 'fa-github');
    githubIcon.setAttribute('aria-hidden', 'true');
    githubLink.appendChild(githubIcon);

    copyrightParagraph.appendChild(githubLink);

    footer.appendChild(copyrightParagraph);
}