# An awesome Sass-mixin for transforming an element

This mixin generates cross-browser-compatible `transform` output. Vendor-prefixes
all the things.

## The Mixin

	@mixin x-transform ($values) {
		-webkit-transform: $values;
		   -moz-transform: $values;
		     -o-transform: $values;
		    -ms-transform: $values;
		        transform: $values;
	}

## Usage

### Inclusion in SCSS

	@include x-transform (<values>);

### Example

	.selector {
		@include x-transform(rotate(1deg));
	}

#### Expected CSS output

	.selector {
		-webkit-transform: rotate(1deg);
		   -moz-transform: rotate(1deg);
		     -o-transform: rotate(1deg);
		    -ms-transform: rotate(1deg);
		        transform: rotate(1deg);
	}
