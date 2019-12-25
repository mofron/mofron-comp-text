/**
 * @file   mofron-comp-text/index.js
 * @brief  text component for mofron
 * @author simpart
 */
const comutl = mofron.util.common;
const cmputl = mofron.util.component;
const Font = require('mofron-effect-font');

module.exports = class extends mofron.class.Component {
    /**
     * constructor
     * 
     * @param (mixed) text: parameter
     *                object: component 
     * @pmap text
     * @type private
     */
    constructor (prm) {
        try {
            super();
            this.name('Text');
            
            this.confmng().add("heiWeight", { init:1.5, type:"number" });
            
            this.shortForm('text');
	    if (undefined !== prm) {
                this.config(prm);
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @type private
     */
    initDomConts () {
        try {
            super.initDomConts();
            this.text('');         // default text
            this.size("0.16rem");  // default size
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * text value
     * 
     * @param (string) text value
     * @return (string) text value
     * @type parameter
     */
    text (val) {
        try {
	    return this.childDom().text(val);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * text size
     *
     * @param (string (size)) text size
     * @param (key-value) style option
     * @return (string) css size value
     * @type parameter
     */
    size (val, opt) {
        try {
	    return cmputl.size(this, "font-size", val, opt);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * text height
     * 
     * @param (string (size)) height (adjust the size according to the height)
     * @param (key-value) style option
     * @return (string) css size value
     * @type parameter
     */
    height (prm, opt) {
        try {
	    let siz = comutl.getsize(
                (undefined === prm) ? this.size() : prm
	    );
	    let siz_buf = null;
            if ( ('rem' === siz.type()) || ('px' === siz.type()) ) {
	        if (undefined === prm) {
                    siz_buf = siz.value()*this.heiWeight();
		} else {
                    siz_buf = siz.value()/this.heiWeight();
		}
		siz_buf = comutl.roundup(siz_buf) + siz.type();
            } else {
                siz_buf = siz.toString();
	    }
            
            if (undefined === prm) {
	        /* gettter */
                return siz_buf;
	    }
            this.size(siz_buf, opt);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * height-weight for height
     * 
     * @param (number) height weight
     * @return (number) height weight
     * @type private
     */
    heiWeight (prm) {
        try {
	    return this.confmng("heiWeight", prm);
	} catch (e) {
	    console.error(e.stack);
            throw e;
	}
    }
    
    /**
     * text color
     * 
     * @param (mixed (color)) string: color name, #hex
     *                        array: [red, green, blue, (alpha)]
     * @param (key-value) style option
     * @return (string) text color
     * @type parameter
     */
    mainColor (val, opt) {
        try {
	    return cmputl.color(this, 'color', val, opt);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * text under line color
     * 
     * @param (mixed (color)) string: color name, #hex
     *                        array: [red, green, blue, (alpha)]
     *                        null: delete under line
     * @param (key-value) style option
     * @return (string) text under line color
     * @type parameter
     */
    accentColor (val, opt) {
        try {
	    if (undefined !== val) {
                this.style({ "text-decoration" : (null === val) ? null : "underline" });
	    }
	    return cmputl.color(this, "text-decoration-color", val, opt);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * text font
     * 
     * @param (mixed) string: font name
     *                array: [primary font, secondary font]
     * @return (string) font name
     * @type parameter
     */
    font (fnm, pth) {
        try {
            let ret = this.effect({ name:"Font" });
            if (undefined === fnm) {
                /* getter */
                return (null === ret) ? null : ret.family();
            }
            /* setter */
            if (null === ret) {
	        let set_fnm = (true === Array.isArray(fnm)) ? new mofron.class.ConfArg(fnm[0],fnm[1]) : fnm;
                this.effect(new Font(set_fnm, pth));
            } else if (true === comutl.isinc(ret,"Font")) {
	        if (true === Array.isArray(fnm)) {
                    ret.family(fnm[0], fnm[1]);
		} else {
                    ret.family(fnm);
		}
                ret.path(pth);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * character spacing
     * 
     * @param (string (size)) spacing size
     * @param (key-value) style option
     * @return (string) spacing size
     * @type parameter
     */
    space (val, opt) {
        try {
	    return cmputl.size(this, 'letter-spacing', val, opt);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * text thickness
     * 
     * @param (mixed) number: thickness value [100-900]
     *                null: delete thickness
     * @param (key-value) style option
     * @return (number) thickness value
     * @type parameter
     */
    weight (val, opt) {
        try {
	    let set_val = (undefined === val) ? 'font-weight' : { 'font-weight' : val };
            return this.style(set_val, opt);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
