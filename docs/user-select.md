# An awesome Sass-mixin for selecting content

The mixin disables selection of content of an element.

## The Mixin

	@mixin x-user-select($prop: none) {
		-webkit-user-select: $prop;
		   -moz-user-select: $prop;
		    -ms-user-select: $prop;
		        user-select: $prop;
	}

## Usage

### Inclusion in SCSS

	@include x-user-select;

### Example

	.selector {
		@include x-user-select;
	}

#### Expected CSS output

	.selector {
		-webkit-user-select: none;
		   -moz-user-select: none;
		    -ms-user-select: none;
		        user-select: none;
	}
