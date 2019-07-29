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
     * @param (string) text size
     * @return (string) css size value
     * @type tag parameter
     */
    size (val) {
        try { return mf.func.cmpSize(this, 'font-size', val); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * text height
     * 
     * @param (string) text size
     * @return (string) css size value
     * @note this is the same as the 'size'.
     * @type tag parameter
     */
    height (val) {
        try { return this.size(val); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * text color
     * 
     * @param (solor) text color
     * @return (string) text color
     * @type tag parameter
     */
    mainColor (val) {
        try { return mf.func.cmpColor(this, 'color', val); } catch (e) {
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
     * @param (string) spacing size
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
     * @param (number:100-900) thickness value
     *        (null) delete thickness
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
