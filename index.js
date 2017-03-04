/**
 * @file   Text.js
 * @author simpart
 */

/**
 * @class Text
 * @brief text component for mofron
 */
mofron.comp.Text = class extends mofron.Component {
    /**
     * initialize member, exec option
     *
     * @param prm_opt : (string) text contents
     * @param prm_opt : (object) component option
     */
    constructor (prm_opt) {
        try {
            super();
            this.name('Text');
            
            /* font theme */
            this.m_font = null;
            this.m_text = null;
            this.m_link = new Array(
                              null,  /* url */
                              null   /* new tab flag */
                          );
            
            /* set prameter / option */
            this.prmOpt(prm_opt);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize vdom
     * 
     * @param prm : (string) text contents
     */
    initDomConts (prm) {
        try {
            /* init vdom contents */
            var conts = null;
            var link  = this.link();
            if (null === link[0]) {
                conts = new mofron.Dom('div', this);
            } else {
                conts = new mofron.Dom('a', this);
                conts.attr('href', link[0]);
                if (true === link[1]) {
                    conts.attr('target', '_blank');
                }
            }

            this.vdom().addChild(conts);
            this.target(conts);
            
            /* set text contents */
            if (null === this.text()) {
                this.text(prm);
            } else {
                this.text(this.text());
            }
            
            /* set font theme */
            var fnt = this.theme().getFont(0);
            if (null !== fnt) {
                this.font(fnt, true);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * text contents setter / getter
     *
     * @param val : (string) text contents
     * @return (string) text contents
     * @note do not specify parameters, if use as getter
     */
    text (val) {
        try {
            if (undefined === val) {
                /* getter */
                return this.m_text;
            }
            /* setter */
            if ('string' !== (typeof val)) {
                throw new Error('invalid parameter');
            }
            if (null === this.vdom()) {
                this.m_text = val;
            } else {
                this.target().text(val);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * text size setter / getter
     *
     * @param val : (number) font size (px)
     * @param val : (string,null) font size (manual)
     * @return (string) font size
     * @note do not specify parameters, if use as getter
     */
    size (val) {
        try {
            if (undefined === val) {
                /* getter */
                return this.style('font-size');
            }
            /* setter */
            if (null === val) {
                this.style('font-size', null);
                return;
            }
            if ('number' === typeof val) {
                this.style('font-size', val + 'px');
            } else if ('string' === typeof val) {
                this.style('font-size', val);
            } else {
                throw new Error('invalid parameter');
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * link url setter / getter
     *
     * @param url : (string) link url
     * @param tab : (bool) new tab flag
     *                     true  : link to page at new tab
     *                     false : link to page at current tab (default)
     * @return (object) [0] -> (string) url
     *                  [1] -> (boolean) new tab flag
     * @note do not specify parameters, if use as getter
     */
    link (url, tab) {
        try {
            if (undefined === url) {
                /* getter */
                return this.m_link;
            }
            /* setter */
            var _tab  = (tab === undefined) ? false : tab;
            if (('string' !== typeof url) || ('boolean' !== typeof _tab)) {
                throw new Error('invalid parameter');
            }
            this.m_link[0] = url;
            this.m_link[1] = _tab;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * text color setter / getter
     * 
     * @param clr : (object) mofron.util.Color object
     * @return (string) color
     * @note do not specify parameters, if use as getter
     */
    color (clr) {
        try {
            if (undefined === clr) {
                /* getter */
                return mofron.func.getColorObj(this.style('color'));
            }
            /* setter */
            if ('object' !== (typeof clr)) {
                throw new Error('invalid parameter');
            }
            this.style('color', clr.getStyle());
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * text font setter / getter
     * 
     * @param fnt : (object) mofron.util.Font object
     * @param thm : (boolean) theme flag
     *                        true  : set font as theme
     *                        false : set font (default)
     * @return (object) mofron.util.Font object
     * @note do not specify parameters, if use as getter
     */
    font (fnt, thm) {
        try {
            if (undefined === fnt) {
                /* getter */
                return this.m_font;
            }
            /* setter */
            var _thm = (undefined === thm) ? false : thm;
            if (('object' !== typeof fnt) || ('boolean' !== typeof _thm)) {
                throw new Error('invalid parameter');
            }
            if (false === _thm) {
                this.style('font-family', fnt.getFamilyStyle());
            } else {
                this.target().className(fnt.className());
            }
            this.m_font = fnt;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
mofron.comp.text = {};
module.exports = mofron.comp.Text;
