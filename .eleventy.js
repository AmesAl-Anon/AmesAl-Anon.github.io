const { EleventyRenderPlugin } = require("@11ty/eleventy");
const { RenderPlugin } = require("@11ty/eleventy");
const MarkdownIt = require('markdown-it');

module.exports = function (eleventyConfig) {
    // Carpetas que añade directamente al directorio de salida
    // eleventyConfig.addPassthroughCopy("src/_css");
    eleventyConfig.addPassthroughCopy("src/_images");
    eleventyConfig.addPassthroughCopy("htaccess");

    /* --- Social Icons --- */
    eleventyConfig.addNunjucksShortcode("facebookDarkIcon", function() {
        return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z" fill="#666666" /></svg>`
    })
    eleventyConfig.addNunjucksShortcode("facebookLightIcon", function() {
        return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z" fill="#ffffff" /></svg>`
    })
    eleventyConfig.addNunjucksShortcode("twitterDarkIcon", function() {
        return `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578a9.3 9.3 0 0 1-2.958 1.13a4.66 4.66 0 0 0-7.938 4.25a13.229 13.229 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 0 0 3.96 9.824a4.647 4.647 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568a4.692 4.692 0 0 1-2.104.08a4.661 4.661 0 0 0 4.352 3.234a9.348 9.348 0 0 1-5.786 1.995a9.5 9.5 0 0 1-1.112-.065a13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254c0-.2-.005-.402-.014-.602a9.47 9.47 0 0 0 2.323-2.41l.002-.003z" fill="#666666"/></g></svg>`
    })
    eleventyConfig.addNunjucksShortcode("twitterLightIcon", function() {
        return `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" 
        xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" 
        width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
        <g fill="none">
        <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578a9.3 9.3 0 0 1-2.958 1.13a4.66 4.66 0 0 0-7.938 4.25a13.229 13.229 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 0 0 3.96 9.824a4.647 4.647 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568a4.692 4.692 0 0 1-2.104.08a4.661 4.661 0 0 0 4.352 3.234a9.348 9.348 0 0 1-5.786 1.995a9.5 9.5 0 0 1-1.112-.065a13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254c0-.2-.005-.402-.014-.602a9.47 9.47 0 0 0 2.323-2.41l.002-.003z" 
        fill="#ffffff"/></g>
        </svg>`
    })
    
    eleventyConfig.addNunjucksShortcode("instagramLightIcon", function() {
        return `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" 
        width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.465 1.066C8.638 1.012 9.012 1 12 1c2.988 0 3.362.013 4.534.066c1.172.053 1.972.24 2.672.511c.733.277 1.398.71 1.948 1.27c.56.549.992 1.213 1.268 1.947c.272.7.458 1.5.512 2.67C22.988 8.639 23 9.013 23 12c0 2.988-.013 3.362-.066 4.535c-.053 1.17-.24 1.97-.512 2.67a5.396 5.396 0 0 1-1.268 1.949c-.55.56-1.215.992-1.948 1.268c-.7.272-1.5.458-2.67.512c-1.174.054-1.548.066-4.536.066c-2.988 0-3.362-.013-4.535-.066c-1.17-.053-1.97-.24-2.67-.512a5.397 5.397 0 0 1-1.949-1.268a5.392 5.392 0 0 1-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C1.012 15.361 1 14.987 1 12c0-2.988.013-3.362.066-4.534c.053-1.172.24-1.972.511-2.672a5.396 5.396 0 0 1 1.27-1.948a5.392 5.392 0 0 1 1.947-1.269c.7-.271 1.5-.457 2.67-.511zm8.98 1.98c-1.16-.053-1.508-.064-4.445-.064c-2.937 0-3.285.011-4.445.064c-1.073.049-1.655.228-2.043.379c-.513.2-.88.437-1.265.822a3.412 3.412 0 0 0-.822 1.265c-.151.388-.33.97-.379 2.043c-.053 1.16-.064 1.508-.064 4.445c0 2.937.011 3.285.064 4.445c.049 1.073.228 1.655.379 2.043c.176.477.457.91.822 1.265c.355.365.788.646 1.265.822c.388.151.97.33 2.043.379c1.16.053 1.507.064 4.445.064c2.938 0 3.285-.011 4.445-.064c1.073-.049 1.655-.228 2.043-.379c.513-.2.88-.437 1.265-.822c.365-.355.646-.788.822-1.265c.151-.388.33-.97.379-2.043c.053-1.16.064-1.508.064-4.445c0-2.937-.011-3.285-.064-4.445c-.049-1.073-.228-1.655-.379-2.043c-.2-.513-.437-.88-.822-1.265a3.413 3.413 0 0 0-1.265-.822c-.388-.151-.97-.33-2.043-.379zm-5.85 12.345a3.669 3.669 0 0 0 4-5.986a3.67 3.67 0 1 0-4 5.986zM8.002 8.002a5.654 5.654 0 1 1 7.996 7.996a5.654 5.654 0 0 1-7.996-7.996zm10.906-.814a1.337 1.337 0 1 0-1.89-1.89a1.337 1.337 0 0 0 1.89 1.89z" fill="#ffffff"/></g></svg>`
    })
    eleventyConfig.addNunjucksShortcode("instagramDarkIcon", function() {
        return `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" 
        xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" 
        viewBox="0 0 24 24">
        <g fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.465 1.066C8.638 1.012 9.012 1 12 1c2.988 0 3.362.013 4.534.066c1.172.053 1.972.24 2.672.511c.733.277 1.398.71 1.948 1.27c.56.549.992 1.213 1.268 1.947c.272.7.458 1.5.512 2.67C22.988 8.639 23 9.013 23 12c0 2.988-.013 3.362-.066 4.535c-.053 1.17-.24 1.97-.512 2.67a5.396 5.396 0 0 1-1.268 1.949c-.55.56-1.215.992-1.948 1.268c-.7.272-1.5.458-2.67.512c-1.174.054-1.548.066-4.536.066c-2.988 0-3.362-.013-4.535-.066c-1.17-.053-1.97-.24-2.67-.512a5.397 5.397 0 0 1-1.949-1.268a5.392 5.392 0 0 1-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C1.012 15.361 1 14.987 1 12c0-2.988.013-3.362.066-4.534c.053-1.172.24-1.972.511-2.672a5.396 5.396 0 0 1 1.27-1.948a5.392 5.392 0 0 1 1.947-1.269c.7-.271 1.5-.457 2.67-.511zm8.98 1.98c-1.16-.053-1.508-.064-4.445-.064c-2.937 0-3.285.011-4.445.064c-1.073.049-1.655.228-2.043.379c-.513.2-.88.437-1.265.822a3.412 3.412 0 0 0-.822 1.265c-.151.388-.33.97-.379 2.043c-.053 1.16-.064 1.508-.064 4.445c0 2.937.011 3.285.064 4.445c.049 1.073.228 1.655.379 2.043c.176.477.457.91.822 1.265c.355.365.788.646 1.265.822c.388.151.97.33 2.043.379c1.16.053 1.507.064 4.445.064c2.938 0 3.285-.011 4.445-.064c1.073-.049 1.655-.228 2.043-.379c.513-.2.88-.437 1.265-.822c.365-.355.646-.788.822-1.265c.151-.388.33-.97.379-2.043c.053-1.16.064-1.508.064-4.445c0-2.937-.011-3.285-.064-4.445c-.049-1.073-.228-1.655-.379-2.043c-.2-.513-.437-.88-.822-1.265a3.413 3.413 0 0 0-1.265-.822c-.388-.151-.97-.33-2.043-.379zm-5.85 12.345a3.669 3.669 0 0 0 4-5.986a3.67 3.67 0 1 0-4 5.986zM8.002 8.002a5.654 5.654 0 1 1 7.996 7.996a5.654 5.654 0 0 1-7.996-7.996zm10.906-.814a1.337 1.337 0 1 0-1.89-1.89a1.337 1.337 0 0 0 1.89 1.89z" fill="#666666"/></g></svg>`
    })

    // Ed H commented out 4/22/2026 two shortcodes below because I don't want to include them in the footer for now, but I may want to add them later. So I'm leaving the code here for now. Ed H. 4/21/2026.
    // eleventyConfig.addNunjucksShortcode("whatsappIcon", function() {
    //    return `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M2.004 22l1.352-4.968A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10a9.954 9.954 0 0 1-5.03-1.355L2.004 22zM8.391 7.308a.961.961 0 0 0-.371.1a1.293 1.293 0 0 0-.294.228c-.12.113-.188.211-.261.306A2.729 2.729 0 0 0 6.9 9.62c.002.49.13.967.33 1.413c.409.902 1.082 1.857 1.971 2.742c.214.213.423.427.648.626a9.448 9.448 0 0 0 3.84 2.046l.569.087c.185.01.37-.004.556-.013a1.99 1.99 0 0 0 .833-.231a4.83 4.83 0 0 0 .383-.22s.043-.028.125-.09c.135-.1.218-.171.33-.288c.083-.086.155-.187.21-.302c.078-.163.156-.474.188-.733c.024-.198.017-.306.014-.373c-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.401-.621a.498.498 0 0 0-.177-.041a.482.482 0 0 0-.378.127v-.002c-.005 0-.072.057-.795.933a.35.35 0 0 1-.368.13a1.416 1.416 0 0 1-.191-.066c-.124-.052-.167-.072-.252-.109l-.005-.002a6.01 6.01 0 0 1-1.57-1c-.126-.11-.243-.23-.363-.346a6.296 6.296 0 0 1-1.02-1.268l-.059-.095a.923.923 0 0 1-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41a4.38 4.38 0 0 0 .263-.373c.118-.19.155-.385.093-.536c-.28-.684-.57-1.365-.868-2.041c-.059-.134-.234-.23-.393-.249c-.054-.006-.108-.012-.162-.016a3.385 3.385 0 0 0-.403.004z" fill="#666666"/></svg>`
    // })

    // eleventyConfig.addNunjucksShortcode("mailIcon", function() {
    //     return `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="0.88em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512"><path d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM178.117 262.104C87.429 196.287 88.353 196.121 64 177.167V152c0-13.255 10.745-24 24-24h272c13.255 0 24 10.745 24 24v25.167c-24.371 18.969-23.434 19.124-114.117 84.938c-10.5 7.655-31.392 26.12-45.883 25.894c-14.503.218-35.367-18.227-45.883-25.895zM384 217.775V360c0 13.255-10.745 24-24 24H88c-13.255 0-24-10.745-24-24V217.775c13.958 10.794 33.329 25.236 95.303 70.214c14.162 10.341 37.975 32.145 64.694 32.01c26.887.134 51.037-22.041 64.72-32.025c61.958-44.965 81.325-59.406 95.283-70.199z" fill="#666666"/></svg>`
    // })

    /* --- Social Icons --- */

    // Date Format. Ed H. updated to American CST April 18 2026. 
    // postDate is a filter that can be used in the templates to format dates. 
    // It uses the Luxon library to handle date formatting and time zones. 
    // The filter takes a JavaScript Date object as input and returns a formatted date 
    // string in the "America/Chicago" time zone, which automatically adjusts for 
    // Central Standard Time (CST) and Central Daylight Time (CDT) as needed. 
    // The output format is a short date and time string, such as "4/20/2026, 3:00 PM".

    const { DateTime } = require("luxon");

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj)
        .setZone("America/Chicago") // Uses CST/CDT automatically
        .toLocaleString(DateTime.DATETIME_SHORT);
    });

    // Number of characters for each Card you can change it below. Set to 150 5/29/2026
    eleventyConfig.addFilter('descriptionLength', function(text) {
        let resultado
        text === undefined ? resultado = '' : resultado = String(text).slice(0, 150) + '...';
        return resultado
    });

    //Order Post by Date orderByDate, or by Title orderByTitle or by Order etc. added by Ed H. 3/22/2026
    // if you don't want the .md file to included in the collection, then add a front matter 
    // variable "excludeFromCollection: true" and then filter it out in the collection 
    // definition which I did for about.md because I don't want it to be included in the sortedPosts collection
    eleventyConfig.addCollection("sortedPosts", function (collection) {
        // Get all posts and sort by the 'order' front matter value
        return collection
        .getFilteredByGlob("./src/*.md")
        .sort((a, b) => {
            const orderA = Number(a.data.meetingOrder) || Infinity;
            const orderB = Number(b.data.meetingOrder) || Infinity;
            return orderA - orderB;
        });
    });

    // Get all unique mytags from the collection and sort them by the 'order' key in the mytags objects. Ed H. 5/19/2026
    //
    // function(collection) defines a JavaScript function that takes one parameter named collection. 
    // This parameter represents the entire Eleventy collection (e.g., all blog posts, pages, etc.) 
    // that is passed to the filter when it's used in a template. The function then processes this collection—filtering, 
    // mapping, or sorting its items—based on the defined logic, such as gathering and ordering tags by an order property. 
    //
    // eleventyConfig.addFilter("getSortedMyTags", function(collection) {
    // // 1. Initialize an empty array to collect all 'mytags' objects from every item in the collection.
    // const allMyTags = [];
    //
    // // 2. Loop through each item (e.g., a blog post) in the Eleventy collection.
    // collection.forEach(item => {
    //    // 3. Check if the current item has a 'mytags' property in its front matter data.
    //    if (item.data.mytags) {
    //    // 4. If 'mytags' exists, spread its contents (an array of objects) and add each object to 'allMyTags'.
    //    //    This flattens the arrays from individual items into one large array.
    //    allMyTags.push(...item.data.mytags);
    //    }
    // });
    //
    // // 5. Create an empty object to store unique tags, using the tag's 'name' as the key to prevent duplicates.
    // const uniqueTags = {};
    // allMyTags.forEach(tagObj => {
    //    // 6. Only add the tag to 'uniqueTags' if it hasn't been added before (checks by 'name').
    //    if (!uniqueTags[tagObj.name]) {
    //    uniqueTags[tagObj.name] = tagObj;
    //    }
    // });
    //
    // 7. Convert the uniqueTags object back into an array of tag objects.
    //    Sort this array by the 'order' property in ascending order.
    //    If a tag lacks an 'order' property, it defaults to 0.
    // return Object.values(uniqueTags).sort((a, b) => (a.order || 0) - (b.order || 0));
    // });
    //
// ===
// eleventyConfig.addFilter("getSortedMyTagsdebug", function(collection) {
  // const allMyTags = [];
  //
  // collection.forEach(item => {
  //  if (item.data.mytags) {
  //    allMyTags.push(...item.data.mytags);
  //  }
  // });
  //
  // Debug: Log the combined array of all tags before deduplication
  // console.log("Debug: All mytags collected:", allMyTags);
  //
  // const uniqueTags = {};
  // allMyTags.forEach(tagObj => {
  //   if (!uniqueTags[tagObj.name]) {
  //    uniqueTags[tagObj.name] = tagObj;
  //  }
  // });
  //
  //const sortedTags = Object.values(uniqueTags).sort((a, b) => (a.order || 0) - (b.order || 0));
  //
  // Debug: Log the final, unique, and sorted list of tags
  // console.log("Debug: Final sorted tags:", sortedTags);
  //
  //return sortedTags;
  // });   
  // ===


    // Related Items custom filter.
    eleventyConfig.addFilter('relatedRelacionados', function(collection, labelsetiquetas, path, limited) {

        const myfilterMyfiltrados = new Set();

        collection.map(item => {
            for (labeletiqueta of labelsetiquetas) {
                // console.log(item.data.mytags.length)
                if (item.data.mytags && item.data.mytags.includes(labeletiqueta)) {
                    myfilterMyfiltrados.add(item)
                }
            }
        })

        // Delete Current Post (Eliminar Post Actual)
        for (item of myfilterMyfiltrados) {
            if (item.data.page.inputPath == path) {
                myfilterMyfiltrados.delete(item)
            }
        }

        // Limit the number of Articles and make them random order
        // Limitar el número de Articulos y que sean random order
        let articulosFiltrados = Array.from(myfilterMyfiltrados)
        if(articulosFiltrados.length <= limited) {
            return articulosFiltrados
        }

        do {
            let indice = Math.floor(Math.random()*articulosFiltrados.length)
            articulosFiltrados.splice((indice - 1), 1)

        } while (articulosFiltrados.length > limited)

        return articulosFiltrados
    })

    // Clean-css
    const CleanCSS = require("clean-css");
    eleventyConfig.addFilter("cssmin", function (code) {
        return new CleanCSS({}).minify(code).styles;
    });

    // To include a Markdown file like footer.md in your Eleventy templates, 
    // use the EleventyRenderPlugin added to this eleventy.js configuration file,
    // which Ed H added above at the top of this file is is faster when outside
    // of the module.exports function. This plugin allows you to render any file type that Eleventy supports, 
    // including Markdown files, directly in your templates.
    // 
    // Ed H added 4/21/2026 Next use {% renderFile "/pathto/footer.md" %}
    // in your template where you want the footer to appear. Neat. Now you can use markdown inside nunjucks templates. Ed H. 4/21/2026.

    eleventyConfig.addPlugin(EleventyRenderPlugin);

    // PurgeCss
    const purgeCssPlugin = require("eleventy-plugin-purgecss");
    if (process.env.ELEVENTY_ENV === "production") {
        eleventyConfig.addPlugin(purgeCssPlugin, {
            // Optional: Specify the location of your PurgeCSS config
            config: "./purgecss.config.js",
            // Optional: Set quiet: true to suppress terminal output
            quiet: false,
        });
    }

     eleventyConfig.addPlugin(RenderPlugin);
  
    // This plubin allows you to use the markdown filter in your nunjucks templates. Ed H. 5/7/2026
    // I like using markdown for tables because it is easy to create them. 
    const md = new MarkdownIt({ html: true });
    eleventyConfig.addFilter('markdownify', (content) => md.render(content));

    // Inline JS
    const { minify } = require("terser");
    eleventyConfig.addNunjucksAsyncFilter("jsmin", async function (
    code,
    callback
    ) {
    try {
        const minified = await minify(code);
        callback(null, minified.code);
    } catch (err) {
        console.error("Terser error: ", err);
        // Fail gracefully.
        callback(null, code);
    }
    });

    // Minify Html using the html-minifier package after the Eleventy processes the content. Cool.
    const htmlmin = require("html-minifier");

    if (process.env.ELEVENTY_ENV === "production") {
        eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
            // Eleventy 1.0+: use this.inputPath and this.outputPath instead
            if (outputPath && outputPath.endsWith(".html")) {
                let minified = htmlmin.minify(content, {
                    useShortDoctype: true,
                    removeComments: true,
                    collapseWhitespace: true
                });
                return minified;
            }
            return content;
        });
    }

    // directory structure
    return {
        // allow eleventy to process .md files with Nunjucks syntax. Ed H added 4/21/2026
        markdownTemplateEngine: 'njk',

        // Changed the build folder to be in the root directory so it will not have a /folder on github pages website Ed H 4/24/2026
        dir: {
            input: './src',
            includes: "/_11ty/_includes/",
            layouts: "/_11ty/_layouts/",
            data: "/_11ty/_data/",
            output: "./build" // Output to build dir. Note Ed H installed npm gh-pages package 5/12/2026 so GitHub Pages won't need a /folder in the URL. Have to set github pages to use the main branch of gh-pages on github.com
        }
    }
}