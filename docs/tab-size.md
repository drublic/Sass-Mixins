# An awesome Sass-mixin for CSS property `[tab-size](http://dev.w3.org/csswg/css-text/#tab-size1)`

This mixin generates cross-browser-compatible `tab-size` output. Sets default value to 4 which is most common for code.

## The Mixin

	@mixin x-tab-size ($value: 4) {
	-moz-tab-size: $value;
	  -o-tab-size: $value;
	     tab-size: $value;
	}

## Usage

### Inclusion in SCSS

	@include x-tab-size([ <integer> ]);

### Example

	.selector {
		@include x-tab-size(4);
	}

#### Expected CSS output

	.selector {
		-moz-tab-size: 4;
		  -o-tab-size: 4;
		     tab-size: 4;
	}
