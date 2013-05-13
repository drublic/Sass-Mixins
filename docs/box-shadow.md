# An awesome Sass-mixin for box-shadow

This mixin generates cross-browser-compatible `box-shadow` output.

## The Mixin

	@mixin x-box-shadow ($values) {
		-webkit-box-shadow: $values; // iOS Safari 3.2 - 4.3, Android 2.1+
		        box-shadow: $values;
	}

## Usage

### Inclusion in SCSS

	@include x-box-shadow(<values>);

### Example

	.selector {
		@include x-box-shadow(5px 5px 10px 5px #aaa);
	}

#### Expected CSS output

	.selector {
		-webkit-box-shadow: 5px 5px 10px 5px #aaa;
		        box-shadow: 5px 5px 10px 5px #aaa;
	}
