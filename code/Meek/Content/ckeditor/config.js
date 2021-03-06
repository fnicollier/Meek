﻿/*
Copyright (c) 2003-2011, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.editorConfig = function( config )
{
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	config.filebrowserBrowseUrl = '/Meek/BrowseFiles';
	config.filebrowserUploadUrl = '/Meek/UploadFile';
	config.protectedSource.push(/<style[\s\S]*?<\/style>/g);   // embeded styles
	config.protectedSource.push(/<%[\s\S]*?%>/g);   // ASP code
	config.protectedSource.push(/(]+>[\s|\S]*?<\/asp:[^\>]+>)|(]+\/>)/gi);   // ASP.Net code
};
