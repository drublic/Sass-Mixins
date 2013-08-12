# Some Sass mixins for your needs

Take what you need!

### This repository has some Sass-Mixins for you:

* [animation](partials/_animation.scss)
* [border-radius](partials/_border-radius.scss)
* [box-shadow](partials/_box-shadow.scss)
* [box-sizing](partials/_box-sizing.scss)
* [linear-gradient](partials/_linear-gradient.scss)
* [multiple-backgrounds](partials/_multiple-backgrounds.scss)
* [multiple-colored-gradient](partials/_multiple-colored-gradient.scss)
* [rem](partials/_rem.scss)
* [transform](partials/_transform.scss)
* [transition](partials/_transition.scss)
* [tab-size](partials/_tab-size.scss)
* [user-select](partials/_user-select.scss)

Documentation on how to use each of these can be found in the partials.

### General Usage

In general you should include the file `mixins.scss` in `build` into your
project and use the mixins as suggested in the docs for each mixin.

## Contribute

Please [file an issue](issues) if you think something could be improved. Please
submit Pull Requests when ever possible.

## Up the road

* radial-gradient
* Mixin that generates grids


## Changelog

### HEAD

* Add docs in mixins

### 0.3.0 - 19.05.2013
* Add mixin for responsive breakpoints
* Add mixin for animations
* Remove -moz-transform since is not needed anymore
* Add mixin for user-select

### 0.2.2 - 11.05.2013
* Allow non-number values in rem mixin
* Fix double dashes in the prefixed gradient function of multiple backgrounds

### 0.2.1 - 14.04.2013
* Add Bower support
* Add mixin for multiple backgrounds
* Remove moz-prefix for transition

### 0.2.0 - 18.02.2013
* Add support for `auto` value in rem mixin
* Add example of usage to each mixin

### 0.1.3 - 03.02.2013
* Remove -ms-prefix from transitions

### 0.1.2 - 29.01.2013
* Multiple values for rem-mixin

### 0.1.1 - 26.01.2013
* Add very old webkit-gradient syntax
* Add tab mixin

### 0.1.0 - 11.09.2012


## Thanks

Thanks to @Schepp for starting [a similar repo](https://github.com/Schepp/SASS-Mixins).

## License

[The MIT License](LICENSE.md)
