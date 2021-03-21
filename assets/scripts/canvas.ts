
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    @property(cc.Node)
    instructionTop: cc.Node = null;

    @property(cc.Node)
    baseSlider: cc.Node = null;

    onLoad () {
        // this.instructionTop.runAction(cc.moveTo(1.0,cc.v2(0,180)));
        // cc.delayTime(3.0);
        // this.baseSlider.runAction(cc.moveTo(1.0, cc.v2(0,-180)));
        this.instructionTop.opacity = 0;
        this.baseSlider.opacity = 0;
        var count = 0;
        setInterval(()=>{
            count += 1;
            if(count == 1){
                var sequence = cc.sequence(cc.fadeOut(0),cc.fadeIn(1.0));
                this.instructionTop.runAction(sequence);
                this.instructionTop.runAction(cc.moveTo(1.0,cc.v2(0,180)));
            }
            else if(count == 2){
                var sequence = cc.sequence(cc.fadeOut(0),cc.fadeIn(1));
                this.baseSlider.runAction(sequence);
                this.baseSlider.runAction(cc.moveTo(1.0, cc.v2(0,-180)));
            }
                
        },1000);
    }

    start () {

    }

    // update (dt) {}
}
