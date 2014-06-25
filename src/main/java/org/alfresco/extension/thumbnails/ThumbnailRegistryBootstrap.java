package org.alfresco.extension.thumbnails;

import java.util.List;

import org.alfresco.repo.thumbnail.ThumbnailDefinition;
import org.alfresco.repo.thumbnail.ThumbnailRegistry;
import org.alfresco.service.cmr.thumbnail.ThumbnailService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

public class ThumbnailRegistryBootstrap {

	private ThumbnailService thumbnailService;
	private List<ThumbnailDefinition> thumbnailDefinitions;
	private static Log logger = LogFactory
			.getLog(ThumbnailRegistryBootstrap.class);

	public void init() {
		ThumbnailRegistry thumbnailRegistry = thumbnailService
				.getThumbnailRegistry();
		for (ThumbnailDefinition thumbDef : thumbnailDefinitions) {
			logger.info("Adding thumbnail definition:" + thumbDef.getName());
			thumbnailRegistry.addThumbnailDefinition(thumbDef);
		}
	}

	public void setThumbnailService(ThumbnailService thumbnailService) {
		this.thumbnailService = thumbnailService;
	}

	public void setThumbnailDefinitions(
			List<ThumbnailDefinition> thumbnailDefinitions) {
		this.thumbnailDefinitions = thumbnailDefinitions;
	}
}
