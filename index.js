/**
 * @file   mofron-comp-text/index.js
 * @brief  text component for mofron
 * @author simpart
 */
const mf   = require('mofron');
const Font = require('mofron-effect-font');

mf.comp.Text = class extends mf.Component {

    /**
     * constructor
     * 
     * @param (string) 'text' function parameter
     * @pmap text
     * @type private
     */
    constructor (po) {
        try {
            super();
            this.name('Text');
            this.prmMap('text');
            this.prmOpt(po);
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
     * @type tag parameter
     */
    text (val) {
        try { return this.target().text(val); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * text size
     *
     * @param (string (size)) text size
     * @param (option) style option
     * @return (string) css size value
     * @type tag parameter
     */
    size (val, opt) {
        try { return mf.func.cmpSize(this, 'font-size', [val,opt]); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * forced size
     * 
     * @param (string (size)) text size
     * @return (string (size)) text size
     * @type private
     */
    fsize (prm) {
        try { this.size(prm,{locked:true}); } catch (e) {
	    console.error(e.stack);
            throw e;
	}
    }
    
    /**
     * text height
     * 
     * @param (string (size)) text size
     * @param (option) style option
     * @return (string) css size value
     * @type tag parameter
     */
    height (prm, opt) {
        try {
	    let siz = mf.func.getSize(
                (undefined === prm) ? this.size() : prm
	    );
	    let siz_buf = null;
            if ( ('rem' === siz.type()) || ('px' === siz.type()) ) {
	        if (undefined === prm) {
                    siz_buf = siz.value()*this.heiWeight();
		} else {
                    siz_buf = siz.value()/this.heiWeight();
		}
		siz_buf = mf.func.roundUp(siz_buf) + siz.type();
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
     * height weight
     * 
     * @param (number) height weight
     * @return (number) height weight
     * @type private
     */
    heiWeight (prm) {
        try {
	    return this.member("heiWeight", "number", prm, 1.5);
	} catch (e) {
	    console.error(e.stack);
            throw e;
	}
    }
    
    /**
     * text color
     * 
     * @param (mixed (color)) string: color name, #hex
     *                array: [red, green, blue, (alpha)]
     * @param (option) style option
     * @return (string) text color
     * @type tag parameter
     */
    mainColor (val, opt) {
        try { return mf.func.cmpColor(this, 'color', [val, opt]); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * text font
     * 
     * @param (string) font name
     * @return (array) font name
     * @type tag parameter
     */
    font (fnm, pth) {
        try {
            let ret = this.effect('Font');
            if (undefined === fnm) {
                /* getter */
                return (null === ret) ? null : ret.fontName();
            }
            /* setter */
            if (null === ret) {
                this.effect(new Font(fnm, pth));
            } else {
                ret.fontName(fnm);
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
     * @return (string) spacing size
     * @type tag parameter
     */
    space (val) {
        try { return mf.func.cmpSize(this, 'letter-spacing', val); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * text thickness
     *
     * @param (mixed) number: thickness value [100-900]
     *                null: delete thickness
     * @return (number) thickness value
     * @type tag parameter
     */
    weight (val) {
        try {
            return this.style(
                (undefined === val) ? 'font-weight' : { 'font-weight' : val }
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.Text;
/* end of file */
