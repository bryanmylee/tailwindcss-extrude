![tailwindcss-extrude-banner](https://user-images.githubusercontent.com/42545742/117004851-231fb400-ad19-11eb-9f52-41cbd970dd2c.png)

[![npm version](http://img.shields.io/npm/v/tailwindcss-extrude.svg)](https://www.npmjs.com/package/tailwindcss-extrude)
[![npm downloads](https://img.shields.io/npm/dm/tailwindcss-extrude.svg)](https://www.npmjs.com/package/tailwindcss-extrude)
![license](https://img.shields.io/npm/l/tailwindcss-extrude)
![build](https://img.shields.io/github/workflow/status/bryanmylee/tailwindcss-extrude/publish)
[![size](https://img.shields.io/bundlephobia/min/tailwindcss-extrude)](https://bundlephobia.com/result?p=tailwindcss-extrude)

A custom TailwindCSS plugin for an extruded style.

## Installation

```bash
$ npm i tailwindcss-extrude
```

## Usage

`tailwindcss-extrude` provides 

At its core, `tailwindcss-extrude` uses a box shadow and a translate transform to create the illusion of an extrusion. It cannot be used with a regular box shadow or other transforms.

Give an element an extrusion by applying the following classes:

* `extrude-{color}`
* `extrude-x-{depth}` or `-extrude-x-{depth}`
* `extrude-y-{depth}`

### Extending extrude depths

This plugin uses the `extrude` key in the Tailwind CSS config file. You can extend the lengths used for extrude depth here.

```js
module.exports = {
  ...
  theme: {
    extend: {
      'one-line': '1em',
    }
  },
  plugins: [require('tailwindcss-extrude')]
};
```

```html
<button class="extrude-black extrude-y-one-line"/>
```

## Examples

Some examples of how `tailwindcss-extrude` can be used.

![example1](https://user-images.githubusercontent.com/42545742/117005089-6bd76d00-ad19-11eb-8e7e-8c935a0c3b1c.gif)

```html
<button class="
    transition bg-yellow border-4 border-orange rounded-xl
    extrude-y-4 hover:extrude-y-2 extrude-orange"/>
```

![example2](https://user-images.githubusercontent.com/42545742/117004849-22871d80-ad19-11eb-9408-a2c44109752c.gif)

```html
<button class="
    transition bg-white border-4 border-black rounded-none
    -extrude-x-4 extrude-y-4 hover:-extrude-x-2 hover:extrude-y-2
    extrude-green hover:extrude-black"/>
