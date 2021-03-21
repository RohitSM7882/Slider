
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    @property(cc.Slider)
    baseSliderBar: cc.Slider = null;

    @property
    readyToFire = false;

    onLoad () {
        var sequence = cc.sequence(cc.fadeOut(0),cc.fadeIn(1));
        this.node.runAction(sequence);
        this.node.runAction(cc.moveTo(1.0, cc.v2(0,-180)));
        this.baseSliderBar.progress = 0.5;
    }

    slideEvent(){
        var progress = this.baseSliderBar.progress;
        this.readyToFire = true;

        if(progress>=0 && progress<=0.25){
            this.baseSliderBar.progress = 0.13;
            this.node.emit('selectedOption','option1',this.readyToFire);
        }
        else if(progress>=0.26 && progress<=0.50){
            this.baseSliderBar.progress = 0.38;
            this.node.emit('selectedOption','option2',this.readyToFire);
        }
        else if(progress>=0.51 && progress<=0.75){
            this.baseSliderBar.progress = 0.62;
            this.node.emit('selectedOption','option3',this.readyToFire);
        }
        else if(progress>=0.76 && progress<=1.0){
            this.baseSliderBar.progress = 0.87;
            this.node.emit('selectedOption','option4',this.readyToFire);
        }
 
    }

    start () {

    }

    // update (dt) {}
}
