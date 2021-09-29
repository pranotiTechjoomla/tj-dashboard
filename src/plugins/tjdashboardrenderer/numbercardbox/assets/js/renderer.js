var TJDashboardNumbercardbox = {
	renderData: function(method,sourceData)
	{
		this[method](sourceData);
	},
	tjdashnumbercardbox: function(sourceData)
	{
		var renderData = JSON.parse(sourceData.data);
		var link = "#";
		var icon = renderData.data.icon;
		var title = renderData.data.title;
		if (sourceData.params!=undefined){
			var params = sourceData.params;
			if (params.link) {
				var link = params.link;
			}

			if (params.icon) {
				var icon = params.icon;
			}

			if (params.primary_text) {
				var title = params.primary_text;
			}
		}

		var constant = Joomla.JText._('COM_TJDASHBOARD_DASHBOARD_WIDGETS_VIEW_DETAILS');

		var content = "<div class=\"panel-body\"><div class=\"row\"><div class=\"col-xs-4 \"><i class=\"fa fa-4x "+icon+"\"></i></div><div class=\"col-xs-8 numbercardbox\">    <div class=\"huge number\">"+renderData.data.count+"</div>        <div>"+title+"</div>    </div> </div></div> <a href='"+link+"'>         <div class=\"panel-footer\">            <span class=\"pull-left\">"+ constant +"</span>            <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>            <div class=\"clearfix\"></div>         </div>      </a>";
		jQuery("#"+sourceData.element).html(content);
	}
}
