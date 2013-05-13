# An awesome Sass-mixin for transitions

This mixin generates cross-browser-compatible `transition` output. Vendor-prefixes
all the things!

## The Mixin

	@mixin x-transition ($values) {
		-webkit-transition: $values;
		   -moz-transition: $values;
		     -o-transition: $values;
		        transition: $values;
	}

## Usage

### Inclusion in SCSS

	@include x-transition(<values>);

### Example

	.selector {
		@include x-transition(background 0.3s ease-in);
	}

#### Expected CSS output

	.selector {
		-webkit-transition: background 0.3s ease-in;
		   -moz-transition: background 0.3s ease-in;
		     -o-transition: background 0.3s ease-in;
		        transition: background 0.3s ease-in;
	}
