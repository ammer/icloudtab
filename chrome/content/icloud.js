var giCloudTab = {
    openTab: function() {
	document.getElementById('tabmail').openTab(
	    'contentTab',
	    {contentPage:'https://www.icloud.com/#',
	     background: false, 
  	     clickHandler: "specialTabs.siteClickHandler(event, /^https?:\\/\\/www\.icloud\\.com\\//)"
  	    });
    },
    
    init: function() {
	if (!document.getElementById('tabmail')) {
	    document.getElementById("menu-icloudtab").setAttribute("collapsed", true);
	}
    }
};

window.addEventListener("load", giCloudTab.init, true);
