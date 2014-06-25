
if(document !== null){
   logger.log("Found node: " + document.name);
	var thumbnails = document.getThumbnails();
	logger.log("Thumbmail count: " + thumbnails.length);
	for(var i=0; i < thumbnails.length; i++){
		var thumbnail = thumbnails[i];
		logger.log("Found Thumbnail with: " + thumbnail.id + " and name: " + thumbnail.name);
		
		//if(thumbnail.name == "png_100x100" || thumbnail.name == "png_24x24" || thumbnail.name == "png_400x400"){
		//	thumbnail.remove();
		//}
	}
	
	
	document.createThumbnail("png_100x100", false);
	document.createThumbnail("png_200x200", false);
	document.createThumbnail("png_400x400", false);

	var thumbnails = document.getThumbnails();
	logger.log("Thumbmail count: " + thumbnails.length);
	for(var i=0; i < thumbnails.length; i++){
		var thumbnail = thumbnails[i];
		logger.log("Found Thumbnail with: " + thumbnail.id + " and name: " + thumbnail.name);
	}
}
	
else{
	logger.log("Node not found!!!!");	
}