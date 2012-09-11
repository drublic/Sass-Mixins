# An awesome SASS-mixin for border-radius

This mixin generates cross-browser-compatible `border-radius` output.

## The Mixin

	@mixin x-border-radius ($values) {
		-webkit-border-radius: $values; // iOS Safari 3.2, Android 2.1
		        border-radius: $values;
	}

## Usage

### Inclusion in SCSS

	@include x-border-radius(<values>);

### Example

	.selector {
		@include x-border-radius(20px 10px);
	}

#### Expected CSS output

	.selector {
		-webkit-border-radius: 20px 10px;
		        border-radius: 20px 10px;
	}
