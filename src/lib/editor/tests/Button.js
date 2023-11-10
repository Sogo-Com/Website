
export default class  Button {



    static get enableLineBreaks() {
        return false;
    }

    static get isInline() {
      return true;
    }
  
    get state() {
      return this._state;
    }
  
    set state(state) {
      this._state = state;
  
      this.button.classList.toggle(this.api.styles.inlineToolButtonActive, state);
    }
  
    constructor({api}) {
        
      this.api = api;
      this.button = null;
      this._state = false;
      this.type = 'button';
      this.tag = 'SPAN';
      this.class = 'btn';

      
      this._CSS = {
        block: this.api.styles.block,
        wrapper: 'ce-button',
      };
    }

  
  
    render() {
      this.button = document.createElement('button');
      this.button.type = 'button';
      this.button.innerHTML = '<img width="20" height="18" src="/images/button-icon.png" alt="button"/>';
     
      this.button.classList.add(this.api.styles.inlineToolButton);
      this.button.classList.add(this._CSS.wrapper, this._CSS.block);
      return this.button;
    }
  
    surround(range) {
      if (this.state) {
        this.unwrap(range);
        return;
      }
  
      this.wrap(range);
    }
  
    wrap(range) {
        
      const selectedText = range.extractContents();
      const mark = document.createElement(this.tag);
  
      mark.classList.add(this.class);
      mark.appendChild(selectedText);
      range.insertNode(mark);
  
      this.api.selection.expandToTag(mark);
    }
  
    unwrap(range) {
      const mark = this.api.selection.findParentTag(this.tag, this.class);
      const text = range.extractContents();
  
      mark.remove();
  
      range.insertNode(text);
    }
  
  
    checkState() {
      const mark = this.api.selection.findParentTag(this.tag);
  
      this.state = !!mark;
    
      if (this.state) {
        this.showActions(mark);
      } else {
        this.hideActions();
      }
    }
  
    renderActions() {
        
      this.linkButton = document.createElement('input');
      this.linkButton.type = 'text';
      this.linkButton.hidden = true;
  
      return this.linkButton;
    }
  
    showActions(button) {
        const {link} = button.dataset;
        this.linkButton.value = link != null ? link : 'https://www.google.com';

        this.linkButton.onchange = () => {
            button.dataset.link = this.linkButton.value
        };
        this.linkButton.hidden = false;
    }
  
    hideActions() {
        
      this.linkButton.onchange = null;
      this.linkButton.hidden = true;
    }

    static get sanitize() {
        return {
            text: true,
          };
    }

    validate(savedData) {
        if (savedData.text.trim() === "") {
           return false;
        }
    
        return true;
      }

    save(blockContent) {
        
        return {
            type: 'ce-button',
            data: {
                text: blockContent.textContent,
            },
        };
    }
  }