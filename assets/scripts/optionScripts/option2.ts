
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    @property(cc.Node)
    baseSlider: cc.Node = null;

    @property(cc.Button)
    option: cc.Button = null;

    @property(cc.SpriteFrame)
    initialSprite: cc.SpriteFrame = null;

    onLoad () {
        this.option.interactable = false;
        this.baseSlider.on('selectedOption',this.selectOption,this);
        this.initialSprite = this.option.normalSprite;
    }

    selectOption(optionName){
        
        if(optionName.localeCompare('option2')==0){
            this.option.interactable = true;
            console.log('Option Selected: 2 Scoop');
            this.option.normalSprite = this.option.pressedSprite;
        }
        else{
            this.option.normalSprite = this.initialSprite;
            this.option.interactable = false;
        }
    }

    start () {

    }

    // update (dt) {}
}
