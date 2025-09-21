## personal webOS!
my personal webOS, featuring my projects, games, and stuff about me!

### things i learned:
- nextjs! this was my first nextjs app!
- mdx is used for adding blog stuff!
- the purpose of all teh starter files when you do create-next-app!
- state management!
- how to make a fake terminal!

### challenges i faced:
basically me doing something with so much love and patience, only to realize later that it was inefficient and there was such an obvious better way to do it properly :')

- i started by making a component for making windows, and realized waaaaayyy later that i actually needed two - to handle window creation with icons and another for teh actual window. this is the obvious logical way, which i took really long to understand.
- making windows draggable - even though it felt way simpler later, i spent wayy to much time fixing typos and adding z-index changes to bring active window to front.
- i initially had a simple welcome window, which i later modified to a terminal. (i am happy with how the terminal turned out, but i wish i had the idea earlier - i spent a long time styling my beautiful intro card which is no longer in use :') )
- i started by using images for icons, realizing later that using react-icons would have been such a cleaner and better choice.
- adding my godot game was more complicated than it seemed - it earlier was occuupying a lot of space for some reason, taking forever to render. but it finally worked!
- the terminal turned out well! i had trouble with state management for terminal, but after lots of looking up and fixes, it finally works!
- i tried linking linkedin window to redirect to my linkedin profile on clikign, but i could not figure it out. later i realized i shoudl have had an additional prop for redirects!!!! aaarrrggghhh!

### future ideas:
- fix weird terminal position on opening it through start menu
- add redirect links to social profiles
- add more projects and images to photos
- add music corner that shows what i am currently listening to?
- maybe an animated background?


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## About

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
