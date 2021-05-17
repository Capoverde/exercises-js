### Instruction

## If the project exist:

`npm install`

## OR:

`sass --watch scss:public/css`

## else:

2. `npm i -D sass`
3. `sass --watch scss:public/css/`

### Usefull libs CDNs:

#1 [Bootstrap:](https://getbootstrap.com/docs/5.0/getting-started/introduction/)

```html
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
  crossorigin="anonymous"
/>

<script
  src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.6.0/dist/umd/popper.min.js"
  integrity="sha384-KsvD1yqQ1/1+IA7gi3P0tyJcT3vR+NdBTt13hSJ2lnve8agRGXTTyNaBYmCR/Nwi"
  crossorigin="anonymous"
></script>
<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js"
  integrity="sha384-nsg8ua9HAw1y0W1btsyWgBklPnCUAFLuTMS2G72MMONqmOymq585AcH49TLBQObG"
  crossorigin="anonymous"
></script>
```

#2. [Aos.js](https://michalsnik.github.io/aos/)

```html
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />

<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

<script>
  AOS.init();
</script>
```

#2a [gsap](https://cdnjs.com/libraries/gsap)

```html
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/gsap.min.js"
  integrity="sha512-1dalHDkG9EtcOmCnoCjiwQ/HEB5SDNqw8d4G2MKoNwjiwMNeBAkudsBCmSlMnXdsH8Bm0mOd3tl/6nL5y0bMaQ=="
  crossorigin="anonymous"
></script>
```

#3. [parallax.js](https://matthew.wagerfield.com/parallax/)

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js"></script>
```

`#4. [React](https://pl.reactjs.org/docs/cdn-links.html)

```html
<script
  crossorigin
  src="https://unpkg.com/react@17/umd/react.production.min.js"
></script>
<script
  crossorigin
  src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"
></script>
```

`#5. [Vue.js](https://vuejs.org/v2/guide/installation.html)

```html
<script type="module">
  import Vue from "https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js";
</script>
```
