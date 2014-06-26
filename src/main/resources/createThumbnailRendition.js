var thumbnailAspect = "thumb:thumbnailAspect";
var sourceImageAspect = "thumb:sourceImageAspect";

if(document !== null){
   logger.log("Found node: " + document.name);
	var thumbnails = document.getThumbnails();
	logger.log("Thumbmail count before: " + thumbnails.length);
	for(var i=0; i < thumbnails.length; i++){
		var thumbnail = thumbnails[i];
		logger.log("Found Thumbnail with: " + thumbnail.id + " and name: " + thumbnail.name);
	}
	
	document.createThumbnail("png_100x100", false);
	document.createThumbnail("png_200x200", false);
	document.createThumbnail("png_400x400", false);
	
	var parentFolder = document.parent;
	var parentFolderPath = parentFolder.displayPath + "/" + parentFolder.name;
	logger.log("Found parent folder: " + parentFolderPath);
	
	var thumbnailFolder = parentFolder.childByNamePath(document.name + "-thumbnails");
	if(thumbnailFolder == null){
		logger.log("Thumbnail Folder not found. Creating thumbnail folder...");
		thumbnailFolder = parentFolder.createFolder(document.name + "-thumbnails");
	}
	
	var thumbnails = document.getThumbnails();
	logger.log("Thumbmail count: " + thumbnails.length);
	for(var i=0; i < thumbnails.length; i++){
		var thumbnail = thumbnails[i];
		logger.log("Found Thumbnail with: " + thumbnail.id + " and name: " + thumbnail.name);
		
		if(thumbnail.name != "doclib" && thumbnail.name != "imgpreview"){
			var copiedThumbnail = thumbnail.copy(thumbnailFolder);
			
			if(document.hasAspect(thumbnailAspect)){
			  	document.createAssociation(copiedThumbnail, "thumb:thumbnails");
				logger.log("Created association. Source node: " + document.name + " - Association node: " + copiedThumbnail.name);
			}
			else{
				document.addAspect(thumbnailAspect);
				document.createAssociation(copiedThumbnail, "thumb:thumbnails");
				logger.log("Created association. Source node: " + document.name + " - Association node: " + copiedThumbnail.name);
			}
		
			if(copiedThumbnail.hasAspect(sourceImageAspect)){
				copiedThumbnail.createAssociation(document, "thumb:sourceImage");
				logger.log("Created association. Source node: " + copiedThumbnail.name + " - Association node: " + document.name);
			}
			else{
				copiedThumbnail.addAspect(sourceImageAspect);
				copiedThumbnail.createAssociation(document, "thumb:sourceImage");
				logger.log("Created association. Source node: " + copiedThumbnail.name + " - Association node: " + document.name);
			}
		}
	}
}
else{
	logger.log("Node not found!!!!");	
}