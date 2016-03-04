game.resources = [
	/**
	 * Graphics.
	 */
	// the main player spritesheet
	{name: "gripe_run_right",     type:"image",	src: "data/img/sprite/gripe_run_right.png"},
	{name: "bart",				  type:"image", src: "data/img/sprite/bart.png"},
	// the spinning coin spritesheet
	{name: "spinning_coin_gold",  type:"image",	src: "data/img/sprite/spinning_coin_gold.png"},
	// our enemty entity
	{name: "wheelie_right",       type:"image",	src: "data/img/sprite/wheelie_right.png"},
	// game font
	{name: "32x32_font",          type:"image",	src: "data/img/font/32x32_font.png"},
	// title screen
	{name: "title_screen",        type:"image",	src: "data/img/gui/title_screen.png"},
	// the parallax background
	{name: "area01_bkg0",         type:"image",	src: "data/img/area01_bkg0.png"},
	{name: "area01_bkg1",         type:"image",	src: "data/img/area01_bkg1.png"},
	// our level tileset
	{name: "area01_level_tiles",  type:"image",	src: "data/img/map/area01_level_tiles.png"},
	{name: "mario_general_tiles",		  type:"image", src: "data/img/map/mario_general_tiles.png"},
	{name: "mario_land",	      type:"image",	src: "data/img/map/mario_land.png"},
	{name: "castle_tileset_part1" type:"image",	src: "data/img/map/castle_tileset_part1.png"},
	{name: "castle_tileset_part2" type:"image",	src: "data/img/map/castle_tileset_part2.png"},
	{name: "castle_tileset_part3" type:"image",	src: "data/img/map/castle_tileset_part3.png"},

	{name: "wolverine",	      type:"image",	src: "data/img/sprite/wolverine.png"},
	{name: "battletoad",	      type:"image",	src: "data/img/sprite/battletoad.png"},
	{name: "earthworm_jim",	      type:"image",	src: "data/img/sprite/earthworm_jim.png"},

	/* 
	 * Maps. 
 	 */
	{name: "area01",              type: "tmx",	src: "data/map/area01.tmx"},
	{name: "area02",              type: "tmx",	src: "data/map/area02.tmx"},
	{name: "area03", 	      type: "tmx",  src: "data/map/area03.tmx"},

	/* 
	 * Background music. 
	 */	
	//{name: "dst-inertexponent", type: "audio", src: "data/bgm/"},
	{name: "NewJunkCity", type: "audio", src: "data/bgm/"},
	
	/* 
	 * Sound effects. 
	 */
	{name: "cling", type: "audio", src: "data/sfx/"},
	{name: "stomp", type: "audio", src: "data/sfx/"},
	{name: "jump",  type: "audio", src: "data/sfx/"}
];
