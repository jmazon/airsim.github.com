elixir.ectwoicon = {};
elixir.ectwoicon = (function() {
    var jQuery = elixir.jQuery;
    var $ = jQuery;
	var $elixir = jQuery.noConflict();
	function customECTwoIcon() {
		$elixir('#extraContent2-trigger i').addClass('icon-facetime-video');
	}
	
	$elixir(document).ready(function() {
		customECTwoIcon();
	});	
})(elixir.ectwoicon);