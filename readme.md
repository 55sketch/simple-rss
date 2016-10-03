# Simple RSS JS Plugin

## About

This plugin allows you to embed content from an RSS feed on to your website using only `data` attributes directly in the HTML.

## Usage

Add the plugin to your page, just before the `</body>` tag.

```html
<script src="path/to/simple-rss.js"></script>
```

Create the container for the RSS feed to show in, and pass options in via `data` attributes.

```html
<div 
    data-rss-feed="http://binonabin.tumblr.com/rss" 
    data-rss-link-titles="false" 
    data-rss-title-wrapper="h3" 
    data-rss-max="5">
</div>
```

[Example](http://codepen.io/nickmoreton/pen/pEZggP)

### Options

#### data-rss-feed (required)

Specifies the RSS feed to pull content from

#### data-rss-link-titles (optional)

Specifies whether to link the titles to the original post.

_default: true_

#### data-rss-title-wrapper (optional)

Specifies the HTML element to wrap the titles.

_default: h2_

#### data-rss-max (optional)

Specifies the number of entries to output

_default: 10_
