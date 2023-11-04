export default class Button{

    static get isInline() {
        return true;
    }


    surround(range) {
        if (this.state) {
            return;
        }
    
        const selectedText = range.extractContents();
        const mark = document.createElement('span');
        mark.classList.add('btn');
        mark.appendChild(selectedText);
        range.insertNode(mark);
    
        this.api.selection.expandToTag(mark);
    }

   
    checkState(selection) {
        const text = selection.anchorNode;

        if (!text) {
            return;
        }

        const anchorElement = text instanceof Element ? text : text.parentElement;
      
        this.state = !!anchorElement.closest('MARK');
    }

    static get toolbox() {
        return {
          title: 'Bouton',
          icon: '<img width="20" height="18" src="/images/button-icon.png" alt="button"/>'
        };
      }

    constructor(link){
        this.link = link;
        this.state = false;
    }

    render(){
        const button = document.createElement('a');
        button.classList.add('btn');
      //  button.href = this.link;
        return  button;
      }


      save(blockContent){
        return {
          link: "link"
        }
      }
}