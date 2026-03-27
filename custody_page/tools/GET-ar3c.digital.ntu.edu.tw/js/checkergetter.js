/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
This file defined all checker (return a boolean value) and 
getter (get some information).
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */


// * * * * * * * * * * * * * * * * checker * * * * * * * * * * * * * * * * *


/* ---
check if specific item is in the list
INPUT: 1) single list element
       2) target list
OUTPUT: boolean, in list = true, not in list = false
--- */
function itemInList($item, $list) {
	if ($list.indexOf($item) === -1) return false;
	else return true;
}


// * * * * * * * * * * * * * * * * getter * * * * * * * * * * * * * * * * * * * * 


/* ---
extract source file name of database from document list
INPUT: array, documents object
OUTPUT: string, database filename
--- */
function getDBsrcFilename($docList) {
	return $docList[0].docInfo.srcFilename;
}


/* ---
extract all corpus names from document list
INPUT: array, documents object
OUTPUT: array, corpus names
--- */
function getCorpusNames($docList) {
	var corpusNames = [];

	// scan all document
	for (let i in $docList) {
		let corpusName = $docList[i].docInfo.corpus;
		if (!itemInList(corpusName, corpusNames)) corpusNames.push(corpusName);
	}

	return corpusNames;
}


/* ---
extract all anchor names from single document content
INPUT: string, document xml content
OUTPUT: array, anchor names / align types
--- */
function getAnchorNames($docuContent) {
	var i = 0;
	var anchorNames = [];

	while (i < $docuContent.length) {

		// find tag
		let tagStartPos = $docuContent.indexOf('<AlignBegin', i);
		if (tagStartPos === -1) break;

		// find anchor type
		let tagEndPos = $docuContent.indexOf('>', tagStartPos);
		let tagString = $docuContent.substring(tagStartPos + 1, tagEndPos);
		let attrStartPos = tagString.indexOf('Type');
		if (attrStartPos === -1) {
			alert("[Error] XML 格式錯誤，AlignBegin tag 中未發現 Type 屬性。");
			i = tagEndPos + 1;
			continue;
		}

		// extract anchor type
		let attrEndPos = tagString.indexOf('\"', attrStartPos + 6);
		let attrValue = tagString.substring(attrStartPos + 6, attrEndPos);

		// push into list
		if (!itemInList(attrValue, anchorNames)) anchorNames.push(attrValue);
		i = tagEndPos + 1;
	}

	return anchorNames;
}


/* ---
return first corpus name in dataset
INPUT: none, access through global variable
OUTPUT: string, corpus name
--- */
function getFirstCorpus() {
	for (let corpusName in _dataset) {
		if (typeof _dataset[corpusName] !== 'object') continue;
		return corpusName;
	}
	return 'error';
}


/* ---
give unique key value and get correspond refid
INPUT: string, key value
OUTPUT: string, refid
--- */
function getRefIdFromKey($key) {

	// get target corpus
	var corpusName = _para['corpus'];
	var anchorName = _para['aligntype'];

	// find target
	for (let doc in _dataset[corpusName]) {
		let anchors = _dataset[corpusName][doc][anchorName];
		let blocks = (anchors !== undefined) ?anchors :_dataset[corpusName][doc]['FullText'];

		for (let i in blocks) {
			if (blocks[i].tagInfo.Key === $key) return blocks[i].tagInfo.RefId;
		}
	}

	// don't find target
	return 'error';
}


/* ---
get corpus No. of 'isShow = true'
INPUT: none, access through global variable
OUTPUT: int, corpus No. of 'isShow = true'
--- */
function getShowedCorpusNum() {
	var num = 0;
	for (corpusName in _dataset) {
		if (typeof _dataset[corpusName] !== 'object') continue;
		if (_dataset[corpusName].isShow) num++;
	}
	return num;
}

