# MK Gatsby project for 20210103

Just another daily Gatsby project, this one starting with the vanilla starter. The learning objective for today is to get faster at connecting markdown files. Actually, let's make it MDX files just to do something new. 

Here are links to the [repo](https://github.com/mkuzmick/mk-gatsby-20210103) and [site](https://mk-gatsby-20210103.netlify.app/).


## TODAY'S STEPS

Logging the steps (and time involved) in today's Gatsby project.

* start new Gatsby project and new Github repo, then connecting one to the other (< 5 min)
    ```
    gatsby new mk-gatsby-20210103
    cd mk-gatsby-20210103
    git remote add origin https://github.com/mkuzmick/mk-gatsby-20210103.git
    git branch -M main
    git push -u origin main
    gatsby develop
    code .
    ```
* install mdx and remark-images plugins
    ```
    npm install gatsby-plugin-mdx @mdx-js/mdx @mdx-js/react
    npm i gatsby-plugin-sharp gatsby-remark-images
    ```
* add plugins to `config.js`
    ```
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              sizeByPixelDensity: true,
            },
          },
        ],
      },
    },
    ```
* change folder structure to locate content outside of `src` and reconfigure `config.js` to find images and mdx posts there
    ```
    {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `images`,
            path: `${__dirname}/content/images`,
          },
        },
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `glossary`,
            path: `${__dirname}/content/glossary`,
          },
        },
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `shows`,
            path: `${__dirname}/content/shows`,
          },
        },
    ```
* at this point I got a little lost reading about mdx at links like these
  * [using global scope](https://www.christopherbiscardi.com/post/towards-shortcodes-for-gatsby-sites) by adding to your `config.js` file can make all your key components available in each and every mdx file without having to import them.
  * [doc on how to move from md to mdx](https://chrisotto.dev/gatsby-change-from-md-to-mdx/) for a Gatsby blog--see in particular the template stuff.
  * [another tutorial, this one with charts](https://www.digitalocean.com/community/tutorials/gatsbyjs-mdx-in-gatsby)
  * [nice, slow tutorial on building a blog from scratch with pagination](https://reacttraining.com/blog/gatsby-mdx-blog/)
  * [extremely long and detailed tutorial on creating an gatsby+mdx blog from scratch](https://www.freecodecamp.org/news/build-a-developer-blog-from-scratch-with-gatsby-and-mdx/)
  * [tutorial that also involves Cloudinary to build a video blog](https://scotch.io/tutorials/building-a-video-blog-with-gatsby-and-markdown-mdx)
  * [gatsby docs also show how to make components available as shortcodes](https://www.gatsbyjs.com/docs/how-to/routing/mdx/#part-3-importing-jsx-components-and-mdx-documents) . . . see second half of section 3
  * [unrelated but cool essay on progressive disclosure and layers of abstraction](https://www.jason.af/progressive-disclosure-of-complexity)
  * [the original progressive disclosure source](https://www.nngroup.com/articles/progressive-disclosure/)
* I'll have to come back to all of this tomorrow, but for today I'll just stop at creating an `index.mdx` file in pages--I had no idea you could use an `.mdx` file for the homepage, but I guess it's just another page, so let's do it.
* to add in components, I'll grabe them from 
  * [react-color](https://casesandberg.github.io/react-color/)
  * [react-piano](https://github.com/kevinsqi/react-piano) . . . NOTE: I encountered a bit of a problem deploying this, see note below.

  

## NOTES
Just little things that came up:

* Ran into a little bit of trouble as soon as we moved from `gatsby develop` to deploying on Netlify, with consistent `WebpackError: ReferenceError: window is not defined` errors. [This page in the Gatsby docs](https://www.gatsbyjs.com/docs/debugging-html-builds/) provides some useful solutions.
* It appears that you need to restart the dev server when you create a new mdx page before Gatsby actually creates the page, but then updates to that page happen without a restart.
* even though most articles on "moving from md to mdx" really get you to wipe the slate clean, uninstalling `gatsby-transformer-remark`, etc., it appears that you *can* run both `gatsby-plugin-mdx` and `gatsby-transformer-remark`, using the former for all `.mdx` files and the latter for all `.md` files. Is there a reason the tutorials aren't doing this? especially given that the transition from `.md` to `.mdx` can create some headaches, because there is syntax that's OK in Markdown but NOT OK in JSX/MDX.


## TOMORROW

* let's try a starter that comes configured for mdx? maybe [this one](https://www.gatsbyjs.com/starters/konstantinmuenster/gatsby-starter-portfolio-minimal/)?