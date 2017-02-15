/**
 * @file   Text.js
 * @author simpart
 */
require("mofron-event-click");

/**
 * @class Text
 * @brief Text Component for mofron
 */
mofron.comp.Text = class extends mofron.Component {
    /**
     * initialize text component
     *
     * @param prm : (string) text contents
     * @param opt : (object) component option
     */
    constructor (prm, opt) {
        try {
            super(prm);
            this.name('Text');
            
            /* font theme */
            this.m_font = null;
            this.m_text = null;
            
            /* set option */
            if (null !== opt) {
                this.option(opt);
            }
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
            if ('string' != (typeof prm)) {
                throw new Error('invalid parameter');
            }
            
            /* init vdom contents */
            var text = new mofron.util.Dom('div', this);
            this.vdom().addChild(text);
            this.target(text);
            
            var txt_conts = this.text();
            if (null === txt_conts) {
                txt_conts = prm;
            }
            text.text(txt_conts);
            
            /* set font theme */
            var fnt = this.theme().getFont(0);
            if (null !== fnt) {
                this.setFontTheme(fnt);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * text contents setter/getter
     *
     * @param val : (string) text contents
     * @return (string) text contents
     */
    text (val) {
        try {
            var _val = (val === undefined) ? null : val;
            if (null === _val) {
                return this.m_text;
            }
            if ('string' !== (typeof _val)) {
                throw new Error('invalid parameter');
            }
            if (false === this.isRendered()) {
                this.m_text = val;
                return;
            }
            this.target().text(_val);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * text size setter / getter
     *
     * @param val : (number) font pixel size (option)
     * @return (number) font size
     */
    size (val) {
        try {
            if (undefined === val) {
                /* getter */
                return this.style('font-size');
            }
            
            if (null === val) {
                this.style('font-size', null);
                return;
            }
            /* setter */
            if ('number' != (typeof val)) {
                throw new Error('invalid parameter');
            }
            this.style('font-size', val + 'px');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * set link text
     *
     * @param url : (string) link url
     * @param tab : (bool) new tab flag
     */
    setLink (url, tab) {
        try {
            var _tab  = (tab === undefined) ? false : tab;
            var click = null;
            
            if (false === _tab) {
                click = new mofron.event.Click(function(){
                    window.location.href = url;
                });
            } else {
                click = new mofron.event.Click(function(){
                    window.open(url, '_blank');
                });
            }
            
            this.style('cursor', 'pointer');
            this.addEvent(click);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * text color setter/getter
     * 
     * @param clr : (mofron.util.Color) color object
     * @return (string) color (no-parameter)
     */
    color (clr) {
        try {
            var _clr = (clr === undefined) ? null : clr;
            if (null === _clr) {
                return mofron.func.getColorObj(this.style('color'));
            }
            if ('object' !== (typeof _clr)) {
                throw new Error('invalid parameter');
            }
            this.style('color', _clr.getStyle());
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * text font setter/getter
     * 
     * @param fnt : (mofron.util.Font) font object
     * @return (string) font
     */
    font (fnt) {
        try {
            var _fnt = (fnt === undefined) ? null : fnt;
            if (null === _fnt) {
                /* getter */
                return this.m_font;
            }
            /* setter */
            if ('object' !== (typeof _fnt)) {
                throw new Error('invalid parameter');
            }
            this.style('font-family', _fnt.getStyle());
            this.m_font = _fnt;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * set font theme to class name
     * 
     * @param fnt : (object) font object
     */
    setFontTheme (fnt) {
        try {
            var _fnt = (fnt === undefined) ? null : fnt;
            if ('object' !== typeof _fnt) {
                throw new Error('invalid parameter');
            }
            this.m_font = _fnt;
            this.target().addClass(fnt.getThemeClass());
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
