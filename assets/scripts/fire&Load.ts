
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
    loadAndFire: cc.Button = null;

    @property(cc.SpriteFrame)
    initialSprite : cc.SpriteFrame = null;

    onLoad () {
        this.loadAndFire.normalSprite = this.loadAndFire.disabledSprite;
        this.loadAndFire.interactable = false;
        this.baseSlider.on("selectedOption",this.activeFire,this);

        this.node.on('click',this.fire,this);
    }

    activeFire(readyToFire){
        if(readyToFire){
            this.loadAndFire.interactable = true;
            this.loadAndFire.normalSprite = this.initialSprite;
            this.node.emit('readyToFire',readyToFire);
        }
    }

    fire(event){
        console.log('CANON FIRED!!!!!!!');
    }

    start () {

    }

    // update (dt) {}
}
