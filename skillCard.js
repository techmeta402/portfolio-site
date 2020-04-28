import { LitElement, html, css } from "https://cdn.webcomponents.psu.edu/cdn/build/es6/node_modules/lit-element/lit-element.js";

class SkillCard extends LitElement {
    static get tag() {
        return 'skill-card';
    }
    static get styles() {
        return [css`
.skill-card{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    text-align: center;
}

.skill-card h1{
    text-transform: up;
    letter-spacing: 2px;
    margin-top: 2rem;
    margin-bottom: -2px;
}

.icon-container{
    width: 10rem;
    height: 10rem;
    border: 3px solid;
    border-color: #43cea2;
    border-radius: 25%;
    background: linear-gradient(to top, #0F2027, #203A43, #2C5364);
    margin-bottom: 2rem;
    margin-right: 2rem;
    display: flex;
    transform: rotate(45deg); 
}

.icon-container i{
    color: #43cea2;
    font-size: 5rem;
    margin: auto;
    transform: rotate(-45deg);
    align-content: center;
}

.skill-card p{
    font-size: 1.8rem;
    font-weight: 300;
}`];
    }

    render() {
        return html`
<div class="skill-card">
    <div class="icon-container">
        <i><slot name="icon" /></i>
    </div>
    <h1>${this.name}</h1>
    <p><slot name="description" /></p>
</div>`;
    }
    static get properties() {
        return {
            name: {
                type: String
            }
        };
    }
}

window.customElements.define(SkillCard.tag, SkillCard);

export {SkillCard};
