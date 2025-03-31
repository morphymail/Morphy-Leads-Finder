importScripts(chrome.runtime.getURL('/libs/ChromeBox.js'))
importScripts(chrome.runtime.getURL('/libs/TaskManager.js'))
importScripts(chrome.runtime.getURL('/controllers/TaskManagerContainer.js'))


chrome.action.onClicked.addListener(() => {
	console.log('Action clicked! Fetching display info...');
	
	chrome.system.display.getInfo((displays) => {
		if (displays.length > 0) {
			const display = displays[0];
			const screenWidth = display.workArea.width;
			const screenHeight = display.workArea.height;

			chrome.windows.create({
				url: chrome.runtime.getURL("views/index.html"),
				type: "popup",
				width: screenWidth,
				height: screenHeight,
				left: 0,
				top: 0
			}, function(window) {
				console.log('Popup window created successfully:', window);
			});
		}
	});
});


$box.on((event, data) => {

	console.log("Message received : " + event);


	if (event == "start") {
		console.log("Starting in background");
		$box.getLocal(local => {
			TaskManager.gotoTask(local, 'openMap');
		});
	}

	if (event == "stop") {
		console.log("stop event called");
		TaskManager.container.stop();
	}

	// if (event == "scrapeEmails") {
	// 	scrapeEmails();
	// }

});