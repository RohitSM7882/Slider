
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    @property(cc.Node)
    instructionTop: cc.Node = null;

    // @property(cc.Label)
    // instruction: cc.Label  = null;

    @property(cc.Node)
    baseSlider: cc.Node = null;

    onLoad () {
        this.instructionTop.opacity = 0;
        this.baseSlider.opacity = 0;
        var count = 0;
        setInterval(()=>{
            count += 1;
            if(count == 1){
                this.node.emit('moveNode','instructionTop');
            }
            else if(count == 2){
                this.node.emit('moveNode','baseSlider');
            }
                
        },1000);
    }

    start () {

    }

    // update (dt) {}
}
