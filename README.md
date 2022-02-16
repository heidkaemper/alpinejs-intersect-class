# Alpine.js Intersect-Class Plugin

An Alpine.js plugin to easily set CSS classes to an element when it enters the viewport.<br>
Especially useful for animating elements when scrolling.

```html
<!-- A little something like this.. -->
<div x-data x-intersect-class="is-visible"></div>
```

### Demo
[Click here to take a look at the examples](https://heidkaemper.github.io/alpinejs-intersect-class/using-tailwindcss.html)
([View Source](https://github.com/heidkaemper/alpinejs-intersect-class/tree/main/docs))

---

## Installation
You can use this plugin by either including it from a `<script>` tag or installing it via NPM:

### Via CDN
You can include the CDN build of this plugin as a `<script>` tag, just make sure to include it BEFORE Alpine's core JS file.

```html
<!-- This Plugin -->
<script defer src="https://unpkg.com/alpinejs-intersect-class@1.x.x/dist/cdn.min.js"></script>

<!-- Alpine Core -->
<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

### Via NPM
You can install Intersect from NPM for use inside your bundle like so:

```sh
npm install alpinejs-intersect-class
```

Then initialize it from your bundle:

```js
import Alpine from 'alpinejs'
import intersectClass from 'alpinejs-intersect-class'

Alpine.plugin(intersectClass)

...
```

## Usage
Use the `x-intersect-class` Attribute to set the CSS class that should be added to the element once it comes to the browsers viewport.

```html
<div x-data x-intersect-class="fade-in"></div>
```
Make sure that you have defined that class in your CSS files, like `fade-in` in this example.

### The .once Modifier

You can use the `.once` modifier if you want to trigger the CSS class only on the first appearance of an element.

```html
<div x-data x-intersect-class.once="fade-in"></div>
```

## FAQ

### Couldn't I just use Alpines Intersect Plugin to do something like this?

```html
<div x-data="{ shown: false }" x-intersect="shown = true" :class="{ 'is-visible': shown }">
```
You definitely could. And if you are using the Intersect plugin already, then you probably should!<br>
The point of the Intersect-Class plugin is to provide this functionality with as few attributes as possible so that frontend developers will actually use it.

### Do I need the x-data attribute?

Yes, you do. With x-data you define a Alpine.js Component.<br>
[Click here](https://alpinejs.dev/directives/data) to read more about x-data in the Alpine.js documentation.

### My elements are flashing when the page is loading

This is a known problem with JavaScript animations. It's because the JS takes a moment to initialize. The solution can be different depending on what kind of animation you want to run.

A good starting point could be the use of [x-cloak](https://alpinejs.dev/directives/cloak).
Initial use of the CSS class can also be helpful, like I did for the [CSS animations demo](https://heidkaemper.github.io/alpinejs-intersect-class/using-css-animations.html).

---

<p>
<a href="https://www.npmjs.com/package/alpinejs-intersect-class"><img src="https://img.shields.io/npm/v/alpinejs-intersect-class?label=version" alt="Version"></a>
<a href="https://www.npmjs.com/package/alpinejs-intersect-class"><img src="https://img.shields.io/bundlephobia/minzip/alpinejs-intersect-class?label=size" alt="Bundle size"></a>
<a href="https://www.npmjs.com/package/alpinejs-intersect-class"><img src="https://img.shields.io/npm/dt/alpinejs-intersect-class" alt="Downloads"></a>
<a href="https://www.npmjs.com/package/alpinejs-intersect-class"><img src="https://img.shields.io/github/license/heidkaemper/alpinejs-intersect-class" alt="License"></a>
</p>
