# An awesome Sass-mixin for linear gradients

This mixin generates cross-browser-compatible linear-gradients with a fallback
color.

## The Mixin

	@mixin x-linear-gradient($direction: "to bottom", $fallback: #ccc, $from: #ccc, $to: #aaa) {

		$old-direction: $direction;

		// New Syntax has to be evaluated to old one
		@if $direction == "to bottom" {
			$old-direction: "top";
		} @else if $direction == "to right" {
			$old-direction: "left";
		} @else if $direction == "to top" {
			$old-direction: "bottom";
		} @else if $direction == "to left" {
			$old-direction: "right";
		}

		// Provide a fallback-color
		background-color: $fallback;

		// Cross-browser linear-gradients
		background-image: -webkit-linear-gradient(unquote($old-direction), $from, $to);
		background-image:    -moz-linear-gradient(unquote($old-direction), $from, $to);
		background-image:     -ms-linear-gradient(unquote($old-direction), $from, $to);
		background-image:      -o-linear-gradient(unquote($old-direction), $from, $to);
		background-image:         linear-gradient(unquote($direction),     $from, $to);
	}


## Usage

### Inclusion in SCSS

	@include x-linear-gradient([<direction>], [<color fallback>], [<color start>], [<color end>]);

### Example

	.selector {
		@include x-linear-gradient("to bottom", #ccc, #ddd, #bbb);
	}

#### Expected CSS output

	.selector {
		background-color: #ccc;
		background-image: -webkit-linear-gradient(top, #ddd, #bbb);
		background-image:    -moz-linear-gradient(top, #ddd, #bbb);
		background-image:     -ms-linear-gradient(top, #ddd, #bbb);
		background-image:      -o-linear-gradient(top, #ddd, #bbb);
		background-image:         linear-gradient(to bottom, #ddd, #bbb);
	}

## Note

By default this linear-gradient-mixin encourages people to use the latest
CSS-syntax for gradients.
