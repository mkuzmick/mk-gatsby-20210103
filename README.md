# MK Gatsby project for 20210103

Just another daily Gatsby project, this one starting with the vanilla starter. The learning objective for today is to get faster at connecting markdown files. Actually, let's make it MDX files just to do something new. 

Here are links to the [repo](https://github.com/mkuzmick/mk-gatsby-20210103) and [site](https://mk-gatsby-20210103.netlify.app/).


## STEPS

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