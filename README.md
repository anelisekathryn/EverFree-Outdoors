# EverFree Outdoors

**Github Repo:** https://github.com/anelisekathryn/EverFree-Outdoors

**Heroku:** https://everfree-outdoors.herokuapp.com/api/products

**Netlify:** https://everfree-outdoors.netlify.app/

## Overview

We’re a rag-tag group of outdoor people that love to get outside, get unplugged, and enjoy the outdoors without emails, phone calls, texts, tik toks, or whatever else the youths are doing these days. We’ve been called quite a few names in our day, but you can call us Team Daale (pronounced: dāāl).

Our mission and purpose is to get YOU outside (and help you find the products that make it fun, and maybe even a little easier too). Why spend another day or another weekend indoors, connected to your phone when you can get outside instead? We believe that freetime outside frees the mind and the soul, so join our fun posse and get free in the outdoors with us!

## Team Members

- Anelise Bergin
- Andrew Freedman
- David Gurule
- EJ Soumahoro
- Lance Simmons

## Data Schema

Products:

```
const Product = new Schema
(
  {
    name: {
      type: String,
      required: true
      },
    imgURL: {
      type: String,
      required: true
      },
    description: {
      type: String,
      required: true
      },
    type: {
      type: String,
      required: false
      },
    price: {
      type: String,
      required: true
      },
    featured: {
      type: Boolean,
      default: false
      }
  },
  { timestamps: true }
)
```

Users:

```
 const User = new Schema  ({
   username: {
     type: String,
     required: true,
   },
   email: {
     type: String,
     required: true,
   },
   password_digest: {
     type: String,
     required: true,
     select: false
   },
   { timestamps: true }
 })

```

## Component Hierarchy

https://whimsical.com/everfree-P4dkTQB4sykQrTkRmoBqX9

![Screen Shot 2021-11-12 at 1 50 41 PM](https://user-images.githubusercontent.com/90531123/141532906-6f8046d3-b26d-4457-921f-234126942273.png)

## Wireframes & Branding

https://www.figma.com/file/cMLvn51ilzBYvskQ4NLJSR/EverFree-Outdoors?node-id=0%3A1

![Screen Shot 2021-11-12 at 1 17 04 PM](https://user-images.githubusercontent.com/90531123/141529286-a175ae3c-1e1a-469b-8158-86de37ed976b.png)

![Screen Shot 2021-11-12 at 2 30 20 PM](https://user-images.githubusercontent.com/90531123/141536904-64191867-03b6-4d4b-a387-c8ba05fbf0a3.png)

## Team Expectations

[Team Expectations](https://docs.google.com/document/d/1cJsnRTeMD8zwStb7M6jFdcLx1ro5UoGyzrmQ1iOCzB0/edit?usp=sharing)

[Project Management](https://app.asana.com/0/1201354529674099/timeline)

![tasks](https://user-images.githubusercontent.com/90531123/142075504-b77ae438-4cd6-4c40-a0d0-ef6a8c1d6867.jpg)

## MVP GOALS

- Use MongoDB and Express to create the back-end
- Use React to create the front-end
  - Use multiple functional components
- Give user capability for full CRUD (products for MVP, see post-MVP... preferred CRUD demonstration)
- Deploy to Heroku and Netlify
- Authorization and Authentication (user sign in and sign up)
- CSS styling to match wireframe and branding
  - Include media queries

## POST MVP GOALS

- Add user capability to review products (with full CRUD capability)
- Loading animation on home page
- Ability to edit a user profile

## Project Schedule

| Date      | Deliverable                                                                         |  Status  |
| :-------- | :---------------------------------------------------------------------------------- | :------: |
| Nov 10    | Project Team Building                                                               | Complete |
| Nov 12    | Wireframes + Final Project Approval                                                 | Complete |
| Nov 13–14 | Create Back-End (group code)                                                        | Complete |
| Nov 15    | Continue Back-End (group code) + Testing + Deploy Back-End                          | Complete |
| Nov 16    | Create React App + Test Components to Render / Assign Individual Tasks in Front-End | Complete |
| Nov 17    | Continue Working on React Front-End                                                 | Complete |
| Nov 18    | Working Prototype + Start CSS Styling                                               | Complete |
| Nov 19    | CSS Styling                                                                         | Complete |
| Nov 20–21 | Final styling + Code Review                                                         | Complete |
| Nov 22    | Project presentation                                                                | Complete |
