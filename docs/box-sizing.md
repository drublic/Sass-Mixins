# An awesome Sass-mixin for box-sizing

This mixin generates cross-browser-compatible `box-sizing` output.

## The Mixin

	@mixin x-box-sizing ($type: border-box) {
		-webkit-box-sizing: $type; // Safari <= 5.0, Chrome <= 9.0, iOS Safari 3.2 - 4.3 and Android 2.1 - 3.0
		   -moz-box-sizing: $type; // FF 2.0+
		        box-sizing: $type; // IE 8, Opera 9.5+
	}

## Usage

### Inclusion in SCSS

	@include x-box-sizing([ <type> ]);

### Example

	.selector {
		@include x-box-sizing;
	}

#### Expected CSS output

	.selector {
		-webkit-box-sizing: border-box;
		   -moz-box-sizing: border-box;
		        box-sizing: border-box;
	}
