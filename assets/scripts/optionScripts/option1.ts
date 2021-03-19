
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
        this.baseSlider.on('selectedOption',this.selectOption,this);
        this.initialSprite = this.option.normalSprite;
    }

    selectOption(optionName){
        
        if(optionName.localeCompare('option1')==0){
            console.log(optionName,'----');
            this.option.normalSprite = this.option.pressedSprite;
        }
        else{
            this.option.normalSprite = this.initialSprite;
        }
    }

    start () {

    }

    // update (dt) {}
}
