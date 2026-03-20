/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
This file defined the functions that used to load files from
computer and DocuSky.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */


// * * * * * * * * * * * * * * * * DocuSky * * * * * * * * * * * * * * * * *


/* ---
success callback function, called when click load button
get all documents in database
--- */
function getEntireDbCorpusText() {

	// fail to find database
	if (_docuSkyObj.totalFound == 0) {
		alert("在公開庫中找不到「" + _docuSkyObj.db + "」。");
		return;
	}

	// get data - 本地数据已经是完整的了，直接使用
	_allDocList = _docuSkyObj.docList;
	
	// 直接处理数据，不需要分页加载
	processDataFromDocusky();
}


/* ---
if not all documents are loaded, continue to load data
(本地版本跳过此步骤，因为所有数据已加载)
--- */
function  getNextPage(param, callback){
	// 本地数据已经是完整的了，直接调用回调
	if (typeof callback === "function") callback();
}


/* ---
process document list from Docusky
--- */
function processDataFromDocusky() {

	// get file information
	var dbName = getDBsrcFilename(_allDocList);
	var corpusNames = getCorpusNames(_allDocList);

	// process
	for (let i in corpusNames) buildCorpus(_allDocList, corpusNames[i], dbName);
	console.log(_dataset);

	// display
	displayAll();
}


// * * * * * * * * * * * * * * * * loading processing * * * * * * * * * * * * * * * * *


/* ---
put raw data into data structure in the system
INPUT: 1) array, raw data of documents list from docusky
       2) string, corpus name
       3) string, database name
--- */
function buildCorpus($docList, $corpusName, $dbName) {
	var documents = [];

	// scan all documents
	for (let i in $docList) {

		// check if access correct corpus data
		let corpusName = $docList[i].docInfo.corpus;
		if (corpusName !== $corpusName) continue;

		// put document into corpus
		let parsedDocument = parseDocument($docList[i].docInfo);
		documents.push(parsedDocument);
	}

	// new corpus
	_dataset.newCorpus($dbName, $corpusName, documents);
}

