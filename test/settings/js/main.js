var parameters =  new Array();
var settings_block = '<div class="block_settings_wrapper"><div id="block_settings" class="block_settings">\
		<section>\
			<p>Color scheme</p>\
			<div class="block_settings_previews">\
				<ul class="active_element" data-setting-name="color">\
					<li><a href="#" class="color_lightcyan current" data-setting-value="theme_lightcyan">Light cyan</a></li>\
					<li><a href="#" class="color_red" data-setting-value="theme_red">Red</a></li>\
					<li><a href="#" class="color_blue" data-setting-value="theme_blue">Blue</a></li>\
					<li><a href="#" class="color_orenge" data-setting-value="theme_orange">Orange</a></li>\
					<li><a href="#" class="color_navy" data-setting-value="theme_navy">Navy</a></li>\
					<li><a href="#" class="color_peach" data-setting-value="theme_peach">Peach</a></li>\
					<li><a href="#" class="color_yellow" data-setting-value="theme_yellow">Yellow</a></li>\
					<li><a href="#" class="color_cyan" data-setting-value="theme_cyan">Cyan</a></li>\
					<li><a href="#" class="color_pink" data-setting-value="theme_pink">Pink</a></li>\
					<li><a href="#" class="color_purple" data-setting-value="theme_purple">Purple</a></li>\
					<li><a href="#" class="color_green" data-setting-value="theme_green">Green</a></li>\
					<li><a href="#" class="color_magenta" data-setting-value="theme_magenta">Magenta</a></li>\
				</ul>\
			</div>\
		</section>\
		\
		<section>\
			<p>Layout</p>\
			<div class="block_settings_previews type_buttons">\
				<ul class="active_element" data-setting-name="layout">\
					<li><a href="#" class="current" data-setting-value="layout_wide">Wide</a></li>\
					<li><a href="#" class="" data-setting-value="layout_boxed">Boxed</a></li>\
				</ul>\
			</div>\
		</section>\
		\
		<section>\
			<p>Background patterns</p>\
			<div class="block_settings_previews type_bg">\
				<ul class="active_element" data-setting-name="background">\
					<li><a href="#" class="bg_1" data-setting-value="theme_bg_1">Background 1</a></li>\
					<li><a href="#" class="bg_2" data-setting-value="theme_bg_2">Background 2</a></li>\
					<li><a href="#" class="bg_3" data-setting-value="theme_bg_3">Background 3</a></li>\
					<li><a href="#" class="bg_4" data-setting-value="theme_bg_4">Background 4</a></li>\
					<li><a href="#" class="bg_5" data-setting-value="theme_bg_5">Background 5</a></li>\
					<li><a href="#" class="bg_6" data-setting-value="theme_bg_6">Background 6</a></li>\
					<li><a href="#" class="bg_7" data-setting-value="theme_bg_7">Background 7</a></li>\
					<li><a href="#" class="bg_8" data-setting-value="theme_bg_8">Background 8</a></li>\
					<li><a href="#" class="bg_9" data-setting-value="theme_bg_9">Background 9</a></li>\
					<li><a href="#" class="bg_10" data-setting-value="theme_bg_10">Background 10</a></li>\
					<li><a href="#" class="bg_11" data-setting-value="theme_bg_11">Background 11</a></li>\
					<li><a href="#" class="bg_12" data-setting-value="theme_bg_12">Background 12</a></li>\
				</ul>\
			</div>\
		</section>\
		\
        <a href="#" id="settings_close">Close</a>\
    </div></div>';
	
function init_close() {
	parameters.push('closed');
	jQuery('#settings_close').click(function(e) {
		jQuery('body').toggleClass('closed_settings');
		if(!jQuery.cookies.get('closed')) jQuery.cookies.set('closed', 'closed_settings');
		else jQuery.cookies.del('closed');
		
		e.preventDefault();
	});
}

function init_actions() {
	jQuery('ul.active_element').each(function() {
		var name = jQuery(this).attr('data-setting-name');
		parameters.push(name);
		
		jQuery(this).find('a').click(function(e) {
			var old_parameter = jQuery.cookies.get(name);
			var parameter = jQuery(this).attr('data-setting-value');
			jQuery('.active_element[data-setting-name=' + name + '] a').removeClass('current');
			jQuery(this).addClass('current');
			
			
			if(old_parameter) {
				jQuery('body').removeClass(old_parameter)
			}
			jQuery.cookies.set(name, parameter);
			jQuery('body').addClass(parameter);
			
			if(name == 'layout' && jQuery.cookies.get('background') == null) {
				jQuery('ul.active_element[data-setting-name="background"] a').first().trigger('click');
			}
			
			e.preventDefault();
		});
	});
}

function init_cookies() {
	for(key in parameters) {
		var name = parameters[key];
		var parameter = jQuery.cookies.get(name);
		if(parameter) {
			jQuery('.active_element[data-setting-name=' + name + '] a').removeClass('current');
			jQuery('body').addClass(parameter);
			jQuery('.active_element[data-setting-name=' + name + '] a[data-setting-value=' + parameter + ']').addClass('current');
		}
	}
}
function init_logos() {
	jQuery('#logo_top a').append(
		'<img src="images/logo_top_red.png" class="logo_red" alt="Enterprise" title="Enterprise">\
		<img src="images/logo_top_blue.png" class="logo_blue" alt="Enterprise" title="Enterprise">\
		<img src="images/logo_top_orange.png" class="logo_orange" alt="Enterprise" title="Enterprise">\
		<img src="images/logo_top_navy.png" class="logo_navy" alt="Enterprise" title="Enterprise">\
		<img src="images/logo_top_peach.png" class="logo_peach" alt="Enterprise" title="Enterprise">\
		<img src="images/logo_top_yellow.png" class="logo_yellow" alt="Enterprise" title="Enterprise">\
		<img src="images/logo_top_cyan.png" class="logo_cyan" alt="Enterprise" title="Enterprise">\
		<img src="images/logo_top_pink.png" class="logo_pink" alt="Enterprise" title="Enterprise">\
		<img src="images/logo_top_purple.png" class="logo_purple" alt="Enterprise" title="Enterprise">\
		<img src="images/logo_top_green.png" class="logo_green" alt="Enterprise" title="Enterprise">\
		<img src="images/logo_top_magenta.png" class="logo_magenta" alt="Enterprise" title="Enterprise">'
	);
}

jQuery(document).ready(function() {
	jQuery('body').prepend(settings_block);
	
	init_close();
	init_actions();
	init_cookies();
	init_logos();
});