/* DATI E FUNZIONI PER DEMO NUR */
$(function() {

	var alberoArgomenti = [
	  {
		text: 'AGRICOLTURA',
		href: '#agricoltura',
		tags: ['500'],
		nodes: [
		  {
			text: 'Caccia e Pesca',
			href: '#caccia',
			tags: ['2'],
			nodes: [
			  {
				text: 'Fauna Selvatica',
				href: '#faunaSelvatica',
				tags: ['0']
			  },
			  {
				text: 'Pesca',
				href: '#pesca',
				tags: ['0']
			  }
			]
		  },
		  {
			text: 'Agriturismo',
			href: '#agriturismo',
			tags: ['0']
		  },
		  {
			text: 'Fitosanitario',
			href: '#firosanitario',
			tags: ['0']
		  },
		  {
			text: 'Funghi, Tartufi',
			href: '#funghiTartufi',
			tags: ['0']
		  },
		  {
			text: 'Imprenditoria agricola',
			href: '#imprenditoriaAgricola',
			tags: ['0']
		  },
		  {
			text: 'Produzione',
			href: '#produzione',
			tags: ['2'],
			nodes: [
			  {
				text: 'Produzione Animale',
				href: '#produzioneAnimale',
				tags: ['0']
			  },
			  {
				text: 'Produzione Vegetale',
				href: '#produzioneVegetale',
				tags: ['0']
			  }
			]
		  },
		  {
			text: 'Sviluppo rurale',
			href: '#sviluppoRurale',
			tags: ['0']
		  },
		  {
			text: 'Usi civici',
			href: '#usiCivici',
			tags: ['0']
		  },
		  {
			text: 'Vitivinicolo',
			href: '#vitivinicolo',
			tags: ['0']
		  },
		]
	  },	/* FINE AGRICOLTURA */
	  
	  {
		text: 'AMBIENTE E SISTEMI NATURALI',
		href: '#agricoltura',
		tags: ['500'],
		nodes: [
		  {
			text: 'AIA',
			href: '#aia',
			tags: ['0'],
		  },
		  {
			text: 'ARPA - Inquinamento Ambientale',
			href: '#arpa',
			tags: ['0'],
		  },
		  {
			text: 'Bonifiche',
			href: '#bonifiche',
			tags: ['0'],
		  },
		  {
			text: 'Natura e Foreste',
			href: '#naturaForeste',
			tags: ['0'],
		  },
		  {
			text: 'Parchi e Aree naturali protette',
			href: '#parchiAree',
			tags: ['0'],
		  },
		  {
			text: 'Tecnici acustica ambientale',
			href: '#acusticaAmbientale',
			tags: ['0'],
		  },
		]
	  }, 	/* FINE AMBIENTE E SISTEMI NATURALI */
	  
	  {
		text: 'ATTIVITA ISTITUZIONALI',
		href: '#attivitaIstituzionali',
		tags: ['500'],
		nodes: [
		  {
			text: 'Avvocatura',
			href: '#avvocatura',
			tags: ['0'],
		  },
		  {
			text: 'Bollettino',
			href: '#burLazio',
			tags: ['0'],
		  },
		  {
			text: 'Consiglio Regionale',
			href: '#consiglioRegionale',
			tags: ['0'],
		  },
		  {
			text: 'Delibere di Giunta',
			href: '#delibereGiunta',
			tags: ['0'],
		  },
		  {
			text: 'Identita digitale',
			href: '#identitaDigitale',
			tags: ['0'],
		  },
		  {
			text: 'Presidenza',
			href: '#presidenza',
			tags: ['0'],
		  },
		  {
			text: 'Richiesta Atti',
			href: '#richiestaAtti',
			tags: ['0'],
		  },
		  {
			text: 'Patrocinio',
			href: '#patrocinio',
			tags: ['0'],
		  },
		]
	  }, 	/* FINE ATTIVITA ISTITUZIONALI */

	  {
		text: 'ATTIVITA PRODUTTIVE',
		href: '#attivitaProduttive',
		tags: ['500'],
		nodes: [
		  {
			text: 'Calendario fieristico',
			href: '#calendarioFieristico',
			tags: ['0'],
		  },
		  {
			text: 'Acque minerali e termali',
			href: '#acqueMineraliTermali',
			tags: ['0'],
		  },
		  {
			text: 'Carburanti',
			href: '#carburanti',
			tags: ['0'],
		  },
		  {
			text: 'Cave e Miniere',
			href: '#caveMiniere',
			tags: ['0'],
		  },
		  {
			text: 'Commercio e Industria',
			href: '#commercioIndustria',
			tags: ['0'],
		  },
		  {
			text: 'Economia del mare',
			href: '#economiaMare',
			tags: ['0'],
		  },
		  {
			text: 'Green economy',
			href: '#greenEconomy',
			tags: ['0'],
		  },
		  {
			text: 'Posteggi e Ambulanti',
			href: '#posteggiAmbulanti',
			tags: ['0'],
		  },
		  {
			text: 'Microcrediuo',
			href: '#microcrediuo',
			tags: ['0'],
		  },
		  {
			text: 'Start Up',
			href: '#startup',
			tags: ['0'],
		  },
		  {
			text: 'SUAP',
			href: '#suap',
			tags: ['0'],
		  },
		]
	  }, 	/* FINE ATTIVITA PRODUTTIVE */
	  
	  {
		text: 'BILANCIO E RAGIONERIA',
		href: '#bilancioRagioneria',
		tags: ['500'],
		nodes: [
		  {
			text: 'Assestamento Finanza Regionale',
			href: '#assestamentoFinanza',
			tags: ['0'],
		  },
		  {
			text: 'Crediti Sanitari',
			href: '#creditiSanitari',
			tags: ['0'],
		  },
		  {
			text: 'Debito Sanitario',
			href: '#debitoSanitario',
			tags: ['0'],
		  },
		  {
			text: 'Fatturazione elettronica',
			href: '#fatturazioneElettr',
			tags: ['0'],
		  },
		  {
			text: 'Mandati di Pagamento',
			href: '#mandatiPagamento',
			tags: ['0'],
		  },
		  {
			text: 'Pagamento online',
			href: '#pagaOnline',
			tags: ['0'],
		  },
		]
	  }, 	/* FINE ATTIVITA PRODUTTIVE */

	  {
		text: 'CASA - EDILIZIA',
		href: '#bilancioRagioneria',
		tags: ['500'],
	  },

	  {
		text: 'CENTRALE ACQUISTI',
		href: '#bilancioRagioneria',
		tags: ['500'],
	  },

	  {
		text: 'CULTURA E POLITICHE GIOVANILI',
		href: '#politicheGiovanili',
		tags: ['500'],
	  },

	  {
		text: 'DEMANIO E PATRIMONIO',
		href: '#demanioPatromonio',
		tags: ['500'],
	  },

	  {
		text: 'FORMAZIONE',
		href: '#formazione',
		tags: ['500'],
	  },

	  {
		text: 'LAVORO',
		href: '#lavoro',
		tags: ['500'],
	  },

	  {
		text: 'LAVORI PUBBLICI E INFRASTRUTTURE',
		href: '#lavoriPubblici',
		tags: ['500'],
	  },

	  {
		text: 'LAZIOEUROPA',
		href: '#lazioEuropa',
		tags: ['500'],
	  },

	  {
		text: 'SCUOLA E UNIVERSITA',
		href: '#scuolaUniversita',
		tags: ['500'],
	  },

	  {
		text: 'PERSONALE',
		href: '#personale',
		tags: ['500'],
	  },

	  {
		text: 'PROTEZIONE CIVILE',
		href: '#protezioneCivile',
		tags: ['500'],
	  },

	  {
		text: 'RISORSE IDRICHE',
		href: '#risorseIdriche',
		tags: ['500'],
	  },
	  
	  {
		text: 'TERRITORIO E URBANISTICA',
		href: '#risorseIdriche',
		tags: ['500'],
	  },

	  {
		text: 'TRASPORTI',
		href: '#trasporti',
		tags: ['500'],
	  },

	  {
		text: 'TRIBUTI E CONTENZIOSO',
		href: '#tributiContenzioso',
		tags: ['500'],
	  },

	  {
		text: 'TURISMO',
		href: '#turismo',
		tags: ['500'],
	  },

	  {
		text: 'RIFIUTI',
		href: '#rifiuti',
		tags: ['500'],
	  },

	  {
		text: 'SANITA',
		href: '#sanita',
		tags: ['500'],
		nodes: [
			{
				text: 'ACCREDIT. STRUTTURE SANITARIE',
				href: '#sanita',
				tags: ['0'],
			},
			{
				text: 'MEDICI DI BASE/PEDIATRI',
				href: '#sanita',
				tags: ['0'],
			},
			{
				text: 'ANAGRAFE CANINA',
				href: '#sanita',
				tags: ['0'],
			},
			{
				text: 'ASL',
				href: '#asl',
				tags: ['0'],
			},
			{
				text: 'CASE DELLA SALUTE',
				href: '#sanita',
				tags: ['0'],
			},
			{
				text: 'CITTADINI STRANIERI',
				href: '#sanita',
				tags: ['0'],
			},
			{
				text: 'CONCORSO PER MEDICINA GENERALE',
				href: '#sanita',
				tags: ['0'],
			},
			{
				text: 'CREDITI SANITARI',
				href: '#sanita',
				tags: ['0'],
			},
			{
				text: 'ELENCO STRUTTURE',
				href: '#sanita',
				tags: ['0'],
			},
			{
				text: 'ESENZIONI TICKET',
				href: '#sanita',
				tags: ['0'],
			},
			{
				text: 'FARMACI',
				href: '#sanita',
				tags: ['0'],
			},
			{
				text: 'FASCICOLO SANITARIO ELETTRONICO',
				href: '#fse',
				tags: ['0'],
			},
			{
				text: 'GRADUATORIE - CONCORSI',
				href: '#sanita',
				tags: ['0'],
			},
			{
				text: 'HACCP',
				href: '#sanita',
				tags: ['0'],
			},
			{
				text: 'ISCRIZIONE SALUTE LAZIO',
				href: '#sanita',
				tags: ['0'],
			},
			{
				text: 'LEGGE 210/92',
				href: '#sanita',
				tags: ['0'],
			},
			{
				text: 'LISTE DI ATTESA',
				href: '#sanita',
				tags: ['0'],
			},
			{
				text: 'MEDICINA LEGALE',
				href: '#sanita',
				tags: ['0'],
			},
			{
				text: 'MOBILITA INTERNA',
				href: '#sanita',
				tags: ['0'],
			},
			{
				text: 'NORMATIVA',
				href: '#sanita',
				tags: ['0'],
			},
			{
				text: 'PAGA ONLINE',
				href: '#sanita',
				tags: ['0'],
			},
			{
				text: 'PIANO TERAPEUTICO',
				href: '#sanita',
				tags: ['0'],
			},
			{
				text: 'PROTESI E AUSILI',
				href: '#sanita',
				tags: ['0'],
			},
			{
				text: 'RECUP',
				href: '#sanita',
				tags: ['0'],
			},
			{
				text: 'REFERTI DI LABORATORIO',
				href: '#sanita',
				tags: ['0'],
			},
			{
				text: 'REFERTI RADIOLOGICI',
				href: '#sanita',
				tags: ['0'],
			},
			{
				text: 'RICETTA DIGITALE',
				href: '#sanita',
				tags: ['0'],
			},
			{
				text: 'RSA',
				href: '#sanita',
				tags: ['0'],
			},

			{
				text: 'SCELTA MEDICO DI BASE, PEDIATRA',
				href: '#sanita',
				tags: ['0'],
			},
			{
				text: 'SCREENING PREVENZIONE',
				href: '#sanita',
				tags: ['0'],
			},
			{
				text: 'SERVIZI ONLINE',
				href: '#sanita',
				tags: ['0'],
			},

			{
				text: 'STRUTTURE OSPEDALIERE',
				href: '#sanita',
				tags: ['0'],
			},
			{
				text: 'TESSERA SANITARIA',
				href: '#sanita',
				tags: ['0'],
			},
			{
				text: 'TICKET',
				href: '#sanita',
				tags: ['0'],
			},
			{
				text: 'VACCINAZIONI',
				href: '#sanita',
				tags: ['0'],
			},
		]
	  },	/* FINE SANITA */

	  {
		text: 'SISMA',
		href: '#sisma',
		tags: ['500'],
	  },

	  {
		text: 'SOCIALE E TERZO SETTORE',
		href: '#terzoSettore',
		tags: ['500'],
	  },
	  
	  {
		text: 'VIGILANZA E CONTROLLO',
		href: '#vigilanzaControllo',
		tags: ['500'],
	  },
	 
	]; /* fine albero NUR */


	var initSelectableTree = function() {
	  return $('#treeview-selectable').treeview({
		data: alberoArgomenti,
		levels: 1,
		multiSelect: $('#chk-select-multi').is(':checked'),
		onNodeSelected: function(event, node) {
		  $('#selectable-output').prepend('<p>' + node.text + ' was selected</p>');
		},
		onNodeUnselected: function (event, node) {
		  $('#selectable-output').prepend('<p>' + node.text + ' was unselected</p>');
		}
	  });
	};
	var $selectableTree = initSelectableTree();

	var findSelectableNodes = function() {
	  return $selectableTree.treeview('search', [ $('#input-select-node').val(), 
		  {	ignoreCase: true, exactMatch: false } ]);
	};
	var selectableNodes = findSelectableNodes();

	$('#chk-select-multi:checkbox').on('change', function () {
	  console.log('multi-select change');
	  $selectableTree = initSelectableTree();
	  selectableNodes = findSelectableNodes();          
	});

	// Select/unselect/toggle nodes
	$('#input-select-node').on('keyup', function (e) {
	  selectableNodes = findSelectableNodes();
	  $('.select-node').prop('disabled', !(selectableNodes.length >= 1));
	});
	
	/* expand all the tree */
	$('#btn-expand-all').on('click', function (e) {
	  $selectableTree.treeview('expandAll', { levels: 99, silent: true });
	});
	
	/* reset and collapse the tree */
	$('#btn-reset-all').on('click', function (e) {
	  $selectableTree.treeview('clearSearch');
	  initSelectableTree();
	  $('#input-select-node').val('');
	});

});
