const template = document.createElement('template');
template.innerHTML = `
<style>
.project-card h1{
    font-size: 3rem;
    font-weight: 300;
    margin: 1rem 0;
}

.project-card h6{
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: 300;
    opacity: 0.3;
}

.project-card .cta{
    display: inline-block;
    margin-top: 2.5rem;
    font-size: 1.5rem;
    text-transform: uppercase;
    color: #3883ff;
    transition: color 650ms;
}

.project-card .cta:hover{
    color: #2f67cd;
}
</style>


<div class = "project-card">
    <h6></h6>
    <h1></h1>
    <p><slot name = "description" /></p>
    <a class = "cta"></a>
</div>

`;

class ProjectCard extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true)); 
        
        this.shadowRoot.querySelector('h1').innerText = 
        this.getAttribute('project');
            
        this.shadowRoot.querySelector('h6').innerText = 
        this.getAttribute('job');

        this.shadowRoot.querySelector('a').href = 
        this.getAttribute('link');

        this.shadowRoot.querySelector('a').innerText = 
        this.getAttribute('text');
    }
}


customElements.define('project-card', ProjectCard);