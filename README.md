# abandoned-website
Websites can be bought and live on forever...or so long as the domain name continues to be renewed. As a result, some sites just become abandoned, living in the aether, but because of backwards compatibility they don't really _look_ abandoned.

Well, what if they did? What if the website deteriorated over time, things fell apart, and the darkness came to consume it?

## An Experiment
I created this site with the intention of - as I mentioned - making a website look abandoned. It turned out to also be a journey into the world of building a website using Hugo.

Hugo's great. I was really worried for a while that I chose the wrong SSG when I actually read the docs, but I accepted the challenge and made it anyway.

I realized that it wasn't a complete mistake. Hugo might not be the best suited option here.
* This site isn't really a blog.
* It's only a few pages.
* Not a lot gets reused.

Only later in the build process did I realize those were shortcomings, but once I understood the way the directory structure works in Hugo it all made more sense and I was able to make it work for me.

Honestly, the hardest parts became the following:
1. Getting the favicon to appear when in the root directory (I gave up and put it in the /img/ directory instead and that worked).
2. Templating the page titles the way I wanted them to be (Learning about the {{ .Page.Title }} variable changed everything for me).
3. Setting up the 404 page to work within the baseof.html template while still having its own special treatment (inline `<style>` blocks and `noindex` directive).

## Enjoy.

### TODO
1. Change the setTimeout function in main.js to not rely on the css animation duration. Maybe make the animation itself in JS so you can perform the same action on animation finish.
