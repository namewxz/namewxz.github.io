/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
This file's functions:
1. defined all used data structures and global variables.
2. initialization of the program.
3. other small tools.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */


// * * * * * * * * * * * * * * * * variables * * * * * * * * * * * * * * * * *


var _para = {};

var _docuSkyObj = null;			// global variable for accessing widget
var _allDocList = [];			// all doc list in database

var _color = new Color();
var _dataset = new Dataset();	// data that user import from docusky
								// corpuses >> documents >> anchors

// convert metadata english name to chinese
var _metadata, _metaSky2Spec, _metaLocal2Spec;
$.getJSON('js/meta.json', function(result) {
	_metadata = result['meta2ch'];
	_metaSky2Spec = result['sky2meta'];
	_metaLocal2Spec = result['local2meta'];
});


// * * * * * * * * * * * * * * * * data structures * * * * * * * * * * * * * * * * *


/* ---
HEX of color
INPUT: none
OUTPUT: Color, all defined color used in system
--- */
function Color() {
	this.highlightblock = '#FCECC9';	// light-yellow
	this.highlightblockdark = '#BCA371';// dark-yellow

	this.highlighttarget = '#FCB0B3';	// light-red
	this.highlighttargetdark = '#C45B59';//dark-red

	this.controltitle = '#505C67';		// dark-black
	this.controltitlehover = '#6F7982';	// dark-medium-black
	this.controltexthover = "CED1D2";	// light-medium-black
	this.controltext = '#E2E5E7';		// light-black

	this.comparetitle = '#617E9B';		// dark-blue
	this.comparetitlehover = '#7D95AD';	// dark-medium-blue
	this.comparetexthover = '#C5D0DA';	// light-medium-blue
	this.comparetext = '#DFE7EE';		// light-blue

	this.searchtitle = '#628475';		// dark-green
	this.searchtitlehover = '#7E9A8E';	// dark-medium-green
	this.searchtexthover = '#C8D1CD';	// light-medium-green
	this.searchtext = '#DCE5E1';		// light-green

	this.explaintitle = '#756F63';		// dark-brown
	this.explaintitlehover = '#817C71';	// dark-medium-brown
	this.explaintexthover = '#BAB8B4';	// light-medium-brown
	this.explaintext = '#CCCAC6';		// light-brown
}


/* ---
Data Structure of whole dataset
INPUT: none
OUTPUT: Dataset, empty container
--- */
function Dataset() {
	this.newCorpus = function($dbName, $corpusName, $documents) {
		this[$corpusName] = new Corpus($documents, $dbName);
	}
}


/* ---
Data Structure of single corpus
INPUT: array of Document, documents in the corpus
OUTPUT: Corpus
isShow: show or hide in system
--- */
function Corpus($documents, $dbName) {
	this.isShow = true;
	this.dbName = $dbName;
	for (let i in $documents) {
		this[i] = $documents[i];
	}
}


/* ---
Data Structure of single document
INPUT: 1) array, metadata list
       2) array, content of each anchor type
OUTPUT: Document
--- */
function Document($metadata, $content) {
	this.metadata = $metadata[0];
	this.systemdata = $metadata[1];
	for (let anchorType in $content) {
		this[anchorType] = $content[anchorType];
	}
}


/* ---
Data Structure of single anchor block
INPUT: 1) Tag, information of this block
       2) string, text of anchor block
OUTPUT: AnchorBlock
--- */
function AnchorBlock($tagInfo, $text) {
	if (!$tagInfo.Type) $tagInfo.Type = 'FullText';
	this.tagInfo = $tagInfo;
	this.blockContent = $text;
}


/* ---
Data Structure of Tag
INPUT: array, attribute list of single tag
OUTPUT: Tag
--- */
function Tag($tagInfo) {
	for (let attr in $tagInfo) {
		this[attr] = $tagInfo[attr];
	}
}


// * * * * * * * * * * * * * * * * initialization * * * * * * * * * * * * * * * * *


/* ---
trigger initialization until finishing initialization when file is ready
--- */
$(document).ready(function() {
	setTimeout(initLocalData, 500);
	$('.explainInterface').load('html/exp_chunqiu.html');
});


/* ---
initialization, load local data directly
--- */
function initLocalData() {
	if (docuskyGetDbCorpusDocumentsSimpleUI === null) {
		alert("widget 尚未準備好，請稍等。");
		setTimeout(initLocalData, 500);
		return;
	}
	
	_docuSkyObj = docuskyGetDbCorpusDocumentsSimpleUI;
	
	// 使用本地数据加载
	var param = {
		target: 'OPEN',
		db: '春秋三傳',
		corpus: '[ALL]',
		query: '.all',
		page: 1,
		pageSize: 200
	};
	
	_docuSkyObj.getQueryResultDocuments(param, null, getEntireDbCorpusText);
}


// * * * * * * * * * * * * * * * * other small tools * * * * * * * * * * * * * * * * *


