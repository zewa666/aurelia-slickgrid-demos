(window.webpackJsonp=window.webpackJsonp||[]).push([[35,47],{"examples/slickgrid/example4":function(e,t,i){"use strict";i.r(t),i.d(t,"Example4",(function(){return u}));var a=i("qQke"),r=i("1aCK"),n=i("aurelia-framework"),s=i("xiok"),l=i("aurelia-slickgrid"),o=function(e,t,i,a){var r,n=arguments.length,s=n<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,a);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(s=(n<3?r(s):n>3?r(t,i,s):r(t,i))||s);return n>3&&s&&Object.defineProperty(t,i,s),s},d=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};function c(e,t){return Math.floor(Math.random()*(t-e+1)+e)}var u=function(){function e(e,t){this.http=e,this.httpFetch=t,this.title="Example 4: Client Side Sort/Filter",this.subTitle='\n  Sort/Filter on client side only using SlickGrid DataView (<a href="https://github.com/ghiscoding/aurelia-slickgrid/wiki/Sorting" target="_blank">Wiki docs</a>)\n  <br/>\n  <ul class="small">\n    <li>Support multi-sort (by default), hold "Shift" key and click on the next column to sort.</li>\n    <li>All column types support the following operators: (>, >=, <, <=, <>, !=, =, ==, *)</li>\n    <ul>\n      <li>Example: >100 ... >=2001-01-01 ... >02/28/17</li>\n      <li><b>Note:</b> For filters to work properly (default is string), make sure to provide a FieldType (type is against the dataset, not the Formatter)</li>\n    </ul>\n    <li>Date Filters</li>\n    <ul>\n      <li>\n        FieldType of dateUtc/date (from dataset) can use an extra option of "filterSearchType" to let user filter more easily.\n        For example, in the "UTC Date" field below, you can type "&gt;02/28/2017", also when dealing with UTC you have to take the time difference in consideration.\n      </li>\n    </ul>\n    <li>On String filters, (*) can be used as startsWith (Hello* => matches "Hello Word") ... endsWith (*Doe => matches: "John Doe")</li>\n    <li>Custom Filter are now possible, "Description" column below, is a customized InputFilter with different placeholder. See <a href="https://github.com/ghiscoding/aurelia-slickgrid/wiki/Custom-Filter" target="_blank">Wiki - Custom Filter</a></li>\n  </ul>\n',this.defineGrid()}return e.prototype.attached=function(){this.dataset=this.mockData(1500)},e.prototype.detached=function(){this.saveCurrentGridState()},e.prototype.aureliaGridReady=function(e){this.aureliaGrid=e},e.prototype.defineGrid=function(){this.columnDefinitions=[{id:"title",name:"Title",field:"title",filterable:!0,sortable:!0,type:l.FieldType.string,minWidth:45,filter:{model:l.Filters.compoundInputText}},{id:"description",name:"Description",field:"description",filterable:!0,sortable:!0,minWidth:80,type:l.FieldType.string,filter:{model:new s.a,enableTrimWhiteSpace:!0}},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0,type:l.FieldType.number,exportCsvForceToKeepAsString:!0,minWidth:55,filterable:!0,filter:{model:l.Filters.multipleSelect,collectionAsync:this.httpFetch.fetch("assets/data/collection_500_numbers.json"),collectionFilterBy:[{property:"value",operator:l.OperatorType.notEqual,value:360},{property:"value",operator:l.OperatorType.notEqual,value:365}],collectionSortBy:{property:"value",sortDesc:!0,fieldType:l.FieldType.number},customStructure:{value:"value",label:"label",optionLabel:"value",labelSuffix:"text"},collectionOptions:{separatorBetweenTextLabels:" ",filterResultAfterEachPass:"chain"},filterOptions:{maxHeight:250,width:175,useSelectOptionLabelToHtml:!0}}},{id:"complete",name:"% Complete",field:"percentComplete",formatter:l.Formatters.percentCompleteBar,minWidth:70,type:l.FieldType.number,sortable:!0,filterable:!0,filter:{model:l.Filters.compoundInputNumber}},{id:"start",name:"Start",field:"start",formatter:l.Formatters.dateIso,sortable:!0,minWidth:75,exportWithFormatter:!1,type:l.FieldType.date,filterable:!0,filter:{model:l.Filters.compoundDate}},{id:"usDateShort",name:"US Date Short",field:"usDateShort",sortable:!0,minWidth:70,width:70,type:l.FieldType.dateUsShort,filterable:!0,filter:{model:l.Filters.compoundDate}},{id:"utcDate",name:"UTC Date",field:"utcDate",formatter:l.Formatters.dateTimeIsoAmPm,sortable:!0,minWidth:115,type:l.FieldType.dateUtc,outputType:l.FieldType.dateTimeIsoAmPm,filterable:!0,filter:{model:l.Filters.compoundDate,filterOptions:{minDate:"today"}}},{id:"effort-driven",name:"Effort Driven",field:"effortDriven.isEffort",minWidth:85,maxWidth:95,type:l.FieldType.boolean,sortable:!0,formatter:l.Formatters.multiple,params:{formatters:[l.Formatters.complexObject,l.Formatters.checkmark]},filterable:!0,filter:{collection:["","True","False"],model:l.Filters.singleSelect,filterOptions:{maxHeight:250}}}],this.gridOptions={autoResize:{containerId:"demo-container",sidePadding:10},enableExcelExport:!0,enableExcelCopyBuffer:!0,enableFiltering:!0,showCustomFooter:!0,presets:{filters:[{columnId:"duration",searchTerms:[10,98]},{columnId:"usDateShort",operator:"<",searchTerms:["4/20/25"]}],sorters:[{columnId:"duration",direction:"DESC"},{columnId:"complete",direction:"ASC"}]}}},e.prototype.mockData=function(e,t){void 0===t&&(t=0);for(var i=[],a=t;a<t+e;a++){var r=Math.round(100*Math.random()),n=c(2e3,2035),s=c(10,35),l=c(1,12),o=l<10?"0"+l:l,d=c(10,28),u=c(0,100),p=c(10,23),m=c(10,59),g=""+c(1,9)+c(10,99),f=a%3==0;i.push({id:a,title:"Task "+a,description:a%5?"desc "+a:null,duration:r,percentComplete:u,percentCompleteNumber:u,start:a%4?null:new Date(n,l,d),usDateShort:l+"/"+d+"/"+s,utcDate:n+"-"+o+"-"+d+"T"+p+":"+m+":"+m+"."+g+"Z",effortDriven:{isEffort:f,label:f?"Effort":"NoEffort"}})}return i},e.prototype.gridStateChanged=function(e){console.log("Client sample, Grid State changed:: ",e)},e.prototype.saveCurrentGridState=function(){console.log("Client sample, current Grid State:: ",this.aureliaGrid.gridStateService.getCurrentGridState())},e.prototype.setFiltersDynamically=function(){this.aureliaGrid.filterService.updateFilters([{columnId:"duration",searchTerms:[2,25,48,50]},{columnId:"complete",searchTerms:[95],operator:"<"},{columnId:"effort-driven",searchTerms:[!0]},{columnId:"start",operator:">=",searchTerms:["2001-02-28"]}])},e.prototype.setSortingDynamically=function(){this.aureliaGrid.sortService.updateSorting([{columnId:"duration",direction:"ASC"},{columnId:"start",direction:"DESC"}])},e.prototype.refreshMetrics=function(e,t){var i=this;t&&t.current>=0&&setTimeout((function(){i.metrics={startTime:new Date,endTime:new Date,itemCount:t&&t.current||0,totalItemCount:i.dataset.length||0}}))},e=o([Object(n.k)(),d("design:paramtypes",[r.a,a.a])],e)}()},"examples/slickgrid/example4.html":function(e,t){e.exports='<template> <h2>${title}</h2> <div class="subtitle" innerhtml.bind="subTitle"></div> <br/> <span if.bind="metrics"> <b>Metrics:</b> ${metrics.endTime | dateFormat: \'DD MMM, h:mm:ss a\'} | ${metrics.itemCount} of ${metrics.totalItemCount} items </span> <button class="btn btn-outline-secondary btn-sm" data-test="clear-filters" click.delegate="aureliaGrid.filterService.clearFilters()"> Clear Filters </button> <button class="btn btn-outline-secondary btn-sm" data-test="clear-sorting" click.delegate="aureliaGrid.sortService.clearSorting()"> Clear Sorting </button> <button class="btn btn-outline-secondary btn-sm" data-test="set-dynamic-filter" click.delegate="setFiltersDynamically()"> Set Filters Dynamically </button> <button class="btn btn-outline-secondary btn-sm" data-test="set-dynamic-sorting" click.delegate="setSortingDynamically()"> Set Sorting Dynamically </button> <aurelia-slickgrid grid-id="grid4" column-definitions.bind="columnDefinitions" grid-options.bind="gridOptions" dataset.bind="dataset" asg-on-aurelia-grid-created.delegate="aureliaGridReady($event.detail)" asg-on-grid-state-changed.delegate="gridStateChanged($event.detail)" sg-on-row-count-changed.delegate="refreshMetrics($event.detail.eventData, $event.detail.args)"> </aurelia-slickgrid> </template> '},"examples/slickgrid/example5":function(e,t,i){"use strict";i.r(t),function(e){i.d(t,"Example5",(function(){return d}));var a=i("aurelia-framework"),r=i("1aCK"),n=i("aurelia-slickgrid"),s=function(){return(s=Object.assign||function(e){for(var t,i=1,a=arguments.length;i<a;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},l=function(e,t,i,a){var r,n=arguments.length,s=n<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,a);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(s=(n<3?r(s):n>3?r(t,i,s):r(t,i))||s);return n>3&&s&&Object.defineProperty(t,i,s),s},o=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},d=function(){function t(e){this.http=e,this.title="Example 5: Grid with Backend OData Service",this.subTitle='\n    Use it when you need to support Pagination with a OData endpoint (for simple JSON, use a regular grid)<br/>\n    Take a look at the (<a href="https://github.com/ghiscoding/aurelia-slickgrid/wiki/OData" target="_blank">Wiki documentation</a>)\n    <br/>\n    <ul class="small">\n      <li>Only "Name" field is sortable for the demo (because we use JSON files), however "multiColumnSort: true" is also supported</li>\n      <li>This example also demos the Grid State feature, open the console log to see the changes</li>\n      <li>String column also support operator (>, >=, <, <=, <>, !=, =, ==, *)\n      <ul>\n        <li>The (*) can be used as startsWith (ex.: "abc*" => startsWith "abc") / endsWith (ex.: "*xyz" => endsWith "xyz")</li>\n        <li>The other operators can be used on column type number for example: ">=100" (greater than or equal to 100)</li>\n      </ul>\n      <li>OData Service could be replaced by other Service type in the future (GraphQL or whichever you provide)</li>\n      <li>You can also preload a grid with certain "presets" like Filters / Sorters / Pagination <a href="https://github.com/ghiscoding/aurelia-slickgrid/wiki/Grid-State-&-Preset" target="_blank">Wiki - Grid Preset</a>\n    </ul>\n  ',this.dataset=[],this.isCountEnabled=!0,this.odataVersion=2,this.odataQuery="",this.processing=!1,this.status={text:"",class:""},this.defineGrid()}return t.prototype.aureliaGridReady=function(e){this.aureliaGrid=e},t.prototype.defineGrid=function(){var e=this;this.columnDefinitions=[{id:"name",name:"Name",field:"name",sortable:!0,type:n.FieldType.string,filterable:!0,filter:{model:n.Filters.compoundInput}},{id:"gender",name:"Gender",field:"gender",filterable:!0,filter:{model:n.Filters.singleSelect,collection:[{value:"",label:""},{value:"male",label:"male"},{value:"female",label:"female"}]}},{id:"company",name:"Company",field:"company"}],this.gridOptions={enableAutoResize:!0,autoResize:{containerId:"demo-container",sidePadding:10},checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0},enableCellNavigation:!0,enableFiltering:!0,enableCheckboxSelector:!0,enableRowSelection:!0,enablePagination:!0,pagination:{pageSizes:[10,20,50,100,500],pageSize:20,totalItems:0},presets:{filters:[{columnId:"gender",searchTerms:["male"],operator:n.OperatorType.equal}],sorters:[{columnId:"name",direction:"asc"}],pagination:{pageNumber:2,pageSize:20}},backendServiceApi:{service:new n.GridOdataService,options:{enableCount:this.isCountEnabled,version:this.odataVersion},preProcess:function(){return e.displaySpinner(!0)},process:function(t){return e.getCustomerApiCall(t)},postProcess:function(t){e.metrics=t.metrics,e.displaySpinner(!1),e.getCustomerCallback(t)}}}},t.prototype.displaySpinner=function(e){this.processing=e,this.status=e?{text:"processing...",class:"alert alert-danger"}:{text:"done",class:"alert alert-success"}},t.prototype.getCustomerCallback=function(e){var t="totalRecordCount";this.isCountEnabled&&(t=4===this.odataVersion?"@odata.count":"odata.count"),this.gridOptions.pagination.totalItems=e[t],this.gridOptions=s({},this.gridOptions),this.metrics&&(this.metrics.totalItemCount=e[t]),this.dataset=e.items,this.odataQuery=e.query},t.prototype.getCustomerApiCall=function(e){return this.getCustomerDataApiMock(e)},t.prototype.getCustomerDataApiMock=function(t){var i=this;return new e((function(e,a){for(var r,n=t.toLowerCase().split("&"),s=0,l="",o=100,d={},c=0,u=n;c<u.length;c++){var p=u[c];if(p.includes("$top=")&&(r=+p.substring("$top=".length)),p.includes("$skip=")&&(s=+p.substring("$skip=".length)),p.includes("$orderby=")&&(l=p.substring("$orderby=".length)),p.includes("$filter=")){var m=p.substring("$filter=".length).replace("%20"," ");if(m.includes("contains")){var g=(f=m.match(/contains\(([a-zA-Z\/]+),\s?'(.*?)'/))[1].trim();d[g]={type:"substring",term:f[2].trim()}}if(m.includes("substringof")){g=(f=m.match(/substringof\('(.*?)',([a-zA-Z ]*)/))[2].trim();d[g]={type:"substring",term:f[1].trim()}}if(m.includes("eq")){var f=m.match(/([a-zA-Z ]*) eq '(.*?)'/);if(Array.isArray(f)){g=f[1].trim();d[g]={type:"equal",term:f[2].trim()}}}if(m.includes("startswith")){g=(f=m.match(/startswith\(([a-zA-Z ]*),\s?'(.*?)'/))[1].trim();d[g]={type:"starts",term:f[2].trim()}}if(m.includes("endswith")){g=(f=m.match(/endswith\(([a-zA-Z ]*),\s?'(.*?)'/))[1].trim();d[g]={type:"ends",term:f[2].trim()}}}}var b;switch(l.includes("asc")?"ASC":l.includes("desc")?"DESC":""){case"ASC":b="assets/data/customers_100_ASC.json";break;case"DESC":b="assets/data/customers_100_DESC.json";break;default:b="assets/data/customers_100.json"}i.http.createRequest(b).asGet().send().then((function(a){var n=a.content,l=s,c=n;if(d){var u=function(e){d.hasOwnProperty(e)&&(c=c.filter((function(t){var i=d[e].type,a=d[e].term,r=e;if(e&&-1!==e.indexOf(" ")){var n=e.split(" ");r=n[n.length-1]}var s=t[r];if(s)switch(i){case"equal":return s.toLowerCase()===a;case"ends":return s.toLowerCase().endsWith(a);case"starts":return s.toLowerCase().startsWith(a);case"substring":return s.toLowerCase().includes(a)}})))};for(var p in d)u(p);o=c.length}var m=c.slice(l,l+r);setTimeout((function(){var a,r="totalRecordCount";i.isCountEnabled&&(r=4===i.odataVersion?"@odata.count":"odata.count");var n=((a={items:m})[r]=o,a.query=t,a);e(n)}),150)}))}))},t.prototype.goToFirstPage=function(){this.aureliaGrid.paginationService.goToFirstPage()},t.prototype.goToLastPage=function(){this.aureliaGrid.paginationService.goToLastPage()},t.prototype.gridStateChanged=function(e){console.log("Client sample, Grid State changed:: ",e.change)},t.prototype.setFiltersDynamically=function(){this.aureliaGrid.filterService.updateFilters([{columnId:"name",searchTerms:["A"],operator:"a*"}])},t.prototype.setSortingDynamically=function(){this.aureliaGrid.sortService.updateSorting([{columnId:"name",direction:"DESC"}])},t.prototype.changeCountEnableFlag=function(){this.isCountEnabled=!this.isCountEnabled;var e=this.gridOptions.backendServiceApi.service;return e.updateOptions({enableCount:this.isCountEnabled}),e.clearFilters(),this.aureliaGrid.filterService.clearFilters(),!0},t.prototype.setOdataVersion=function(e){this.odataVersion=e;var t=this.gridOptions.backendServiceApi.service;return t.updateOptions({version:this.odataVersion}),t.clearFilters(),this.aureliaGrid.filterService.clearFilters(),!0},t=l([Object(a.k)(),o("design:paramtypes",[r.a])],t)}()}.call(this,i("CW7D"))},"examples/slickgrid/example5.html":function(e,t){e.exports='<template> <h2>${title}</h2> <div class="subtitle" innerhtml.bind="subTitle"></div> <div class="row"> <div class="col-sm-4"> <div class.bind="status.class" role="alert" data-test="status"> <strong>Status: </strong> ${status.text} <span hidden.bind="!processing"> <i class="fa fa-refresh fa-spin fa-lg fa-fw"></i> </span> </div> <button class="btn btn-outline-secondary btn-sm" data-test="set-dynamic-filter" click.delegate="setFiltersDynamically()"> Set Filters Dynamically </button> <button class="btn btn-outline-secondary btn-sm" data-test="set-dynamic-sorting" click.delegate="setSortingDynamically()"> Set Sorting Dynamically </button> <br> <span if.bind="metrics"> <b>Metrics:</b> ${metrics.endTime | dateFormat: \'DD MMM, h:mm:ss a\'} | ${metrics.executionTime}ms | ${metrics.totalItemCount} items </span> </div> <div class="col-sm-8"> <div class="alert alert-info" data-test="alert-odata-query"> <strong>OData Query:</strong> <span data-test="odata-query-result">${odataQuery}</span> </div> <label>OData Version: </label> <span data-test="radioVersion"> <label class="radio-inline control-label" for="radio2"> <input type="radio" name="inlineRadioOptions" data-test="version2" id="radio2" checked="checked" value.bind="2" click.delegate="setOdataVersion(2)"> 2 </label> <label class="radio-inline control-label" for="radio4"> <input type="radio" name="inlineRadioOptions" data-test="version4" id="radio4" value.bind="4" click.delegate="setOdataVersion(4)"> 4 </label> </span> <label class="checkbox-inline control-label" for="enableCount" style="margin-left:20px"> <input type="checkbox" id="enableCount" data-test="enable-count" checked.bind="isCountEnabled" click.delegate="changeCountEnableFlag()"> <span style="font-weight:700">Enable Count</span> (add to OData query) </label> </div> </div> <div class="row col-md-12"> <label>Programmatically go to first/last page:</label> <button class="btn btn-outline-secondary btn-xs" data-test="goto-first-page" click.delegate="goToFirstPage()"> <i class="fa fa-caret-left fa-lg"></i> </button> <button class="btn btn-outline-secondary btn-xs" data-test="goto-last-page" click.delegate="goToLastPage()"> <i class="fa fa-caret-right fa-lg"></i> </button> </div> <aurelia-slickgrid grid-id="grid5" column-definitions.bind="columnDefinitions" grid-options.bind="gridOptions" dataset.bind="dataset" asg-on-aurelia-grid-created.delegate="aureliaGridReady($event.detail)" asg-on-grid-state-changed.delegate="gridStateChanged($event.detail)"> </aurelia-slickgrid> </template> '},"examples/slickgrid/example6.html":function(e,t){e.exports='<template> <h2>${title}</h2> <div class="subtitle" innerhtml.bind="subTitle"></div> <div class="row"> <div class="col-sm-5"> <div class.bind="status.class" role="alert" data-test="status"> <strong>Status: </strong> ${status.text} <span hidden.bind="!processing"> <i class="fa fa-refresh fa-spin fa-lg fa-fw"></i> </span> </div> <div class="row col-md-12"> <button class="btn btn-outline-secondary btn-sm" data-test="clear-filters-sorting" click.delegate="clearAllFiltersAndSorts()" title="Clear all Filters & Sorts"> <i class="fa fa-filter text-danger"></i> Clear all Filter & Sorts </button> <button class="btn btn-outline-secondary btn-sm" data-test="set-dynamic-filter" click.delegate="setFiltersDynamically()"> Set Filters Dynamically </button> <button class="btn btn-outline-secondary btn-sm" data-test="set-dynamic-sorting" click.delegate="setSortingDynamically()"> Set Sorting Dynamically </button> </div> <div class="row col-md-12"> <button class="btn btn-outline-secondary btn-sm" click.delegate="switchLanguage()" data-test="language-button"> <i class="fa fa-language"></i> Switch Language </button> <b>Locale:</b> <span style="font-style:italic" data-test="selected-locale"> ${selectedLanguage + \'.json\'} </span> </div> <br/> <div if.bind="metrics" style="margin:10px 0"> <b>Metrics:</b> ${metrics.endTime | dateFormat: \'DD MMM, h:mm:ss a\'} | ${metrics.executionTime}ms | ${metrics.totalItemCount} items </div> <div class="row col-md-12" style="margin-bottom:5px"> <label>Programmatically go to first/last page:</label> <button class="btn btn-outline-secondary btn-xs" data-test="goto-first-page" click.delegate="goToFirstPage()"> <i class="fa fa-caret-left fa-lg"></i> </button> <button class="btn btn-outline-secondary btn-xs" data-test="goto-last-page" click.delegate="goToLastPage()"> <i class="fa fa-caret-right fa-lg"></i> </button> </div> </div> <div class="col-sm-7"> <div class="alert alert-info" data-test="alert-graphql-query"> <strong>GraphQL Query:</strong> <span data-test="graphql-query-result">${graphqlQuery}</span> </div> </div> </div> <hr/> <aurelia-slickgrid grid-id="grid6" column-definitions.bind="columnDefinitions" grid-options.bind="gridOptions" dataset.bind="dataset" grid-height="200" grid-width="900" asg-on-aurelia-grid-created.delegate="aureliaGridReady($event.detail)" asg-on-grid-state-changed.delegate="gridStateChanged($event.detail)"> </aurelia-slickgrid> </template> '}}]);
//# sourceMappingURL=app~f5283f73.7eaccc1df8fb6e69ef15.bundle.map