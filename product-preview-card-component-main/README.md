# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Check out Frontend Mentor! :heart_eyes: They have challenges which to improve our coding skills by building realistic projects.

## 📑 Table of contents

- [Overview](#overview) 📋
  - [The challenge](#the-challenge) 💪
  - [Screenshot](#screenshot) 🖼️
  - [Links](#links) 🔗
- [My process](#my-process) 🔄
  - [Built with](#built-with) 🛠️
  - [What I learned](#what-i-learned) 🧠
  - [Continued development](#continued-development) 🚀
- [Author](#author) 🖋️

## 📋 Overview

### The challenge 💪

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot 🖼️

![Screenshot of my solution](./images/screenshot.png)

### Links 🔗

- Visit : [Solution URL](https://your-solution-url.com)
- Visit : [Live Site URL](https://frontendmentor-challenges-iota.vercel.app/product-preview-card-component-main/index.html)

## 🔄 My process

### Built with 🛠️

- Semantic HTML5 markup
- CSS Grid
- Mobile-first workflow

### What I learned 🧠

While completing this challenge, I discovered a _new_ HTML concept and practised some CSS concepts I am weak in.

1. **Using `<picture>` element**

One major sub-challenge was to display a different product image for mobile and desktop screens. Upon googling, I discovered the `<picture>` tag.

- Each `<source>` tag mentions a screen size and corresponding image for that size

```html
<picture>
  <source media="(max-width: 500px)" srcset="images/image-product-mobile.jpg" />
  <img
    src="images/image-product-desktop.jpg"
    alt="A bottle of Perfume Gabrielle Essence Eau De Parfum"
  />
</picture>
```

2. **CSS Grid**

This topic is something I am weak in and get confused easily. So I focused to make the product card grid with CSS grid and make it responsive for mobile screens too.

```css
.card {
  display: grid;
  grid-template: 0.5fr 1fr / auto;
}

@media (min-width: 640px) {
  .card {
    grid-template: auto / repeat(2, 1fr);
    margin: auto;
  }
}
```

### Continued development 🚀

I want to focus more on below topics and explore some techniques to improve my developing skills.

- **CSS Grid** : To be able to build more complex 2D layouts with ease and make them responsive for various screen sizes too
- **CSS Custom Variables** : I want to explore this topic and learn how to make dark/light mode themes.
- **Mobile First Approach** : I've always designed desktop-first but now I want to use mobile-first approach and reap its benefits.

## 🖋️ Author

- Frontend Mentor - [@Ritika-Agrawal811](https://www.frontendmentor.io/profile/Ritika-Agrawal811)
- Twitter - [@RitikaAgrawal08](https://twitter.com/RitikaAgrawal08)
