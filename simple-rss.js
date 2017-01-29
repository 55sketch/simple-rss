var simpleRSSPlugin = (function() {
  
  // get all the feed containers
  var feedsNodes = document.querySelectorAll('[data-rss-feed]');
  
  // Convert to array
  var feeds = [].slice.call(feedsNodes);

  for (var i = 0; i < feeds.length; i++) {

    var container = feedsNodes[i];
    
    // get feed URL
    var url = container.getAttribute('data-rss-feed');

    // get whether to link titles
    var addLink = container.getAttribute('data-rss-link-titles') || 'true';
    
    // get title wrapper element
    var titleWrapper = container.getAttribute('data-rss-title-wrapper') || 'h2';
  
    // Max outputs
    var max = container.getAttribute('data-rss-max') || 10;

    // Get data - append as script with callback to avoid CORS
    var script = document.createElement('script');

    script.src = document.location.protocol + '//api.rss2json.com/v1/api.json?callback=simpleRSSPlugin.handleJSON&rss_url=' + encodeURIComponent(url);

    document.querySelector('head').appendChild(script);
    
    // Remove script
    script.parentNode.removeChild(script);

  }

  // Callback function
  function handleJSON(data) {

    if (data.feed && data.items) {
      
      var docFrag = document.createDocumentFragment();

      for (var i = 0; i < data.items.length; i++) {

        var e = data.items[i];

        var tempNode = document.createElement('div');

        var template = '<' + titleWrapper + '><a href="' + e.link + '">' + e.title + '</a></' + titleWrapper + '>' + e.content;

        if (addLink === 'false') {

          template = '<' + titleWrapper + '>' + e.title + '</' + titleWrapper + '>' + e.content;

        }

        if (i < max) {
          
          tempNode.innerHTML = template;
          
          docFrag.appendChild(tempNode);

        }

      }
      
      container.appendChild(docFrag);

    }
  }
  
  // Return function for use in global scope
  
  return {
    handleJSON:handleJSON
  }

})();