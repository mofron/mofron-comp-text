/**
 * @file   mofron-comp-text/index.js
 * @brief  text component for mofron
 * @author simpart
 */
const mf   = require('mofron');
const Font = require('mofron-effect-font');
/**
 * @class Text
 * @brief text component for mofron
 */
mf.comp.Text = class extends mf.Component {
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
     * @note private method
     */
    initDomConts () {
        try {
            super.initDomConts();
            this.text('');         // default text
            this.size('0.16rem');  // default size
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * setter/getter for text value
     *
     * @param val (string) text value
     * @param val (undefined) calls as getter
     * @return (string) text value
     */
    text (val) {
        try { return this.target().text(val); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * setter/getter for text size
     *
     * @param val (string) css size value
     * @param val (null) delete text size
     * @param val (undefined) calls as getter
     * @return (string) css size value
     * @return (null) not set yet
     */
    size (val) {
        try { return this.sizeValue('font-size', val); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * setter/getter for text size
     * this is same operation with the size method
     */
    height (val) {
        try { return this.size(val); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * setter/getter for text color
     * 
     * @param val (string) color (name, rgb, hex)
     * @param val (null) delete color
     * @param val (undefined) calls as getter
     * @return (string) css 'color' value
     * @return (null) not set yet
     */
    mainColor (val) {
        try { return this.tgtColor('color', val); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * setter/getter for font
     * 
     * @param fnm (string) font name
     * @param fnm (undefined) calls as getter
     * @param pth (string) path to font
     * @return (array) [font name, path]
     * @return (null) not set yet
     */
    font (fnm, pth) {
        try {
            let ret = this.effect('Font');
            if (undefined === fnm) {
                /* getter */
                return (null === ret) ? null : [ret.fontName(), ret.path()];
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
     * setter/getter for character spacing
     *
     * @param val (string) css size value
     * @param val (null) delete space
     * @param val (undefined) calls as getter
     * @return (string) css size value
     * @return (null) not set yet
     */
    space (val) {
        try { return this.sizeValue('letter-spacing', val); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * setter/getter for text thickness
     *
     * @param val (number 100-900) thickness value
     * @param val (null) delete thickness
     * @return (number) thickness value
     * @return (null) not set yet
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
