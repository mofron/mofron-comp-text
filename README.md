# mofron-comp-text
Base of Text Component for [mofron](https://github.com/simpart/mofron)

# sample
please see [here](https://github.com/simpart/mofron) about an overview of mofron

```javascript
let Mof = require('mofron');
let Txt = require('mofron-comp-text');

new Txt({
    param   : 'TEST',  // require
    size    : 40    ,
    color   : new Mof.Color(255,0,0),
    font    : new Mof.Font('serif'),
    visible : true
});
```

#class specification

| Method          | Parameter                                                                    |    Description                  |
|:------------------|:-----------------------------------------------------------------|:-------------------------------|
| text                 | string : text contents (option)                                   | set parameter : update text contents<br>no parameter : get text contents |
| size                 | number(px) : text size (option)                                 | set parameter : update text size<br>no parameter : get text size |
| color              | object : color object (option)                                     | set parameter : update text color<br>no parameter : get text color|
| font                 | object : font object (option)                                       | set parameter : update text  font<br>no parameter : get text font|
