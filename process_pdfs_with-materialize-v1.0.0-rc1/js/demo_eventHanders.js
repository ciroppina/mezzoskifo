/*******************************************/
/* checks HTML5 support at page-load time */
if (window.File && window.FileReader && window.FileList && window.Blob) {
	console.log("0. HTML5 File API supported !");
} else {
	alert("The File APIs are not fully supported in this browser.");
}
/* initialize modals */
document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.modal');
	var options = {};
	var instances = M.Modal.init(elems, options);
	//debug: console.log('\n modals intialized !!! \n');
});

/* THIS IS THE MAIN function WHERE THE FILE TO UPLOAD/VISUALIZE GETS READ */
/* changed 'fileUpload input' handler */
function startRead(evt) {
    var file = document.getElementById('aFile').files[0];
    if (file) {
        console.log("1. HAS CHANGED !\nFile Name: " + file.name + "\n" + "Last Modified Date: " + file.lastModified );
    } else {
		alert("The selected File is null or undefined !");
		return;
	}
	
	//Reader:
	var reader = new FileReader();

	// onload handler
	reader.onload = function (evt) {
		console.log("1.1 evt: " + evt);
		var arrayBuffer = reader.result;
		console.log("1.2 reader.result size: " + arrayBuffer.byteLength);
		console.log("1.3 evt.target.result size: " + evt.target.result.byteLength);
		if (arrayBuffer.byteLength > 0) {
		  
		  //thanks-to:  https://stackoverflow.com/questions/17344636/preview-doc-docx-pdf-files-before-uploading-to-server
		  var url = URL.createObjectURL(file);
		
		  //var newTag = '<img style="max-width:300px;" src="' +arrayBuffer +'" alt="my PDF content" />';
		  var newTag='<object id="pdfviewer" data="' +url +'" type="application/pdf" width="100%" height="100%">'
					+'<p>Alternative text - include a link <a href="' +url +'">' +file.name +'</a></p>'
					+'</object>';
          console.log("1.4 newTag: " + newTag);
		  
          document.getElementById("binaryContent").innerHTML = newTag;
          console.log("Binary Content successfully loaded");
		  
		  /* QUI popolare i campi del form di destra */
		  fillFields(file.name);
		
		  /* estrazione testo PDf con pdf.js */
		  extract(file.name);
		  
		} else
		  document.getElementById("editor").value = evt.target.result;
	};
	
	// onerror handler
	reader.onerror = function (evt) {
		alert("An error ocurred reading the file", evt);
	};
	
	//reading texts, only:
	if (   file.type.match('text.*')  
		|| file.type.match('.*json.*') 
		|| file.type.match('.*htm.*') 
		// || file.type.match('.*xml.*') // this intercepts all open-document formats
		|| file.type.match('.*java.*') 
		|| file.type.match('.*css.*') 				// Requisiti_CB9900015309SSS01_SASC_SSS_ANX_7_sublotto_7_2.xlsx
		|| file.type.match('.*less.*') 
		|| file.type.match('.*sass.*') 
		|| file.name.match('.*log.*') 
		|| file.name.match('.*md') 
		|| file.name.match('.*prop.*') 
		|| file.name.match('.*config.*') 
		|| file.name.match('.*cfg.*') 
		|| file.name.match('.*txt') 
		|| file.name.match('.*xml') 
		|| file.name.match('.*cmd') 
		|| file.name.match('.*bat') 
		|| file.name.match('.*ssh') 
	) {
		reader.readAsText(file, "UTF-8");
		document.getElementById("editor").style.display = "block";
		document.getElementById("binaryContent").style.display = "none";		
	}
	//reading pdf, only:
	else if (file.type.match('.*pdf.*') ) {
		reader.readAsArrayBuffer(file);	
		document.getElementById("editor").style.display = "none";
		document.getElementById("binaryContent").style.display = "block";		
	}
	//avoiding others:
	else {
		document.getElementById("editor").value 
			= "Il formato del documento non sembra un testo, \ntype: " + file.type;
		document.getElementById("editor").style.display = "block";
		document.getElementById("binaryContent").style.display = "none";		
	}
}

/* wait a little - thanks-to:
   https://stackoverflow.com/questions/14226803/wait-5-seconds-before-executing-next-line */
function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

/* valori statici */
function fillFields(filename) {
	
	//when: QAria.pdf
	if (filename.match('.*QAria.pdf.*') ) {
		wait(4000);
		
		document.getElementById("titolo").value = filename;
		document.getElementById("titolo").style.color = '#ef9004';
		document.getElementById("titoloLabel").style.transform = 'translateY(-12px)';
		
		document.getElementById("oggetto").value
			= 'Presa d\'atto del documento tecnico "Analisi e Valutazione Qualità dell\'Aria nel periodo 2009-2016".';
		document.getElementById("oggetto").style.color = '#ef9004';
		document.getElementById("oggettoLabel").style.transform = 'translateY(-12px)';
		
		document.getElementById("dataDoc").value = '28 marzo 2018';
		document.getElementById("dataDoc").style.color = '#ef9004';
		document.getElementById("dataLabel").style.transform = 'translateY(-12px)';
		
		document.getElementById("note").value 
			= '10/04/2018 - BOLLETTINO UFFICIALE DELLA REGIONE LAZIO - N. 29 - Supplemento n. 1';
		document.getElementById("note").style.color = '#ef9004';
		document.getElementById("noteLabel").style.transform = 'translateY(-12px)';
	}
	
	//when: Sommelier.pdf
	if (filename.match('.*Sommelier.pdf.*') ) {
		wait(4000);
		
		document.getElementById("titolo").value = filename + ' - Atti dirigenziali di Gestione';
		document.getElementById("titolo").style.color = '#ef9004';
		document.getElementById("titoloLabel").style.transform = 'translateY(-12px)';
		
		document.getElementById("oggetto").value
			= 'D.M. 11 novembre 2011 e D.G.R. n. 130 del 30/03/2012: "Elenco regionale dei tecnici ed esperti'
			+ 'degustatori di vini DOCG e DOC ricadenti nel territorio della Regione Lazio".'
			+ 'Aggiornamento dell\'elenco regionale di iscrizione dei tecnici esperti con il nominativo: XXXXXX XXXXXX';
		document.getElementById("oggetto").style.color = '#ef9004';
		document.getElementById("oggettoLabel").style.transform = 'translateY(-12px)';
		
		document.getElementById("dataDoc").value = '29 marzo 2018';
		document.getElementById("dataDoc").style.color = '#ef9004';
		document.getElementById("dataLabel").style.transform = 'translateY(-12px)';
		
		document.getElementById("note").value 
			= '10/04/2018 - BOLLETTINO UFFICIALE DELLA REGIONE LAZIO - N. 29 - Supplemento n. 1'
			+ ' - Determinazione 29 marzo 2018, n. G04049';
		document.getElementById("note").style.color = '#ef9004';
		document.getElementById("noteLabel").style.transform = 'translateY(-12px)';
	}

	//when: SWI.pdf
	if (filename.match('.*SWI.pdf.*') ) {
		wait(4000);
		
		document.getElementById("titolo").value = filename + ' - Determinazione 28 marzo 2018, n. G03902';
		document.getElementById("titolo").style.color = '#ef9004';
		document.getElementById("titoloLabel").style.transform = 'translateY(-12px)';
		
		document.getElementById("oggetto").value
			= 'D.lgs. n. 152/2006, art. 208, comma n. 15 – D.G.R. n. 864/2014 – Rinnovo autorizzazione,'
			+ ' rilasciata in via definitiva con Determinazione n. A1201 del 02.04.2008, a favore della'
			+ ' Società Deme Environmental Contractors N.V. (D.E.C.), per l’esercizio di un impianto'
			+ ' mobile per il trattamento di terreni e di sedimenti contaminati';
		document.getElementById("oggetto").style.color = '#ef9004';
		document.getElementById("oggettoLabel").style.transform = 'translateY(-12px)';
		
		document.getElementById("dataDoc").value = '28 marzo 2018';
		document.getElementById("dataDoc").style.color = '#ef9004';
		document.getElementById("dataLabel").style.transform = 'translateY(-12px)';
		
		document.getElementById("note").value 
			= '10/04/2018 - BOLLETTINO UFFICIALE DELLA REGIONE LAZIO - N. 29 - Supplemento n. 1'
			+ ' - DIREZIONE POLITICHE AMBIENTALI E CICLO DEI RIFIUTI, Atti dirigenziali di Gestione';
		document.getElementById("note").style.color = '#ef9004';
		document.getElementById("noteLabel").style.transform = 'translateY(-12px)';
	}
	/* fonte field*/
	document.getElementById("fonte").value = 'BOLLETTINO UFFICIALE DELLA REGIONE LAZIO';
	document.getElementById("fonte").style.color = '#ef9004';
	document.getElementById("fonteLabel").style.transform = 'translateY(-12px)';

	/* resizes all textareas, with the current content */
	autosize(document.querySelectorAll('textarea'));
}

var extractedText = '';
/* thanls-to: https://ourcodeworld.com/articles/read/405/how-to-convert-pdf-to-text-extract-text-from-pdf-with-javascript */
function extract(filename) {
	PDFJS.workerSrc = 'js/lib/pdfjs/pdf.worker.js';
	console.log('EXTRACT>>> PDFJS.workerSrc is null? ' + (PDFJS.workerSrc == null) )
	PDF_URL = 'docs/' + filename;
	console.log('EXTRACT>>> filepath to extract: ' + PDF_URL);
	
	PDFJS.getDocument(PDF_URL).then(function (PDFDocumentInstance) { 
		// Use the PDFDocumentInstance To extract the text
		var totalPages = PDFDocumentInstance.pdfInfo.numPages;
		//var pageNumber = 1;
		var pdfDocument = PDFDocumentInstance
		// Create an array that will contain our promises 
		var pagesPromises = [];
		for (var i = 0; i < totalPages; i++) {
			// Required to prevent that i is always the total of pages
			(function (pageNumber) {
				// Store the promise of getPageText that returns the text of a page
				pagesPromises.push(getPageText(pageNumber, pdfDocument));
			})(i + 1);
		}
		// Extract the all the text from all the promises
		// Execute all the promises
		Promise.all(pagesPromises).then(function (pagesText) {
			// 'pagesText' accums text of all the pages of the Pdf
			// e.g ["Text content page 1", "Text content page 2", "Text content page 3" ... ]
			extractedText =  pagesText.join(); // reduces a string-array to an unique string
			document.getElementById("modalContent").value = extractedText.substring(0,1000) +'\n...';
			autosize(document.getElementById("modalContent"));
		});
		/* riepilogo campi form */
		var riepilogo = 'TITOLO: \n' +document.getElementById("titolo").value +'\n\n'
					  + 'FONTE: \n' +document.getElementById("fonte").value +'\n\n'
					  + 'DATA DOC.TO: \n' +document.getElementById("dataDoc").value +'\n\n'
					  + 'OGGETTO: \n' +document.getElementById("oggetto").value +'\n\n'
					  + 'NOTE: \n' +document.getElementById("note").value +'\n\n'
		; 
		document.getElementById("modalCollect").value = riepilogo;
		
	}, function (reason) {
		// PDF loading error
		console.error(reason);
		document.getElementById("modalContent").value = reason;
	});
}

/**
 * Retrieves the text of a specif page within a PDF Document obtained through pdf.js 
 * 
 * @param {Integer} pageNum Specifies the number of the page 
 * @param {PDFDocument} PDFDocumentInstance The PDF document obtained 
 **/
function getPageText(pageNum, PDFDocumentInstance) {
    // Return a Promise that is solved once the text of the page is retrieven
    return new Promise(function (resolve, reject) {
        PDFDocumentInstance.getPage(pageNum).then(function (pdfPage) {
            // The main trick to obtain the text of the PDF page, use the getTextContent method
            pdfPage.getTextContent().then(function (textContent) {
                var textItems = textContent.items;
                var finalString = "";

                // Concatenate the string of the item to the final string
                for (var i = 0; i < textItems.length; i++) {
                    var item = textItems[i];

                    finalString += item.str + " ";
                }

                // Solve promise with the text retrieven from the page
                resolve(finalString);
            });
        });
    });
}

function submitted(filename) {
	//debug: alert('submit pressed, filename: ' + filename);
	/* riepilogo campi form */
	var riepilogo = 'TITOLO: \n' +document.getElementById("titolo").value +'\n\n'
				  + 'FONTE: \n' +document.getElementById("fonte").value +'\n\n'
				  + 'DATA DOC.TO: \n' +document.getElementById("dataDoc").value +'\n\n'
				  + 'OGGETTO: \n' +document.getElementById("oggetto").value +'\n\n'
				  + 'NOTE: \n' +document.getElementById("note").value +'\n\n'
	; 
	document.getElementById("modalCollect").value = riepilogo;
}

/*REMOVED: // 'dragover' handling
function startReadWhenDrag(event) {
	console.log("2. startReadWhenDrag target.id: " + event.target.id);
	var file =  document.getElementById('aFile').files[0];
    if (file) {
		console.log("3. Object file isNull?: " + (file==null) );
		document.getElementById("draghere").style.border = "4px dotted purple";
	}
    event.stopPropagation();
    event.preventDefault();
}

var dropingDiv = document.getElementById('draghere');
dropingDiv.addEventListener("dragover", startReadWhenDrag, false);
*/
